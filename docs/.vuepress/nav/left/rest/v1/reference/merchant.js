function merchant_apiKeys() {
  return {
    title: 'merchant.apiKeys', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.apiKeys/', 'Overview'],
      ['/api/reference/rest/v1/merchant.apiKeys/create', 'create'],
      ['/api/reference/rest/v1/merchant.apiKeys/list', 'list'],
      ['/api/reference/rest/v1/merchant.apiKeys/get', 'get'],
      ['/api/reference/rest/v1/merchant.apiKeys/update', 'update'],
      ['/api/reference/rest/v1/merchant.apiKeys/delete', 'delete'],
    ],
  };
}

function merchant_balance() {
  return {
    title: 'merchant.balance', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.balance/', 'Overview'],
      ['/api/reference/rest/v1/merchant.balance/get', 'get'],
    ],
  };
}

function merchant_payment_request() {
  return {
    title: 'merchant.payment.request', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.request/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.request/create', 'create'],
      ['/api/reference/rest/v1/merchant.payment.request/list', 'list'],
      ['/api/reference/rest/v1/merchant.payment.request/update', 'update'],
      ['/api/reference/rest/v1/merchant.payment.request/get', 'get'],
      // ['/api/reference/rest/v1/merchant.paymentRequest/getOutcome', 'getOutcome'],
    ],
  };
}

function merchant_payment_request_outcome() {
  return {
    title: 'merchant.payment.request.outcome', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.request.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.request.outcome/get', 'get'],
    ],
  };
}

function merchant_payment_send() {
  return {
    title: 'merchant.payment.send', // required
    // path: '/api/reference/rest/v1/merchant.paymentsend/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.send/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.send/create', 'create'],
    ],
  };
}

function merchant_payment_send_outcome() {
  return {
    title: 'merchant.payment.send.outcome', // required
    // path: '/api/reference/rest/v1/merchant.paymentsend/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.send.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.send.outcome/get', 'get'],
    ],
  };
}

function merchant_pos() {
  return {
    title: 'merchant.pos', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.pos/', 'Overview'],
      ['/api/reference/rest/v1/merchant.pos/create', 'create'],
      ['/api/reference/rest/v1/merchant.pos/list', 'list'],
      ['/api/reference/rest/v1/merchant.pos/get', 'get'],
      ['/api/reference/rest/v1/merchant.pos/update', 'update'],
      ['/api/reference/rest/v1/merchant.pos/delete', 'delete'],
    ],
  };
}

function merchant_profile() {
  return {
    title: 'merchant.profile', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.profile/', 'Overview'],
      ['/api/reference/rest/v1/merchant.profile/get', 'get'],
      ['/api/reference/rest/v1/merchant.profile/lookup', 'lookup'],
    ],
  };
}

function merchant_settlement_latest() {
  return {
    title: 'merchant.settlement.latest', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement.latest/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement.latest/get', 'get'],
    ],
  };
}

function merchant_settlement_report() {
  return {
    title: 'merchant.settlement.report', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement.report/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement.report/get', 'get'],
    ],
  };
}

function merchant_shortlink() {
  return {
    title: 'merchant.shortlink', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.shortlink/', 'Overview'],
      ['/api/reference/rest/v1/merchant.shortlink/create', 'create'],
      ['/api/reference/rest/v1/merchant.shortlink/list', 'list'],
      ['/api/reference/rest/v1/merchant.shortlink/get', 'get'],
      ['/api/reference/rest/v1/merchant.shortlink/update', 'update'],
      ['/api/reference/rest/v1/merchant.shortlink/delete', 'delete'],
    ],
  };
}

function merchant_statusCodes() {
  return {
    title: 'merchant.statusCodes', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.statusCodes/', 'Overview'],
      ['/api/reference/rest/v1/merchant.statusCodes/list', 'list'],
      ['/api/reference/rest/v1/merchant.statusCodes/get', 'get'],
    ],
  };
}

function merchant_permissions_request() {
  return {
    title: 'merchant.permissions.request', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.permissions.request/', 'Overview'],
      ['/api/reference/rest/v1/merchant.permissions.request/create', 'create'],
      ['/api/reference/rest/v1/merchant.permissions.request/get', 'get'],
    ],
  };
}

function merchant_permissions_request_outcome() {
  return {
    title: 'merchant.permissions.request.outcome', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.permissions.request.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.permissions.request.outcome/get', 'get'],
    ],
  };
}

module.exports = {
  merchant_apiKeys: merchant_apiKeys(),
  merchant_balance: merchant_balance(),
  merchant_payment_request: merchant_payment_request(),
  merchant_payment_request_outcome: merchant_payment_request_outcome(),
  merchant_payment_send: merchant_payment_send(),
  merchant_payment_send_outcome: merchant_payment_send_outcome(),
  merchant_pos: merchant_pos(),
  merchant_profile: merchant_profile(),
  merchant_settlement_latest: merchant_settlement_latest(),
  merchant_settlement_report: merchant_settlement_report(),
  merchant_shortlink: merchant_shortlink(),
  merchant_statusCodes: merchant_statusCodes(),
  merchant_permissions_request: merchant_permissions_request(),
  merchant_permissions_request_outcome: merchant_permissions_request_outcome(),
};
