const DbConfig = require("../../../database/connectionClass");


class Clearance extends DbConfig{

    // get clearance all data
    getClearanceData = async (request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_clearance'

            const clearance = await this.queryData(query)
            response.json(clearance)

        } catch (error) {
            console.log(error)
        }
    }

    //insert new clearance
    insertClearance = async (request, response) =>{
        try {
            
            // data from front-end
            const { name, age, gender, orNumber, amount } = request.body

            //************************QUERY*****************************
            const insertQuery = `INSERT INTO tbl_clearance VALUES(null,?,?,?,?,?)`
            const insertData = [name, age, gender, orNumber, amount]
            const getClearanceById = 'SELECT * FROM tbl_clearance WHERE name=?'
            const nameData = [name]
            //************************END QUERY******************************


            // add some condition for orNumber and amount if empty
            if(!orNumber || !amount){
                return response.json({ message: 'Please add OR Number and Amount!' })
            }

            const getClearance = await this.queryData(getClearanceById, nameData)
            if(getClearance.length > 0){
                response.json({ message: 'This clearance is already exist!' })
            }else{
                await this.queryData(insertQuery, insertData)
                response.json({ message: 'success' })
            }

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Clearance }