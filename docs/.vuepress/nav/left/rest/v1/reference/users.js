function users_permissions() {
    return {
        title: 'users.permissions', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/users.permissions/', 'Overview'],
            ['/api/reference/rest/v1/users.permissions/get', 'get'],
            ['/api/reference/rest/v1/users.permissions/update', 'update'],
        ],
    };
}

function users_permissions_request() {
    return {
        title: 'users.permissions.request', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/users.permissions.request/', 'Overview'],
            ['/api/reference/rest/v1/users.permissions.request/create', 'create'],
            ['/api/reference/rest/v1/users.permissions.request/get', 'get'],
        ],
    };
}

function users_permissions_request_outcome() {
    return {
        title: 'users.permissions.request.outcome', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/users.permissions.request.outcome/', 'Overview'],
            ['/api/reference/rest/v1/users.permissions.request.outcome/get', 'get'],
        ],
    };
}

function users_permissions_scope() {
    return {
        title: 'users.permissions.scope', // required
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/reference/rest/v1/users.permissions.scope/', 'Overview'],
            ['/api/reference/rest/v1/users.permissions.scope/get', 'get'],
            ['/api/reference/rest/v1/users.permissions.scope/update', 'update'],
        ],
    };
}

module.exports = {
    users_permissions: users_permissions(),
    users_permissions_request: users_permissions_request(),
    users_permissions_request_outcome: users_permissions_request_outcome(),
    users_permissions_scope: users_permissions_scope(),
};