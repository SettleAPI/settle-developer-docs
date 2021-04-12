const introduction = require('./guides/introduction.js');
const quickstarts = require('./guides/quickstarts.js');
const tutorials = require('./guides/tutorials.js');
const best_practices = require('./guides/best-practices.js');


module.exports = [
    introduction,
    quickstarts,
    tutorials,
    best_practices,
]


// function getIntroductionSidebar() {
//     return [
//         '/introduction/',
//         '/introduction/interacting',
//         '/introduction/callbacks',
//         '/introduction/error-responses',
//         '/introduction/media-type',
//         '/introduction/a-note-on-settle-api-users',
//         '/introduction/versioning',
//         ['/introduction/resiliency', 'Resiliency'],
//     ];
// }

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