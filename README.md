# Mercado Pago Integration API

This API makes payments in the Mercado Pago system using their Checkout system. Mercado Pago Checkout is the integration that allows you to charge through the Mercado Pago web form through any device in a simple, fast and secure way.

## Setup

To execute the project, it will be necessary to install as dependencies by typing the following command in the terminal:

```bash
npm install
```

Then, create a file called .env and copy to the contents of the file .env.exemple, which already exists in the project and enter your credentials.

Credentials can be obtained from the following website:

[https://www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)

Finally, type the following command in the terminal to start the server:

```bash
npm start
```
The system is now ready to be used via the route:

[http://localhost:3000/purchase](http://localhost:3000/purchase)

Just send the data for this route and the payment will be processed.

## Example of data entry:

A JSON object containing an array of products and the payer of the purchase.
 
```javascript
{
  "products": [{
    "id": "teste123",
    "title": "Teclado",
    "description": "Este é um teclado de última geração.",
    "category_id": "Eletrônicos",
    "quantity": 1,
    "unit_price": 100,
    "currency_id": "BRL"
  }],
  "payer": {
    "name": "Diego",
    "surname": "Lourenço",
    "email": "teste@gmail.com",
    "identification": {
      "type": "CPF",
      "number": "000.000.000-00"
    }
  }
}
```
## Example of output:

A link to the Mercado Pago payment form.

```javascript
{
  "link": "https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=582599346-5beacae6-271f-4254-90ea-5960a00046c0"
}
```

## Features

The API offers payment with the country's main payment methods:

* Credit card up to 12 times for online purchases;
  - VISA
  - MASTERCARD
  - HIPERCARD
  - AMERICAN EXPRESS
  - ELO
  - DINERS CLUB INTERNATIONAL
  - MERCADO LIVRE
* Virtual debit card Caixa;
* Cash with bank slip;
* PEC payments (in lottery);
* Guest purchases. It is not necessary to create a Mercado Pago account in order to make the payment.

## License

MIT
