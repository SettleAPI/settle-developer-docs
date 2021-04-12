---
title: Media Type
description: Media Type
---
# Media Type

This documentation defines the vendor-specific media type

> application/vnd.mcash.api.merchant.v1+json

We also use

> application/vnd.mcash.api.merchant.v1+csv

for transaction logs, and

> image/png

for attachments. In general, the form is

> application/vnd.mcash.\[attachment-type].\[version]+\[format]

Clients are expected to include media type in the Accept header listing types they understand; the Settle server responds with the media type in the Content-Type header.