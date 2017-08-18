import jwt from 'jsonwebtoken';

require('dotenv').config();

const generateToken = (user) => {
  const token = jwt.sign({
    data: user
  }, process.env.JWT_TOKEN, { expiresIn: '48h' });

  return token;
};

export default generateToken;
