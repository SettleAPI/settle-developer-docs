const {
    fs,
    path
} = require('@vuepress/shared-utils')

const officalPlugins = fs
    .readdirSync(path.resolve(__dirname, '../../../../api/guides/introduction'))
    .map(filename => 'introduction/' + filename.slice(0, -3))
    .sort()

module.exports = {
    title: 'Introduction', // required
    collapsable: false,
    sidebarDepth: 0,
    children: officalPlugins
    // children: [
    //     ['/api/guides/introduction/welcome', 'Welcome'],
    //     ['/api/guides/introduction/interacting', 'Interacting with the REST API'],
    //     ['/api/guides/introduction/callbacks', 'Callbacks'],
    //     ['/api/guides/introduction/error-responses', 'Error Responses'],
    //     ['/api/guides/introduction/media-type', 'Media Type'],
    //     ['/api/guides/introduction/a-note-on-settle-api-users', 'A Note on Settle API Users'],
    //     ['/api/guides/introduction/versioning', 'Versioning'],
    //     ['/api/guides/introduction/resiliency', 'A resilient payment system'],
    // ],
};