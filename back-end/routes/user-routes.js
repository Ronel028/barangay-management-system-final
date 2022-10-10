const express = require('express')
const Router = express.Router();
const { insertAccount } = require('../controller/user_controller')

Router.post('/register', insertAccount)

module.exports = Router