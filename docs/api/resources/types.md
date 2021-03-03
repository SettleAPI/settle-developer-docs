---
title: Complex Types
description: Complex Types
---
# Complex Types

Not all data can be easily described with simple data structures. This page lists all the complex data structures that our Settle API is using.

[[toc]]

## Item

Simple item description for Settle item lists.

|                                                         |                                                                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **item_name** : String : optional : default=null        | Item text, e.g. "Spaghetti-Cod"                                                                                                |
| **quantity** : String : optional : default=null         | Quantity of the item.                                                                                                          |
| **measurement_unit** : String : optional : default=null | Unit of the quantity. e.g. kg, m, m2, m3, pcs and so on.                                                                       |
| **item_gross_total** : String : optional : default=null | Price price the quantity of the item, VAT included.                                                                            |
| **tax_percent** : String : optional : default=null      | VAT in percent.                                                                                                                |
| **item_id** : String : optional : default=null          | Item identifier. Preferred in the order from left to right: EAN, UPC, ISBN, commodity code, serial number, other identifiers." |

## Store[](https://developer.settle.eu/types.html#wtforms-fielddoc-attachments-2 "Permalink to this headline")

Information about the store or business that is receiving the payment. Used for e-receipts.

|                                                            |                                  |
| ---------------------------------------------------------- | -------------------------------- |
| **store_id** : String : optional : default=null            | Unique store id, for example GLN |
| **name** : String : optional : default=null                | Name of the Store                |
| **address** : String : optional : default=null             | Store address                    |
| **postal_code** : String : optional : default=null         | Postal code                      |
| **postal_place** : String : optional : default=null        | Postal place                     |
| **country** : String : optional : default=null             | Country                          |
| **phone_number** : String : optional : default=null        | Phone number                     |
| **organization_number** : String : optional : default=null | Organization number              |
| **chain_name** : String : optional : default=null          | Name of the Store Chain          |
| **longitude** : String : optional : default=null           | Longitude                        |
| **latitude** : String : optional : default=null            | Latitude                         |

## ReceiptItem[](https://developer.settle.eu/types.html#wtforms-fielddoc-attachments-3 "Permalink to this headline")

Thorough item description for e-receipts.

|                                                         |                                                          |
| ------------------------------------------------------- | -------------------------------------------------------- |
| **item_name** : String : optional : default=null        | Item text, e.g. "Spaghetti with Cod"                     |
| **item_group** : String : optional : default=null       | Item Group.                                              |
| **quantity** : String : optional : default=null         | Quantity of the item.                                    |
| **measurement_unit** : String : optional : default=null | Unit of the quantity. e.g. kg, m, m2, m3, pcs and so on. |
| **item_net_price** : String : optional : default=null   | Price of one single item, VAT excluded.                  |
| **item_gross_price** : String : optional : default=null | Price of one single item, VAT included.                  |
| **item_net_total** : String : optional : default=null   | Price of the quantity of the item, VAT excluded.         |
| **item_gross_total** : String : optional : default=null | Price price the quantity of the item, VAT included.      |
| **discount** : String : optional : default=null         | Discount on the item, VAT included.                      |
| **taxes** : String : optional : default=null            | VAT in currency.                                         |
| **tax_percent** : String : optional : default=null      | VAT in percent.                                          |
| **commodity_code** : String : optional : default=null   | Item number, e.g. Varenummer, ISBN.                      |
| **ean** : String : optional : default=null              | International Article Number (EAN).                      |
| **serial_number** : String : optional : default=null    | Item serial number.                                      |

## ReceiptPayment[](https://developer.settle.eu/types.html#wtforms-fielddoc-attachments-4 "Permalink to this headline")

|                                                     |                                        |
| --------------------------------------------------- | -------------------------------------- |
| **payment_type** : String : optional : default=null | Payment type for the (partial) payment |
| **amount** : String : optional : default=null       | Amount paid using this payment type    |
| **currency** : String : optional : default=null     | Currency of the payment                |

## Currency[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0 "Permalink to this headline")

