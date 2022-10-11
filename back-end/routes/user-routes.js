const express = require('express')
const { registerNewAccount, loginUser } = require('../controller/accountController')
const Router = express.Router();

Router.post('/register', registerNewAccount)
Router.post('/login', loginUser)

module.exports = Router