const adminAccount = require('../connection/user-class')
const dbConnection = require('../database/connection')

const insertAccount = async (request, response) =>{
    try {
        const { username, password } = request.body //data comes from the body
        const Account = new adminAccount(username, password) //instancaite admin account class
        const userLogin = await Account.login(dbConnection()) //call a login methos fron the class
        response.json({
            message: "new account addedd"
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    insertAccount
}