const express = require('express')
const { Clearance } = require('../services/certificate/clearance/clearance')
const router = express.Router()

// create an instance for clearance
const clearance = new Clearance()

// create endpoint
router.get('/', clearance.getClearanceData)
router.post('/insert', clearance.insertClearance)

module.exports = router