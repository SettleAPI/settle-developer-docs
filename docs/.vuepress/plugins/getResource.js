module.exports = () => ({
  async extendPageData($page) {
    const listContent = require('list-github-dir-content');
    const axios = require('axios');
    const _ = require('lodash');

    const yaml = require('js-yaml');

    const myToken = process.env.GITHUB_TOKEN;

    let endpoints = [];
    let fileNames = [];
    let api = {
      merchant: null,
      oauth2: null,
      users: null,
    };

    // let page = $page;
    let page = $page;

    const modelDirectoryFiles = await listContent.viaContentsApi({
      user: 'SettleAPI',
      repository: 'settle-api-description',
      directory: 'reference',
      token: myToken,
    });

    _.filter(modelDirectoryFiles, function(r) {
      //   console.log(r);

      // let fileName = r.split('reference/')[1];
      let fileName = r.split('reference/')[1];

      fileNames.push(fileName);
    });

    _.filter(fileNames, function(file) {
      let apiName = file.split('.')[0];
      //   console.log(apiName);

      axios
        .get('https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/reference/' + file)
        .then(function(bender) {
          let bendersBigScore = yaml.load(bender.data, {
            encoding: 'utf-8',
          });

          _.filter(bendersBigScore.components.schemas, function(fry) {
            if (fry.properties) {
              _.filter(fry.properties, function(props) {
                //   console.log(props);
                if (props.$ref) {
                  let $ref = props.$ref.split('../models/')[1].split('.')[0];
                  props.$ref = $ref;
                  // console.log($ref);
                }
              });
            }

            if (fry.required) {
              _.filter(fry.required, function(req) {
                _.filter(fry.properties, function(prop, amy) {
                  if (req === amy) {
                    prop.required = true;
                    //   console.log(amy, prop);
                  }
                });
              });
            }
          });

          api[apiName] = bendersBigScore;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          page.reference = api;
        });
    });
  },
});
