const support = {
    title: 'Support', // required
    collapsable: false,
    sidebarDepth: 0,
    children: [
        ['/api/support/', 'How to Get Help'],
        ['https://stackoverflow.com/questions/tagged/settle-api', 'Stack Overflow'],
        ['https://stackoverflow.com/questions/tagged/settle-api', 'Issue Tracker'],
        [
            'https://stackoverflow.com/questions/tagged/settle-api',
            'Feature Requests',
        ],
        ['/api/release-notes', 'Release Notes'],
        ['/api/terms', 'Terms of Service'],
    ]
};

module.exports = [support]