/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

const express =require('express');
const User  =require('../controllers/UserController');
const Validator = require('../middlewares/validator');
const { checkUserExists } = require('../middlewares/user');

const router = express.Router();

// Users && signup
router.post('/signup', Validator('user'),checkUserExists, User.signup);
router.post('/login', User.login);
module.exports= router;