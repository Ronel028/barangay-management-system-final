const express = require('express')
const router = express.Router()
const { getOfficials } = require('../controller/officialsController')

// create endpoint for get all the list of brgy officials
router.get('/', getOfficials)

module.exports = router