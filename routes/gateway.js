const express = require('express')
const router = express.Router()
const Gateway = require('../api/Gateway')

router.post('/purchase', Gateway.pay)

module.exports = router
