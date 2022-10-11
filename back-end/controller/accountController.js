const bcrypt = require('bcrypt')
const db = require('../database/account/accountClass')

// register new user account
const registerNewAccount = async (request, response)=>{
    try {

        const { username, password } = request.body

        // this function is to hash a password to make more secure
        const hashPassword = bcrypt.hashSync(password, 10, passwordHash =>{
            return passwordHash
        })

        const register = new db(username, hashPassword)
        await register.register()

        response.json({
            message: 'success'
        })
    } catch (error) {
        console.log(error)
    }
}


//login user
const loginUser = async (request, response) =>{
    try {
        const { username } = request.body
        const login = new db(username)
        const admin = await login.login();
        response.json(admin)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerNewAccount,
    loginUser
}