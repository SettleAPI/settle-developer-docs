module.exports = () => ({
    async extendPageData($page) {
        const listContent = require('list-github-dir-content');
        const axios = require('axios');
        const _ = require('lodash');

        const yaml = require('js-yaml');

        const myToken = process.env.GITHUB_TOKEN;

        let models = [];
        let fileNames = [];
        let types = [];

        let page = $page;

        const modelDirectoryFiles = await listContent.viaContentsApi({
            user: 'SettleAPI',
            repository: 'settle-api-description',
            directory: 'models',
            token: myToken,
        });

        _.filter(modelDirectoryFiles, function (r) {
            // console.log(r);

            let fileName = r.split('models/')[1];

            fileNames.push(fileName);
        });

        _.filter(fileNames, function (file) {
            axios
                .get(
                    'https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/models/' +
                    file
                )
                .then(function (bendersBigScore) {
                    bendersBigScore = yaml.load(bendersBigScore.data, {
                        encoding: 'utf-8',
                    });

                    _.filter(bendersBigScore.properties, function (props) {
                        // console.log(i);
                        if (props.$ref) {
                            let $ref = props.$ref.split('./')[1].split('.')[0];
                            props.$ref = $ref;
                        }
                    });

                    if (bendersBigScore.required) {
                        _.filter(bendersBigScore.required, function (req) {
                            _.filter(bendersBigScore.properties, function (prop, zoid) {
                                if (req === zoid) {
                                    prop.required = true;
                                }
                            });
                        });
                    }

                    types.push(bendersBigScore);
                })
                .catch(function (error) {
                    // handle error
                    // console.log(error);
                })
                .then(function () {
                    // always executed
                    // data.types = types;
                    page.models = types;
                });
        });

        // $data.modelDirectoryFiles = modelDirectoryFiles;
    },
});