import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';
import models from '../models';
import { sendMail, validateNewUser, generateToken,
  emailTemplate } from '../helpers';

require('dotenv').config();

export default {
  /**
 * Route: POST: /api/v1/users/
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  createUser(req, res) {
    if (validateNewUser(req, res) !== 'valid') {
      return;
    }
    models.Users
    .findOne({ where: { username: req.body.username } })
    .then((foundUsername) => {
      if (foundUsername) {
        return res.status(409)
        .send({ error: 'Username already taken', status: 409 });
      }
      models.Users
        .findOne({ where: { email: req.body.email } })
        .then((foundEmail) => {
          if (foundEmail) {
            return res.status(409)
            .send({ error: 'Email already exists', status: 409 });
          }
          return models.Users
            .create({
              username: req.body.username.trim().toLowerCase(),
              phone: req.body.phone.trim(),
              email: req.body.email.trim().toLowerCase(),
              password: req.body.password
            })
            .then((user) => {
              user.save()
                .then((savedUser) => {
                  const token = generateToken(savedUser);
                  savedUser = savedUser.filterUserDetails(savedUser);
                  return res.status(201)
                  .send({ message: 'Signup success', user: savedUser, token });
                }).catch((error) => {
                  res.status(500).send({ error: error.message });
                });
            });
        });
    });
  },

  /**
 * Route: GET: /api/v1/users/me/
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  fetchCurrentUser(req, res) {
    const username = req.decoded.data.username;
    models.Users
    .find({
      include: [{
        model: models.Groups,
        as: 'groups',
        required: false,
        attributes: ['id', 'name', 'desc'],
        through: { attributes: [] }
      }],
      where: { username },
      attributes: ['id', 'email', 'username', 'createdAt']
    })
    .then((user) => {
      if (!user) {
        return res.status(404)
        .send({ error: 'User does not exist', status: 404 });
      }
      res.status(200).send({ user });
    });
  },

  /**
 * Route: POST: /api/v1/users/signin/
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  authenticateUser(req, res) {
    if (!req.body.username) {
      return res.status(400)
      .send({ error: 'Username is required', status: 400 });
    }

    if (!req.body.password) {
      return res.status(400)
      .send({ error: 'Password is required', status: 400 });
    }

    models.Users
      .findOne({ where: { username: [req.body.username.toLowerCase()] } })
      .then((user) => {
        if (user) {
          if (user.isValidPassword(req.body.password, user)) {
            const { username, email, id } = user;
            const token = generateToken({ username, email, id });
            return res.status(202).send({
              token
            });
          }
          return res.status(401)
          .send({ error: 'Invalid password and username', status: 401 });
        }
        res.status(404)
        .send({ error: 'User does not exist', status: 404 });
      });
  },

  /**
 * Route: GET: /api/v1/search/:group/:query/:page
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  searchUsers(req, res) {
    if (req.params.page < 0) {
      return res.status(401)
      .send({ error: { message: 'Page must be a positive integer' } });
    }
    return models.Users
    .findAndCountAll({
      limit: 5,
      offset: req.params.page * 5,
      where: { username:
        { $iLike: `%${req.params.query}%`, $ne: req.decoded.data.username } },
      attributes: ['id', 'username']
    })
    .then((users) => {
      const pages = Math.ceil(users.count / 5);
      users = users.rows;
      const searchData = [];
      if (users.length === 0) {
        res.status(200).send({ users: searchData, pages });
      }
      let n = 0;
      users.map((user, key) => {
        searchData.push(user.dataValues);
        return models.GroupUsers
        .find({
          where: { userId: user.id, groupId: req.params.group },
          attributes: ['userId']
        }).then((result) => {
          n += 1;
          if (result !== null) {
            searchData[key].ingroup = true;
          } else {
            searchData[key].ingroup = false;
          }
          if (n === users.length) {
            res.status(200).send({
              users: searchData,
              pages,
              usersPerPage: 5,
              currentPage: parseInt(req.params.page, 10) + 1
            });
          }
        });
      });
    })
    .catch(() => {
      res.status(500).send({ error: { message: 'Unkown server error' } });
    });
  },

  /**
 * Route: POST: /api/v1/users/reset-password/:hash
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  updatePassword(req, res) {
    models.PasswordRequests
    .findOne({
      where: { hash: req.params.hash }
    }).then((result) => {
      if (result) {
        const email = result.dataValues.email;
        const date = new Date();
        const now =
        `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
        if (now > result.dataValues.expiresIn) {
          res.status(400).send({ message: 'Link has expired', status: 400 });
          return;
        }
        return models.Users
        .update(
          { password:
            bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(5))
          },
          { where: { email } }
        )
        .then(() =>
          res.status(200)
          .send({ message: 'Password Reset Successful', status: 200 })
        );
      }
      return res.status(400)
          .send({ error: 'Invalid hash', status: 400 });
    });
  },

  /**
 * Route: POST: /api/v1/users/request-password
 * @param  {object} req [request object parameter]
 * @param  {object} res [response object paramter]
 * @return {object}    returns a response object
 */
  passwordRequest(req, res) {
    const email = req.body.email;
    const hash = crypto
    .createHash('sha256', process.env.PASSWORD_HASH_SECRET)
    .update(Date.now().toString())
    .digest('hex');
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const expiresIn
    = `${date.toString().split(' ')[2]}:${date.toString().split(' ')[4]}`;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(400)
      .send({ error: 'Invalid email', status: 400 });
    }

    let message =
      emailTemplate(`http://localhost:3000/#/new-password/${hash}`,
      'Reset Password',
      `Hello ${email},
      if you have requested for a new password, please click on the button below
      or copy and paste this into your url bar:
      http://localhost:3000/#/new-password/${hash}`);

    if (process.env.NODE_ENV === 'production') {
      message =
        emailTemplate(`http://localhost:3000/#/new-password/${hash}`,
        'Reset Password',
        `Hello ${email},\
        if you have requested for a new password, please
        click on the button below
        or copy and paste this into your url bar: \
        https://postit-michael.herokuapp.com/#/new-password/${hash}`);
    }

    models.Users
    .findOne({
      where: { email }
    }).then((foundUser) => {
      if (!foundUser) {
        return res.status(404)
        .send({ error: 'Email does not have an account', status: 404 });
      }
      models.PasswordRequests
      .findOne({
        where: { email }
      }).then((response) => {
        if (!response) {
          models.PasswordRequests
          .create({
            email,
            expiresIn,
            hash
          }).then(() => {
            sendMail(email, { subject: 'Password Reset Request', message });
          });
        } else {
          response.update({
            hash,
            expiresIn
          }).then(() => {
            sendMail(email, { subject: 'Password Reset Request', message });
          });
        }
        if (process.env.NODE_ENV === 'test') {
          return res.status(200)
          .send({ message: 'Request made', hash, status: 200 });
        }
        return res.status(200)
        .send({ message: 'Request made', status: 200 });
      });
    });
  }
};
