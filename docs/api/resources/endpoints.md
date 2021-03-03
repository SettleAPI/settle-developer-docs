---
title: Endpoints
description: Endpoints
---
# Endpoints



**[/http:](https://developer.settle.eu/http-routingtable.html#cap-/http:)** | **[/last_settlement](https://developer.settle.eu/http-routingtable.html#cap-/last_settlement)** | **[/merchant](https://developer.settle.eu/http-routingtable.html#cap-/merchant)** | **[/merchant_lookup](https://developer.settle.eu/http-routingtable.html#cap-/merchant_lookup)** | **[/merchant_ssp_user](https://developer.settle.eu/http-routingtable.html#cap-/merchant_ssp_user)** | **[/oauth2](https://developer.settle.eu/http-routingtable.html#cap-/oauth2)** | **[/payment_request](https://developer.settle.eu/http-routingtable.html#cap-/payment_request)** | **[/permission_request](https://developer.settle.eu/http-routingtable.html#cap-/permission_request)** | **[/pos](https://developer.settle.eu/http-routingtable.html#cap-/pos)** | **[/sales_summary](https://developer.settle.eu/http-routingtable.html#cap-/sales_summary)** | **[/settlement](https://developer.settle.eu/http-routingtable.html#cap-/settlement)** | **[/settlement_account](https://developer.settle.eu/http-routingtable.html#cap-/settlement_account)** | **[/settlement_report](https://developer.settle.eu/http-routingtable.html#cap-/settlement_report)** | **[/shortlink](https://developer.settle.eu/http-routingtable.html#cap-/shortlink)** | **[/status_code](https://developer.settle.eu/http-routingtable.html#cap-/status_code)** | **[/user](https://developer.settle.eu/http-routingtable.html#cap-/user)**

|     |                                                                                                                                                    |     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
|     |                                                                                                                                                    |     |
|     | **/http:**                                                                                                                                         |     |
|     | [`POST http://merchant.server/callback/url`](https://developer.settle.eu/handlers.html#post-http---merchant.server-callback-url)                   |     |
|     |                                                                                                                                                    |     |
|     | **/last_settlement**                                                                                                                               |     |
|     | [`GET /last_settlement/`](https://developer.settle.eu/handlers.html#get--last_settlement-)                                                         |     |
|     |                                                                                                                                                    |     |
|     | **/merchant**                                                                                                                                      |     |
|     | [`GET /merchant/<merchant_id>/`](https://developer.settle.eu/handlers.html#get--merchant--merchant_id--)                                           |     |
|     | [`GET /merchant/<merchant_id>/logo`](https://developer.settle.eu/handlers.html#get--merchant--merchant_id--logo)                                   |     |
|     |                                                                                                                                                    |     |
|     | **/merchant_lookup**                                                                                                                               |     |
|     | [`GET /merchant_lookup/<lookup_id>/`](https://developer.settle.eu/handlers.html#get--merchant_lookup--lookup_id--)                                 |     |
|     |                                                                                                                                                    |     |
|     | **/merchant_ssp_user**                                                                                                                             |     |
|     | [`POST /merchant_ssp_user/`](https://developer.settle.eu/handlers.html#post--merchant_ssp_user-)                                                   |     |
|     | [`GET /merchant_ssp_user/<merchant_ssp_user_id>/`](https://developer.settle.eu/handlers.html#get--merchant_ssp_user--merchant_ssp_user_id--)       |     |
|     | [`DELETE /merchant_ssp_user/<merchant_ssp_user_id>/`](https://developer.settle.eu/handlers.html#delete--merchant_ssp_user--merchant_ssp_user_id--) |     |
|     |                                                                                                                                                    |     |
|     | **/oauth2**                                                                                                                                        |     |
|     | [`GET /oauth2/auth`](https://developer.settle.eu/oauth_api.html#get--oauth2-auth)                                                                  |     |
|     | [`POST /oauth2/auth`](https://developer.settle.eu/oauth_api.html#post--oauth2-auth)                                                                |     |
|     | [`POST /oauth2/post_auth/<request_id>`](https://developer.settle.eu/oauth_api.html#post--oauth2-post_auth--request_id-)                            |     |
|     | [`GET /oauth2/pre_auth`](https://developer.settle.eu/oauth_api.html#get--oauth2-pre_auth)                                                          |     |
|     | [`POST /oauth2/token`](https://developer.settle.eu/oauth_api.html#post--oauth2-token)                                                              |     |
|     |                                                                                                                                                    |     |
|     | **/payment_request**                                                                                                                               |     |
|     | [`GET /payment_request/`](https://developer.settle.eu/handlers.html#get--payment_request-)                                                         |     |
|     | [`POST /payment_request/`](https://developer.settle.eu/handlers.html#post--payment_request-)                                                       |     |
|     | [`GET /payment_request/<tid>/`](https://developer.settle.eu/handlers.html#get--payment_request--tid--)                                             |     |
|     | [`PUT /payment_request/<tid>/`](https://developer.settle.eu/handlers.html#put--payment_request--tid--)                                             |     |
|     | [`GET /payment_request/<tid>/outcome/`](https://developer.settle.eu/handlers.html#get--payment_request--tid--outcome-)                             |     |
|     |                                                                                                                                                    |     |
|     | **/permission_request**                                                                                                                            |     |
|     | [`POST /permission_request/`](https://developer.settle.eu/handlers.html#post--permission_request-)                                                 |     |
|     | [`GET /permission_request/<rid>/`](https://developer.settle.eu/handlers.html#get--permission_request--rid--)                                       |     |
|     | [`GET /permission_request/<rid>/outcome/`](https://developer.settle.eu/handlers.html#get--permission_request--rid--outcome-)                       |     |
|     |                                                                                                                                                    |     |
|     | **/pos**                                                                                                                                           |     |
|     | [`GET /pos/`](https://developer.settle.eu/handlers.html#get--pos-)                                                                                 |     |
|     | [`POST /pos/`](https://developer.settle.eu/handlers.html#post--pos-)                                                                               |     |
|     | [`GET /pos/<pos_id>/`](https://developer.settle.eu/handlers.html#get--pos--pos_id--)                                                               |     |
|     | [`PUT /pos/<pos_id>/`](https://developer.settle.eu/handlers.html#put--pos--pos_id--)                                                               |     |
|     | [`DELETE /pos/<pos_id>/`](https://developer.settle.eu/handlers.html#delete--pos--pos_id--)                                                         |     |
|     |                                                                                                                                                    |     |
|     | **/sales_summary**                                                                                                                                 |     |
|     | [`GET /sales_summary/`](https://developer.settle.eu/handlers.html#get--sales_summary-)                                                             |     |
|     |                                                                                                                                                    |     |
|     | **/settlement**                                                                                                                                    |     |
|     | [`GET /settlement/`](https://developer.settle.eu/handlers.html#get--settlement-)                                                                   |     |
|     | [`GET /settlement/<settlement_id>/`](https://developer.settle.eu/handlers.html#get--settlement--settlement_id--)                                   |     |
|     |                                                                                                                                                    |     |
|     | **/settlement_account**                                                                                                                            |     |
|     | [`GET /settlement_account/<settlement_account_id>/`](https://developer.settle.eu/handlers.html#get--settlement_account--settlement_account_id--)   |     |
|     | [`PUT /settlement_account/<settlement_account_id>/`](https://developer.settle.eu/handlers.html#put--settlement_account--settlement_account_id--)   |     |
|     |                                                                                                                                                    |     |
|     | **/settlement_report**                                                                                                                             |     |
|     | [`GET /settlement_report/`](https://developer.settle.eu/handlers.html#get--settlement_report-)                                                     |     |
|     |                                                                                                                                                    |     |
|     | **/shortlink**                                                                                                                                     |     |
|     | [`GET /shortlink/`](https://developer.settle.eu/handlers.html#get--shortlink-)                                                                     |     |
|     | [`POST /shortlink/`](https://developer.settle.eu/handlers.html#post--shortlink-)                                                                   |     |
|     | [`GET /shortlink/<shortlink_id>/`](https://developer.settle.eu/handlers.html#get--shortlink--shortlink_id--)                                       |     |
|     | [`PUT /shortlink/<shortlink_id>/`](https://developer.settle.eu/handlers.html#put--shortlink--shortlink_id--)                                       |     |
|     | [`DELETE /shortlink/<shortlink_id>/`](https://developer.settle.eu/handlers.html#delete--shortlink--shortlink_id--)                                 |     |
|     |                                                                                                                                                    |     |
|     | **/status_code**                                                                                                                                   |     |
|     | [`GET /status_code/`](https://developer.settle.eu/handlers.html#get--status_code-)                                                                 |     |
|     | [`GET /status_code/<value>/`](https://developer.settle.eu/handlers.html#get--status_code--value--)                                                 |     |
|     |                                                                                                                                                    |     |
|     | **/user**                                                                                                                                          |     |
|     | [`POST /user/`](https://developer.settle.eu/handlers.html#post--user-)                                                                             |     |
|     | [`GET /user/<user_id>/`](https://developer.settle.eu/handlers.html#get--user--user_id--)                                                           |     |
|     | [`PUT /user/<user_id>/`](https://developer.settle.eu/handlers.html#put--user--user_id--)                                                           |     |
|     | [`DELETE /user/<user_id>/`](https://developer.settle.eu/handlers.html#delete--user--user_id--)                                                     |     |