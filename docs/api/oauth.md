---
title: OAuth API
description: OAuth API
---
# OAuth API



## Auth[](https://developer.settle.eu/oauth_api.html#auth "Permalink to this headline")

Authorization code request

* `POST /oauth2/auth`[](https://developer.settle.eu/oauth_api.html#post--oauth2-auth "Permalink to this definition")

  *Required auth level: OPEN*

  *Authorized roles: ALL*

  Check that secret was entered correctly.
* `GET /oauth2/auth`[](https://developer.settle.eu/oauth_api.html#get--oauth2-auth "Permalink to this definition")

  *Required auth level: OPEN*

  *Authorized roles: ALL*

  Authorization request

  **Request schema**

  * |                                                     |                                                                 |
    | --------------------------------------------------- | --------------------------------------------------------------- |
    | **response_type** : String : required               | Must be set to "code"                                           |
    | **client_id** : String : required                   | Client id                                                       |
    | **redirect_uri** : String : optional : default=null | Redirect URI                                                    |
    | **scope** : String : optional : default=null        | List of space delimited scopes to request authorization for     |
    | **state** : String : optional : default=null        | Used to provde CSRF protection, optional but highly recommended |

## Token[](https://developer.settle.eu/oauth_api.html#token "Permalink to this headline")

Exchange authorization code for access token

* `POST /oauth2/token`[](https://developer.settle.eu/oauth_api.html#post--oauth2-token "Permalink to this definition")

  *Required auth level: SECRET*

  *Authorized roles: ALL*

  Token exchange

  | Request Headers:  |     |
  | ----------------- | --- |
  |                   |     |
  | Response Headers: |     |
  |                   |     |

  **Request schema**

  * |                                                     |                                                                |
    | --------------------------------------------------- | -------------------------------------------------------------- |
    | **grant_type** : String : required                  | Must be set to "authorization_code"                            |
    | **code** : String : required                        | The authorization code previously received                     |
    | **redirect_uri** : String : optional : default=null | Required if the redirect was included in authorization request |
    | **client_id** : String : required                   | Client id                                                      |

  **Response schema**

  * |                                                                                                                          |                                                                                                                                                                                                                               |
    | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **access_token** : String : required                                                                                     | Access token                                                                                                                                                                                                                  |
    | **id_token** : String : optional : default=null                                                                          | A JWT that contains identity information about the user that is digitally signed by Settle. Always present for OpenID scopes. Described in *[OpenID ID token](https://developer.settle.eu/oauth.html#openid-id-token-label)*. |
    | **token_type** : String : required                                                                                       | Type of access token, at this time it will always be Bearer                                                                                                                                                                   |
    | **expires_in** : Integer : optional : default=null                                                                       | Lifetime in seconds of the access token                                                                                                                                                                                       |
    | **refresh_token** : String : optional : default=null                                                                     | Refresh token used to issue new access token after expiration                                                                                                                                                                 |
    | **scope** : String : optional : default=null                                                                             | Space-delimited list of scopes. Any of: "openid" (static id), "address" (user preferred address), "profile" (name), "phone", "email", "shipping_address", "fodselsnummer"                                                     |
    | **currency** : [Currency](https://developer.settle.eu/types.html#wtforms-fielddoc-callbacks-0) : optional : default=null | Currency for fee                                                                                                                                                                                                              |
    | **fee** : [Money](https://developer.settle.eu/types.html#wtforms-fielddoc-oauth_api-0) : optional : default=null         | Authorization fee to be deducted from settlement                                                                                                                                                                              |
    | **report_id** : String : optional : default=null                                                                         | The Report that this authorization is included in                                                                                                                                                                             |
    | **state** : String : optional : default=null                                                                             | State parameter from authorization request                                                                                                                                                                                    |

## Fatal error[](https://developer.settle.eu/oauth_api.html#fatal-error "Permalink to this headline")

Endpoint for errors in the OAuth request.

## Qrimage[](https://developer.settle.eu/oauth_api.html#qrimage "Permalink to this headline")

A handler that will generate a QR code image from a login cookie

The QR code is encoded again with QR specific salt to make it different from the cookie

## Authorization request[](https://developer.settle.eu/oauth_api.html#authorization-request "Permalink to this headline")

Authorization request handler

This is where client redirects to, providing required variables client_id, state and optional variables scope, response_type and redirect. Optional variables can be looked up from client info if not provided.

provider.pre_authorization_view runs oauthlib.validate_authorization_request checking the request data, before creating AuthorizationRequest in handler.

The AuthorizationRequest id can be used for QR scan and scan handling, channel messages to browser and when redirecting back to client.

* `GET /oauth2/pre_auth`[](https://developer.settle.eu/oauth_api.html#get--oauth2-pre_auth "Permalink to this definition")

  *Required auth level: TWOFACTOR*

  *Authorized roles: ALL*

  kwargs contains client credentials, matching properties of AuthorizationRequest
* `POST /oauth2/post_auth/<request_id>`[](https://developer.settle.eu/oauth_api.html#post--oauth2-post_auth--request_id- "Permalink to this definition")

  *Required auth level: TWOFACTOR*

  *Authorized roles: ALL*

  Look up authorization request from request_id and return scope and credentials to oauthlib