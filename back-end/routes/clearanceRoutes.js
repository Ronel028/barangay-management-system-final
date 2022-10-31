const express = require('express')
const { Certificate } = require('../services/certificate/certificate')
const router = express.Router()

// create an instance for clearance
const certificate = new Certificate()

// create endpoint
router.get('/', certificate.getCertificateData)
router.post('/insert', certificate.insertCertificate)

module.exports = router