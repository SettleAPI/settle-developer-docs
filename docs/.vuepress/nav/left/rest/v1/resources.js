// Import Merchant menus
const {
  merchant_apiKeys,
  merchant_balance,
  merchant_payment_request,
  merchant_payment_request_outcome,
  merchant_payment_send,
  merchant_payment_send_outcome,
  merchant_pos,
  merchant_profile,
  merchant_settlement_latest,
  merchant_settlement_report,
  merchant_shortlink,
  merchant_statusCodes,
  merchant_permissions_request,
  merchant_permissions_request_outcome
} = require('./reference/merchant.js');

// Define Merchant Group
function merchantGroup() {
  return {
    title: 'Merchant', // required
    collapsable: false,
    sidebarDepth: 0,
    children: [
      merchant_apiKeys,
      merchant_balance,
      merchant_payment_request,
      merchant_payment_request_outcome,
      merchant_payment_send,
      merchant_payment_send_outcome,
      merchant_pos,
      merchant_profile,
      merchant_settlement_latest,
      merchant_settlement_report,
      merchant_shortlink,
      merchant_statusCodes,
      merchant_permissions_request,
      merchant_permissions_request_outcome,
    ],
    initialOpenGroupIndex: -1,
  };
}

// Merge sidebar-groups together
const sidebars = [
  // Merchant Group
  merchantGroup(),
];

module.exports = {
  title: 'REST Resources', // required
  collapsable: false, // optional, defaults to true
  children: sidebars,
};
