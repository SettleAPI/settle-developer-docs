function oauth2() {
    return {
        title: 'oauth2', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2/', 'Overview']
        ],
    };
}

function oauth2_auth_code() {
    return {
        title: 'oauth2.auth.code', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.auth.code/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.auth.code/create', 'create'],
            ['/api/reference/rest/v1/oauth2.auth.code/get', 'get'],
        ],
    };
}

function oauth2_auth_request() {
    return {
        title: 'oauth2.auth.request', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.auth.request/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.auth.request/create', 'create'],
            ['/api/reference/rest/v1/oauth2.auth.request/get', 'get'],
        ],
    };
}

function oauth2_auth_token() {
    return {
        title: 'oauth2.auth.token', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.auth.token/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.auth.token/create', 'create'],
        ],
    };
}

function oauth2_error() {
    return {
        title: 'oauth2.error', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.error/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.error/get', 'get'],
        ],
    };
}

function oauth2_qrImage() {
    return {
        title: 'oauth2.qrImage', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.qrImage/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.qrImage/create', 'create'],
        ],
    };
}

function oauth2_user_info() {
    return {
        title: 'oauth2.user.info', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/oauth2.user.info/', 'Overview'],
            ['/api/reference/rest/v1/oauth2.user.info/get', 'get'],
        ],
    };
}

module.exports = {
    oauth2: oauth2(),
    oauth2_auth_code: oauth2_auth_code(),
    oauth2_auth_request: oauth2_auth_request(),
    oauth2_auth_token: oauth2_auth_token(),
    oauth2_error: oauth2_error(),
    oauth2_qrImage: oauth2_qrImage(),
    oauth2_user_info: oauth2_user_info(),
};