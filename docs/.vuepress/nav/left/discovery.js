function get_sidebar_discovery_home() {
    return ['/discovery/', 'Overview'];
}

function get_sidebar_discovery_guides() {
    return {
        title: 'Guides', // required
        path: '/discovery/v1/guides/getting-started', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0, // optional, defaults to 1
        children: [
            ['/discovery/v1/guides/getting-started', 'Introduction'],
            // get_sidebar_reference_payment_request(),
            // getReferencePosSidebar(),
        ],
    };
}

function get_sidebar_discovery_reference() {
    return {
        title: 'API Reference', // required
        path: '/discovery/v1/reference/', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0, // optional, defaults to 1
        children: [
            ['/discovery/v1/reference/', 'Overview'],
            {
                title: 'Discovery Document', // required
                path: '/discovery/v1/reference/apis/', // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 0, // optional, defaults to 1
                children: [
                    ['/discovery/v1/reference/apis/', 'Overview'],
                    ['/discovery/v1/reference/apis/list', 'list'],
                ],
            },
        ],
    };
}