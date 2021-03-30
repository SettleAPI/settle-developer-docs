<template>
  <section>
    <table class="table">
      <thead>
        <tr>
          <th style="text-align: left;">Methods</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(method, index) in methods" :key="index">
          <td style="text-align: left;">
            <router-link :to="method.url">{{ method.operation }}</router-link>
          </td>
          <td>
            {{ method.excerpt }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  function loggingDisabled() {
    console.log = function() {};
    console.table = function() {};
  }

  // loggingDisabled();

  import result from '../public/discovery/v1/reference/merchant.v1.yaml';

  const axios = require('axios');
  const _ = require('lodash');

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
        version: 1,
        resourceOverviewUrl: [],
      };
    },
    async beforeMount() {
      // console.log(result);

      let data = this.$data;
      let sitePages = this.$site.pages;
      let paths = result.paths;

      console.log(
        '%cSECTION: ',
        'font-weight: bold; color: green; font-size: 14px',
        this.$props.resource
      );

      let anchorLink = this.$props.resource.replaceAll('.', '-');
      // console.log(anchorLink);
      this.$data.anchorLink = anchorLink;

      let resourceOverviewTitle = this.$props.resource;
      // console.log(resourceOverviewTitle);
      _.filter(sitePages, function(pages) {
        // console.log(pages);
        if (pages.title === 'REST Resource: ' + resourceOverviewTitle) {
          // console.log(pages.title);
          // console.log(pages.path);
          data.resourceOverviewUrl = pages.path;
        }
      });

      let methodEntryObject = [];
      let methodEntryName;
      let counter = 1;
      _.filter(paths, function(key, value) {
        let methodPath = value;
        let methodData = key;

        console.log(
          '%cIteration START: ',
          'font-weight: bold; color: yellow; font-size: 10px',
          methodPath
        );
        // console.log(counter++);
        // console.trace(key);
        let methodEntry = {
          request: {},
        };

        methodEntry.path = methodPath;

        let operationId = '';

        _.filter(methodData, function(a, b) {
          if (typeof a.operationId !== 'undefined') {
            // console.log(a);
            _.filter(sitePages, function(pages) {
              // console.log(pages);
              if (pages.title === a.operationId) {
                // console.log('operationId: ', a.operationId);
                // console.log('pages.title: ', pages.title);
                // console.log(pages.path);
                methodEntry.url = pages.path;

                if (b == 'post') {
                  methodEntry.http = 'post';
                } else if (b == 'get') {
                  methodEntry.http = 'get';
                } else if (b == 'put') {
                  methodEntry.http = 'put';
                } else if (b == 'delete') {
                  methodEntry.http = 'delete';
                } else {
                  console.warn('Method not found');
                }

                methodEntryObject.push(methodEntry);
              } else {
                // console.warn('pages.title: ', pages.title, ': ', pages.path);
              }
            });

            methodEntry.request = a;
            operationId = a.operationId;

            let descriptionExcerpt = a.description;
            descriptionExcerpt = descriptionExcerpt
              .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
              .split('|');
            // console.info('Short Description: ', descriptionExcerpt[0]);
            methodEntry.excerpt = descriptionExcerpt[0];

            // methodEntry.request = a;
            // console.log(operationId);
            let lw = operationId.split('.');
            let metodOperation = lw[lw.length - 1];
            // console.log('metodOperation: ', metodOperation);
            methodEntry.operation = metodOperation;
          } else {
            // console.log('operationId missing for: ', a);
          }
        });

        console.log(
          '%cIteration END: ',
          'font-weight: bold; color: #bada55; font-size: 10px'
        );
      });
      console.table(methodEntryObject);
      // console.log(methodEntryObject);
      this.$data.methods = methodEntryObject;
    },
  };

  // name: 'Entry',
  // props: {
  //   methodEntry: {
  //     type: String,
  //     required: true,
  //   },
  //   description: {
  //     type: String,
  //     required: false,
  //   },
  //   request: {
  //     type: String,
  //     required: true,
  //   },
  //   linkText: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // };
</script>
