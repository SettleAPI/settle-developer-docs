---
layout: ResourceOverview
title: merchant.statusCodes
description: Overview
schema: merchant.statusCodes
api: merchant
---

## Status Code

Some resources, such as the outcome resources (for payment request and permission request), have a status code field in the response body. The status_code resource lists and describes all possible status codes. Making a `GET /status_code/` request yields a list of status codes with corresponding names and descriptions. Making a `GET /status_code/{value}/` request (substituting `{value}` for a status code integer) yields the information for a particular status code.
