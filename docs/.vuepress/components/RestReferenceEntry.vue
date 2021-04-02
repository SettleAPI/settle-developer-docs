<template>
  <section>
    <h3
      :id="'v' + $data.version + '-' + $data.anchorLink"
      v-if="$data.resourceOverviewUrl.length > 0"
    >
      <!-- <router-link :to="'#v' + version + '-' + resource" class="header-anchor">#</router-link> -->
      <a
        :href="'#v' + $data.version + '-' + $data.anchorLink"
        class="header-anchor"
        >#</a
      >
      <router-link :to="$data.resourceOverviewUrl"
        >v{{ $data.version }}.{{ resource }}</router-link
      >
    </h3>
    <h3 :id="'v' + $data.version + '-' + $data.anchorLink" v-else>
      <!-- <router-link :to="'#v' + version + '-' + resource" class="header-anchor">#</router-link> -->
      <a
        :href="'#v' + $data.version + '-' + $data.anchorLink"
        class="header-anchor"
        >#</a
      >
      <a class="noLink">v{{ $data.version }}.{{ resource }}</a>
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th style="text-align: left;">Methods</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="$data.methods.length > 0">
        <tr v-for="(method, index) in $data.methods" :key="index">
          <td style="text-align: left;">
            <router-link :to="method.url">{{ method.method }}</router-link>
          </td>
          <td>
            <span class="noLink">
              <router-link :to="method.url">
                <span :class="['badge small', method.operation]">{{
                  method.operation
                }}</span>
                <span v-html="method.path"></span>
              </router-link>
            </span>
            <br /><br />
            {{ method.excerpt }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>Error:</td>
          <td>
            No results
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  const axios = require('axios');
  const _ = require('lodash');

  const yaml = require('js-yaml');

  function loggingDisabled() {
    console.log = function() {};
    console.table = function() {};
  }

  // loggingDisabled();

  export default {
    props: {
      resource: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        methods: [],
        resourceOverviewUrl: [],
      };
    },
    async beforeMount() {
      console.clear();

      const site = this.$site;
      const pages = site.pages;
      const props = this.$props;
      const data = this.$data;

      // console.log(this.$props);

      const schemaUrl = function() {
        let schema = props.resource.split('.')[0];
        console.log('schema: ', schema);
        if (schema === 'merchant') {
          return 'merchant';
        } else if (schema === 'oauth2') {
          return 'oauth2';
        } else if (schema === 'users') {
          return 'users';
        }
      };

      data.anchorLink = props.resource.replaceAll('.', '-');

      // console.log(this.$site.pages.frontmatter.schema);
      let methodEntryObject = [];

      _.filter(pages, function(pages) {
        if (
          pages.frontmatter.schema !== undefined &&
          pages.frontmatter.schema === props.resource
        ) {
          // let methodEntryObject = [];

          axios
            .get(
              'https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/reference/' +
                schemaUrl() +
                '.v1.yaml'
            )
            .then(function(response) {
              // handle success
              // console.log(response);

              // console.group(
              //   '%cSECTION: ',
              //   'font-weight: bold; color: green; font-size: 14px',
              //   props.resource
              // );

              // let methodEntryObject = [];

              let OpenApiJsonResponse = yaml.load(response.data, {
                encoding: 'utf-8',
              });
              // console.log(OpenApiJsonResponse);

              if (OpenApiJsonResponse.openapi ? true : false) {
                data.version = OpenApiJsonResponse.info.version.split('.')[0];

                if (OpenApiJsonResponse.paths) {
                  // const paths = OpenApiJsonResponse.paths;

                  _.filter(OpenApiJsonResponse.paths, function(key, value) {
                    // let methodPath = value;
                    // let methodData = key;

                    // let methodEntry = {
                    //   request: {},
                    // };

                    // methodEntry.path = value;

                    _.filter(key, function(a, b) {
                      if (typeof a.operationId !== 'undefined') {
                        // console.log(a);

                        // let operationId = a.operationId;
                        // console.log(a.operationId.substring(0,a.operationId.lastIndexOf('.')));
                        // console.log('props.resource: ', props.resource);

                        let methodEntry = {
                          request: {},
                        };

                        methodEntry.path = value;

                        // console.log('pages.frontmatter.schema: ', site.pages.frontmatter);
                        if (pages.frontmatter.operationId === a.operationId) {
                          console.group('Found:', a.operationId);
                          // console.log('operationId: ', a.operationId);
                          console.log('pages.title: ', pages.title);
                          console.log('pages.path: ', pages.path);
                          console.log(a);
                          console.groupEnd();

                          data.resourceOverviewUrl = pages.frontmatter.schema;

                          methodEntry.url = pages.path;
                          methodEntry.request = a;

                          let descriptionExcerpt = a.description
                            .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
                            .split('|');
                          // console.info('Short Description: ', descriptionExcerpt[0]);
                          methodEntry.excerpt = descriptionExcerpt[0];

                          methodEntry.method = pages.frontmatter.method;
                          methodEntry.operation = pages.frontmatter.operation;
                          // console.log('pages.frontmatter.operation: ', pages.frontmatter.operation);

                          methodEntryObject.push(methodEntry);
                        }
                      }
                    });
                  });
                  // console.log(paths);
                  // console.log('pages.title: ', pages.title);
                  // console.log('pages.path: ', pages.path);
                }
              } else {
                console.warn(
                  'No valid Open API sepesification document found.'
                );
              }

              // console.groupEnd();

              if (methodEntryObject.length) {
                // console.table(methodEntryObject);
                data.methods = methodEntryObject;
              } else {
                console.warn('No data in methodEntryObject');
              }
            })
            .catch(function(error) {
              // handle error
              console.log(error);
            })
            .then(function() {
              // always executed
            });
        }
      });
    },
  };
</script>
