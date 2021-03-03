---
title: Settle Send
description: Settle Send
---
# Settle Send



## Overview

Settle Send allows Settle businesses to send any amount within the current limits funded by means of topping up a dedicated Settle Send stored value account. 

This is an experimental feature, aimed towards larger enterprises and therefore only accessible as part of the Settle API, with the following requirements/limitations:

* Approval: The business needs to be approved for a pre-paid M2P account (merchant-to-person) balance, which the service then consumes until empty.
* No cross-border: receiver MSISDN needs to be in the same jurisdiction as the business.
* No foreign exchange: only local currency of the business allowed.

It is recommended that you start out with testing this feature in the Settle Sandbox 

The sandbox app allows for exploration of Settle products and features. It is a replica of our production environment but with some extra features enabled for easier access, such as being open to all markets. However, monetary representations in this app are not real.

 

## Settle App

While the production version is available to anyone through the App store and Playstore, the sandbox version is more exclusive since we are not allowed to publish “fake” apps.

* The iOS sandbox app is available here <https://testflight.apple.com/join/9PXGEdpK>.\
  It will help users first install the required Testflight app from Apple, if not already installed.
* The Android app is available here <https://play.google.com/apps/testing/eu.settle.app.sandbox>

 

## Settle Business portal

The Sandbox Business portal is always available at <https://business.sandbox.settle.eu>

 

## Settle API

The Sandbox API is always available at <https://api.sandbox.settle.eu>

 

# Payment to unregistered (Non-Settle) MSISDN

Please note that sending money to an unregistered MSISDN results in an invitation SMS with the following copy, depending on jurisdiction:

“{business-name} has sent you {amount} {currency}. Install Settle within {hours} hours to \
                claim the money: {app_download_uri}”

##  

## Other languages

* HR, “{business-name} ti šalje {amount} {currency}. Instaliraj {product_name} unutar sljedećih {hours} sati kako bi preuzeo/la poslani novac: {app_download_uri}”
* GR, “{business-name} σου ζήτησε να πληρώσεις {amount} {currency}. Εγκατάστησέ το {product_name} εντός {hours} ωρών για να διεκδικήσεις τα χρήματα: {app_download_uri}”

 

# Limits

Transaction limits of the Settle user apply as normal and may result in the user being unable to receive the money. In cases where the user is eligible to raise the receiving limit by identification. they will be prompted to go through the KYC process first, via a push notification saying:

“Someone is trying to send you money, but you have surpassed your limits”.

 

Tapping the notification starts the KYC process in the Settle App.

 

In case KYC is needed, the default timeout to claim received funds is three days. This timeout can be overridden in the request body. If the user does not KYC in time to claim the funds they will be notified:

“The money was returned to the sender as you did not identify”

 

 

# Posting a Payment Request

A http POST request needs to be dispatched to the experimental v2 Settle Payments API endpoint:

  <https://api.settle.eu/payment/v2/payment/>

##  

## Authentication

Since the request means money will flow from the business to the user, the request needs to be signed with a private KEY. Please visit the [Settle API documentation](https://developer.settle.eu/authentication.html) for more information on the two types of authentication, SECRET and KEY.

The api key is created in the [Business portal](https://business.settle.eu) (the [sandbox](https://business.sandbox.settle.eu) version is also available) under the integration tab.

To get started you can just let Settle generate the key-pair for you, but please note that the private part is only visible this one time so it might be good to save it somewhere, or you will need to generate a new key-pair if you lose this private part. The public key is saved with your merchant so that Settle can recognise requests on behalf of this merchant.

The [Settle Request Generator](https://settleapi.github.io/settle-request-generator/) can be used to help with testing this authentication method, as it generates the correct headers from the request parameters using a private key.

 

## Request Body

The request body consists of only a few parameters:

* payer is the merchant id of the sender
* payee is the [MSISDN](https://en.wikipedia.org/wiki/MSISDN) of the receiver
* idempotency_id is a unique id for each payment request.
* currency can only be the currency used by the business
* amount is denoted in cents, ex. €10 is specified as 1000
* chat_text is a message presented to the user with the payment
* expires_in  number of seconds. In case the funds can not be claimed immediately, how long will they be available before being returned to the sender. Default is three (3) days.

 

Please note that using the same idempotency id again in a new request will only result in the retrieval of the first resulting transaction id, not a new payment, meaning it is safe to retry payment requests in case of network loss. You can read more about the [resilient architecture](https://developer.settle.eu/retrying.html) of the Settle API in the developer documentation.

 

 

### Example Request Body

|     |
| --- |
|     |
|     |



### Example Response Body: Payment Request - Success, Transaction ID (tid) returned

|     |
| --- |
|     |
|     |



### Example Response Body: Payment Request - Insufficient funds

|     |
| --- |
|     |
|     |

 

 

 

 

 

 

 

# Getting Payment Details

A http GET request needs to be dispatched to the experimental v2 Settle Payments API endpoint:

  [https://api.settle.eu/payment/v2/payment/{tid}](https://api.settle.eu/payment/v2/payment/)

 

By using the returned tid it’s possible to poll the outcome endpoint for status changes. For example, will payment object > payer_status change from "pending" to "fail" if payment is not accepted within the set "expires_in" timeframe.

 

### Example Response Body: Payment Details

|     |
| --- |
|     |
|     |

# Account Balance

The default account balance is zero, but a top up can be requested from [support@settle.eu](mailto:support@settle.eu).

In production this would have to be paired with a confirmed transfer of funds to a designated Settle bank account.

 

## Getting the Account Balance

A http GET request needs to be dispatched to the v1 Settle Merchant API endpoint:

[ https://api.settle.eu/merchant/v1/merchant/{merchant_id}/balance/](https://api.settle.eu/merchant/v1/merchant/%7BX-Auka-User%7D/)

 

### Example Response Body: Showing a balance of €1000

|     |
| --- |
|     |
|     |

 

 

## Authentication

# Access level is SECRET for the balance API. Please visit the [Settle API documentation](https://developer.settle.eu/authentication.html) for more information on the two types of authentication, SECRET and KEY.

# Prepared test setup in the Sandbox environment

For testing purposes we have a business setup and ready to payout in the sandbox environment. While private keys are secrets that should not be shared, in the sandbox environment this is OK for the educational purpose. If you have [registered your own Sandbox business](https://business.sandbox.settle.eu/signup/), you can also request your own M2P account topped up by emailing [support@settle.eu](mailto:support@settle.eu).

 

## Test Resources

Merchant name: Gabriels Taxfree

Merchant ID: f1645s

API key ID: tng6f6ff

Private RSA key for tng6f6ff:

|     |
| --- |
|     |
|     |

 

 

## Test flow - Getting Merchant Account Balance

Assuming [Postman](https://www.postman.com/) is available:

1. Create a new GET request in Postman using the endpoint URL: <https://api.sandbox.settle.eu/merchant/v1/merchant/f1645s/balance/>
2. Use the [Settle Request Generator](https://settleapi.github.io/settle-request-generator/) to generate the headers, these can then be copy pasted to Postman using the “Bulk edit” options in the “Headers” tab.
3. Send the request and expect to receive the merchant account balance in return.

 

##  

##  

## Test flow - Posting a Payment Request

Assuming [Postman](https://www.postman.com/) is available:

1. Create a new POST request in Postman using the endpoint URL: <https://api.sandbox.settle.eu/payment/v2/payment/>
2. Copy the body from test resources to post, modifying what you need, for example MSISDN.
3. Use the [Settle Request Generator](https://settleapi.github.io/settle-request-generator/) to generate the headers, these can then be copy pasted to Postman using the “Bulk edit” options in the “Headers” tab.
4. Send the request and expect to receive a transaction id in return.