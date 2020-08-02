'use strict'

const MercadoPago = require('mercadopago') 

class PaymentService {

  static setup () {
    MercadoPago.configure({
      sandbox: true,
      access_token: process.env.ACCESS_TOKEN
    })
  }

  static async checkout (data) {
    const items = data.products
    const payer = data.payer
    const purchase = {
      items: items,
      payer: payer,
      back_urls: {
        success: data.successPageLink,
        failure: data.failurePageLink,
        pending: data.pendingPageLink
      },
    }
    const preference = await MercadoPago.preferences.create(purchase)
    return { link: preference.body.sandbox_init_point }
  }

}

module.exports = PaymentService