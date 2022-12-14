const express = require('express')
const { Permit } = require('../services/certificate/businessPermit')
const router = express.Router()

// create instance of permit
const permit = new Permit()

router.get('/', permit.getPermitData)
router.get('/id', permit.getPermitDataById)
router.post('/insert', permit.insertPermitData)
router.post('/update', permit.updatePermitData)
router.delete('/delete', permit.deletePermitData)

module.exports = router