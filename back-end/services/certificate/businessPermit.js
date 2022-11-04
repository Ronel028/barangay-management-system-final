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
            return response.json({ message: "Something's wrong... Please try again" })
        }
    }



    // get permit data by ID
    getPermitDataById = async(request, response) =>{
        try {
            
            const permitID = request.query.id

            // query
            const query = 'SELECT * FROM tbl_businessPermit WHERE id=?'
            const data = [permitID]

            // execute this code
            const permit = await this.queryData(query, data)
            response.json(permit)

        } catch (error) {
            return response.json({ message: "Something's wrong... Please try again" })
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
            return response.json({ message: "Something's wrong... Please try again" })
        }
    }



    // update business permit data
    updatePermitData = async(request, response) =>{
        try {
            
            //get data from front-end
            const permitID = request.query.id
            const { ownerName, natureOfBusiness, 
                    businessAddress, startDate, endDate, orNumber, amount } = request.body

            // query
            const insertQuery = `UPDATE tbl_businessPermit 
                                                SET owner=?, natureOfBusiness=?, businessAddress=?,
                                                    start_date=?, end_date=?, orNumber=?, amount=?
                                                WHERE id=?`
            const data = [ownerName, natureOfBusiness, businessAddress, startDate, endDate, orNumber, amount, permitID]

            // add some condition if has a value or not
            if(!ownerName || !natureOfBusiness || !businessAddress || !startDate || !endDate || !orNumber || !amount){
                return response.json({ message: 'Fields Cannot be empty!' })
            }else{
                // execute this if no error found
                await this.queryData(insertQuery, data)
                response.redirect(303, '/permit')
            }

        } catch (error) {
            return response.json({ message: "Something's wrong... Please try again" })
        }
    }


    // delete business permit data
    deletePermitData = async(request, response) =>{
        try {
            
            //get data from front-end
            const permitID = request.query.id

            //delete query
            const deleteQuery = 'DELETE FROM tbl_businessPermit WHERE id=?'
            const data = [permitID]

            // execute this code if no error found
            await this.queryData(deleteQuery, data)
            response.redirect(303, '/permit')

        } catch (error) {
            return response.json({ message: "Something's wrong... Please try again" })
        }
    }

}

module.exports = { Permit }