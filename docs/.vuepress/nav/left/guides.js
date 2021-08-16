// const introduction = require('./guides/introduction.js');
const quickstarts = require('./guides/quickstarts.js');
const tutorials = require('./guides/tutorials.js');
const best_practices = require('./guides/best-practices.js');

const overview = {
  title: 'Overview',
  collapsable: false,
  sidebarDepth: 0,
  children: [['/api/guides/', 'Settle API Overview']],
};

/**
 * @todo #96 @rexgnu Edit the Introductions Sidabar here. Documents are found in '/docs/api/guides/introduction'.
 */
const introduction = {
  title: 'Introduction', // required
  collapsable: false,
  sidebarDepth: 0,
  children: [
    ['/api/guides/introduction/a-note-on-settle-api-users.md', 'A Note on Settle API Users'],
    ['/api/guides/introduction/attachments.md','Attachments'],
    ['/api/guides/introduction/authentication.md','Authentication'],
    ['/api/guides/introduction/callbacks.md','Callbacks'],
    ['/api/guides/introduction/error-responses.md','Error Responses'],
    ['/api/guides/introduction/interacting.md','Interacting'],
    ['/api/guides/introduction/ledgers.md','Ledgers'],
    ['/api/guides/introduction/media-type.md','Media Types'],
    ['/api/guides/introduction/payment-flows.md','Payment Flows'],
    ['/api/guides/introduction/permission-requests.md','Permission Requests'],
    ['/api/guides/introduction/qr-acceptance.md','QR Acceptance'],
    ['/api/guides/introduction/resiliency.md','Resiliency'],
    ['/api/guides/introduction/sandbox-environment.md','Sandbox Enviroment #1'],
    ['/api/guides/introduction/settle-sandbox-environment.md',' Sandbox Enviroment #2'],
    ['/api/guides/introduction/settlements.md','Settlements'],
    ['/api/guides/introduction/versioning.md','Verioning'],
  ],
};

module.exports = [
  overview,
  introduction,
  // quickstarts,
  tutorials,
  //   best_practices,
];

// function getGuidesSidebar() {
//     return [
//         '/guides/',
//         '/guides/authentication',
//         '/guides/callbacks',
//         '/guides/attachments',
//         '/guides/ledgers',
//         '/guides/settlements',
//         '/guides/permission-requests',
//         '/guides/qr-acceptance',
//     ];
// }

// 
