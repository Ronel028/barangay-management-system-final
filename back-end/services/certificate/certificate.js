const DbConfig = require("../../database/connectionClass");


class Certificate extends DbConfig{

    // get certificate all data
    getCertificateData = async (request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_certificate'

            const clearance = await this.queryData(query)
            response.json(clearance)

        } catch (error) {
            console.log(error)
        }
    }

    //insert new certificate
    insertCertificate = async (request, response) =>{
        try {
            
            // data from front-end
            const { name, age, gender, types, orNumber, amount } = request.body

            //************************QUERY*****************************
            const insertQuery = `INSERT INTO tbl_certificate VALUES(null,?,?,?,?,?,?)`
            const insertData = [name, age, gender, types, orNumber, amount]
            const getClearanceById = 'SELECT * FROM tbl_certificate WHERE name=? AND types=?'
            const nameData = [name, types]
            //************************END QUERY******************************

            const getClearance = await this.queryData(getClearanceById, nameData)
            if(getClearance.length > 0){
                response.json({ message: 'This certificate is already exist!' })
            }else{
                // add some condition for orNumber and amount if empty
                if(!orNumber || !amount){
                    return response.json({ message: 'Please add OR Number and Amount!' })
                }

                // execute this code when no error found
                await this.queryData(insertQuery, insertData)
                response.json({ message: 'success' })
            }

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Certificate }