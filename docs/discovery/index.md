---
title: Settles API Discovery Service
description: Programmatically read metadata about Settle APIs.
---

## Settles API Discovery Service

Use the Settle API Discovery Service to build client libraries, IDE plugins, and other tools that interact with Settle APIs. The Discovery API provides a list of Settle APIs and a machine-readable **"Discovery Document"** for each API. Features of the Discovery API:

- A **directory** of supported APIs schemas based on [JSON Schema](https://json-schema.org/).
- A machine-readable **"Discovery Document"** for each of the supported APIs. Each document contains:
  - A list of API methods and available parameters for each method.
  - A list of available OAuth 2.0 scopes.
  - Inline documentation of methods, parameters, and available parameter values.

## Who is using it?

### Settle has built several tools using the service:

- [Settle API Client Libraries](): Client libraries in various languages for accessing Settle APIs.
- [Settle APIs Explorer](): An interactive web-based tool for exploring Settle APIs.
