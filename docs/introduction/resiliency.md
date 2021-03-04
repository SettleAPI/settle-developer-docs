---
title: A resilient payment system
description: A resilient payment system
---
# A resilient payment system

The hardware and database architecture of Settle has some characteristics that it is very important for API client implementors to be aware of. The advantage of this architecture is that Settle is very resilient against the failure of individual servers or network connections. The flip side of the coin is that the return of a HTTP 5xx response code (most often 500 or 503) is more common than with more traditional system that runs on only a few machines which are assumed to not fail.

A 5xx error normally does not indicate that something is wrong. It simply indicates that the API client should try again. This behaviour is fully expected, and the API is carefully designed to make sure retrying works in all cases.