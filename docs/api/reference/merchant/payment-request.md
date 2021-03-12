---
title: Payment Request
description: Payment Requests in the Settle Merchant API 

---


# Payment Request

### Request a payment from a customer

A payment request goes through several stages. After being registered, the customer can either reject or authorize. An authorization is valid for 3 days, but can be reauthorized before it expires to be valid for 3 new days. Once authorized, it can be captured to be included in the next settlement.

This resource replaces the `sale_request`, but as additional functionality for **auth/capture**.

## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_heading request">

### <span class="badge post">POST</span> /payment_request/

</div>

Post a payment request.

#### Authorization Scopes

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All

#### Base URIs

* Sandbox: <span class="noLink">https://api.sandbox.settle.eu</span>
* Production: <span class="noLink">https://api.settle.eu</span>

#### Status Codes

* **200** --> **OK**, identical payment request already created
* **201** --> **OK**, new payment request
* **400** --> **Bad Request**, validation error
* **409** --> **Conflict**, same `pos_id` and `pos_tid` used for a request earlier

</div>

::: warning NOTE
The call is idempotent; that is, if one posts the same `pos_id` and `pos_tid` twice, only one payment request is created.
:::

## Query Parameters

<div class="md-api_reference_FiraCode">

### action

- Type: `string`
- Required: `true`
- Required Data: New or existing on update
- Value: `sale` | `auth` | `SALE` | `AUTH`

Action to perform, the main difference is what it looks like in App UI.

### additional_amount

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default = `0`
- Value: > 0

Typically cash withdrawal or gratuity.

### additional_edit

- Type: `Boolean`
- Required: `false`
- Default: `False`

Whether user is allowed to additional amount for gratuity or similar.

### allow_credit

- Type: `Boolean`
- Required: `true`
- Required Data: `True` or `False`

Whether to allow credit payment for this payment request. Credit incurs interchange.

### amount

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `true`
- Data Required: New or existing on update
- Value: > 0

The base amount of the payment.

### callback_uri

- Type: `string`
- Required: `false`
- Default: `null`
- Regexp: (^|^w+://(localhost|[^/:]+|([0-9]{1,3}.){3}[0-9]{1,3})?(:[0-9]+)?)(/.\*)?$

If provided, Settle will POST to this URI when the status of the payment request changes, using the message mechanism described in the introduction. The data in the **object** part of the message is the same as what can be retrieved by calling **GET** on the `/payment_request/{ tid }/outcome/` resource URI.

### cid

- Type: `string`
- Required: `false`
- Default: `null`

Customer ID to be used for KID payments.

### currency

- Type: [`Currency`](/api/resources/types/#currency-2)
- Required: `true`
- Data Required: New or existing on update
- Length: == 3

ISO 4217 currency code.

### customer

- Type: [`PersonIdentifier`](/api/resources/types/#personidentifier)
- Required: `false`
- Default: `null`
- Length: <= 100

Customer identifiers include `none`, `MSISDN`, **scan token**, **access token**, `shortlink_id:{ xxxx }` or `shortlink_sn:{ xxxx }`. If not set (`none`), `success_return_uri` and `failure_return_uri` needs to be set .If not set (`none`), a URI to the checkout portal will be in the response.

### display_message_uri

- Type: `string`
- Required: `false`
- Default: `null`

Messages that can be used to inform the POS operator about the progress of the payment request will be posted to this URI if provided.

### expires_in

- Type: `integer`
- Required: `false`
- Default: `21600`
- Value: 0 <=> 2592000

Expiration in seconds from when server received request.

### failure_return_uri

- Type: `string`
- Required: `false`
- Default: `null`
- Regexp: (^|^w+://(localhost|[^/:]+|([0-9]{1,3}.){3}[0-9]{1,3})?(:[0-9]+)?)(/.\*)?$

Return URL if payment failed.

### line_items

- Type: [`LineItem`](/api/resources/types/#lineitem)
- Required: `false`
- Default: `null`

List of items in sale.

### links

- Type: [`PaymentRequestLink`](/api/resources/types/#paymentrequestlink)
- Required: `false`
- Default: `null`

Links to be displayed for this payment request.

### max_scan_age

- Type: `integer`
- Required: `false`
- Default: == 60
- Value: 0 <=> 2592000

Used if customer is set to `shortlink_id:{ xxxx }` or `shortlink_sn:{ xxxx }`. Integer number of seconds. The payment request will be assigned to the **scantoken** created on the **shortlink_id** or **shortlink_sn**, no earlier then this number of seconds ago.

### pos_id

- Type: `string`
- Required: `true`
- Length: <= 64
- Regexp: ^[a-zA-Z0-9_.-]+$

The POS this payment request originates from, used for informing user about origin.

### pos_tid

- Type: `string`
- Required: `true`
- Length: <= 64
- Regexp: ^[a-zA-Z0-9_.-]+$

Local transaction id for POS. This must be unique for the POS.

### required_scope

- Type: [`Scope`](/api/resources/types/#scope-2)
- Required: `false`
- Default: `null`

Set this field to ask for data from the user together with the payment request.

### required_scope_text

- Type: `string`
- Required: `false`
- Default: `null`
- Length: <= 150

Text that is shown to user when asked for permission. This can contain line breaks and the text has to fit on smartphones screens.

### success_return_uri

- Type: `string`
- Required: `false`
- Default: `null`
- Regexp: (^|^w+://(localhost|[^/:]+|([0-9]{1,3}.){3}[0-9]{1,3})?(:[0-9]+)?)(/.\*)?$

Return URL if payment successful.

### text

- Type: `string`
- Required: `false`
- Default: `null`

Text that is shown to user when asked to pay. This can contain line breaks and the text has to fit on smartphones screens.

</div>

## Request Body

::: danger warning
The request body can not be empty.
:::

```json
{
  "action": "SALE",
  "additional_amount": 0,
  "additional_edit": "False",
  "allow_credit": "False",
  "amount": 1000,
  "callback_uri": "https://YOUR_AUTH0_DOMAIN/payment/callback",
  "cid": "null",
  "currency": "EUR",
  "customer": "4798765432",
  "display_message_uri": "null",
  "expires_in": 3600,
  "failure_return_uri": "https://YOUR_AUTH0_DOMAIN/payment/failure",
  "line_items": ["Item_01", "Item_02", "Item_03"],
  "links": [
    "https://YOUR_AUTH0_DOMAIN/payment/pending",
    "https://YOUR_AUTH0_DOMAIN/payment/ok",
    "https://YOUR_AUTH0_DOMAIN/payment/fail"
  ],
  "max_scan_age": 120,
  "pos_id": "499f2f7e-bddc-5fc5-9a15-3f34be608e71",
  "pos_tid": "1GY5TL5NEX3D1EA0TCWPLGVPQF5EAF",
  "required_scope": "null",
  "required_scope_text": "Cupcake ipsum dolor sit amet danish.",
  "success_return_uri": "https://YOUR_AUTH0_DOMAIN/payment/success",
  "text": "Ice cream cotton candy chupa chups apple pie muffin candy."
}
```

## Response Body

If successful, the response body contains an instance of [`tid`](/api/resources/types/#tid).

```json
{
  "tid": "3VB8JGT7Y4Z63U68KGGKDXMLLH5"
}
```