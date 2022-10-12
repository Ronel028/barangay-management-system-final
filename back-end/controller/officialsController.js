const { Official } = require('../database/officials/officialsClass')
const officialsDB = new Official() //create a instance new object

// get all the official data from database
const getOfficials = async (request, response) =>{
    try {
        const official = await officialsDB.getOfficials()
        console.log(official)
        response.json(official)
        console.log('this is running')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getOfficials
}