import jwt from 'jsonwebtoken';

require('dotenv').config();

const jwtToken = process.env.JWT_TOKEN || 'SECRET';

/**
 * @returns {string} token
 * @param {object} user
 */
const generateToken = (user) => {
  const token = jwt.sign({
    data: user
  }, jwtToken, { expiresIn: '48h' });

  return token;
};

export default generateToken;
