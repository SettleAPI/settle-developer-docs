---
title: Permission Requests and OAuth
description: Permission Requests and OAuth
---
# Permission Requests and OAuth

A user can authorize a merchant to access various endpoints, typically shipping address or phone number. To enable this in the general case, we use OAuth 2.0. The Settle API also has methods to support this.

## OAuth terms and Settle[](https://developer.settle.eu/oauth.html#oauth-terms-and-settle "Permalink to this headline")

The end user or customer is the resource owner, as the resource is typically user data or endpoints for doing something on the users behalf. The authorization server is Settle, who is responsible for checking credentials and handing out tokens after the resource owner authorizes access. The Merchant is the client, who consumes the resource.

## Application registration[](https://developer.settle.eu/oauth.html#application-registration "Permalink to this headline")

The Merchant is implicitly a confidential OAuth client for the purposes of Settle API calls, with their Settle merchant_id as the client id. There is no need to register redirect URLs for Settle API usage as the Merchant makes all the calls directly.

If the Merchant desires to use standard OAuth with redirects, it must register an application in Settle API or in self service portal. This is equivalent to registering a client in OAuth language. This returns a client id and client secret. Those values can be used to set up standard OAuth client libraries, as they are separate from the regular merchant id and authentication.

## OAuth authorization code grant[](https://developer.settle.eu/oauth.html#oauth-authorization-code-grant "Permalink to this headline")

When we use regular OAuth, the authorization code grant flow is the default:

* Client redirects user to authorization server endpoint, where user identifies and approves authorization. <https://ssp.settle.eu/oauth/auth> (or similar)
* Authorization server redirects user back to client redirect_uri, with authorization code
* Client exchanges authorization code for access token (<https://ssp.settle.eu/oauth/token>) using client credentials
* Client accesses protected resource with access token

## Settle API permission request[](https://developer.settle.eu/oauth.html#settle-api-permission-request "Permalink to this headline")

In the Settle API, there is an endpoint for requesting authorization [`POST /permission_request/`](https://developer.settle.eu/handlers.html#post--permission_request- "POST /permission_request/"), a direct callback with the access token, and an outcome endpoint [`GET /permission_request/<rid>/outcome/`](https://developer.settle.eu/handlers.html#get--permission_request--rid--outcome- "GET /permission_request/\<rid>/outcome/") for checking the outcome later. As the resource owner does not have to carry tokens, there is no checking of `redirect_uri` and we don't need the authorization code.

## Making payment requests[](https://developer.settle.eu/oauth.html#making-payment-requests "Permalink to this headline")

The access token can be used in the `customer` field when making payment requests at [`POST /payment_request/`](https://developer.settle.eu/handlers.html#post--payment_request- "POST /payment_request/").

## Scope values[](https://developer.settle.eu/oauth.html#scope-values "Permalink to this headline")

If not requesting any scopes, the result is an access token that can be used as customer field for a payment request or a permission request. For more info on scopes, check out the specification for the protocol: <http://openid.net/specs/openid-connect-basic-1_0-28.html#scopes>

* openid

  To make a OpenID Connect request for login. NOTE: the `openid` scope is also required in order to access the `address`, `phone`, and `email` scopes, in line with the OAuth2 spec.
* address

  Included in `GET /oauth2/v1/userinfo`
* phone

  Included in `GET /oauth2/v1/userinfo`
* email

  Included in `GET /oauth2/v1/userinfo`
* profile

  Included in `GET /oauth2/v1/userinfo`. Currently this corresponds the claims \['name']. More may be added in the future. See the specification for the openid protocol for more info on this scope. <http://openid.net/specs/openid-connect-basic-1_0-28.html#scopes>

For Norwegian `fodselsnummer`, `shipping_address`, and specific personal id schemes like bankid, the endpoint URI is a little different.

* shipping_address

  `GET /oauth2/v1/scope/shipping_address`
* verified fodselsnummer for user, listing proofs for jurisdiction

  `GET /oauth2/v1/scope/personal_id/no/id`
* verified fodselsnummer from `BankID`, single entry in proof list

  `GET /oauth2/v1/scope/personal_id/no/bankid`

## OpenID ID token[](https://developer.settle.eu/oauth.html#openid-id-token "Permalink to this headline")

When using OpenID connect scopes, an id token is returned alongside the access token.

An ID Token is a cryptographically-signed JSON object encoded in base 64, represented as a [JSON Web Token (JWT)](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token).

## Inspiration/background[](https://developer.settle.eu/oauth.html#inspiration-background "Permalink to this headline")

<http://tools.ietf.org/html/rfc6749>

<http://openid.net/specs/openid-connect-basic-1_0.html>

<https://developers.google.com/accounts/docs/OAuth2Login>

<https://developer.paypal.com/webapps/developer/docs/integration/direct/log-in-with-paypal/detailed/>