In schemas where a Currency field occurs it's value determines the currency used for the [Money](https://developer.settle.eu/types.html#wtforms-fielddoc-oauth_api-0) fields in the same schema. If the schema has a nested structure, the Currency field only affects the Money fields at the same nesting level. The Currency field takes a string of 3 chars representing a currency code according to the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) standard.

## MoneyInteger[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1 "Permalink to this headline")

Type that represents a monetary amount as an integer. In schemas where one or more Money fields appears there will always be a [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) field present, that determines the currency of the Money fields.

## Capture[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-2 "Permalink to this headline")

The list of captures done for the payment request.

|                                                                                                                                       |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **id** : String : optional : default=null                                                                                             | Local capture id. Null if the full amount in the payment request is captured in one step. |
| **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | Captured part of amount.                                                                  |
| **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Captured part of additional amount                                                        |

## Refund[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-3 "Permalink to this headline")

The list of refunds done for the payment request.

|                                                                                                                                       |                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **id** : String : optional : default=null                                                                                             | Local refund id. Null if the full amount in the payment request is refunded in one step. |
| **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | Refunded part of amount.                                                                 |
| **additional_amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Refunded part of additional amount                                                       |
| **chat_message_data_text** : String : optional : default=null                                                                         | Given text reason for refund                                                             |

## PersonIdentifier[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-6 "Permalink to this headline")

## DateTime[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7 "Permalink to this headline")

UTC date and time as a string. The format is `YYYY-MM-DD hh:mm:ss` (24h time).

## Json[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-9 "Permalink to this headline")

## AccessTokenResponse[](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-10 "Permalink to this headline")

|                                                                                                                                     |                                                                                                                                                                          |
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

## NdbKey[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-1 "Permalink to this headline")

## MerchantProfileRegistration[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-2 "Permalink to this headline")

|                                                               |                                                                                   |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **first_address_line** : String : optional : default=""       | First Address Line                                                                |
| **second_address_line** : String : optional : default=""      | Second Address Line                                                               |
| **postal_code** : String : optional : default=""              | Postal Code                                                                       |
| **country** : String : optional : default=null                | Country                                                                           |
| **description** : String : optional : default=null            | Description                                                                       |
| **phone_number** : String : optional : default=""             | Phone Number                                                                      |
| **email** : String : optional : default=""                    | Email                                                                             |
| **url** : String : optional : default=""                      | Url                                                                               |
| **twitter** : String : optional : default=null                | Twitter                                                                           |
| **facebook** : String : optional : default=null               | Facebook                                                                          |
| **hours** : String : optional : default=null                  | Hours                                                                             |
| **settlement_receivers** : String : optional : default=""     | Please write emails of people who should receive settlement files for this store. |
| **settlement_email_xls** : Boolean : optional : default=false | Settlement Email Xls                                                              |
| **logo_url** : String : optional : default=null               | Logo Url                                                                          |

## BusinessApplication[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-3 "Permalink to this headline")

|                                                |         |
| ---------------------------------------------- | ------- |
| **status** : String : optional : default=null  | Status  |
| **comment** : String : optional : default=null | Comment |

## BusinessDocument[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-4 "Permalink to this headline")

|                                                       |                |
| ----------------------------------------------------- | -------------- |
| **gs_object_name** : String : optional : default=null | Gs Object Name |
| **description** : String : optional : default=null    | Description    |

## PubKey[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-5 "Permalink to this headline")

Field for public key

Settle accepts the following formats:

* OpenSSH public key format (the format in ~/.ssh/authorized_keys)
* PEM format

Max bit size: 4096.

The validator will try to add a BEGIN/END wrapper if the key lacks one. If the wrapper provided is wrong, the validation will fail.

## Location[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-7 "Permalink to this headline")

A geographical point, specified by floating-point latitude and longitude coordinates together with an accuracy measurement in meters.

|                                                 |                     |
| ----------------------------------------------- | ------------------- |
| **latitude** : Float : optional : default=null  | Latitude            |
| **longitude** : Float : optional : default=null | Longitude           |
| **accuracy** : Float : optional : default=null  | Accuracy in meters. |

