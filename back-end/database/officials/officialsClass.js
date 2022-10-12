const dbConnection = require('../connectionClass')

class Official extends dbConnection{

    #selectQuery = 'SELECT * FROM tbl_officials'

    getOfficials = () =>{
        return new Promise((resolve, reject) =>{
            this.dbConnect().query(this.#selectQuery, (error, result) =>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

module.exports = { Official }