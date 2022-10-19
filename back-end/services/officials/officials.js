const DbConfig = require("../../database/connectionClass");

class Official extends DbConfig{

    // getting officials data
    getOfficials = async (request, response)=>{
        try {
            const officials = await this.queryData('SELECT * FROM tbl_officials')
            response.json(officials)
        } catch (error) {
            response.json({ message: "Something's wrong! Please try again" })
        }
    }

    //insert official data from database
    insertOfficial = async (request, response)=>{
        try {
            const { name, position, contact, termStart, termEnd, address } = request.body
            const photo = request.file.buffer.toString('base64')

            const query = `INSERT INTO tbl_officials 
                            VALUES (null, '${name}', '${position}',
                                    '${contact}', '${termStart}', '${termEnd}', 
                                    '${address}', '${photo}')`

            // validate if all the input are have a value
            if(!name || !position || !contact || !termStart || !termEnd || !address){
                return response.json({ message: 'Please fill up all the field!' })
            }

            //validate contact number if its valid phone number
            if(contact.length > 11 || contact.length < 11){
                return response.json({ message: 'Contact not valid!' })
            }

            // save to database if no error found
            await this.queryData(query)
            response.redirect('/officials')

        } catch (error) {
            response.json({ message: 'Image cannot be empty!' })
        }
    }

    //delete official data
    deleteOfficial = async (request, response) =>{
        try {
            const officialID = request.query.id
            const query = `DELETE FROM tbl_officials WHERE id=${officialID}`

            await this.queryData(query)
            response.redirect(303, '/officials')

        } catch (error) {
            response.json({ message: "Something's wrong! Please try again" })
        }
    }

    //get official by id
    getOfficialById = async (request, response) =>{
        try {
            const officialID = request.query.id
            const query = `SELECT * FROM tbl_officials WHERE id=${officialID}`

            const official = await this.queryData(query)
            response.json(official)

        } catch (error) {
            response.json({ message: "Something's wrong! Please try again" })
        }
    }

    //update official data
    updateOfficial = async (request, response)=>{
        try {
            const officialID = request.query.id
            const { name, position, contact, term_start, term_end, address } = request.body
            const photo = request.file.buffer.toString('base64')

            const query = `UPDATE tbl_officials 
                            SET name='${name}', position='${position}', contact='${contact}', 
                                term_start='${term_start}', term_end='${term_end}', address='${address}', photo='${photo}' 
                            WHERE id=${officialID}`

            // validate the data from client if it has no value
            if(!name || !position || !contact || !term_start || !term_end || !address){
                return response.json({ message: 'Please fill-up all the fields!' })
            }

            //validate contact number if its valid phone number
            if(contact.length > 11 || contact.length < 11){
                return response.json({ message: 'Contact not valid!' })
            }

            await this.queryData(query)
            response.redirect('/officials')

        } catch (error) {
            response.json({ message: "Something's wrong! Please try agin..." })
        }
    }

}

module.exports = { Official }