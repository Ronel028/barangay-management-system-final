const express = require('express')
const { Account } = require('../services/account/userAccount')
const userAccount = new Account()
const Router = express.Router();

Router.post('/register', userAccount.register)
Router.post('/login', userAccount.login)

module.exports = Router