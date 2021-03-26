---
title: 'Discovery Document: list'
description: Retrieve the list of APIs supported at this endpoint.
---

# Discovery Document: list

{{$description}}

The `discovery.apis.list` method returns the list of all APIs supported by the Settle APIs Discovery Service. The data for each entry is a subset of the Discovery Document for that API, and the list provides a directory of supported APIs. If a specific API has multiple versions, each of the versions has its own entry in the list.

## HTTP Request

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_request_heading">

<span class="badge get">GET</span> https://api.settle.eu/discovery/v1/apis

</div>

</div>

# Request Body

Do not supply a request body with this method.

# Response

If successful, this method returns a response body with the following structure:
