const express = require('express')
const { Certificate } = require('../services/certificate/certificate')
const router = express.Router()

// create an instance for clearance
const certificate = new Certificate()

// create endpoint
router.get('/', certificate.getCertificateData)
router.get('/id', certificate.getCertificateDataById)
router.get('/clearance', certificate.getClearanceData)
router.get('/indigency', certificate.getIndigencyData)
router.get('/residency', certificate.getResidencyData)
router.post('/insert', certificate.insertCertificate)
router.post('/update', certificate.updateCertificate)

module.exports = router