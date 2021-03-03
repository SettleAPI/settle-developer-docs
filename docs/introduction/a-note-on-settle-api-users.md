---
title: A Note on Settle API Users
description: A Note on Settle API Users
---
# A Note on Settle API Users

All requests to the Settle API must include an X-Auka-User header.† API Users are assigned and created by the Merchant through the Self Service Portal, or by the Integrator using the user endpoint. Each API User has an ID unique to that Merchant and is assigned a shared secret and/or a RSA public key that is used for authentication. A typical use case (and the one we recommend) is assigning separate API Users for each POS in the shop. In another case, the Merchant owns and administrates a central server that acts as a proxy for all POSes: in that case, only one API User is created, and its credentials are used by all POSes when making payment requests. In a third case, an Integrator controls the single proxy server; in that case the Integrator uses the X-Auka-Integrator header in place of an X-Auka-User header. It is up to the Merchant (or, as the case may be, the Integrator) how to set this up.

† Except when an Integrator is acting as a proxy on behalf of a Merchant client. In that case, the X-Auka-Integrator header is used instead. See above.