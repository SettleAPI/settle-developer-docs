---
title: merchant.paymentRequest.list
description: Endpoint for listing payment requests.
---

## Method

<div class="md-api_reference_method_heading">

merchant.paymentRequest.list

</div>

A payment request goes through several stages. After being registered, the customer can either reject or authorize. An authorization is valid for 3 days, but can be reauthorized before it expires to be valid for 3 new days. Once authorized, it can be captured to be included in the next settlement.


## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_request_heading">

<span class="badge get">GET</span> /payment_request/

</div>

List all Payment Requests.

### Authorization Scopes

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All

### Base URIs

* Sandbox: <span class="url">https://api.sandbox.settle.eu/merchant/v1</span>
* Production: <span class="url">https://api.settle.eu/merchant/v1</span>

### Status Codes

TBA

</div>

## Query Parameters

<div class="md-api_reference_FiraCode">

### created_from

- Type: [`DateTime`](/api/resources/types/#datetime)
- Required: `false`
- Default = `null`

Created from.

### created_to

- Type: [`DateTime`](/api/resources/types/#datetime)
- Required: `false`
- Default = `null`

Created to.

### cursor

- Type: [`Cursor`](/api/resources/types/#cursor)
- Required: `false`
- Default: `null`

Cursor.

### items

- Type: [`PaymentRequestListItem`](/api/resources/types/#paymentrequestlistitem)
- Required: `false`
- Default: `null`

Items.

### only_ok

- Type: `Boolean`
- Required: `false`
- Default: `false`

Only ok.

### page_size

- Type: `integer`
- Required: `false`
- Default: `100`

Page size.

### status

- Type: [`SelectMultiple`](/api/resources/types/#selectmultiple)
- Required: `false`
- Default: `null`

Status.

</div>

## Request Body

::: warning NOTE
The request body can not be empty.
:::

<code-group>
<code-block title="Types">
```json
{
  "created_from": DateTime,
  "created_to": DateTime,
  "cursor": Cursor,
  "page_size": integer,
  "only_ok": Boolean,
  "status": SelectMultiple
}
```
</code-block>

<code-block title="Example">
```json
TBA
```
</code-block>
</code-group>

## Response Body

If successful, the response body contains data with the following structure:

<code-group>
<code-block title="Types">
```json
{
  "items": PaymentRequestListItem,
  "cursor": Cursor
}
```
</code-block>

<code-block title="Example">
```json
TBA
```
</code-block>
</code-group>
