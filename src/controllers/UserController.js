const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const dotenv = require("dotenv");
const { generateAccessToken } = require("../helpers/auth");

dotenv.config();
const UserController = {
  login: async (req, res) => {
    const {
     email, password
    } = req.body;
    const userData = { email, password };

    const userResurt = await User.findOne({
      where: { email },
      attributes: ["id","name", "email", "password"],
    });
    const user = userResurt.dataValues;
    if (!user) {
      return req.sendStatus(404);
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        let token = await generateAccessToken({name: user.name, email:user.email});
        return res.json({ token });
      } else {
        return {
          message: "password is incorrect",
        };
      }
    }
  },
  signup: async (req, res) => {
    const { body } = req;
    const userObject = {
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
    };
    let newUser = await User.create(userObject);
    newUser = newUser?.dataValues;
    if (!newUser) return res.sendStatus(500);
    res.sendStatus(201);
  },
};

module.exports = UserController;
