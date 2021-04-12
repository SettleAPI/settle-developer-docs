---
layout: TypesLayout
title: Complex Types
description: Complex Types
---

<!-- <TestComponent /> -->

<!-- # Complex Types -->

<!-- Not all data can be easily described with simple data structures. This page lists all the complex data structures that our Settle API is using. -->

<!-- <Types /> -->

<!-- ## AccessTokenResponse

<div class="md-api_reference_FiraCode">

### access_token

* Type: `string`
* Required: `false`
* Default: `null`

Access token.

### id_token

* Type: `string`
* Required: `false`
* Default: `null`

A JWT that contains identity information about the user that is digitally signed by Settle.

### token_type

* Type: `string`
* Required: `true`
* Default: `null`

Type of access token, at this time it will always be Bearer.

### expires_in

* Type: `integer`
* Required: `false`
* Default: `null`

Lifetime in seconds of the access token.

### refresh_token

* Type: `string`
* Required: `false`
* Default: `null`

Refresh token used to issue new access token after expiration.

### scope

* Type: `string`
* Required: `false`
* Default: `null`
* Value: `address` | `bankid` | `email` | `fodselsnummer` | `openid` | `phone` | `profile` | `shipping_address`

Space-delimited list of scopes. Any of: "openid" (static id, "address" (user preferred address), "profile" (name), "phone", "email", "shipping_address", "fodselsnummer".

### currency

* Type: [`Currency`](/api/resources/types/#currency-2)
* Required: `false`
* Default: `null`
* Length: == 3

Currency for fee.

### transaction_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`
* Length: == 3

Permission fee to be deducted from settlement.

### status

* Type: `string`
* Required: `false`
* Default: `null`

Permission request status.

### status_code

* Type: `integer`
* Required: `false`
* Default: `null`

Permission request status code.

### pos_id

* Type: `string`
* Required: `true`
* Data Required: New or existing on update
* Length <= 64
* Regexp: ^\[a-zA-Z0-9.-]+$

The POS this request originates from, used for informing user about origin.

### pos_tid

* Type: `string`
* Required: `true`
* Data Required: New or existing on update
* Length <= 64
* Regexp: ^\[a-zA-Z0-9.-]+$

Local transaction id for POS. This must be unique for the POS.

### rid

* Type: `string`
* Required: `required`
* Data Required: New or existing on update

asdf.

### user_info

* Type: [`JSON`](/api/resources/types/#json)
* Required: `false`
* Default: `null`

User Info.

</div>

## BusinessApplication

<div class="md-api_reference_FiraCode">

### status

* Type: `string`
* Required: `false`
* Default: `null`

Status of the current application.

### comment

* Type: `string`
* Required: `false`
* Default: `null`

Comments given on the current application.

</div>

## BusinessDocument

<div class="md-api_reference_FiraCode">

### gs_object_name

* Type: `string`
* Required: `false`
* Default: `null`

Gs Object Name.

### description

* Type: `string`
* Required: `false`
* Default: `null`

Description.

</div>

## Capture

The list of captures done for the payment request.

<div class="md-api_reference_FiraCode">

### id

* Type: `string`
* Required: `false`
* Default: `null`

Local capture id. `null` if the full amount in the payment request is captured in one step.

### amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Captured part of amount.

### additional_amount

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Captured part of additional amount.

</div>

## Currency

In schemas where a Currency field occurs it's value determines the currency used for the [Money](/api/resources/types/#money) fields in the same schema. If the schema has a nested structure, the Currency field only affects the Money fields at the same nesting level. The `currency` field takes a string of 3 chars representing a currency code according to the [ISO 4217 standard](https://www.iso.org/iso-4217-currency-codes.html) .

## Cursor

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## Date

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## DateTime

UTC date and time as a string. The format is `YYYY-MM-DD hh:mm:ss` (24h time).

## Fee

Fees and their corresponding VAT amounts for summaries of merchant settlements.

<div class="md-api_reference_FiraCode">

### scope_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Scope Fee.


### scope_fee_vat

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Scope Fee Vat.


### settlement_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Settlement Fee.


### settlement_fee_vat

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Settlement Fee Vat.


### transaction_fee

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Transaction Fee.


### transaction_fee_vat

* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Default: `null`

Transaction Fee Vat.

</div>

## Item

Simple item description for Settle item lists.

<div class="md-api_reference_FiraCode">

### item_name

* Type: `string`
* Required: `false`
* Default: `null`

Item text, e.g. "Spaghetti code".

### quantity

* Type: `string`
* Required: `false`
* Default: `null`

Quantity of the item.

### measurement_unit

* Type: `string`
* Required: `false`
* Default: `null`

Unit of the quantity. e.g. kg, m, m2, m3, pcs and so on.

### item_gross_total

* Type: `string`
* Required: `false`
* Default: `null`

Price price the quantity of the item, VAT included.

### tax_percent

* Type: `string`
* Required: `false`
* Default: `null`
* Number: == None

VAT in percent.

### item_id

* Type: `string`
* Required: `false`
* Default: `null`

Item identifier. Preferred in the order from left to right: **EAN**, **UPC**, **ISBN**, **commodity code**, **serial number**, **other identifiers**.

</div>

## JSON

No info available for `JSON` at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## LineItem

<div class="md-api_reference_FiraCode">

### product_id

* Type: `string`
* Required: `true`
* Data Required: New or existing on update

External id for the product in the line item.


### description

* Type: `string`
* Required: `false`
* Default: `null`

Description of the line item.


### metadata


* Type: [`LineItemMetadata`](/api/resources/types/#lineitemmetadata)
* Required: `false`
* Default: `null`

List of product metadata.


### vat_rate


* Type: `string`
* Required: `false`
* Data Required: New or existing update

VAT rate for the line item.


### quantity


* Type: `string`
* Required: `true`
* Data Required: New or existing update

Quantity of the item.


### vat


* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `false`
* Validation: Non Negative Integer


Total vat for the line item.


### item_cost


* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `true`
* Data Required: New or existing update

Cost pr item or base quantity of product in line item.



### total


* Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
* Required: `true`
* Data Required: New or existing update

Lorem.

</div>

## LineItemMetadata

<div class="md-api_reference_FiraCode">

### key

* Type: `string`
* Required: `true`
* Data Required: New or existing on update

Key.


### value

* Type: `string`
* Required: `true`
* Data Required: New or existing on update

Value.

</div>

## Location

A geographical point, specified by [floating-point latitude and longitude coordinates](https://support.google.com/maps/answer/18539) together with an accuracy measurement in meters.

<div class="md-api_reference_FiraCode">

### latitude

* Type: `float`
* Required: `false`
* Default: `null`

Latitude.

### longitude

* Type: `float`
* Required: `false`
* Default: `null`

Longitude.

### accuracy

* Type: `float`
* Required: `false`
* Default: `null`

Accuracy in meters.

</div>

## MerchantProfileRegistration

<div class="md-api_reference_FiraCode">

### first_address_line

* Type: `string`
* Required: `false`
* Default: `null`
* Length <= 100

First address line.

### postal_code

* Type: `string`
* Required: `false`
* Default: `null`
* Length 4<= and >=5
* Regexp: ^\[0-9]{4,5}$

Postal Code.

### country

* Type: `string`
* Required: `false`
* Default: `null`

Merchants country of operation.

### description

* Type: `string`
* Required: `false`
* Default: `null`

Description of Merchant.

### phone_number

* Type: `string`
* Required: `false`
* Validator: MSISDN

Phone number.

### email

* Type: `string`
* Required: `false`
* Default: `null`
* Regexp: ^.+@[^.].*.\[a-z]{2,10}$)

Merchant contact email address.

### url

* Type: `string`
* Required: `false`
* Default: `null`
* Length: <= 100
* Regexp: ^w+://([^/:]+.\[a-z]{2,10}|(\[0-9]{1,3}.){3}\[0-9]{1,3})(:\[0-9]+)?(/.*)?$

Website URL.

### twitter

* Type: `string`
* Required: `false`
* Default: `null`

Twitter URL.

### Facebook

* Type: `string`
* Required: `false`
* Default: `null`

Facebook URL.

### hours

* Type: `string`
* Required: `false`
* Default: `null`

Hours of operation.

### settlement_receivers

* Type: `string`
* Required: `false`
* Default: `null`
* Regexp: ^.+@[^.].*.\[a-z]{2,10}$)

Please write email address of people who should receive settlement files for this store.

### settlement_email_xls

* Type: `bollean`
* Required: `false`
* Default: `false`

Settlement Email Xls.

### logo_url

* Type: `string`
* Required: `false`
* Default: `null`

URL to Merchants logo.

</div>

## Money

Type that represents a monetary amount as a string using period as the decimal separator (e.g. `"12.50"`). In schemas where one or more Money fields appears there will always be a [Currency](/api/resources/types/#currency-2) field present, that determines the currency of the Money fields. The value string of the Money field must have the correct number of decimal places for the currency that has been supplied in the same schema. E,g, if the currency is `"USD"`, `"12.50"` is a valid Money value, while `"12.5"` and `"12.500"` are not.

## MoneyInteger

Type that represents a monetary amount as an integer. In schemas where one or more [Money](/api/resources/types/#money) fields appears there will always be a Currency field present, that determines the currency of the Money fields.

## Name

<div class="md-api_reference_FiraCode">

### given_name

* Type: `string`
* Required: `false`
* Default: `null`

Given Name.


### family_name

* Type: `string`
* Required: `false`
* Default: `null`

Family Name.


### middle_name

* Type: `string`
* Required: `false`
* Default: `null`

Middle Name.

</div>

## NameResponse

<div class="md-api_reference_FiraCode">

### given_name

* Type: `string`
* Required: `false`
* Default: `null`

Given Name.


### family_name

* Type: `string`
* Required: `false`
* Default: `null`

Family Name.


### middle_name

* Type: `string`
* Required: `false`
* Default: `null`

Middle Name.

</div>

## NdbKey

No info available for `NdbKey` at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## NullableBoolean

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## PaymentRequestLink

Link to be displayed for this payment request.

<div class="md-api_reference_FiraCode">


### uri


* Type: `string`
* Required: `false`
* Default: `null`
* Regexp: (^|^w+://(localhost|[^/:]+|([0-9]{1,3}.){3}[0-9]{1,3})?(:[0-9]+)?)(/.*)?$

These links will be displayed in the app during the whole payment process: from before auth until after capture.


### caption


* Type: `string`
* Required: `false`
* Default: `null`

This text will be displayed in a button in the web to open the respective link.


### show_on


* Type: `string`
* Required: `false`
* Default: `null`
* Value: `pending` | `ok` | `fail` (case insensitive)
* Validation: Case insensitive

This define on what states the link will be shown.

</div>

## PaymentRequestListItem

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

<div class="md-api_reference_FiraCode">

### tid

- Type: `string`
- Required: `false`
- Default: `null`

Tid.

### created

- Type: [`DateTime`](/api/resources/types/#datetime)
- Required: `false`
- Default: `null`

Created.

### total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Total.

### message

- Type: `string`
- Required: `false`
- Default: `null`

Message.

### status

- Type: `string`
- Required: `false`
- Default: `null`

Status.

### currency

- Type: `string`
- Required: `false`
- Default: `null`

Currency.

### link

- Type: `string`
- Required: `false`
- Default: `null`

Link.

</div>

## PayoutDetail

Settle generates this during settlement based on the settlement logs and previously unsettled fees.

<div class="md-api_reference_FiraCode">

### currency

- Type: [`Currency`](/api/resources/types/#currency-2)
- Required: `false`
- Default: `null`

The currency of the Money fields in this payout.

### unsettled_fees_before

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The currency of the Money fields in this payout.

### unsettled_fees_after

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The accumulated sum of unsettled fees after settlement.

### payout

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Money paid out at this settlement.

### net

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The net amount after subtracting all fees from gross.

### gross

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The gross sum of the money transactions contained in the Report.

### billed

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The mount of money billed.

### invoice_id

- Type: `string`
- Required: `false`
- Default: `null`

Invoice identifier.

</div>

## PersonIdentifier

No info available for `PersonIdentifier` at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## Product

<div class="md-api_reference_FiraCode">

### total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Dolor.

### vat

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Vat.

### qty

- Type: `integer`
- Required: `false`
- Default: `null`

Qty.

### description

- Type: `string`
- Required: `false`
- Default: `null`

Description.

</div>

## ProductSalesTable

Fees and their corresponding VAT amounts for summaries of merchant settlements.

<div class="md-api_reference_FiraCode">

### refund

- Type: [`ProductSalesTableEntry`](/api/resources/types/#productsalestableentry)
- Required: `false`
- Default: `null`

Refund.

### capture

- Type: [`ProductSalesTableEntry`](/api/resources/types/#productsalestableentry)
- Required: `false`
- Default: `null`

Capture.

</div>

## ProductSalesTableEntry

<div class="md-api_reference_FiraCode">

### product_id

- Type: `string`
- Required: `false`
- Default: `null`

Product Id.

### product

- Type: [`Product`](/api/resources/types/#product)
- Required: `false`
- Default: `null`

Product.

</div>

## PubKey

Field for public key

Settle accepts the following formats:

- OpenSSH public key format (the format in ~/.ssh/authorized_keys)
- PEM format

Max bit size: 4096.

The validator will try to add a BEGIN/END wrapper if the key lacks one. If the wrapper provided is wrong, the validation will fail.

## QuantitySum

<div class="md-api_reference_FiraCode">

### total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Total.

### vat

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Vat.

### qty

- Type: `integer`
- Required: `false`
- Default: `null`

Qty.

</div>

## Refund

The list of refunds done for the payment request.

<div class="md-api_reference_FiraCode">

### id

- Type: `string`
- Required: `false`
- Default: `null`

Local refund id. Null if the full amount in the payment request is refunded in one step.

### amount

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Refunded part of amount.

### additional_amount

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Refunded part of additional amount.

### chat_message_data_text

- Type: `string`
- Required: `false`
- Default: `null`

Given text reason for refund.

</div>

## ReportSummary

A summary of the set of transactions carried out in the same Report. Settle generates this after a report is closed.

<div class="md-api_reference_FiraCode">

### gross

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The gross sum of the money transactions contained in the Report.

### amount_total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The sum of the amount fields of the transactions contained in the Report.

### additional_amount_total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The sum of the additional_amount fields of the transactions contained in the Report.

### fees

- Type: [`Fee`](/api/resources/types/#fee)
- Required: `false`
- Default: `null`

List of fees that are subtracted from gross. See [Report summaries](/guides/ledgers/#report-summaries) for a full description.

### interchange

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The sum of interchange fees for credit card transactions.

### currency

- Type: [`Currency`](/api/resources/types/#currency-2)
- Required: `false`
- Default: `null`

The sum of interchange fees for credit card transactions.

### net

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

The net amount after subtracting all fees from gross.

### taxcode

- Type: `string`
- Required: `false`
- Default: `null`

Tax laws that apply for this part of the summary, e.g., "NO:2013"

</div>

## RunningSum

<div class="md-api_reference_FiraCode">

### refund

- Type: [`QuantitySum`](/api/resources/types/#quantitysum)
- Required: `false`
- Default: `null`

Refund.

### capture

- Type: [`QuantitySum`](/api/resources/types/#quantitysum)
- Required: `false`
- Default: `null`

Capture.

</div>

## SalesSummaryProduct

<div class="md-api_reference_FiraCode">

### product_id

- Type: `string`
- Required: `false`
- Default: `null`

Product Id.

### description

- Type: `string`
- Required: `false`
- Default: `null`

Description.

### reserved_vat

- Type: `integer`
- Required: `false`
- Default: `null`

Reserved Vat.

### capture_vat

- Type: `integer`
- Required: `false`
- Default: `null`

Capture Vat.

### refund_vat

- Type: `integer`
- Required: `false`
- Default: `null`

Refund Vat.

### reserved_quantity

- Type: `float`
- Required: `false`
- Default: `null`

Reserved Quantity.

### capture_quantity

- Type: `float`
- Required: `false`
- Default: `null`

Capture Quantity.

### refund_quantity

- Type: `float`
- Required: `false`
- Default: `null`

Refund Quantity.

### reserved_total

- Type: `integer`
- Required: `false`
- Default: `null`

Reserved Total.

### capture_total

- Type: `integer`
- Required: `false`
- Default: `null`

Capture Total.

### refund_total

- Type: `integer`
- Required: `false`
- Default: `null`

Refund Total.

### currency

- Type: `string`
- Required: `false`
- Default: `null`

Lorem.

### vat_rate

- Type: `integer`
- Required: `false`
- Default: `null`

Vat Rate.

</div>

## Scope

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## Select

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## SelectMultiple

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## SettlementAccountFrequency

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## SettlementListItem

<div class="md-api_reference_FiraCode">

### index

- Type: `string`
- Required: `false`
- Default: `null`

Index.

### start_date

- Type: [`DateTime`](/api/resources/types/#datetime)
- Required: `false`
- Default: `null`

Start Date.

### end_date

- Type: [`DateTime`](/api/resources/types/#datetime)
- Required: `false`
- Default: `null`

End Date.

### gross

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Gross.

### fixed_fees

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Fixed Fees.

### variable_fees

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Variable Fees.

### payout

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Payout.

</div>

## SettlementListReportContext

<div class="md-api_reference_FiraCode">

### from_date

- Type: `string`
- Required: `false`
- Default: `null`

From Date.

### to_date

- Type: `string`
- Required: `false`
- Default: `null`

To Date.

### include_sales

- Type: `boleaan`
- Required: `false`
- Default: `null`

Include Sales.

### include_sales

- Type: `boleaan`
- Required: `false`
- Default: `null`

Dolor.

### show_sale_refund

- Type: `string`
- Required: `false`
- Default: `null`

Show Sale Refund.

### show_sale_refund

- Type: `Boolean`
- Required: `false`
- Default: `null`

Show Sale Refund.

### total_sum

- Type: [`Sum`](/api/resources/types/#sum)
- Required: `false`
- Default: `null`

Total Sum.

### running_sum

- Type: [`RunningSum`](/api/resources/types/#runningsum)
- Required: `false`
- Default: `null`

Running Sum.

### unspecified

- Type: [`RunningSum`](/api/resources/types/#runningsum)
- Required: `false`
- Default: `null`

Unspecified.

### settlement_payouts

- Type: [`SettlementPayout`](/api/resources/types/#settlementpayout)
- Required: `false`
- Default: `null`

Unspecified.

### product_sales_table

- Type: [`ProductSalesTable`](/api/resources/types/#productsalestable)
- Required: `false`
- Default: `null`

Settlement Payouts.

### vat_sales_table

- Type: [`VatSalesTable`](/api/resources/types/#vatsalestable)
- Required: `false`
- Default: `null`

Product Sales Table.

### single_format

- Type: [`NullableBoolean`](/api/resources/types/#nullableboolean)
- Required: `false`
- Default: `null`

Vat Sales Table.

### single_payout

- Type: [`SettlementPayout`](/api/resources/types/#settlementpayout)
- Required: `false`
- Default: `null`

Single Payout.

</div>

## SettlementListSummary

<div class="md-api_reference_FiraCode">

### settlement_account_id

- Type: `string`
- Required: `false`
- Default: `null`

Settlement Account Id

### num_settlements

- Type: `integer`
- Required: `false`
- Default: `null`

Num Settlements.

### currency

- Type: [`Currency`](/api/resources/types/#currency-2)
- Required: `false`
- Default: `null`

Dolor.

### payout

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Payout.

### neg_payout

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Neg Payout.

### balance_before

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Balance Before.

### balance_after

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Balance After.

### sales

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Sales.

### gross

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Gross.

### fixed_fees

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Fixed Fees.

### variable_fees

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Variable Fees.

### refunds

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Refunds.

### capture_count

- Type: `integer`
- Required: `false`
- Default: `null`

Capture Count.

### refund_count

- Type: `integer`
- Required: `false`
- Default: `null`

Refund Count.

</div>

## SettlementPayout

<div class="md-api_reference_FiraCode">

### account

- Type: `string`
- Required: `false`
- Default: `null`

Account.

### amount

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Ammount.

### id

- Type: `integer`
- Required: `false`
- Default: `null`

Id.

### text

- Type: `string`
- Required: `false`
- Default: `null`

Text.

</div>

## Sum

<div class="md-api_reference_FiraCode">

### total

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Total.

### vat

- Type: [`MoneyInteger`](/api/resources/types/#moneyinteger)
- Required: `false`
- Default: `null`

Vat.

</div>

## Time

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## TimeDelta

No info available at of this moment. Please [contact us](https://settle.eu/contact/) for more information.

## VatSalesTable

<div class="md-api_reference_FiraCode">

### refund

- Type: [`VatSalesTableEntry`](/api/resources/types/#vatsalestableentry)
- Required: `false`
- Default: `null`

Refund.

### capture

- Type: [`VatSalesTableEntry`](/api/resources/types/#vatsalestableentry)
- Required: `false`
- Default: `null`

Capture.

</div>

## VatSalesTableEntry

Fees and their corresponding VAT amounts for summaries of merchant settlements.

<div class="md-api_reference_FiraCode">

### vat_rate

- Type: [`string`]
- Required: `false`
- Default: `null`

Refund.

### entry

- Type: [`QuantitySum`](/api/resources/types/#quantitysum)
- Required: `false`
- Default: `null`

Capture.

</div> -->
