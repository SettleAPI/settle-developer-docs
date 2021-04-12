function tutorial_payments() {
    return {
        title: 'Request and Send Payments', // required
        // collapsable: false,
        sidebarDepth: 0,
        children: [
            ['/api/guides/tutorials/payments/', 'Overview'],
            ['/api/guides/tutorials/payments/request', 'Request Payment'],
            ['/api/guides/tutorials/payments/send', 'Send Payment'],
        ],
        initialOpenGroupIndex: -1
    };
}

function tutorial_implementation_integration() {
    return {
        title: 'Implementation and Integration', // required
        // collapsable: false,
        sidebarDepth: 0,
        children: [
            ['/api/guides/tutorials/implementation-and-integration/', 'Overview'],
            ['/api/guides/tutorials/implementation-and-integration/ecr-solutions', 'ECR Solutions'],
            ['/api/guides/tutorials/implementation-and-integration/pos-with-static-qr', 'POS wtih Static QR'],
        ],
        initialOpenGroupIndex: -1
    };
}

const sidebars = [
    // Payments
    tutorial_payments(),
    // Implementation and Integration
    tutorial_implementation_integration(),
]

module.exports = {
    title: 'Tutorials', // required
    collapsable: false, // optional, defaults to true
    children: sidebars,
    initialOpenGroupIndex: -1
}