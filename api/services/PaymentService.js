'use strict'

const MercadoPago = require('mercadopago') 

const ACCESS_TOKEN = 'TEST-7654684051775468-061021-26f266ab36c8291dcf6b72a8524d188a-582599346'

class PaymentService {

  static setup () {
    MercadoPago.configure({
      sandbox: true,
      access_token: ACCESS_TOKEN
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