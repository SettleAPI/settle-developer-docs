---
title: merchant.lookup
description: Endpoint for retrieving info about merchants on secondary ID.
---

## Method

<div class="md-api_reference_method_heading">

merchant.lookup

</div>

Endpoint for retrieving info about merchants on secondary ID.

::: warning INFO
This is endpoint can only be used by [Settle Integrators](#).
:::


## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_request_heading">

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

## Response Body

If successful, the response body contains data with the following structure:

<code-group>
<code-block title="Types">
```json
// TBA
```
</code-block>

<code-block title="Example">
```json
// TBA
```
</code-block>
</code-group>
