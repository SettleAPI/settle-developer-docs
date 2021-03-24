# Create POS

### HTTP Requests

<div class="md-api_reference_FiraCode">

<div class="md-api_reference_heading request">

#### <span class="badge post">POST</span> /pos/

</div>

Create POS resource.

##### Authorization Scopes

* Required Auth Level: [SECRET](/guides/authentication/#authentication-using-secret)
* Authorized Roles: All


##### Base URIs

* Sandbox: <span class="url">https://api.sandbox.settle.eu</span>
* Production: <span class="url">https://api.settle.eu</span>

##### Response Headers

* Location: URI to POS resource <span class="noLink">[<span class="badge get small">GET</span> /merchant/v1/pos/`{ pos_id }`/](/api/reference/merchant/pos/get/)</span>

##### Status Codes

* **201** --> POS created
* **404** --> Bad request, validation error

</div>

#### Query Parameters

<div class="md-api_reference_FiraCode">

##### currency

* Type: [`Currency`](/api/resources/types/#currency-2)
* Required: `true`
* Default: `null`
* Length: == 3
* Data: New or existing on update

ISO 4217 currency code. See [Currency](/api/resources/types/#currency-2).

</div>