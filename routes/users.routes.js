const express = require('express');
const { signUpUser, loginUserController } = require('../controllers/users.controller');
const signupCheck = require('../middlewares/users.middleware');

const usersRouter = express.Router();

usersRouter.post('/signup', signupCheck, signUpUser);
usersRouter.get('/login', signupCheck, loginUserController);

module.exports = usersRouter;