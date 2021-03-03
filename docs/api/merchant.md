---
title: Merchant API
description: Merchant API
---
# Merchant



This is the reference documentation for the Settle API. The Settle API enables merchants to interact with Settle, registering POS, shortlinks for QR scans, payment requests, permission requests for end user info and more.

All endpoints are listed below, along with their expected input and output. The default content type for endpoints is `application/vnd.mcash.api.merchant.v1+json`.

## Merchant[](https://developer.settle.eu/handlers.html#merchant "Permalink to this headline")

Endpoint for retrieving info about merchants

This endpoint supports retrieval of the information about a merchant that is mainly relevant to an integrator. Administration of the merchant resource is not part of the Merchant API as only the legal entity owning the merchant has access to do this using the SSP (Self Service Portal).

* `GET /merchant/{merchant_id}/`[](https://developer.settle.eu/handlers.html#get--merchant--merchant_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Get merchant info

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                                                                                                              |                                |
    | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
    | **id** : String : optional : default=null                                                                                                    | Id                             |
    | **legal_entity** : [NdbKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1) : optional : default=null                    | Legal Entity                   |
    | **business_name** : String : optional : default=null                                                                                         | Business Name                  |
    | **organization_id** : String : optional : default=null                                                                                       | Organization Id                |
    | **jurisdiction** : String : optional : default=null                                                                                          | Jurisdiction                   |
    | **mcc** : Integer : optional : default=null                                                                                                  | Mcc                            |
    | **integrator** : [NdbKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1) : optional : default=null                      | Integrator                     |
    | **settlement_account** : [NdbKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1) : optional : default=null              | Settlement Account             |
    | **auth_duration** : Integer : optional : default=null                                                                                        | Auth Duration                  |
    | **auto_release_after_auth_expire** : Boolean : optional : default=null                                                                       | Auto Release After Auth Expire |
    | **features\[]** : String : optional : default=null                                                                                           | Features                       |
    | **profile** : [MerchantProfileRegistration](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-2) : optional : default=null    | Profile                        |
    | **application** : [BusinessApplication](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-3) : optional : default=null        | Application                    |
    | **business_documents\[]** : [BusinessDocument](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-4) : optional : default=null | Business Documents             |
    | **per_payment_amount_limit** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Per Payment Amount Limit       |
    | **integration_type** : String : optional : default=null                                                                                      | Integration Type               |
    | **approved** : Boolean : optional : default=null                                                                                             | Approved                       |

## Merchant lookup[](https://developer.settle.eu/handlers.html#merchant-lookup "Permalink to this headline")

Handle merchant lookup on secondary ID. This is endpoint can only be used by integrators.

* `GET /merchant_lookup/{lookup_id}/`[](https://developer.settle.eu/handlers.html#get--merchant_lookup--lookup_id-- "Permalink to this definition")

  *Required auth level: OPEN*

  *Authorized roles: ALL*

  Perform a Merchant Lookup.

## User[](https://developer.settle.eu/handlers.html#user "Permalink to this headline")

In order to gain access to the Merchant API a client must authenticate itself using the ID and the secret/public key of an existing user. This means that the first user for a merchant must be created in the Self Service Portal or by an integrator on behalf of the merchant.

Each user is created for a specific merchant, which ID is given by the value of the `X-Auka-Merchant` header when making a [`create user`](https://developer.settle.eu/handlers.html#post--user- "POST /user/") request. A user can only interact with the API on behalf of the merchant which it was created for. The user ID is chosen on create and is has to be unique for the parent Merchant.

* `POST /user/`[](https://developer.settle.eu/handlers.html#post--user- "Permalink to this definition")

  *Required auth level: KEY*

  *Authorized roles: ALL*

  Create user for the Merchant given in the `X-Auka-Merchant` header.

  **Request schema**

  * |                                                                                                                     |                                                               |
    | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
    | **id** : String : optional : default=null                                                                           | User id                                                       |
    | **netmask** : String : optional : default=null                                                                      | Limit user connections by netmask, for example 192.168.1.0/24 |
    | **label** : String : optional : default=null                                                                        | User given name to RSA key/secret                             |
    | **secret** : String : optional : default=null                                                                       | Secret used when authenticating with Settle                   |
    | **pubkey** : [PubKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-5) : optional : default=null | RSA key used for authenticating by signing                    |

  **Response schema**

  * |                                           |         |
    | ----------------------------------------- | ------- |
    | **id** : String : optional : default=null | User id |
* `PUT /user/{user_id}/`[](https://developer.settle.eu/handlers.html#put--user--user_id-- "Permalink to this definition")

  *Required auth level: KEY*

  *Authorized roles: ALL*

  Update user

  **Request schema**

  * |                                                                                                                     |                                                               |
    | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
    | **netmask** : String : optional : default=null                                                                      | Limit user connections by netmask, for example 192.168.1.0/24 |
    | **label** : String : optional : default=null                                                                        | User given name to RSA key/secret                             |
    | **secret** : String : optional : default=null                                                                       | Secret used when authenticating with Settle                   |
    | **pubkey** : [PubKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-5) : optional : default=null | RSA key used for authenticating by signing                    |
* `DELETE /user/{user_id}/`[](https://developer.settle.eu/handlers.html#delete--user--user_id-- "Permalink to this definition")

  *Required auth level: KEY*

  *Authorized roles: ALL*
* `GET /user/{user_id}/`[](https://developer.settle.eu/handlers.html#get--user--user_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Get user info

  **Response schema**

  * |                                                                                                                     |                                                               |
    | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
    | **id** : String : optional : default=null                                                                           | User id                                                       |
    | **netmask** : String : optional : default=null                                                                      | Limit user connections by netmask, for example 192.168.1.0/24 |
    | **label** : String : optional : default=null                                                                        | User given name to RSA key/secret                             |
    | **has_secret** : Boolean : optional : default=null                                                                  | Whether user has secret set                                   |
    | **pubkey** : [PubKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-5) : optional : default=null | RSA key if registered                                         |

## Pos[](https://developer.settle.eu/handlers.html#pos "Permalink to this headline")

The POS endpoint represents a Point Of Sale, managed by the merchant or integrator.

The POS can be physical, like a store till or a vending machine, it can represent a mobile app that moves around, a webshop or a server representing a poster. Defining the type can affect map representation in app.

* `POST /pos/`[](https://developer.settle.eu/handlers.html#post--pos- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Create POS resource

  | Status Codes:     |     |
  | ----------------- | --- |
  | Response Headers: |     |
  |                   |     |

  **Request schema**

  * |                                                                                                                         |                                                                                        |
    | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
    | **name** : String : required                                                                                            | Human-readable name of the POS, used for displaying payment request origin to end user |
    | **type** : String : required                                                                                            | POS type                                                                               |
    | **location** : [Location](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-7) : optional : default=null | Merchant location                                                                      |
    | **id** : String : required                                                                                              | The ID of the POS that is to be created. Has to be unique for the merchant             |

  **Response schema**

  * |                                           |     |
    | ----------------------------------------- | --- |
    | **id** : String : optional : default=null | Id  |
* `GET /pos/`[](https://developer.settle.eu/handlers.html#get--pos- "Permalink to this definition")

  *Required auth level: KEY*

  *Authorized roles: ALL*

  List all Point of Sales for merchant

  **Response schema**

  * |                                             |                                                     |
    | ------------------------------------------- | --------------------------------------------------- |
    | **uris\[]** : String : required             | A list of absolute paths to the requested resources |
    | **next** : String : optional : default=null | Path to the next list chunk                         |
    | **prev** : String : optional : default=null | Path to the previous list chunk                     |
* `PUT /pos/{pos_id}/`[](https://developer.settle.eu/handlers.html#put--pos--pos_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Update POS resource

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Request schema**

  * |                                                                                                                         |                                                                                        |
    | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
    | **name** : String : required                                                                                            | Human-readable name of the POS, used for displaying payment request origin to end user |
    | **type** : String : required                                                                                            | POS type                                                                               |
    | **location** : [Location](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-7) : optional : default=null | Merchant location                                                                      |
* `DELETE /pos/{pos_id}/`[](https://developer.settle.eu/handlers.html#delete--pos--pos_id-- "Permalink to this definition")

  *Required auth level: KEY*

  *Authorized roles: ALL*

  Delete POS

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |
* `GET /pos/{pos_id}/`[](https://developer.settle.eu/handlers.html#get--pos--pos_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve POS info

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                                                                                         |                                                                                        |
    | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
    | **id** : String : optional : default=null                                                                               | Id                                                                                     |
    | **name** : String : required                                                                                            | Human-readable name of the POS, used for displaying payment request origin to end user |
    | **type** : String : required                                                                                            | POS type                                                                               |
    | **location** : [Location](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-7) : optional : default=null | Merchant location                                                                      |

## Payment request[](https://developer.settle.eu/handlers.html#payment-request "Permalink to this headline")

Request a payment from a customer.

A payment request goes through several stages. After being registered, the customer can either reject or authorize. An authorization is valid for 3 days, but can be reauthorized before it expires to be valid for 3 new days. Once authorized, it can be captured to be included in the next settlement.

This resource replaces the 'sale_request', but as additional functionality for auth/capture.

* `POST /payment_request/`[](https://developer.settle.eu/handlers.html#post--payment_request- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Post payment request.

  The call is idempotent; that is, if one posts the same pos_id and pos_tid twice, only one payment request is created.

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Request schema**

  * |                                                                                                                                    |                                                                                                                                                                                                                                                                                                              |
    | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **display_message_uri** : String : optional : default=null                                                                         | Messages that can be used to inform the POS operator about the progress of the payment request will be POSTed to this URI if provided                                                                                                                                                                        |
    | **callback_uri** : String : optional : default=null                                                                                | If provided, Settle will POST to this URI when the status of the payment request changes, using the message mechanism described in the introduction. The data in the "object" part of the message is the same as what can be retrieved by calling GET on the "/payment_request/{tid}/outcome/" resource URI. |
    | **line_items\[]** : [LineItem](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-9) : optional : default=null       | List of items in sale.                                                                                                                                                                                                                                                                                       |
    | **customer** : [PersonIdentifier](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6) : optional : default=null   | Customer identifiers include None, msisdn, scan token, access token,shortlink_id:xxxx or shortlink_sn:xxxx.If not set (None), success_return_uri and failure_return_uri needs to be set.If not set (None), a uri to the checkout portal will be in the response.                                             |
    | **max_scan_age** : Integer : optional : default=60                                                                                 | Used if customer is set to shortlink_id:xxxx or shortlink_sn:xxxx.Integer number of seconds.The payment request will be assigned to the scantoken created on the shortlink_idor shortlink_sn, no earlier then this number of seconds ago.                                                                    |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : required                          | 3 chars {https://en.wikipedia.org/wiki/ISO_4217}                                                                                                                                                                                                                                                             |
    | **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : required                        | The base amount of the payment.                                                                                                                                                                                                                                                                              |
    | **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=0 | Typically cash withdrawal or gratuity                                                                                                                                                                                                                                                                        |
    | **additional_edit** : Boolean : optional : default=false                                                                           | Whether user is allowed to additional amount for gratuity or similar                                                                                                                                                                                                                                         |
    | **allow_credit** : Boolean : required                                                                                              | Whether to allow credit payment for this payment request. Credit incurs interchange                                                                                                                                                                                                                          |
    | **pos_id** : String : required                                                                                                     | The POS this payment request originates from, used for informing user about origin                                                                                                                                                                                                                           |
    | **pos_tid** : String : required                                                                                                    | Local transaction id for POS. This must be unique for the POS                                                                                                                                                                                                                                                |
    | **text** : String : optional : default=null                                                                                        | Text that is shown to user when asked to pay. This can contain linebreaks and the text has tofit on smartphones screens.                                                                                                                                                                                     |
    | **success_return_uri** : String : optional : default=null                                                                          | Return url if payment successful                                                                                                                                                                                                                                                                             |
    | **failure_return_uri** : String : optional : default=null                                                                          | Return url if payment failed                                                                                                                                                                                                                                                                                 |
    | **cid** : String : optional : default=null                                                                                         | Customer ID to be used for KID payments                                                                                                                                                                                                                                                                      |
    | **links\[]** : [PaymentRequestLink](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-10) : optional : default=null | Links to be displayed for this payment request                                                                                                                                                                                                                                                               |
    | **action** : String : required                                                                                                     | Action to perform, the main difference is what it looks like in App UI.                                                                                                                                                                                                                                      |
    | **expires_in** : Integer : optional : default=21600                                                                                | Expiration in seconds from when server received request                                                                                                                                                                                                                                                      |
    | **required_scope** : [Scope](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-11) : optional : default=null        | Set this field to ask for data from the user together with the payment request.                                                                                                                                                                                                                              |
    | **required_scope_text** : String : optional : default=null                                                                         | Text that is shown to user when asked for permission.This can contain linebreaks and the text has to fit on smartphones screens.                                                                                                                                                                             |

  **Response schema**

  * |                                            |                                                                                 |
    | ------------------------------------------ | ------------------------------------------------------------------------------- |
    | **id** : String : required                 | Transaction id                                                                  |
    | **uri** : String : optional : default=null | If payment request was posted without a customer, user can claim it on this uri |
* `GET /payment_request/`[](https://developer.settle.eu/handlers.html#get--payment_request- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  **Request schema**

  * |                                                                                                                              |              |
    | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
    | **created_from** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null | Created From |
    | **created_to** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null   | Created To   |
    | **cursor** : [Cursor](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-12) : optional : default=null         | Cursor       |
    | **page_size** : Integer : optional : default=100                                                                             | Page Size    |
    | **only_ok** : Boolean : optional : default=false                                                                             | Only Ok      |
    | **status** : [SelectMultiple](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-13) : optional : default=null | Status       |

  **Response schema**

  * |                                                                                                                                        |        |
    | -------------------------------------------------------------------------------------------------------------------------------------- | ------ |
    | **items\[]** : [PaymentRequestListItem](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-14) : optional : default=null | Items  |
    | **cursor** : [Cursor](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-12) : optional : default=null                   | Cursor |
* `PUT /payment_request/{tid}/`[](https://developer.settle.eu/handlers.html#put--payment_request--tid-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Update payment request, reauthorize, capture, release or abort

  Capturing an authorized payment or reauthorizing is done with the `action` field.

  The call is idempotent; that is, if one posts the same amount, additional_amount and capture_id twice with action CAPTURE, only one capture is performed. Similarly, if one posts twice with action CAPTURE without any amount stated, to capture the full amount, only one full capture is performed.

  Note that the REFUND action will require that the API call is made with the KEY authorization mode, not SECRET.

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Request schema**

  * |                                                                                                                                       |                                                                                                                                                                                                                                                                                                              |
    | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **display_message_uri** : String : optional : default=null                                                                            | Messages that can be used to inform the POS operator about the progress of the payment request will be POSTed to this URI if provided                                                                                                                                                                        |
    | **callback_uri** : String : optional : default=null                                                                                   | If provided, Settle will POST to this URI when the status of the payment request changes, using the message mechanism described in the introduction. The data in the "object" part of the message is the same as what can be retrieved by calling GET on the "/payment_request/{tid}/outcome/" resource URI. |
    | **line_items\[]** : [LineItem](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-9) : optional : default=null          | List of items in sale.                                                                                                                                                                                                                                                                                       |
    | **action** : String : optional : default=null                                                                                         | Action to perform                                                                                                                                                                                                                                                                                            |
    | **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | Use together with CAPTURE or REFUND actions to enable partial capture or refund, respectively. If set, additional_amount, currency and either of capture_id or refund_id must also be set. If all these four fields are unset, the full authorized amount will be captured on CAPTURE.                       |
    | **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Part of the additional amount to capture/refund. Must be set if amount is set, otherwise additional_amount must be unset.                                                                                                                                                                                    |
    | **capture_id** : String : optional : default=null                                                                                     | Local id for capture. Must be set if amount is set, otherwise capture_id must be unset.                                                                                                                                                                                                                      |
    | **refund_id** : String : optional : default=null                                                                                      | Local id for refund. Must be set if amount is set, otherwise capture_id must be unset.                                                                                                                                                                                                                       |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null              | 3 chars {https://en.wikipedia.org/wiki/ISO_4217} . Required if the amount and additional_amount fields are set                                                                                                                                                                                               |
    | **text** : String : optional : default=null                                                                                           | Text that is shown to user upon a refund. This can contain linebreaks and the text has to fit on smartphones screens.                                                                                                                                                                                        |
* `GET /payment_request/{tid}/`[](https://developer.settle.eu/handlers.html#get--payment_request--tid-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve payment request info

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                                                                                                    |                                                                                                                                                                                                                                                                                                              |
    | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **id** : String : required                                                                                                         | Transaction id                                                                                                                                                                                                                                                                                               |
    | **uri** : String : optional : default=null                                                                                         | If payment request was posted without a customer, user can claim it on this uri                                                                                                                                                                                                                              |
    | **display_message_uri** : String : optional : default=null                                                                         | Messages that can be used to inform the POS operator about the progress of the payment request will be POSTed to this URI if provided                                                                                                                                                                        |
    | **callback_uri** : String : optional : default=null                                                                                | If provided, Settle will POST to this URI when the status of the payment request changes, using the message mechanism described in the introduction. The data in the "object" part of the message is the same as what can be retrieved by calling GET on the "/payment_request/{tid}/outcome/" resource URI. |
    | **line_items\[]** : [LineItem](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-9) : optional : default=null       | List of items in sale.                                                                                                                                                                                                                                                                                       |
    | **customer** : [PersonIdentifier](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6) : optional : default=null   | Customer identifiers include None, msisdn, scan token, access token,shortlink_id:xxxx or shortlink_sn:xxxx.If not set (None), success_return_uri and failure_return_uri needs to be set.If not set (None), a uri to the checkout portal will be in the response.                                             |
    | **max_scan_age** : Integer : optional : default=60                                                                                 | Used if customer is set to shortlink_id:xxxx or shortlink_sn:xxxx.Integer number of seconds.The payment request will be assigned to the scantoken created on the shortlink_idor shortlink_sn, no earlier then this number of seconds ago.                                                                    |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : required                          | 3 chars {https://en.wikipedia.org/wiki/ISO_4217}                                                                                                                                                                                                                                                             |
    | **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : required                        | The base amount of the payment.                                                                                                                                                                                                                                                                              |
    | **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=0 | Typically cash withdrawal or gratuity                                                                                                                                                                                                                                                                        |
    | **additional_edit** : Boolean : optional : default=false                                                                           | Whether user is allowed to additional amount for gratuity or similar                                                                                                                                                                                                                                         |
    | **pos_id** : String : required                                                                                                     | The POS this payment request originates from, used for informing user about origin                                                                                                                                                                                                                           |
    | **pos_tid** : String : required                                                                                                    | Local transaction id for POS. This must be unique for the POS                                                                                                                                                                                                                                                |
    | **text** : String : optional : default=null                                                                                        | Text that is shown to user when asked to pay. This can contain linebreaks and the text has tofit on smartphones screens.                                                                                                                                                                                     |
    | **success_return_uri** : String : optional : default=null                                                                          | Return url if payment successful                                                                                                                                                                                                                                                                             |
    | **failure_return_uri** : String : optional : default=null                                                                          | Return url if payment failed                                                                                                                                                                                                                                                                                 |
    | **cid** : String : optional : default=null                                                                                         | Customer ID to be used for KID payments                                                                                                                                                                                                                                                                      |
    | **links\[]** : [PaymentRequestLink](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-10) : optional : default=null | Links to be displayed for this payment request                                                                                                                                                                                                                                                               |
    | **date_expires** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null       | Expiration date (for the original payment request; does not consider payment authorizations; see /outcome for that)                                                                                                                                                                                          |
    | **required_scope** : String : optional : default=null                                                                              | Set this field to ask for data from the user together with the payment request.                                                                                                                                                                                                                              |
    | **allow_credit** : Boolean : optional : default=null                                                                               | Whether to allow credit payment for this payment request. Credit incurs interchange                                                                                                                                                                                                                          |

## Outcome[](https://developer.settle.eu/handlers.html#outcome "Permalink to this headline")

The outcome endpoint shows the outcome info for a payment request, reauth or capture.

This endpoints includes specified fee and/or interchange that will be deducted from payout, and also updated additional amount field if the user added gratuity.

If the callback uri registered for the payment request was secure (https), the contents of this form was sent along with the callback. If the callback uri was insecure, a notification pointing to this endpoint was sent instead.

The status field contains a simple string that is one of `ok`, `fail`, `auth`, or `pending`. The status_code field contains more information. The codes currently documented are:

| Code | Reason                                                  | status field |
| ---- | ------------------------------------------------------- | ------------ |
| 1003 | PENDING - Waiting for customer or bank                  | pending      |
| 2000 | OK - Payment received                                   | ok           |
| 3008 | AUTH - Payment authorized, ready for capture            | auth         |
| 4004 | NOT_FOUND - No such customer                            | fail         |
| 4019 | ABORTED - Merchant aborted payment before capture       | fail         |
| 5006 | REJECTED - Customer rejected/aborted payment request    | fail         |
| 5011 | REQUEST_EXPIRED - Payment request expired               | fail         |
| 5012 | AUTH_EXPIRED - Authorization not captured within 3 days | fail         |

NOTE

The list of status codes may grow in the future, and API clients should deal with unknown status codes gracefully. However, one can rely on 1xxx and 3xxx being temporary states (merchant should wait for further updates), 2xxx represent final successful outcomes, and 4xxx and 5xxx represents final failure outcomes.

* `GET /payment_request/{tid}/outcome/`[](https://developer.settle.eu/handlers.html#get--payment_request--tid--outcome- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve payment request outcome

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Response schema**

  * |                                                                                                                                            |                                                                                                                                                                                                                                                                                                   |
    | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : required                                  | 3 chars {https://en.wikipedia.org/wiki/ISO_4217}                                                                                                                                                                                                                                                  |
    | **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                 | Amount                                                                                                                                                                                                                                                                                            |
    | **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null      | Additional amount might have been changed by user if `additional_edit` was true                                                                                                                                                                                                                   |
    | **auth_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | The authorized amount. If doing partial captures, this will show the amount still available in the authorization for subsequent captures; auth_amount = amount - sum(captured amounts)                                                                                                            |
    | **auth_additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | The authorized additional amount. If doing partial captures, this will show the part of additional amount still available in the authorization for subsequent captures; auth_additional_amount = additional_amount - sum(captured additional amounts)                                             |
    | **captures\[]** : [Capture](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-2) : optional : default=null                 | List of captures.                                                                                                                                                                                                                                                                                 |
    | **refunds\[]** : [Refund](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-3) : optional : default=null                   | List of refunds.                                                                                                                                                                                                                                                                                  |
    | **status** : String : optional : default=null                                                                                              | Payment request status (see above)                                                                                                                                                                                                                                                                |
    | **status_code** : Integer : optional : default=null                                                                                        | Payment request status code (see above).                                                                                                                                                                                                                                                          |
    | **customer** : [PersonIdentifier](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6) : optional : default=null           | Customer identifier as originally registered by POS.                                                                                                                                                                                                                                              |
    | **date_modified** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null              | Last modified date                                                                                                                                                                                                                                                                                |
    | **date_expires** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null               | Expiration date for current status. After a payment authorization is given this may extend beyond the original expiry date given in the payment request. An authorization expires after 3 days. When the payment request expires it is marked as failed (whether in pending or authorized state). |
    | **credit** : Boolean : optional : default=false                                                                                            | Whether the received payment was a credit payment.                                                                                                                                                                                                                                                |
    | **interchange_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null        | Interchange fee to be deducted if credit payment.                                                                                                                                                                                                                                                 |
    | **transaction_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null        | Transaction fee to be deducted.                                                                                                                                                                                                                                                                   |
    | **attachment_uri** : String : optional : default=null                                                                                      | Endpoint for Attachment uploads, such as electronic receipts. This URI has a limited time to live, and a new URI is generated each time outcome is retrieved.                                                                                                                                     |
    | **pos_id** : String : required                                                                                                             | The POS this request originates from, used for informing user about origin                                                                                                                                                                                                                        |
    | **pos_tid** : String : required                                                                                                            | Local transaction id for POS. This must be unique for the POS                                                                                                                                                                                                                                     |
    | **tid** : String : required                                                                                                                | Settle transaction id                                                                                                                                                                                                                                                                             |
    | **permissions** : [AccessTokenResponse](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-10) : optional : default=null    | If payment request was combined with a permission request, this field will contain the permission request outcome. Same as returned by a GET the permission request outcome endpoint                                                                                                              |

## Shortlink[](https://developer.settle.eu/handlers.html#shortlink "Permalink to this headline")

Shortlink scan handler.

When user scans, Settle sends scan id and argstring, and can receive text and uri which can be transported back to the app. Uri will be opened in a web view inside the app if registered in list of trusted domains.

* `POST http://merchant.server/callback/url`[](https://developer.settle.eu/handlers.html#post-http---merchant.server-callback-url "Permalink to this definition")

  **Request schema**

  * |                                                  |                                                                                                          |
    | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
    | **id** : String : required                       | The scan token ID that can be used as recipient for payment and permission requests. Expires in one day. |
    | **argstring** : String : optional : default=null | The string that was appended to the shortlink value in the QR code that was scanned                      |

### Trusted domains[](https://developer.settle.eu/handlers.html#trusted-domains "Permalink to this headline")

Because of security considerations when opening external URIs inside the Settle App, URIs or domains that will be opened in the app needs to be preapproved by Settle.

There are currently no API endpoints for managing trusted domains, please contact Settle support to register domain that should be visible inside app.

### Shortlink management[](https://developer.settle.eu/handlers.html#shortlink-management "Permalink to this headline")

To be able to receive scans, one must first register a shortlink.

* `POST /shortlink/`[](https://developer.settle.eu/handlers.html#post--shortlink- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Register new shortlink

  | Status Codes:     |     |
  | ----------------- | --- |
  | Response Headers: |     |
  |                   |     |

  **Request schema**

  * |                                                      |                                                                                                                |
    | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
    | **callback_uri** : String : optional : default=null  | URI called by Settle when user scans shortlink                                                                 |
    | **serial_number** : String : optional : default=null | Serial number on printed QR codes.This field is *only* used when registering printed stickers issued by Settle |

  **Response schema**

  * |                                           |     |
    | ----------------------------------------- | --- |
    | **id** : String : optional : default=null | Id  |
* `GET /shortlink/`[](https://developer.settle.eu/handlers.html#get--shortlink- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  List shortlink registrations

  **Response schema**

  * |                                             |                                                     |
    | ------------------------------------------- | --------------------------------------------------- |
    | **uris\[]** : String : required             | A list of absolute paths to the requested resources |
    | **next** : String : optional : default=null | Path to the next list chunk                         |
    | **prev** : String : optional : default=null | Path to the previous list chunk                     |
* `PUT /shortlink/{shortlink_id}/`[](https://developer.settle.eu/handlers.html#put--shortlink--shortlink_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Update existing shortlink registration

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Request schema**

  * |                                                     |                                                |
    | --------------------------------------------------- | ---------------------------------------------- |
    | **callback_uri** : String : optional : default=null | URI called by Settle when user scans shortlink |
* `DELETE /shortlink/{shortlink_id}/`[](https://developer.settle.eu/handlers.html#delete--shortlink--shortlink_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Delete shortlink

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |
* `GET /shortlink/{shortlink_id}/`[](https://developer.settle.eu/handlers.html#get--shortlink--shortlink_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve registered shortlink info

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                      |                                                                                                                |
    | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
    | **id** : String : optional : default=null            | Id                                                                                                             |
    | **callback_uri** : String : optional : default=null  | URI called by Settle when user scans shortlink                                                                 |
    | **serial_number** : String : optional : default=null | Serial number on printed QR codes.This field is *only* used when registering printed stickers issued by Settle |
    | **shortlink_value** : String : required              | Text to be displayed as QR code                                                                                |

## Sales summary[](https://developer.settle.eu/handlers.html#sales-summary "Permalink to this headline")

Get a sales summary report

* `GET /sales_summary/`[](https://developer.settle.eu/handlers.html#get--sales_summary- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve sales report

  **Request schema**

  * |                                                                                                                         |               |
    | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
    | **from_date** : [Date](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-16) : required                  | From Date     |
    | **to_date** : [Date](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-16) : optional : default=null     | To Date       |
    | **merchant_time** : Boolean : optional : default=null                                                                   | Merchant Time |
    | **frequency** : [Select](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-17) : optional : default=null | Frequency     |

  **Response schema**

  * |                                                                                                                                        |                   |
    | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
    | **merchant_timezone** : String : optional : default=null                                                                               | Merchant Timezone |
    | **result_timezone** : String : optional : default=null                                                                                 | Result Timezone   |
    | **start_of_day** : [Time](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-18) : optional : default=null               | Start Of Day      |
    | **periods\[]** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null             | Periods           |
    | **data_until** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null             | Data Until        |
    | **products\[]** : [SalesSummaryProduct](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-19) : optional : default=null | Products          |
    | **max_timestamp** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null          | Max Timestamp     |

## Last settlement[](https://developer.settle.eu/handlers.html#last-settlement "Permalink to this headline")

This endpoint redirects to the last Settlement.

Whenever a new Settlement is generated, this reference is automatically updated.

* `GET /last_settlement/`[](https://developer.settle.eu/handlers.html#get--last_settlement- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Redirect latest Settlement

  | Status Codes:     |     |
  | ----------------- | --- |
  | Response Headers: |     |
  |                   |     |

## Settlement[](https://developer.settle.eu/handlers.html#settlement "Permalink to this headline")

Settle automatically generates settlements at regular intervals specified in the merchant agreement.

* `GET /settlement/`[](https://developer.settle.eu/handlers.html#get--settlement- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  List settlements.

  **Response schema**

  * |                                             |                                                     |
    | ------------------------------------------- | --------------------------------------------------- |
    | **uris\[]** : String : required             | A list of absolute paths to the requested resources |
    | **next** : String : optional : default=null | Path to the next list chunk                         |
    | **prev** : String : optional : default=null | Path to the previous list chunk                     |
* `GET /settlement/{settlement_id}/`[](https://developer.settle.eu/handlers.html#get--settlement--settlement_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Retrieve information regarding one settlement. The settlement contains detailed information about the amount paid out in the payout_details form. In case merchant has unsettled fees from previous settlements, Settle will attempt to settle these before paying out. If there are still unsettled fees after settlement is done, this amount will be transferred to the next settlement, or billed by Settle.

  | Parameters:   |     |
  | ------------- | --- |
  | Status Codes: |     |

  **Response schema**

  * |                                                                                                                                         |                                                                                                                                                                 |
    | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **id** : String : required                                                                                                              | The ID of the settlement.                                                                                                                                       |
    | **date_created** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : required                           | The time that the settlement was generated.                                                                                                                     |
    | **transaction_log_uris\[]** : String : required                                                                                         | List of download URIs for the Transaction log blob object in CSV format.The Transaction log is divided in sizable chunks, and each URI points to its own chunk. |
    | **scope_log_uris\[]** : String : required                                                                                               | List of download URI`s for the Scope log blob object in CSV format. The Scope log is divided in sizable chunks, and each URI points to its own chunk.           |
    | **settlement_summary** : [ReportSummary](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-21) : optional : default=null | A Settlement Summary summarizes the set of transactions contained in the Settlement.All transactions are of the same currency. See: Settlement Summary.         |
    | **payout_details** : [PayoutDetail](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-22) : optional : default=null      | Payout details                                                                                                                                                  |

## Settlement account[](https://developer.settle.eu/handlers.html#settlement-account "Permalink to this headline")

Handles retrieval of SettlementAccount

* `PUT /settlement_account/{settlement_account_id}/`[](https://developer.settle.eu/handlers.html#put--settlement_account--settlement_account_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Updates a SettlementAccount

  **Request schema**

  * |                                                                                                                                             |                |
    | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
    | **payout_account** : String : required                                                                                                      | Payout Account |
    | **frequency** : [SettlementAccountFrequency](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-23) : optional : default=null | Frequency      |
* `GET /settlement_account/{settlement_account_id}/`[](https://developer.settle.eu/handlers.html#get--settlement_account--settlement_account_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Gets a SettlementAccount by ID.

  **Response schema**

  * |                                                                                                                                             |                |
    | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
    | **id** : String : optional : default=null                                                                                                   | Id             |
    | **start_of_day** : [Time](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-18) : optional : default=null                    | Start Of Day   |
    | **currency** : String : optional : default=null                                                                                             | Currency       |
    | **payout_delay** : [TimeDelta](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-24) : optional : default=null               | Payout Delay   |
    | **payout_account** : String : optional : default=null                                                                                       | Payout Account |
    | **frequency** : [SettlementAccountFrequency](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-23) : optional : default=null | Frequency      |

## Settlement report[](https://developer.settle.eu/handlers.html#settlement-report "Permalink to this headline")

Handler for listing MerchantSettlements with a summary for reports

* `GET /settlement_report/`[](https://developer.settle.eu/handlers.html#get--settlement_report- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Endpoint accepts arguments for filtering the list of settlements and can omit empty settlements

  **Request schema**

  * |                                                                                                                              |                |
    | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
    | **created_from** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null | Created From   |
    | **created_to** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null   | Created To     |
    | **non_empty_only** : Boolean : optional : default=false                                                                      | Non Empty Only |

  **Response schema**

  * |                                                                                                                                                   |                |
    | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
    | **items\[]** : [SettlementListItem](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-25) : optional : default=null                | Items          |
    | **summary** : [SettlementListSummary](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-26) : optional : default=null              | Summary        |
    | **report_context** : [SettlementListReportContext](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-37) : optional : default=null | Report Context |

## Permission request[](https://developer.settle.eu/handlers.html#permission-request "Permalink to this headline")

Request authorization to access user controlled endpoint.

* `POST /permission_request/`[](https://developer.settle.eu/handlers.html#post--permission_request- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Permission request

  The call is idempotent; that is, if one posts the same pos_id and pos_tid twice, only one Permission request is created.

  | Status Codes:     |     |
  | ----------------- | --- |
  | Response Headers: |     |
  |                   |     |

  **Request schema**

  * |                                                                                                                   |                                                                                                                                                                                                         |
    | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **customer** : [PersonIdentifier](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6) : required | Typically scan token, msisdn or access token from permission request                                                                                                                                    |
    | **pos_id** : String : required                                                                                    | The POS this permission request originates from, used for informing user about origin                                                                                                                   |
    | **pos_tid** : String : required                                                                                   | Local transaction id for POS. This must be unique for the POS                                                                                                                                           |
    | **text** : String : optional : default=null                                                                       | Text that is shown to user when asked for permission. This can contain linebreaks and the text has to fit on smartphones screens.                                                                       |
    | **callback_uri** : String : optional : default=null                                                               | If provided, Settle will POST to this URI when the status of the permission request changes. The data transferred in the POST are the same as what can be retrieved by calling GET on the resource URI. |
    | **scope** : String : required                                                                                     | Space-delimited list of scopes. Any of: "openid" (static id, "address" (user preferred address), "profile" (name), "phone", "email", "shipping_address", "fodselsnummer"                                |
    | **expires_in** : Integer : optional : default=21600                                                               | Expiration in seconds from when server received request                                                                                                                                                 |

  **Response schema**

  * |                                           |                       |
    | ----------------------------------------- | --------------------- |
    | **id** : String : optional : default=null | Permission request id |
* `GET /permission_request/{rid}/`[](https://developer.settle.eu/handlers.html#get--permission_request--rid-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  See permission request info

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                                                                                              |                                                                                                                                                                                                         |
    | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **customer** : [PersonIdentifier](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6) : required            | Typically scan token, msisdn or access token from permission request                                                                                                                                    |
    | **pos_id** : String : required                                                                                               | The POS this permission request originates from, used for informing user about origin                                                                                                                   |
    | **pos_tid** : String : required                                                                                              | Local transaction id for POS. This must be unique for the POS                                                                                                                                           |
    | **text** : String : optional : default=null                                                                                  | Text that is shown to user when asked for permission. This can contain linebreaks and the text has to fit on smartphones screens.                                                                       |
    | **callback_uri** : String : optional : default=null                                                                          | If provided, Settle will POST to this URI when the status of the permission request changes. The data transferred in the POST are the same as what can be retrieved by calling GET on the resource URI. |
    | **scope** : String : required                                                                                                | Space-delimited list of scopes. Any of: "openid" (static id, "address" (user preferred address), "profile" (name), "phone", "email", "shipping_address", "fodselsnummer"                                |
    | **date_expires** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null | Expiration date                                                                                                                                                                                         |

## Merchant ssp user[](https://developer.settle.eu/handlers.html#merchant-ssp-user "Permalink to this headline")

Handler for creating and retrieving MerchantSspUsers.

* `POST /merchant_ssp_user/`[](https://developer.settle.eu/handlers.html#post--merchant_ssp_user- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Creates a MerchantSspUser and returns 201 CREATED (unless a user with the same email already exists, which results in a 409 CONFLICT response)

  **Request schema**

  * |                                                                                                                  |       |
    | ---------------------------------------------------------------------------------------------------------------- | ----- |
    | **email** : String : required                                                                                    | Email |
    | **phone** : String : optional : default=null                                                                     | Phone |
    | **name** : [Name](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-38) : optional : default=null | Name  |

  **Response schema**

  * |                                                                                                                                |                |
    | ------------------------------------------------------------------------------------------------------------------------------ | -------------- |
    | **id** : String : optional : default=null                                                                                      | Id             |
    | **email** : String : optional : default=null                                                                                   | Email          |
    | **phone** : String : optional : default=null                                                                                   | Phone          |
    | **name** : [NameResponse](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-39) : optional : default=null       | Name           |
    | **legal_entities\[]** : [NdbKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1) : optional : default=null | Legal Entities |
    | **bankid** : String : optional : default=null                                                                                  | Bankid         |
* `DELETE /merchant_ssp_user/{merchant_ssp_user_id}/`[](https://developer.settle.eu/handlers.html#delete--merchant_ssp_user--merchant_ssp_user_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Deletes a MerchantSspUser and returns 204 NO CONTENT

  Currently only deletes if MerchantSspUser does not have any LegalEntities to avoid side effects Used to avoid inconsistencies between core and merchant console
* `GET /merchant_ssp_user/{merchant_ssp_user_id}/`[](https://developer.settle.eu/handlers.html#get--merchant_ssp_user--merchant_ssp_user_id-- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Gets a MerchantSspUser

  **Response schema**

  * |                                                                                                                                |                |
    | ------------------------------------------------------------------------------------------------------------------------------ | -------------- |
    | **id** : String : optional : default=null                                                                                      | Id             |
    | **email** : String : optional : default=null                                                                                   | Email          |
    | **phone** : String : optional : default=null                                                                                   | Phone          |
    | **name** : [NameResponse](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-39) : optional : default=null       | Name           |
    | **legal_entities\[]** : [NdbKey](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1) : optional : default=null | Legal Entities |
    | **bankid** : String : optional : default=null                                                                                  | Bankid         |

## Outcome[](https://developer.settle.eu/handlers.html#id1 "Permalink to this headline")

When a user has accepted the permission request, the token data is sent to `callback_uri`, and is also available at this endpoint.

* `GET /permission_request/{rid}/outcome/`[](https://developer.settle.eu/handlers.html#get--permission_request--rid--outcome- "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  See outcome of permission request

  | Parameters: |     |
  | ----------- | --- |

  **Response schema**

  * |                                                                                                                                     |                                                                                                                                                                          |
    | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **access_token** : String : optional : default=null                                                                                 | Access token                                                                                                                                                             |
    | **id_token** : String : optional : default=null                                                                                     | A JWT that contains identity information about the user that is digitally signed by Settle                                                                               |
    | **token_type** : String : required                                                                                                  | Type of access token, at this time it will always be Bearer                                                                                                              |
    | **expires_in** : Integer : optional : default=null                                                                                  | Lifetime in seconds of the access token                                                                                                                                  |
    | **refresh_token** : String : optional : default=null                                                                                | Refresh token used to issue new access token after expiration                                                                                                            |
    | **scope** : String : optional : default=null                                                                                        | Space-delimited list of scopes. Any of: "openid" (static id, "address" (user preferred address), "profile" (name), "phone", "email", "shipping_address", "fodselsnummer" |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null            | Currency for fee                                                                                                                                                         |
    | **transaction_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Permission fee to be deducted from settlement                                                                                                                            |
    | **status** : String : optional : default=null                                                                                       | Permission request status                                                                                                                                                |
    | **status_code** : Integer : optional : default=null                                                                                 | Permission request status code                                                                                                                                           |
    | **pos_id** : String : required                                                                                                      | The POS this request originates from, used for informing user about origin                                                                                               |
    | **pos_tid** : String : required                                                                                                     | Local transaction id for POS. This must be unique for the POS                                                                                                            |
    | **rid** : String : required                                                                                                         | Settle request id                                                                                                                                                        |
    | **user_info** : [Json](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-9) : optional : default=null               | User Info                                                                                                                                                                |

## Merchant logo[](https://developer.settle.eu/handlers.html#merchant-logo "Permalink to this headline")

* `GET /merchant/{merchant_id}/logo`[](https://developer.settle.eu/handlers.html#get--merchant--merchant_id--logo "Permalink to this definition")

## Status code[](https://developer.settle.eu/handlers.html#status-code "Permalink to this headline")

Some resources, such as the *outcome* resources (for payment request and permission request), have a status code field in the response body. The status_code resource lists and describes all possible status codes. Making a [`GET /status_code/`](https://developer.settle.eu/handlers.html#get--status_code- "GET /status_code/") request yields a list of status codes with corresponding names and descriptions. Making a [`GET /status_code/{value}/`](https://developer.settle.eu/handlers.html#get--status_code--value-- "GET /status_code/\{value}/") request (substituting `{value}` for a status code integer) yields the information for a particular status code.

* `GET /status_code/`[](https://developer.settle.eu/handlers.html#get--status_code- "Permalink to this definition")

  *Required auth level: OPEN*

  *Authorized roles: ALL*

  **Response schema**

  *A list of objects containing the following data*

  * |                                             |      |
    | ------------------------------------------- | ---- |
    | **code** : String : optional : default=null | Code |
    | **name** : String : optional : default=null | Name |
* `GET /status_code/{value}/`[](https://developer.settle.eu/handlers.html#get--status_code--value-- "Permalink to this definition")

  *Required auth level: OPEN*

  *Authorized roles: ALL*

  **Response schema**

  * |                                             |      |
    | ------------------------------------------- | ---- |
    | **code** : String : optional : default=null | Code |
    | **name** : String : optional : default=null | Name |