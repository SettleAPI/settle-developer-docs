---
title: Callbacks
description: Callbacks
---
# Callbacks

API clients can associate some resources with a `callback_uri` in order to enable asynchronous communication between the client and server. At certain events Settle can trigger a callback to specified `callback_uri`. E.g. if the callback URI is an HTTP URI, an HTTP POST request will be made to the URI. See *[Callbacks](https://developer.settle.eu/callbacks.html)* for a more thorough descriptions of callbacks.