const DbConfig = require("../../database/connectionClass");

class Blotter extends DbConfig{

    // get blotter data
    getBlotterData = async (request, response) =>{
        try {
            
            const query = 'SELECT * FROM tbl_blotter'

            const blotterData = await this.queryData(query)
            response.json(blotterData)

        } catch (error) {
            response.json({ message: "Something's wrong! Please try agin..." })
        }
    }

    //insert new blotter records
    insertBlotterData = async (request, response) =>{
        try {
            
            const { complainant_name, complainant_age, complainant_gender, complainant_address,
                    complainee_name, complainee_age, complainee_gender, complainee_address, 
                    complaint, locationOfIncident, status, dateOfIncident } = request.body

            //query
            const query = `INSERT INTO tbl_blotter VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,now())`
            const data = [complainant_name, complainant_age, complainant_gender, complainant_address,
                complainee_name, complainee_age, complainee_gender, complainee_address, 
                complaint, locationOfIncident, status, dateOfIncident]

            if(!complainant_name || !complainee_name){
                return response.json({ message: 'Complainant/complainee cannot be Empty!' })
            }

            // save to database if now error found
            await this.queryData(query, data)
            response.redirect('/blotter')

        } catch (error) {
            return response.json({ message: "Something's wrong! please try again..." })
        }
    }

    //get blotter data by id
    getBlotterById = async (request, response) =>{
        try {
            
            const blotterID = request.query.id

            // query
            const query = 'SELECT * FROM tbl_blotter WHERE id=?'
            const data = [blotterID]

            const blotter = await this.queryData(query, data)
            response.json(blotter)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Blotter }