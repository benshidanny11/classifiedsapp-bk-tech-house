const { User } =require('../db/models');
const { decodeToken } =require("../helpers/auth");

module.exports= {checkUserExists: async (req, res, next) => {
    const { email } = req.body;
    try {
      let user = await User.findOne({ where: { email } });
      user = user?.dataValues;
      if (!user) {
        next();
      } else {
        res.status(409).send({
          error: 'User already exists',
        });
      }
    } catch (error) {
      console.log(error);
    }
    
  },
  verifyToken: async (req, res, next) =>{
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({
        status: 401,
        error: {
          message: "Token is missing",
        },
      });
    }
    try {
      const { email } = await decodeToken(token);
      try {
        let user = await User.findOne({ where: { email } });
        user = user?.dataValues;
        if (!user) {
          return res.status(400).json({
            status: 400,
            error: {
              message: "Invalid token",
            },
          });
        } else {
          req.token = token;
          req.user = user,
          next();
        }
      } catch (error) {
        
        return res.status(500).json({
          status: 500,
          error:error
        });
      }
    } catch (error) {
      if (error.name && error.name === "TokenExpiredError") {
        return res.status(401).json({
          status: 401,
          message: error.message,
        });
      }
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }
};
