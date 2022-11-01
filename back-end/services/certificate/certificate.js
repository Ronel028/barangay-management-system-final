const DbConfig = require("../../database/connectionClass");


class Certificate extends DbConfig{

    //get all certificate data
    getCertificateData = async (request, response) =>{
        try {
            // query
            const query = 'SELECT * FROM tbl_certificate'
            const certificate = await this.queryData(query)
            response.json(certificate)

        } catch (error) {
            console.log(error)
        }
    }

    //get all certificate data by id
    getCertificateDataById = async (request, response) =>{
        try {
            const certificateID = request.query.id
            // query
            const query = 'SELECT * FROM tbl_certificate WHERE id=?'
            const data = [certificateID]
            const certificate = await this.queryData(query, data)
            response.json(certificate)

        } catch (error) {
            console.log(error)
        }
    }

    // get all data of clearance
    getClearanceData = async (request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_certificate WHERE types="Clearance"'

            const clearance = await this.queryData(query)
            response.json(clearance)

        } catch (error) {
            console.log(error)
        }
    }

    // get all data of indigency
    getIndigencyData = async (request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_certificate WHERE types="Indigency"'

            const indigency = await this.queryData(query)
            response.json(indigency)

        } catch (error) {
            console.log(error)
        }
    }

    // get all data of residency
    getResidencyData = async (request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_certificate WHERE types="Residency"'

            const residency = await this.queryData(query)
            response.json(residency)

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

    // update certificate data
    updateCertificate = async(request, response) =>{
        try {
            
            // data from client
            const certificateID = request.query.id
            const {
                name,
                age,
                gender,
                orNumber,
                amount
            } = request.body

            // query
            const updateQuery = `UPDATE tbl_certificate
                                            SET name=?, age=?, gender=?,
                                                or_number=?, amount=?
                                            WHERE id=?`
            const data = [name, age, gender, orNumber, amount, certificateID]

            // add some condition for orNumber and amount if empty
            if(!orNumber || !amount){
                return response.json({ message: 'Please add OR Number and Amount!' })
            }

            // execute this code when no error found
            await this.queryData(updateQuery, data)
            response.redirect(303, '/certificate/clearance')


        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Certificate }