const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { JWT_SECRET } = process.env;

module.exports = {
  generateAccessToken: async (payload, expiration = "2h") => {
    const accessToken = await jwt.sign(
      { ...payload, type: "accessToken" },
      JWT_SECRET,
      { expiresIn: expiration }
    );
    return accessToken;
  },

  decodeToken: async (token, callback) => {
    const user = await jwt.verify(token, JWT_SECRET, callback);
    return user;
  },
};
