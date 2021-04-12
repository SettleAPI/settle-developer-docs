const {
    fs,
    path
} = require('@vuepress/shared-utils')

const introductionDocs = fs.readdirSync(path.resolve(__dirname, '../../../../api/guides/introduction')).map(filename => 'introduction/' + filename.slice(0, -3)).sort()

module.exports = {
    title: 'Introductions', // required
    collapsable: false,
    sidebarDepth: 0,
    children: introductionDocs
};