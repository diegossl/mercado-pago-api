# API de Integração com o Mercado Pago

Esta API realiza pagamentos no sistema do Mercado Pago utilizando o sistema deles de Checkout. O Checkout Mercado Pago é a integração que permite cobrar através do  formulário web do Mercado Pago através de qualquer dispositivo de forma simples, rápida e segura.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Finalmente, digite o seguinte comando no terminal para iniciar o servidor:

```bash
npm start
```
Agora o sistema está pronto para ser utilizado através da rota local:

[http://localhost:3000/purchase](http://localhost:3000/purchase)

Basta enviar os dados para esta rota e o pagamento será processado.

### Exemmplo de entrada de dados:

Um objeto JSON contendo um array de produtos e o pagador(a) da compra.
 
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
### Exemmplo de saída de dados:

Um link para o formulário web de pagamento do Mercado Pago.

```javascript
{
  "link": "https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=582599346-5beacae6-271f-4254-90ea-5960a00046c0"
}
```

## Features

A API oferece pagamento com os principais meios de pagamento do país:

* Cartão de crédito em até 12 vezes para compras online;
  - VISA
  - MASTERCARD
  - HIPERCARD
  - AMERICAN EXPRESS
  - ELO
  - DINERS CLUB INTERNATIONAL
  - MERCADO LIVRE
* Cartão de débito virtual Caixa;
* À vista com boleto bancário;
* Pagamentos com PEC (em lotéricas);
* Compras de convidados. Não é necessário criar uma conta do Mercado Pago para poder fazer o pagamento.

## Licença

Não se aplica.
