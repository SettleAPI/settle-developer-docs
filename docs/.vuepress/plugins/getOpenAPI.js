// module.exports = () => ({
//     async extendPageData($page) {
//         const listContent = require('list-github-dir-content');
//         const axios = require('axios');
//         const _ = require('lodash');

//         const yaml = require('js-yaml');

//         const myToken = process.env.GITHUB_TOKEN;

//         // let page = $page;
//         let page = $page;

//         let getTypesFilenames = [];
//         let getResourceFilenames = [];

//         let types = [];
//         let api = {
//             merchant: null,
//             oauth2: null,
//             users: null,
//         };

//         const referenceDirectoryFiles = await listContent.viaContentsApi({
//             user: 'SettleAPI',
//             repository: 'settle-api-description',
//             directory: 'reference',
//             token: myToken,
//         });

//         const modelsDirectoryFiles = await listContent.viaContentsApi({
//             user: 'SettleAPI',
//             repository: 'settle-api-description',
//             directory: 'models',
//             token: myToken,
//         });

//         _.filter(referenceDirectoryFiles, function (r) {
//             //   console.log(r);

//             // let fileName = r.split('reference/')[1];
//             let referenceFileName = r.split('reference/')[1];

//             getResourceFilenames.push(referenceFileName);
//         });

//         _.filter(modelsDirectoryFiles, function (r) {
//             // console.log(r);

//             let modelFileName = r.split('models/')[1];

//             getTypesFilenames.push(modelFileName);
//         });

//         _.filter(getTypesFilenames, function (typesFN) {
//             axios
//                 .get(
//                     'https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/models/' +
//                     typesFN
//                 )
//                 .then(function (bendersBigScore) {
//                     bendersBigScore = yaml.load(bendersBigScore.data, {
//                         encoding: 'utf-8',
//                     });

//                     _.filter(bendersBigScore.properties, function (props) {
//                         // console.log(i);
//                         if (props.$ref) {
//                             let $ref = props.$ref.split('./')[1].split('.')[0];
//                             props.$ref = $ref;
//                         }
//                     });

//                     if (bendersBigScore.required) {
//                         _.filter(bendersBigScore.required, function (req) {
//                             _.filter(bendersBigScore.properties, function (prop, zoid) {
//                                 if (req === zoid) {
//                                     prop.required = true;
//                                 }
//                             });
//                         });
//                     }

//                     types.push(bendersBigScore);
//                 })
//                 .catch(function (error) {
//                     // handle error
//                     // console.log(error);
//                 })
//                 .then(function () {
//                     // always executed
//                     // data.types = types;
//                     page.models = types;
//                 });
//         });

//         _.filter(getResourceFilenames, function (resourceFN) {
//             let apiName = resourceFN.split('.')[0];
//             //   console.log(apiName);

//             axios
//                 .get(
//                     'https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/reference/' +
//                     resourceFN
//                 )
//                 .then(function (bender) {
//                     let bendersBigScore = yaml.load(bender.data, {
//                         encoding: 'utf-8',
//                     });

//                     _.filter(bendersBigScore.components.schemas, function (fry) {

//                         if (fry.properties) {
//                             _.filter(fry.properties, function (props) {
//                                 //   console.log(props);
//                                 if (props.$ref) {
//                                     let $ref = props.$ref.split('../models/')[1].split('.')[0];
//                                     props.$ref = $ref;
//                                     // console.log($ref);
//                                 }
//                             });
//                         }

//                         if (fry.required) {
//                             _.filter(fry.required, function (req) {
//                                 _.filter(fry.properties, function (prop, amy) {
//                                     if (req === amy) {
//                                         prop.required = true;
//                                         //   console.log(amy, prop);
//                                     }
//                                 });
//                             });
//                         }

//                     });

//                     api[apiName] = bendersBigScore;
//                 })
//                 .catch(function (error) {
//                     // handle error
//                     console.log(error);
//                 })
//                 .then(function () {
//                     page.reference = api;
//                 });
//         });

//     },
// });