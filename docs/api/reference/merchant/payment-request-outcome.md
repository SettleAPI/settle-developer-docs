---
title: Payment Request Outcome
description: Payment Requests Outcomes in the Settle Merchant API 
---


# Payment Request Outcome

The Payment Request Outcome endpoint shows the outcome info for a **Payment Request**, **ReAuth** or **Capture**.

This endpoints includes specified fee and/or interchange that will be deducted from payout, and also updated additional amount field if the user added gratuity.

If the callback URI registered for the payment request was secure (https), the contents of this form was sent along with the callback. If the callback URI was insecure, a notification pointing to this endpoint was sent instead.

The status field contains a simple string that is one of `ok`, `fail`, `auth`, or `pending`. The `status_code` field contains more information. The codes currently documented are:

| Code 	| Reason                                                  	| Status Code 	|
|:----:	|---------------------------------------------------------	|:-----------:	|
| 1003 	| PENDING - Waiting for customer or bank                  	|   pending   	|
| 2000 	| OK - Payment received                                   	|      ok     	|
| 3008 	| AUTH - Payment authorized, ready for capture            	|     auth    	|
| 4004 	| NOT_FOUND - No such customer                            	|     fail    	|
| 4019 	| ABORTED - Merchant aborted payment before capture       	|     fail    	|
| 5006 	| REJECTED - Customer rejected/aborted payment request    	|     fail    	|
| 5011 	| REQUEST_EXPIRED - Payment request expired               	|     fail    	|
| 5012 	| AUTH_EXPIRED - Authorization not captured within 3 days 	|     fail    	|

::: warning NOTE
The list of status codes may grow in the future, and API clients should deal with unknown status codes gracefully. However, one can rely on **1xxx** and **3xxx** being temporary states *(merchant should wait for further updates)*, **2xxx** represent final successful outcomes, and **4xxx** and **5xxx** represents final failure outcomes.
:::

## Requests

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_method_heading">

### <span class="badge get">GET</span> /payment_request/`{ tid }`/outcome/

</div>

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All

Retrieve payment request outcome.

#### Parameters

* `tid` - Transaction ID assigned by Settle

#### Status Codes

* **200** --> OK
* **404** --> `tid` not found (or unauthorized for this merchant)

</div>

## Response Schema

<div class="md-api_reference_FiraCode">

### currency

* Type: [`Currency`](/api/resources/types/#currency-2)
* Required: `true`
* Default: `null`
* Length: == 3
* Data: New or existing on update

ISO 4217 currency code. See [Currency](/api/resources/types/#currency-2).

### amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Amount.

### additional_amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Additional amount might have been changed by user if `additional_edit` was true. See [MoneyInteger](/api/resources/types/#moneyinteger).

#### auth_amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

The authorized amount. If doing partial captures, this will show the amount still available in the authorization for subsequent captures; auth_amount = amount - sum(captured amounts). See [MoneyInteger](/api/resources/types/#moneyinteger).

#### auth_additional_amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

The authorized additional amount. If doing partial captures, this will show the part of additional amount still available in the authorization for subsequent captures; auth_additional_amount = additional_amount - sum(captured additional amounts). See [MoneyInteger](/api/resources/types/#moneyinteger).

#### captures

* Type: [`Capture`](/api/resources/types/#capture)
* Required: `false`
* Default: `null`

List of captures.

#### refunds

* Type: [`Refund`](/api/resources/types/#refund)
* Required: `false`
* Default: `null`

List of refunds.

#### status

* Type: `string`
* Required: `false`
* Default: `null`
* Values: `ok` | `fail` | `auth` | `pending`

Payment request status (see above).

#### status_code

* Type: `integer`
* Required: `false`
* Default: `null`

Payment request status code (see above).

#### customer

* Type: [`PersonIdentifier`](/api/resources/types/#personIdentifier)
* Required: `false`
* Default: `null`

Customer identifier as originally registered by POS.

#### date_modified

* Type: [`DateTime`](/api/resources/types/#datetime)
* Required: `false`
* Default: `null`

Last modified date.

#### date_expires

* Type: [`DateTime`](/api/resources/types/#datetime)
* Required: `false`
* Default: `null`

Expiration date for current status. After a payment authorization is given this may extend beyond the original expiry date given in the payment request. An authorization expires after 3 days. When the payment request expires it is marked as failed (whether in pending or authorized state).

#### credit

* Type: `Boolean`
* Required: `false`
* Default: `null`

Whether the received payment was a credit payment.

#### interchange_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Interchange fee to be deducted if credit payment.

#### transaction_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Interchange fee to be deducted if credit payment.

#### attachment_uri

* Type: `string`
* Required: `false`
* Default: `null`

Endpoint for Attachment uploads, such as electronic receipts. This URI has a limited time to live, and a new URI is generated each time outcome is retrieved.

#### pos_id

* Type: `string`
* Required: `true`
* Required Data: New or existing on update

The POS this request originates from, used for informing user about origin.

#### pos_id

* Type: `string`
* Required: `true`
* Required Data: New or existing on update
* Length <= 64
* Regexp: ^\[a-zA-Z0-9_.-]+$

Local transaction ID for POS. This must be unique for the POS.

#### tid

* Type: `string`
* Required: `true`
* Required Data: New or existing on update
* Length <= 64
* Regexp: ^\[a-zA-Z0-9_.-]+$

Settle transaction id.

#### permissions

* Type: [`AccessTokenResponse`](/api/resources/types/#accesstokenresponse)
* Required: `false`
* Default: `null`

If payment request was combined with a permission request, this field will contain the permission request outcome. Same as returned by a GET the permission request outcome endpoint.

</div>