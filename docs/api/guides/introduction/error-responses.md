---
title: Error Responses
description: Error Responses
---
# Error Responses

In general the error response body consists of an `error_type`, an `error_description` and some `error_details`. The example below shows the response for validation errors.

```http
  POST /test/ HTTP/1.1
  HOST: callbackserver.test
  Content-Type: application/vnd.mcash.api.merchant.v1+json

  {"amount": "-42"}
```

```http
  HTTP/1.1 400 Bad Request
  Content-Type: application/vnd.mcash.api.merchant.v1+json

  {
    "error_type": "validation_error",
    "error_description": "Your request caused validation errors. Please check your data.",
    "error_details":{"amount": ["Value must be larger than 0"]}
  }
```

The HTTP response code can also hold useful information about the error that occurred, in addition to these fields:

|                                                                                                                           |                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **error_type** : String : optional : default=null                                                                         | Type of error.                                                                                   |
| **error_description** : String : optional : default=null                                                                  | Human readable description.                                                                      |
| **error_details** : [Json](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-9) : optional : default=null | Keyed JSON Object structure containing detailed error information, if present. Otherwise `null`. |