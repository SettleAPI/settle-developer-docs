---
title: Settle API
description: The Settle API enables merchants to interact with Settle, registering POS, shortlinks for QR scans, payment requests, permission requests for end user info and more.
---

# Settle API

{{$description}}

## Service

<div class="md-api_reference_method_heading">

api.settle.eu

</div>

~~To call this service, we recommend that you use the Settle-provided <span class="url">client libraries</span>.~~ If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](/discovery/v1/reference/apis/) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with the Settle APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- ~~<span class="url">https://api.settle.eu/$discovery/rest?version=v1</span>~~

### Service endpoint

A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

<div class="md-api_reference_method_heading">

https://api.settle.eu

</div>

## REST Resources

<div class="md-api_reference_FiraCode">

### [v1.merchant](/api/reference/rest/v1/merchant/)

| Methods |  |
|:-|-|
| [getProfile](/api/reference/rest/v1/merchant/getProfile/) | <span class="noLink">[<span class="badge get small">GET</span> /merchant/`{ merchant_id }`/](/api/reference/rest/v1/merchant/getProfile/)</span><br><br>Get merchant info. |
| [lookup](/api/reference/rest/v1/merchant/lookup/) | <span class="badge get small">GET</span> /api/reference/rest/v1/merchant/lookup/<br><br>Perform a Merchant Lookup. |


### [v1.merchant.paymentRequest](/api/reference/rest/v1/merchant.paymentRequest/)

| Methods |  |
|:-|-|
| [create](/api/reference/rest/v1/merchant.paymentRequest/create/) | <span class="badge post small">POST</span> /merchant/v1/payment_request/<br><br>Create a Payment Request. |
| [list](/api/reference/rest/v1/merchant.paymentRequest/list/) | <span class="badge get small">GET</span> /merchant/v1/payment_request/<br><br>List all Payment Requests. |
| [modify](/api/reference/rest/v1/merchant.paymentRequest/modify/) | <span class="badge put small">PUT</span> /merchant/v1/payment_request/{tid}/<br><br>Update, reauthorize, capture, release or abort payment request. |
| [get](/api/reference/rest/v1/merchant.paymentRequest/get/) | <span class="badge get small">GET</span> /merchant/v1/payment_request/{tid}/<br><br>Get outcome info for a payment request, ReAuth or capture. |

</div>