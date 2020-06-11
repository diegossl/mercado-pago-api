'use strict'

const PaymentService = require('./services/PaymentService')

module.exports = {
  async pay (request, response) {
    try {
      const data = request.body
      PaymentService.setup()
      const { link } = await PaymentService.checkout(data)
      return response.status(200).send({ link })
    } catch (error) {
      return response
      .status(500)
      .send({ message: 'Erro interno do servidor' })
    }
  }
}