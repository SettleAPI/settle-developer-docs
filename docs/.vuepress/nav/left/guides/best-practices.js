const {
    fs,
    path
} = require('@vuepress/shared-utils')

const introductionBestPrac = fs
    .readdirSync(path.resolve(__dirname, '../../../../api/guides/best-practices'))
    .map(filename => 'best-practices/' + filename.slice(0, -3))
    .sort()

module.exports = {
    title: 'Best Practices', // required
    collapsable: false,
    sidebarDepth: 0,
    children: introductionBestPrac
};