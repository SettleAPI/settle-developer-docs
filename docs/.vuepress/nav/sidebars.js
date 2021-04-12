// const {
//     foo,
//     bar
// } = require('./left/rest/rest.js');

// const {
//     rest
// } = require('./left/rest/rest.js');

const rest = require('./left/rest/rest.js');

const sidebar_rest = () => {
    return rest;
}

exports.rest = sidebar_rest;