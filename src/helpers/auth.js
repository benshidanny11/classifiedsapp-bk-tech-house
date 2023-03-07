const jwt =require('jsonwebtoken');
const dotenv =require('dotenv');

dotenv.config();

const { JWT_SECRET } = process.env;

export const generateAccessToken = async (payload, expiration = '2h') => {
  const accessToken = await jwt.sign({ ...payload, type: 'accessToken' }, JWT_SECRET, { expiresIn: expiration });
  return accessToken;
};

export const decodeToken = async (token, callback) => {
  const user = await jwt.verify(token, JWT_SECRET, callback);
  return user;
};

export const decodeJWT = (token, callback) => jwt.verify(token, JWT_SECRET, callback);
