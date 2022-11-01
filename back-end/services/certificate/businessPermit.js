const DbConfig = require("../../database/connectionClass");

class Permit extends DbConfig{

    // get data from permit
    getPermitData = async(request, response) =>{
        try {
            
            // query
            const query = 'SELECT * FROM tbl_businessPermit'

            // execute this code
            const permit = await this.queryData(query)
            response.json(permit)

        } catch (error) {
            console.log(error)
        }
    }

    // insert business permit data
    insertPermitData = async(request, response) =>{
        try {
            
            //get data from front-end
            const { ownerName, natureOfBusiness, 
                    businessAddress, startDate, endDate, orNumber, amount } = request.body

            // query
            const insertQuery = 'INSERT INTO tbl_businessPermit VALUES(null,?,?,?,?,?,?,?)'
            const data = [ownerName, natureOfBusiness, businessAddress, startDate, endDate, orNumber, amount]

            // add some condition if has a value or not
            if(!ownerName || !natureOfBusiness || !businessAddress || !startDate || !endDate || !orNumber || !amount){
                return response.json({ message: 'Fields Cannot be empty!' })
            }else{
                // execute this if no error found
                await this.queryData(insertQuery, data)
                response.json({ message: 'success' })
            }

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Permit }