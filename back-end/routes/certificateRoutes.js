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

/* ***********************UPDATE CERTIFICATE ROUTES***************** */
router.post('/update/clearance', certificate.updateClearance)
router.post('/update/indigency', certificate.updateIndigency)
router.post('/update/residency', certificate.updateResidency)
/* ***********************END FUNCTION***************** */


/* ***********************DELETE CERTIFICATE ROUTES***************** */
router.delete('/delete/clearance', certificate.deleteClearance)
router.delete('/delete/indigency', certificate.deleteIndigency)
/* ***********************DELETE CERTIFICATE ROUTES***************** */

module.exports = router