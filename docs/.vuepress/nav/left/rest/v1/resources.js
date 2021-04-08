// Import Merchant menus
const {
    merchant_balance,
    merchant_logo,
    merchant_payment_request,
    merchant_payment_request_outcome,
    merchant_payment_send,
    merchant_payment_send_outcome,
    merchant_pos,
    merchant_profile,
    merchant_sales_summary,
    merchant_settlement,
    merchant_settlement_account,
    merchant_settlement_latest,
    merchant_settlement_report,
    merchant_shortlink,
    merchant_ssp_users,
    merchant_statusCodes,
    merchant_users,
} = require('./reference/merchant.js');

// Import OAuth2 menus
const {
    oauth2,
    oauth2_auth_code,
    oauth2_auth_request,
    oauth2_auth_token,
    oauth2_error,
    oauth2_qrImage,
    oauth2_user_info,
} = require('./reference/oauth2.js');

// Import Users menus
const {
    users_permissions,
    users_permissions_request,
    users_permissions_request_outcome,
    users_permissions_scope,
} = require('./reference/users.js');


// Define Merchant Group
function merchantGroup() {
    return {
        title: 'Merchant', // required
        collapsable: false,
        sidebarDepth: 0,
        children: [
            merchant_balance,
            merchant_logo,
            merchant_payment_request,
            merchant_payment_request_outcome,
            merchant_payment_send,
            merchant_payment_send_outcome,
            merchant_pos,
            merchant_profile,
            merchant_sales_summary,
            merchant_settlement,
            merchant_settlement_account,
            merchant_settlement_latest,
            merchant_settlement_report,
            merchant_shortlink,
            merchant_ssp_users,
            merchant_statusCodes,
            merchant_users,
        ],
        initialOpenGroupIndex: -1
    }
}

// Define OAuth2 Group
function OAuth2Group() {
    return {
        title: 'OAuth2', // required
        collapsable: false,
        sidebarDepth: 0,
        children: [
            oauth2,
            oauth2_auth_code,
            oauth2_auth_request,
            oauth2_auth_token,
            oauth2_error,
            oauth2_qrImage,
            oauth2_user_info,
        ],
        initialOpenGroupIndex: -1
    }
}

// Define Permission Request Group
function permissionRequestGroup() {
    return {
        title: 'Permission Requests', // required
        collapsable: false,
        sidebarDepth: 0,
        children: [
            users_permissions,
            users_permissions_request,
            users_permissions_request_outcome,
            users_permissions_scope,
        ],
        initialOpenGroupIndex: -1
    }
}


// Merge sidebar-groups together
const sidebars = [
    // Merchant Group
    merchantGroup(),
    // OAuth2 Group
    OAuth2Group(),
    // Users
    permissionRequestGroup()
]


module.exports = {
    title: 'REST Resources', // required
    collapsable: false, // optional, defaults to true
    children: sidebars,
}