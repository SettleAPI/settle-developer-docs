<template>
  <div>
    <section>
      <h2 id="http-request">
        <a href="#http-request" class="header-anchor">#</a> HTTP Request
      </h2>
      <div class="md-api_reference_FiraCode">
        <div class="md-api_reference_request_heading">
          <p>
            <span :class="['badge', method.operation]">{{
              method.operation
            }}</span>
            {{ method.path }}
          </p>
        </div>
        <p>{{ method.excerpt }}</p>
        <h3 id="authorization-scopes">
          <a href="#authorization-scopes" class="header-anchor">#</a>
          Authorization Scopes
        </h3>
        <ul>
          <li>
            Required Auth Level:
            <a
              href="/guides/authentication/#authentication-using-secret"
              class=""
              >SECRET</a
            >
          </li>
          <li>Authorized Roles: All</li>
        </ul>
        <h3 id="base-uris" v-if="servers">
          <a href="#base-uris" class="header-anchor">#</a> Base URIs
        </h3>
        <ul v-if="servers">
          <li v-for="(server, index) in servers" :key="index">
            {{ server.description }}:
            <span class="url">{{ server.url }}</span>
          </li>
        </ul>
        <h3 id="status-codes" v-if="statusCodes">
          <a href="#status-codes" class="header-anchor">#</a> Status Codes
        </h3>
        <ul v-if="statusCodes">
          <li v-for="(code, index) in statusCodes" :key="index">
            <strong>{{ code.code }}</strong> --&gt;
            <strong>{{ code.title }}</strong
            >, {{ code.description }}
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h2 id="schema"><a href="#schema" class="header-anchor">#</a> Schema</h2>
      <div class="md-api_reference_FiraCode">
        <div v-for="(entry, index) in schemas" :key="index">
          <h3 :id="entry.name">
            <a :href="'#' + entry.name" class="header-anchor">#</a>
            {{ entry.name }}
          </h3>
          <ul>
            <li>
              Type:
              <code v-if="entry.url">
                <router-link :to="entry.url">
                  {{ entry.type }}
                </router-link>
              </code>
              <code v-else>{{ entry.type }}</code>
            </li>

            <li>
              Required:
              <code>
                <span v-if="entry.required">{{ entry.required }}</span>
                <span v-else>false</span>
              </code>
            </li>
            <li v-if="entry.enum">
              Enum: <code>{{ entry.enum }}</code>
            </li>
            <li v-if="entry.default">
              Default: <code>{{ entry.default }}</code>
            </li>
            <li
              v-if="
                entry.minLength &&
                entry.maxLength &&
                entry.minLength === entry.maxLength
              "
            >
              Length: <code>{{ entry.minLength }}</code>
            </li>
            <li v-else-if="entry.minLength">
              Length: <code>>= {{ entry.minLength }}</code>
            </li>
            <li v-else-if="entry.maxLength">
              Length: <code><= {{ entry.maxLength }}</code>
            </li>
            <li v-if="entry.minimum && entry.type === 'integer'">
              Value: <code>>= {{ entry.minimum }}</code>
            </li>
            <li v-if="entry.maximum && entry.type === 'integer'">
              Value: <code><= {{ entry.maximum }}</code>
            </li>
            <li v-if="entry.pattern">
              RegExp: <code>{{ entry.pattern }}</code>
            </li>
            <!-- <li v-if="entry.default">Default: <code>{{entry.default}}</code></li> -->
          </ul>
          <p v-if="entry.description">{{ entry.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");
const _ = require("lodash");

const yaml = require("js-yaml");

function loggingDisabled() {
  console.log = function () {};
  console.table = function () {};
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
      servers: [],
      statusCodes: [],
      // methods: [],
      method: {},
      schemas: [],
      resourceOverviewUrl: [],
    };
  },
  async beforeMount() {
    console.clear();

    //   const site = this.$site;
    const page = this.$page;
    const frontmatter = this.$frontmatter;
    const props = this.$props;
    const data = this.$data;

    //   console.log(this.$props);

    const schemaUrl = function () {
      let schema = props.resource.split(".")[0];
      console.log("schema: ", schema);
      if (schema === "merchant") {
        return "merchant";
      } else if (schema === "oauth2") {
        return "oauth2";
      } else if (schema === "users") {
        return "users";
      }
    };

    //   data.anchorLink = props.resource.replaceAll('.', '-');

    //   console.log(this.$frontmatter);

    //   console.log(props.resource[0]);

    let methodEntryObject = [];

    //   _.filter(pages, function(pages) {
    if (
      frontmatter.operationId !== undefined &&
      frontmatter.operationId === props.resource
    ) {
      // let methodEntryObject = [];
      axios
        .get(
          "https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/reference/" +
            schemaUrl() +
            ".v1.yaml"
        )
        .then(function (response) {
          // handle success
          // console.log(response);

          // console.group(
          //   '%cSECTION: ',
          //   'font-weight: bold; color: green; font-size: 14px',
          //   props.resource
          // );

          // let methodEntryObject = [];

          let OpenApiJsonResponse = yaml.load(response.data, {
            encoding: "utf-8",
          });
          console.log(OpenApiJsonResponse);

          if (OpenApiJsonResponse.openapi ? true : false) {
            data.version = OpenApiJsonResponse.info.version.split(".")[0];

            let servers = [];
            _.filter(OpenApiJsonResponse.servers, function (key, value) {
              // console.log(key);
              if (key.description !== "Mock") {
                servers.push(key);
              }
            });

            //   console.log(servers);
            servers = _.sortBy(servers, ["url"]);
            //   console.log(servers);
            data.servers = servers;

            if (OpenApiJsonResponse.paths) {
              // const paths = OpenApiJsonResponse.paths;

              // console.log(OpenApiJsonResponse.paths);

              _.filter(OpenApiJsonResponse.paths, function (key, value) {
                // let methodPath = value;
                // let methodData = key;

                // let methodEntry = {
                //   request: {},
                // };

                // methodEntry.path = value;

                _.filter(key, function (a, b) {
                  if (typeof a.operationId !== "undefined") {
                    //   console.log(a);

                    // let operationId = a.operationId;
                    // console.log(a.operationId.substring(0,a.operationId.lastIndexOf('.')));
                    // console.log('props.resource: ', props.resource);

                    let methodEntry = {
                      request: {},
                    };

                    methodEntry.path = value;

                    // console.log('frontmatter.schema: ', site.frontmatter);
                    if (frontmatter.operationId === a.operationId) {
                      console.group("Found:", a.operationId);
                      // console.log('operationId: ', a.operationId);
                      console.log("page.title: ", page.title);
                      console.log("page.path: ", page.path);
                      console.log(a);
                      console.groupEnd();

                      data.resourceOverviewUrl = frontmatter.schema;

                      methodEntry.url = page.path;
                      methodEntry.request = a;

                      let statusCodes = [];
                      _.filter(a.responses, function (key, value) {
                        //   console.log(key);
                        let description = key.description.split(", ");
                        statusCodes.push({
                          code: value,
                          title: description[0],
                          description: description[1],
                        });
                      });

                      // console.log(statusCodes);
                      data.statusCodes = statusCodes;

                      let descriptionExcerpt = a.description
                        .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
                        .split("|");
                      // console.info('Short Description: ', descriptionExcerpt[0]);
                      methodEntry.excerpt = descriptionExcerpt[0];

                      methodEntry.method = frontmatter.method;
                      methodEntry.operation = frontmatter.operation;
                      // console.log('frontmatter.operation: ', frontmatter.operation);

                      data.method.excerpt = descriptionExcerpt[0];
                      data.method.operation = frontmatter.operation;
                      data.method.path = value;

                      methodEntryObject.push(methodEntry);

                      let $schema = OpenApiJsonResponse.components.schemas;
                      // console.log($schema);
                      let $ref =
                        a.requestBody.content["application/json"].schema.$ref;
                      $ref = $ref.split("/")[3];
                      // console.log($ref);
                      $schema = $schema[$ref];

                      // console.log($schema.properties);

                      let schemas = [];

                      _.filter(
                        $schema.properties,
                        function (typeValue, typeName) {
                          // console.log(typeName, typeValue);
                          let types = {};

                          if (typeName) {
                            types.name = typeName;
                          }

                          _.filter($schema.required, function (r1, r2) {
                            // console.log(r1);
                            if (typeName === r1) {
                              types.required = true;
                            }
                          });

                          //   console.log($schema.required);
                          function setValues(itr) {
                            if (itr.$ref) {
                              // console.log(itr);
                              //   let innerModelUrl = itr.$ref.split('/').pop();
                              //   axios
                              //     .get(
                              //       'https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/models/' +
                              //         innerModelUrl
                              //     )
                              //     .then(function(innerModelResponse) {
                              //       let innerOpenApiJsonModel = yaml.load(
                              //         innerModelResponse.data,
                              //         {
                              //           encoding: 'utf-8',
                              //         }
                              //       );
                              //       types.type = innerOpenApiJsonModel.title;
                              //       types.description =
                              //         innerOpenApiJsonModel.description;
                              //       types.url =
                              //         '/api/reference/rest/types/#' +
                              //         innerOpenApiJsonModel.title.toLowerCase();
                              //       // console.log(innerOpenApiJsonModel.properties);
                              //       _.filter(
                              //         innerOpenApiJsonModel.properties,
                              //         function(q1, q2) {
                              //           //   console.log(p1);
                              //           setValues(q1);
                              //         }
                              //       );
                              //     })
                              //     .catch(function(error) {
                              //       // handle error
                              //       console.log(error);
                              //     })
                              //     .then(function() {
                              //       // always executed
                              //     });
                            } else {
                              if (itr.default) {
                                types.default = itr.default;
                              }

                              if (itr.minLength) {
                                types.minLength = itr.minLength;
                              }

                              if (itr.maxLength) {
                                types.maxLength = itr.maxLength;
                              }

                              if (itr.pattern) {
                                types.pattern = itr.pattern;
                              }

                              if (itr.minimum) {
                                types.minimum = itr.minimum;
                              }

                              if (itr.maximum) {
                                types.maximum = itr.maximum;
                              }

                              if (itr.enum) {
                                types.enum = itr.enum;
                              }
                              if (itr.description) {
                                types.description = itr.description;
                              }

                              //   if (itr.type) {
                              //     types.type = itr.type;
                              //   }
                            }
                          }

                          if (typeValue.$ref) {
                            // console.log(typeValue.$ref);

                            let modelUrl = typeValue.$ref.split("/").pop();
                            // console.log(modelUrl);
                            axios
                              .get(
                                "https://raw.githubusercontent.com/SettleAPI/settle-api-description/main/models/" +
                                  modelUrl
                              )
                              .then(function (modelResponse) {
                                let OpenApiJsonModel = yaml.load(
                                  modelResponse.data,
                                  {
                                    encoding: "utf-8",
                                  }
                                );

                                types.type = OpenApiJsonModel.title;
                                types.description =
                                  OpenApiJsonModel.description;

                                types.url =
                                  "/api/reference/rest/types/#" +
                                  OpenApiJsonModel.title.toLowerCase();

                                // _.filter($schema.required, function(w1, w2) {
                                //   console.log(w1);
                                //   console.log(OpenApiJsonModel.title);
                                //   if (OpenApiJsonModel.title === w1) {
                                //     types.required = true;
                                //     // console.log(OpenApiJsonModel.title);
                                //   }
                                // });

                                // console.log(OpenApiJsonModel);
                                _.filter(
                                  OpenApiJsonModel.properties,
                                  function (p1, p2) {
                                    // console.log(p1);
                                    setValues(p1);
                                  }
                                );
                              })
                              .catch(function (error) {
                                // handle error
                                console.log(error);
                              })
                              .then(function () {
                                // always executed
                              });
                          } else {
                            // console.log(typeValue);
                            setValues(typeValue);
                            if (typeValue.type) {
                              types.type = typeValue.type;
                            }
                          }

                          //   schemas.push(types);

                          if (types.name !== "null") {
                            schemas.push(types);
                          }
                        }
                      );

                      data.schemas = schemas;
                    }
                  }
                });
              });
              // console.log(paths);
              // console.log('pages.title: ', pages.title);
              // console.log('pages.path: ', pages.path);
            }
          } else {
            console.warn("No valid Open API sepesification document found.");
          }

          // console.groupEnd();

          if (methodEntryObject.length) {
            // console.table(methodEntryObject);
            //   data.methods = methodEntryObject;
          } else {
            console.warn("No data in methodEntryObject");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    //   });
  },
};
</script>
