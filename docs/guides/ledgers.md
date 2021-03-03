---
title: Ledgers
description: Ledgers
---
# Ledgers

A **ledger** is a log of payment requests and permission requests. How ledgers are used is up to merchants; for instance a webshop may have only a single ledger, while a convenience store may want a ledger per POS or a ledger per employee. See the `ledger` endpoints. A ledger named `default` is always available.

A (ledger) **report** is a data for a given time period on a ledger. The merchant decides when to close the currently open report on a ledger. E.g., once the merchant closes `/ledger/X435XF2a/report/1/`, `/ledger/X435XF2a/report/2/` is created and becomes the currently open report where new payment requests and permission requests are added.

The `report` endpoint provides for access to per-transaction and per-permission request logs, as well as summary information and information about money paid out.

## Report summaries[](https://developer.settle.eu/ledgers.html#report-summaries "Permalink to this headline")

The `report` endpoint gives summaries for a report on a ledger (for instance, the end-of-day report of a given POS).

While the summary information includes fees to Settle and a "net" for the transactions contained in a report, this is for information purposes only and these nets are not used further in the settlement procedure. The settlements have their own transaction logs, see the *[Settlements](https://developer.settle.eu/settlements.html#settlement)* section.

An example result from the [`settlement`](https://developer.settle.eu/handlers.html#get--settlement--settlement_id-- "GET /settlement/\<settlement_id>/") endpoint could look like this:

```

```

The **fees** list may not contain an entry if its value is `0.00`. The current fees are **transaction_fee**, **interchange** and **scope_fee**, and **scope_fee_vat**, though this list may grow with time.

The counters simply count up the number of event lines with the corresponding actions in the CSV log files; see the log documentation below.

In addition to what shown above, **transaction_fee** and **scope_fee** properties will also be returned, but are deprecated and only present for backwards compatibility reasons.

## Transaction logs[](https://developer.settle.eu/ledgers.html#transaction-logs "Permalink to this headline")

An example table from the transaction log is given below; it contains three transactions:

* A transaction where the full amount is captured right away, 7 seconds after initiation.
* A transaction using partial capture to capture 50.00 NOK + 10.00 NOK from additional_amount first, then 50.00 NOK, leaving 50.00 NOK + 5.00 NOK additional amount left in the authorization; the remaining amount is (automatically) released when authorization expires.
* A transaction that is aborted before the customer authorized the request.
* A transaction that fails for some non-merchant related reason (e.g., rejected by the customer, spending limits exceeded, etc.).

| tid          | sub_id  | timestamp           | action  | type   | customer     | currency | amount | additional_amount | gross  | fee  | interchange | vat  | taxcode | net    | merchant_id | settlement_id         |
| ------------ | ------- | ------------------- | ------- | ------ | ------------ | -------- | ------ | ----------------- | ------ | ---- | ----------- | ---- | ------- | ------ | ----------- | --------------------- |
| p54daadrsdj4 |         | 2013-09-10 12:00:00 | request |        | token:F_+z/3 | NOK      | 200.00 | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p54daadrsdj4 |         | 2013-09-10 13:00:07 | auth    | credit | token:F_+z/3 | NOK      | 200.00 | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p54daadrsdj4 |         | 2013-09-10 13:00:07 | capture | credit | token:F_+z/3 | NOK      | 200.00 | 0.00              | 200.00 | 1.80 | 0.50        | 0.00 | NO:2013 | 197.70 | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d |         | 2013-09-10 13:00:00 | request |        | token:goBlo8 | NOK      | 150.00 | 15.00             | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d |         | 2013-09-10 13:00:07 | auth    | credit | token:goBlo8 | NOK      | 150.00 | 15.00             | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d | mycapt1 | 2013-09-10 13:04:04 | capture | credit | token:goBlo8 | NOK      | 50.00  | 10.00             | 60.00  | 1.80 | 0.60        | 0.00 | NO:2013 | 57.60  | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d |         | 2013-09-10 13:18:42 | auth    | credit | token:goBlo8 | NOK      | 100.00 | 5.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d | mycapt2 | 2013-09-10 13:20:37 | capture | credit | token:goBlo8 | NOK      | 50.00  | 0.00              | 50.00  | 1.80 | 0.50        | 0.00 | NO:2013 | 47.70  | acme        | 4xrf2z-2014-11-27-342 |
| p8a7sdyfax4d |         | 2013-09-13 14:42:17 | release | credit | token:goBlo8 | NOK      | 50.00  | 5.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p9g8qrtbnews |         | 2013-09-10 15:35:00 | request |        | token:qtVXn8 | NOK      | 350.00 | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| p9g8qrtbnews |         | 2013-09-10 15:36:00 | abort   |        | token:qtVXn8 | NOK      | 350.00 | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| pa4kjhgw65yd |         | 2013-09-10 10:00:40 | request |        | token:34_szQ | NOK      | 77.00  | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |
| pa4kjhgw65yd |         | 2013-09-10 10:00:49 | fail    |        | token:34_szQ | NOK      | 77.00  | 0.00              | 0.00   | 0.00 | 0.00        | 0.00 |         | 0.00   | acme        | 4xrf2z-2014-11-27-342 |

Note that:

* Log lines are first sorted lexicographically by `tid`, and then sorted by timestamp within a transaction. Therefore the log as a whole is not sorted by timestamp.
* Within each report, lines grouped by transaction are all put in the same CSV file.
* However, a transaction may re-appear in several reports in the same ledger. E.g., if one first gets auth, then close the currently open report on the ledger, and then captures, the auth and capture will be on separate reports.
* The `amount` and `additional_amount` columns can not be summed, they should be read together with the `status` field and provide information only. The `gross`, `net`, `fee` and `interchange` fields are only set on capture, and so can be summed.
* The `sub_id` field is always set on partial captures. If it is empty, there was a single capture for the full amount.
* The `vat` field will currently always be `0.00` in Norwegian jurisdiction.
* If a transaction is aborted prior to customer response, it will be listed with status `abort`.
* If a transaction is aborted after the customer has authorized the transaction, the status will be `release`.
* If a transaction is aborted or expires after a partial amount has been captured, the remaining amount will be listed with status `release` in the log.
* `settlement_id` has the format `<6 letter settlement series code>-<date of settlement>-<settlement serial number>`. The last part (after the 4th dash) is what is used as settlement_id in the API.

When Settle gives the Merchant a callback about an available report, or accesses the `report` endpoint, the response contains:

```

```

The transaction log CSV files can then be downloaded.

NOTE

The log URIs are only valid for 30 days after accessing of the endpoint. Access the endpoint again to get updated tokens embedded in the URI that is valid for another 30 days.

In addition to the table above it contains a number of reserved columns for future use; API users should accept arbitrary data in these columns, but presently no data will be sent. For the table above, the file `myledger_23_154daad.csv` may contain:

```

```

While the second part in `myledger_23_1a4kjhg.csv` contains:

```

```

## Permission request logs[](https://developer.settle.eu/ledgers.html#permission-request-logs "Permalink to this headline")

The permission request log is very similar to the transaction log. Again the records are first grouped by the ID and then sorted by timestamp. For a ledger report, a request is first "pending", and then either "ok" or "fail". Note that "ok" means that the customer has answered the request one way or another (it may be a decline to share information), while "fail" is a general failure of the request to be answered (e.g., expiration).

| rid          | timestamp           | status  | customer     | currency | fee  | vat  | taxcode |
| ------------ | ------------------- | ------- | ------------ | -------- | ---- | ---- | ------- |
| as23rswas5sd | 2013-09-10 13:00:07 | pending | token:F_+z/3 | NOK      | 0.00 | 0.00 |         |
| as23rswas5sd | 2013-09-10 13:00:10 | ok      | token:F_+z/3 | NOK      | 2.00 | 0.50 | NO:2013 |
| a6495av89wcv | 2013-08-10 23:43:45 | pending | token:Q/3+Ys | NOK      | 0.00 | 0.00 |         |
| a6495av89wcv | 2013-08-10 23:45:10 | fail    | token:Q/3+Ys | NOK      | 1.00 | 0.25 | NO:2013 |

When Settle gives the Merchant a callback about an available report, or accesses the `report` endpoint, the response contains:

```

```

As in the earlier case, the log can potentially be split over several CSV files. In the example above, the contents of `31_5s23rsw.csv` would be:

```

```