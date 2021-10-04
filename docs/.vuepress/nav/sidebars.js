// const {
//     foo,
//     bar
// } = require('./left/rest/rest.js');

// const {
//     rest
// } = require('./left/rest/rest.js');

const rest = require('./left/rest/rest.js');
// const guides = require('./left/guides.js');
// const support = require('./left/support.js');


const sidebar_rest = () => {
    return rest;
}

// const sidebar_guides = () => {
//     return guides;
// }
//
// const sidebar_support = () => {
//     return support;
// }

exports.rest = sidebar_rest;
// exports.guides = sidebar_guides;
// exports.support = sidebar_support;
