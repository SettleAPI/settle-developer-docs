---
title: merchant.lookup
description: Endpoint for retrieving info about merchants on secondary ID.
---

# Method: merchant.lookup

Endpoint for retrieving info about merchants on secondary ID.

::: warning INFO
This is endpoint can only be used by [Settle Integrators](#).
:::


## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_heading request">

<span class="badge get">GET</span> /merchant_lookup/`{ lookup_id }`/

</div>

Perform a Merchant Lookup.

### Authorization Scopes

* Required Auth Level: [OPEN](#)
* Authorized Roles: All

### Base URIs

* Sandbox: <span class="url">https://api.sandbox.settle.eu/merchant/v1</span>
* Production: <span class="url">https://api.settle.eu/merchant/v1</span>

### Path Parameters

* [`lookup_id`]() - Lookup ID assigned by Settle.
  
</div>

## Request Body

The request body must be empty.

## Response Body - JSON Representation

If successful, the response body contains data with the following structure:

**Profile for a Merchant**

```json
// TBA
```

<!-- ```json
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
``` -->

## Response Body Fields

<div class="md-api_reference_FiraCode fields">

TBA

</div>
