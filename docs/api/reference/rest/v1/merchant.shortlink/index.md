---
layout: ResourceOverview
title: merchant.shortlink
description: Overview
schema: merchant.shortlink
api: merchant
---

## Shortlink Scan Handler

When user scans, Settle sends scan id and argstring, and can receive text and uri which can be transported back to the app. Uri will be opened in a web view inside the app if registered in list of trusted domains.

<div class="md-api_reference_FiraCode">
  <div class="md-api_reference_request_heading">
    <p>
      <span class="badge post">POST</span> http://merchant.server/callback/url
    </p>
  </div>
</div>

<h2 id="schema">
  <a href="#schema" class="header-anchor">#</a> Schema
</h2>

<div class="md-api_reference_FiraCode">

### id

- Type: `string`
- Required: `true`

The scan token ID that can be used as recipient for payment and permission requests. Expires in one day.

### argstring

- Type: `string`
- Required: `false`
- Default: `null`

The string that was appended to the shortlink value in the QR code that was scanned.

</div>

## Trusted Domains

Because of security considerations when opening external URIs inside the Settle App, URIs or domains that will be opened in the app needs to be preapproved by Settle.

There are currently no API endpoints for managing trusted domains, please contact Settle support to register domain that should be visible inside app.

## Shortlink Management

To be able to receive scans, one must first register a shortlink.
