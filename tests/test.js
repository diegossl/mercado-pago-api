
const PaymentService = require('../api/services/PaymentService')
const { response, request } = require('express')


PaymentService.setup()
PaymentService.checkout(request, response)