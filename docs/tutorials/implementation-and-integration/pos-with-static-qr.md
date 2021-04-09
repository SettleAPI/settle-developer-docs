---
title: POS with static QR
description: Implement a POS with static QR
---
# Implement a POS with static QR

When using a POS with a static QR, the QR code can be scanned before or after the POS is ready for submitting the payment request. The POS should submit a payment request ([`POST /payment_request/`](https://developer.settle.eu/handlers.html#post--payment_request- "POST /payment_request/")) passing in the QR "shortlink ID" or QR serial number as the `customer`. Settle will then match with the customer who scans the QR.

The default behaviour is to match the last scan in a 60 second timeframe before the scan happens, and to keep listening for scans until the payment request is either picked up, or aborted.

If feasible in the POS code, one will get optimal results if the POS also passes `max_scan_age`. This should be set to the number of seconds since the previous payment done at the same POS (**with any payment instruments, not only Settle!!**); this will naturally cause the scan to match the "current customer" in line at the POS, but not somebody who scanned earlier. In the example below, 341

If the POS does not know the time that has passed since the previous purchase, it is better to let Settle control `max_scan_age` and not set it.

Example data to [`POST /payment_request/`](https://developer.settle.eu/handlers.html#post--payment_request- "POST /payment_request/"):

```json
{
    "customer": "shortlink_sn:0123456789012",
    "max_scan_age": 341,
}
```

## Checklist

* Pass `shortlink_sn:` or `shortlink_id:` as `customer`
* If the customer changes his/her mind and wants another payment method, the POS should abort the payment request (by calling [`PUT /payment_request/<tid>/`](https://developer.settle.eu/handlers.html#put--payment_request--tid-- "PUT /payment_request/\<tid>/")).
* If the POS knows the time of the previous payment, pass the number of seconds as `max_scan_age`. Otherwise pass nothing.
* Previous purchase in previous point means *any* previous purchase, not only Settle payments.

::: tip NOTE
If you receive printed QR codes from Settle with serial number, you may pass e.g. `shortlink_sn:0123456789012`. If you generate QR codes yourself using [`POST /shortlink/`](https://developer.settle.eu/handlers.html#post--shortlink- "POST /shortlink/"), pass e.g. `shortlink_id:3XfZA`.
:::