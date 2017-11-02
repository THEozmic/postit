import jwt from 'jsonwebtoken';

/**
 * @returns {void}
 * @param {object} req
 * @param {object} res
 * @param {func} next
 */
export default ((req, res, next) => {
  const token = req.headers['x-access-token'];
  jwt.verify(token, process.env.JWT_TOKEN || 'SECRET', (err, decoded) => {
    if (err) {
      res.status(401).send({
        error: { message: 'user not authenticated, invalid access token' }
      });
      return;
    }
    req.decoded = decoded;
    next();
  });
});