## LineItemMetadata[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-8 "Permalink to this headline")

|                               |       |
| ----------------------------- | ----- |
| **key** : String : required   | key   |
| **value** : String : required | value |

## LineItem[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-9 "Permalink to this headline")

|                                                                                                                                    |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **product_id** : String : required                                                                                                 | External id for the product in the line item          |
| **description** : String : optional : default=null                                                                                 | Description of the line item                          |
| **metadata\[]** : [LineItemMetadata](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-8) : optional : default=null | List of product metadata                              |
| **vat_rate** : String : required                                                                                                   | VAT rate for the line item                            |
| **quantity** : String : required                                                                                                   | Quantity of the item                                  |
| **vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | Total vat for the line item                           |
| **item_cost** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : required                     | Cost pr item or base quantity of product in line item |
| **total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : required                         | Total cost, including vat, for line item              |

## PaymentRequestLink[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-10 "Permalink to this headline")

Link to be displayed for this payment request.

|                                                   |                                                                                                                  |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **uri** : String : optional : default=null        | These links will be displayed in the app during the whole payment process: from before auth until after capture. |
| **caption** : String : optional : default=null    | This text will be displayed in a button in the web to open the respective link.                                  |
| **show_on\[]** : String : optional : default=null | This define on what states the link will be shown.                                                               |

## Scope[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-11 "Permalink to this headline")

## Cursor[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-12 "Permalink to this headline")

## SelectMultiple[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-13 "Permalink to this headline")

## PaymentRequestListItem[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-14 "Permalink to this headline")

|                                                                                                                           |          |
| ------------------------------------------------------------------------------------------------------------------------- | -------- |
| **tid** : String : optional : default=null                                                                                | Tid      |
| **created** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null   | Created  |
| **total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Total    |
| **message** : String : optional : default=null                                                                            | Message  |
| **status** : String : optional : default=null                                                                             | Status   |
| **currency** : String : optional : default=null                                                                           | Currency |
| **link** : String : optional : default=null                                                                               | Link     |

## Date[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-16 "Permalink to this headline")

## Select[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-17 "Permalink to this headline")

## Time[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-18 "Permalink to this headline")

## SalesSummaryProduct[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-19 "Permalink to this headline")

|                                                            |                   |
| ---------------------------------------------------------- | ----------------- |
| **product_id** : String : optional : default=null          | Product Id        |
| **description** : String : optional : default=null         | Description       |
| **reserved_vat\[]** : Integer : optional : default=null    | Reserved Vat      |
| **capture_vat\[]** : Integer : optional : default=null     | Capture Vat       |
| **refund_vat\[]** : Integer : optional : default=null      | Refund Vat        |
| **reserved_quantity\[]** : Float : optional : default=null | Reserved Quantity |
| **capture_quantity\[]** : Float : optional : default=null  | Capture Quantity  |
| **refund_quantity\[]** : Float : optional : default=null   | Refund Quantity   |
| **reserved_total\[]** : Integer : optional : default=null  | Reserved Total    |
| **capture_total\[]** : Integer : optional : default=null   | Capture Total     |
| **refund_total\[]** : Integer : optional : default=null    | Refund Total      |
| **currency** : String : optional : default=null            | Currency          |
| **vat_rate** : Integer : optional : default=null           | Vat Rate          |

## Fee[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-20 "Permalink to this headline")

Fees and their corresponding VAT amounts for summaries of merchant settlements

|                                                                                                                                         |                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **scope_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null           | Scope Fee           |
| **scope_fee_vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null       | Scope Fee Vat       |
| **settlement_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null      | Settlement Fee      |
| **settlement_fee_vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null  | Settlement Fee Vat  |
| **transaction_fee** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null     | Transaction Fee     |
| **transaction_fee_vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Transaction Fee Vat |

## ReportSummary[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-21 "Permalink to this headline")

A summary of the set of transactions carried out in the same Report. Settle generates this after a report is closed.

