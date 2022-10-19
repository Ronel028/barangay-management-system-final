const bcrypt = require('bcrypt')
const DbConfig = require("../../database/connectionClass");

class Account extends DbConfig{

    //register new user
    register = async (request, response) =>{
        try {
            const { username, password } = request.body

            // this function is to hash a password to make more secure
            const hashPassword = bcrypt.hashSync(password, 10, passwordHash =>{
                return passwordHash
            })

            const query = `INSERT INTO admin_account VALUES(null, '${username}', '${hashPassword}')`

            await this.queryData(query)
            response.json({ message: 'success' })

        } catch (error) {
            console.log(error)
        }
    }

    //login user
    login = async (request, response) =>{
        try {
            const { username, password } = request.body
            const query = `SELECT * FROM admin_account WHERE username='${username}'`

            const userAccount = await this.queryData(query)

            // add condition for username and password if has a value
            if(!username || !password){
                response.json({ message : 'username/password cannot be empty!' })
                return
            }else{
                // comparing user creadentails if match
                if(userAccount.length > 0){
                    const userPassword = await bcrypt.compare(password, userAccount[0].password)
                    if(userPassword){
                        response.json({ message : 'success', isLogin: true })
                    }else{
                        response.json({ message: 'username/password not match!'})
                    }
                }else{
                    response.json({ message: 'username/password not match!'})
                }
            }

        } catch (error) {
            response.json({ message: "something's wrong with the server!"})
        }
    }

}

module.exports = { Account }