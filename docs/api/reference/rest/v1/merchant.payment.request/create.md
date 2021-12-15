---
layout: SpecialLayout
title: merchant.payment.request.create
description: Endpoint for requesting payments.
api: merchant
schema: merchant.payment.request
operationId: merchant.payment.request.create
operation: post
method: create
authLevel: SECRET
authRoles: KEY
---

A payment request goes through several stages. After being registered, the customer can either reject or authorize. An authorization is valid for 3 days, but can be reauthorized before it expires to be valid for 3 new days. Once authorized, it can be captured to be included in the next settlement.