|                                                                                                                                             |                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **gross** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                   | The gross sum of the money transactions contained in the Report.                                                                                         |
| **amount_total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null            | The sum of the amount fields of the transactions contained in the Report.                                                                                |
| **additional_amount_total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | The sum of the additional_amount fields of the transactions contained in the Report.                                                                     |
| **fees** : [Fee](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-20) : optional : default=null                             | List of fees that are subtracted from **gross**. See *[Report summaries](https://developer.settle.eu/ledgers.html#summary-fees)* for a full description. |
| **interchange** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null             | The sum of interchange fees for credit card transactions.                                                                                                |
| **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null                    | The currency of the Money fields in this summary.                                                                                                        |
| **net** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                     | The net amount after subtracting all fees from gross.                                                                                                    |
| **taxcode** : String : optional : default=null                                                                                              | Tax laws that apply for this part of the summary, e.g., "NO:2013"                                                                                        |

## PayoutDetail[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-22 "Permalink to this headline")

Settle generates this during settlement based on the settlement logs and previously unsettled fees.

|                                                                                                                                           |                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null                  | The currency of the Money fields in this payout.                 |
| **unsettled_fees_before** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | The accumulated sum of unsettled fees prior to settlement.       |
| **unsettled_fees_after** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null  | The accumulated sum of unsettled fees after settlement.          |
| **payout** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                | Money paid out at this settlement.                               |
| **net** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                   | The net amount after subtracting all fees from gross.            |
| **gross** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                 | The gross sum of the money transactions contained in the Report. |
| **billed** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null                | The mount of money billed.                                       |
| **invoice_id** : String : optional : default=null                                                                                         | Invoice identifier.                                              |

## SettlementAccountFrequency[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-23 "Permalink to this headline")

## TimeDelta[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-24 "Permalink to this headline")

## SettlementListItem[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-25 "Permalink to this headline")

|                                                                                                                                   |               |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **index** : String : optional : default=null                                                                                      | Index         |
| **start_date** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null        | Start Date    |
| **end_date** : [DateTime](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-7) : optional : default=null          | End Date      |
| **gross** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null         | Gross         |
| **fixed_fees** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null    | Fixed Fees    |
| **variable_fees** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Variable Fees |
| **payout** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null        | Payout        |

## SettlementListSummary[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-26 "Permalink to this headline")

|                                                                                                                                    |                       |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **settlement_account_id** : String : optional : default=null                                                                       | Settlement Account Id |
| **num_settlements** : Integer : optional : default=null                                                                            | Num Settlements       |
| **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null           | Currency              |
| **payout** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null         | Payout                |
| **neg_payout** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null     | Neg Payout            |
| **balance_before** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Balance Before        |
| **balance_after** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null  | Balance After         |
| **sales** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null          | Sales                 |
| **gross** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null          | Gross                 |
| **fixed_fees** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null     | Fixed Fees            |
| **variable_fees** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null  | Variable Fees         |
| **refunds** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null        | Refunds               |
| **capture_count** : Integer : optional : default=null                                                                              | Capture Count         |
| **refund_count** : Integer : optional : default=null                                                                               | Refund Count          |

## Sum[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-27 "Permalink to this headline")

|                                                                                                                           |       |
| ------------------------------------------------------------------------------------------------------------------------- | ----- |
| **total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Total |
| **vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null   | Vat   |

## QuantitySum[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-28 "Permalink to this headline")

|                                                                                                                           |       |
| ------------------------------------------------------------------------------------------------------------------------- | ----- |
| **total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Total |
| **vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null   | Vat   |
| **qty** : Integer : optional : default=null                                                                               | Qty   |

## RunningSum[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-29 "Permalink to this headline")

|                                                                                                                            |         |
| -------------------------------------------------------------------------------------------------------------------------- | ------- |
| **refund** : [QuantitySum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-28) : optional : default=null  | Refund  |
| **capture** : [QuantitySum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-28) : optional : default=null | Capture |

## SettlementPayout[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-30 "Permalink to this headline")

|                                                                                                                            |         |
| -------------------------------------------------------------------------------------------------------------------------- | ------- |
| **account** : String : optional : default=null                                                                             | Account |
| **amount** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Amount  |
| **id** : Integer : optional : default=null                                                                                 | Id      |
| **text** : String : optional : default=null                                                                                | Text    |

## Product[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-31 "Permalink to this headline")

|                                                                                                                           |             |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **total** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null | Total       |
| **vat** : [MoneyInteger](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-1) : optional : default=null   | Vat         |
| **qty** : Integer : optional : default=null                                                                               | Qty         |
| **description** : String : optional : default=null                                                                        | Description |

## ProductSalesTableEntry[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-32 "Permalink to this headline")

|                                                                                                                        |            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| **product_id** : String : optional : default=null                                                                      | Product Id |
| **product** : [Product](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-31) : optional : default=null | Product    |

## ProductSalesTable[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-33 "Permalink to this headline")

|                                                                                                                                       |         |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **refund** : [ProductSalesTableEntry](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-32) : optional : default=null  | Refund  |
| **capture** : [ProductSalesTableEntry](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-32) : optional : default=null | Capture |

## VatSalesTableEntry[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-34 "Permalink to this headline")

|                                                                                                                          |          |
| ------------------------------------------------------------------------------------------------------------------------ | -------- |
| **vat_rate** : String : optional : default=null                                                                          | Vat Rate |
| **entry** : [QuantitySum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-28) : optional : default=null | Entry    |

## VatSalesTable[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-35 "Permalink to this headline")

|                                                                                                                                   |         |
| --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **refund** : [VatSalesTableEntry](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-34) : optional : default=null  | Refund  |
| **capture** : [VatSalesTableEntry](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-34) : optional : default=null | Capture |

## NullableBoolean[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-36 "Permalink to this headline")

## SettlementListReportContext[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-37 "Permalink to this headline")

|                                                                                                                                               |                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **from_date** : String : optional : default=null                                                                                              | From Date           |
| **to_date** : String : optional : default=null                                                                                                | To Date             |
| **include_sales** : Boolean : optional : default=null                                                                                         | Include Sales       |
| **show_sale_refund** : Boolean : optional : default=null                                                                                      | Show Sale Refund    |
| **total_sum** : [Sum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-27) : optional : default=null                          | Total Sum           |
| **running_sum** : [RunningSum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-29) : optional : default=null                 | Running Sum         |
| **unspecified** : [RunningSum](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-29) : optional : default=null                 | Unspecified         |
| **settlement_payouts\[]** : [SettlementPayout](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-30) : optional : default=null | Settlement Payouts  |
| **product_sales_table** : [ProductSalesTable](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-33) : optional : default=null  | Product Sales Table |
| **vat_sales_table** : [VatSalesTable](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-35) : optional : default=null          | Vat Sales Table     |
| **single_format** : [NullableBoolean](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-36) : optional : default=false         | Single Format       |
| **single_payout** : [SettlementPayout](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-30) : optional : default=null         | Single Payout       |

## Name[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-38 "Permalink to this headline")

|                                                    |             |
| -------------------------------------------------- | ----------- |
| **given_name** : String : required                 | Given Name  |
| **family_name** : String : required                | Family Name |
| **middle_name** : String : optional : default=null | Middle Name |

## NameResponse[](https://developer.settle.eu/types.html#wtforms-fielddoc-handlers-39 "Permalink to this headline")

|                                                    |             |
| -------------------------------------------------- | ----------- |
| **given_name** : String : optional : default=null  | Given Name  |
| **family_name** : String : optional : default=null | Family Name |
| **middle_name** : String : optional : default=null | Middle Name |

## Money[](https://developer.settle.eu/types.html#wtforms-fielddoc-oauth_api-0 "Permalink to this headline")

Type that represents a monetary amount as a string using period as the decimal separator (e.g. `"12.50"`). In schemas where one or more Money fields appears there will always be a [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) field present, that determines the currency of the Money fields. The value string of the Money field must have the correct number of decimal places for the currency that has been supplied in the same schema. E,g, if the currency is `"USD"`, `"12.50"` is a valid Money value, while `"12.5"` and `"12.500"` are not.