const {
    fs,
    path
} = require('@vuepress/shared-utils')

const introductionQS = fs
    .readdirSync(path.resolve(__dirname, '../../../../api/guides/quickstarts'))
    .map(filename => 'quickstarts/' + filename.slice(0, -3))
    .sort()

module.exports = {
    title: 'Quickstarts', // required
    collapsable: false,
    sidebarDepth: 0,
    children: introductionQS
};