---
layout: ResourceOverview
title: merchant.users
description: Overview
schema: merchant.users
api: merchant
---

## Mercant Users

In order to gain access to the [Merchant API](/api/reference/rest/v1/) a client must authenticate itself using the ID and the secret/public key of an existing user. This means that the first user for a merchant must be created in the Self Service Portal or by an integrator on behalf of the merchant.

Each user is created for a specific merchant, which ID is given by the value of the **X-Settle-Merchant** header when making a [ `merchant.users.create` ](/api/reference/rest/v1/merchant.users/create/) request. A user can only interact with the API on behalf of the merchant which it was created for. The user ID is chosen on create and is has to be unique for the parent Merchant.
