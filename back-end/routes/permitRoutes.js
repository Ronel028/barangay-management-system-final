const express = require('express')
const { Permit } = require('../services/certificate/businessPermit')
const router = express.Router()

// create instance of permit
const permit = new Permit()

router.get('/', permit.getPermitData)
router.post('/insert', permit.insertPermitData)

module.exports = router