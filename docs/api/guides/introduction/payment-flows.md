---
title: Payment flows
description: Payment flows
---
# Payment flows

The Settle Merchant API supports various ways of creating payment flows. Please note that these flows can also be tested with the api-utility.settle.eu.

## Phone number flow

![Phone number sequence diagram](/media/phonenumber.png "Phone number sequence diagram")

Send payment request directly to the customer device when POS have access to customer data (or can easily accept phone number as input from customer).

1. POS creates local order with unique id.
2. POS creates payment request for customer phone number.
3. Settle pushes payment request to the customer.
4. Settle calls back to POS with outcome.

**Example:** Vending machine, web-shop, recurring payments

## Paymentlink flow

![Paymentlink sequence diagram](/media/paymentlink.png "Paymentlink sequence diagram")

Create payment request to be claimed by user later.

1. POS creates local order with unique id.
2. POS creates payment request.
3. POS creates unique Paymentlink QR code.
4. Customer scans QR code.
5. Settle pushes payment request to the customer.
6. Settle calls back to POS with outcome.

**Example:** Modern cash registers, mobile pos, card terminals, web-shops.

### Shortlink (reusable) flow

![Shortlink (reusable) sequence diagram](/media/shortlink-reusable-.png "Shortlink (reusable) sequence diagram")

Payment request sent when a user interacts with a reusable Shortlink QR code that was created during POS setup.

1. Setup: POS creates Shortlink.
2. Setup: POS creates Shortlink QR code*.
3. Customer scans reusable Shortlink QR code.
4. Settle calls back to POS with customer identifier.
5. POS creates payment request for customer identifier.
6. Settle pushes payment request to the customer.
7. Settle calls back to POS with outcome.

\* When a payment request have been resolved (accepted, rejected, or cancelled) the Shortlink can be reused.

**Example:** POS device without customer facing display, requiring pre-printed QR code.

### Shortlink (single use) flow

![Shortlink (single use) sequence diagram](/media/shortlink-single-use-.png "Shortlink (single use) sequence diagram")

QR created when POS device is turned on or registered.
The local id is passed along by Settle and can be picked up by centralised middleware to understand what POS device and purchase the request originated from.

Customer scan the QR code, claiming the last Payment Request associated with the Shortlink. When PR have been successful, rejected, or cancelled, the SL is freed up and ready to be associated with a new Payment Request.

**Example:** Card terminals.