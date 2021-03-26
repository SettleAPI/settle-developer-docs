---
title: merchant.paymentRequest.modify
description: Endpoint for updating payment requests.
---

## Method

<div class="md-api_reference_method_heading">

merchant.paymentRequest.modify

</div>

Capturing an authorized payment or reauthorizing is done with the action field.

The call is idempotent; that is, if one posts the same amount, additional_amount and capture_id twice with action CAPTURE, only one capture is performed. Similarly, if one posts twice with action CAPTURE without any amount stated, to capture the full amount, only one full capture is performed.

Note that the REFUND action will require that the API call is made with the KEY authorization mode, not SECRET.


## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_request_heading">

<span class="badge put">PUT</span> /payment_request/`{ tid }`/

</div>

Update, reauthorize, capture, release or abort payment request.

### Authorization Scopes

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All

### Base URIs

* Sandbox: <span class="url">https://api.sandbox.settle.eu/merchant/v1</span>
* Production: <span class="url">https://api.settle.eu/merchant/v1</span>

### Path Parameters

* [tid](/api/resources/types/#paymentrequestlistitem) - Transaction ID assigned by Settle

### Status Codes

* **204** --> **OK**, (no content)
* **400** --> **Bad Request**, illegal input
* **409** --> **Conflict**, illegal action at this time (capture before authorization, abort after capture)

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

### page_size

- Type: `integer`
- Required: `false`
- Default: `100`

Page size.

### only_ok

- Type: `Boolean`
- Required: `false`
- Default: `false`

Only ok.

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
