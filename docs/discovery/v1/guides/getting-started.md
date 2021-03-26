---
title: Getting Started
description: Get started with the Settle Discovery API.
---

# Introduction

The Discovery API provides a list of Settle APIs for retrieving a machine-readable "Discovery document" metadata for each API.

This document is intended for developers who want to write client libraries, IDE plugins, and other tools for interacting with Settle APIs.

## Discovery Service Background

### Concepts

The Settle APIs Discovery Service is built upon two basic concepts:

- **APIs Directory:** A list of all APIs that are supported by the APIs Discovery Service. Each directory entry shows details about a supported API, including its name, a brief description of what it does, and a documentation link. An API can have multiple Directory entries, one for each of its supported versions.
- **Discovery document:** A machine-readable description of a particular API. The Discovery document describes the surface for a particular version of an API. The document provides details on how to access the various methods of each API via RESTful HTTP calls. A Discovery document includes descriptions of the data and methods associated with the API, as well as information about available OAuth scopes, and descriptions of schemas, methods, parameters and available parameter values.

### Data model

A resource is an individual data entity with a unique identifier. The Settle APIs Discovery Service operates on two types of resources, based on the above concepts.

**APIs Directory List:** A list of APIs

Each directory entry contains an API name/version pair with the following information:
