---
title: merchant.profile.get
description: Endpoint for retrieving info about merchants.
---

## Method

<div class="md-api_reference_method_heading">

merchant.profile.get

</div>

Endpoint for retrieving info about merchants.

This endpoint supports retrieval of the information about a merchant that is mainly relevant to an integrator. Administration of the merchant resource is not part of the Merchant API as only the legal entity owning the merchant has access to do this using the SSP (Self Service Portal).

## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_request_heading">

<span class="badge get">GET</span> /merchant/`{ merchant_id }`/

</div>

Get merchant info.

### Authorization Scopes

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All

### Base URIs

* Sandbox: <span class="url">https://api.sandbox.settle.eu</span>
* Production: <span class="url">https://api.settle.eu</span>

### Path Parameters

* [`merchant_id`]() - Merchant ID assigned by Settle.
  
</div>

## Query Parameters

<div class="md-api_reference_FiraCode">

### currency

* Type: [`Currency`](/api/resources/types/#currency-2)
* Required: `true`
* Default: `null`
* Length: == 3
* Data: New or existing on update

ISO 4217 currency code. See [Currency](/api/resources/types/#currency-2).

</div>

## Request Body

The request body must be empty.

## Response Body

If successful, the response body contains data with the following structure:

<code-group>
<code-block title="Types">
```json
{
  "application": BusinessApplication,
  "approved": bollean,
  "auth_duration": integer,
  "auto_release_after_auth_expire": boolean,
  "business_documents": BusinessDocument,
  "business_name": string,
  "features": string,
  "id": string,
  "integration_type": string,
  "integrator": NdbKey,
  "jurisdiction": string,
  "legal_entity": NdbKey,
  "mcc": integer,
  "organization_id": string,
  "per_payment_amount_limit": MoneyInteger,
  "profile": MerchantProfileRegistration,
  "settlement_account": NdbKey
}
```
</code-block>

<code-block title="Example">
```json
{
  "id": "3VB8JGT7Y4Z63U68KGGKDXMLLH5"
}
```
</code-block>
</code-group>
