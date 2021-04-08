<template>
  <div>
    <section>
      <h2 id="http-request">
        <router-link :to="'#http-request'" class="header-anchor">#</router-link>
        HTTP Request
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
          <router-link :to="'#authorization-scopes'" class="header-anchor"
            >#</router-link
          >
          Authorization Scopes
        </h3>
        <ul>
          <li>
            Required Auth Level:
            <router-link
              :to="'/guides/authentication/#authentication-using-secret'"
              >SECRET</router-link
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
            <strong>{{ code.code }}</strong> -->
            <strong>{{ code.title }}</strong
            >, {{ code.description }}
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h2 id="schema"><a href="#schema" class="header-anchor">#</a> Schema</h2>
      <div class="md-api_reference_FiraCode">
        <div v-for="(type, entry) in schemas" :key="entry">
          <h3 :id="type.name">
            <router-link :to="'#' + type.name" class="header-anchor"
              >#</router-link
            >
            {{ type.name }}
          </h3>
          <ul>
            <li>
              Type:
              <!-- <code v-if="type.url && type.type">
                <router-link :to="type.url">{{ type.type }}</router-link>
              </code> -->
              <code v-if="type.$ref">
                <router-link
                  :to="'/api/reference/rest/v1/models/#' + type.$ref"
                  >{{ type.$ref }}</router-link
                >
              </code>
              <code v-else>{{ type.type }}</code>
            </li>

            <li v-if="type.required">
              Required:
              <code class="required">{{ type.required }}</code>
            </li>
            <li v-if="type.enum">
              Enum: <code>{{ type.enum }}</code>
            </li>
            <li v-if="type.default">
              Default: <code>{{ type.default }}</code>
            </li>
            <li
              v-if="
                type.minLength &&
                type.maxLength &&
                type.minLength === type.maxLength
              "
            >
              Length: <code>{{ type.minLength }}</code>
            </li>
            <li v-else-if="type.minLength">
              Length: <code>&#8805; {{ type.minLength }}</code>
            </li>
            <li v-else-if="type.maxLength">
              Length: <code>&#8804; {{ type.maxLength }}</code>
            </li>
            <li v-if="type.minimum && type.type === 'integer'">
              Value: <code>&#8805; {{ type.minimum }}</code>
            </li>
            <li v-if="type.maximum && type.type === 'integer'">
              Value: <code>&#8804; {{ type.maximum }}</code>
            </li>
            <li v-if="type.pattern">
              RegExp: <code>{{ type.pattern }}</code>
            </li>
          </ul>
          <p v-if="type.description">{{ type.description }}</p>
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
      method: null,
      schemas: [],
      resourceOverviewUrl: [],
    };
  },
  async beforeMount() {
    // console.clear();

    //   const site = this.$site;
    const page = this.$page;
    // const frontmatter = this.$frontmatter;
    const props = this.$props;
    const data = this.$data;

    let unsortedShit = [];

    //   console.log(this.$props);

    const api = function () {
      let schema = props.resource.split(".")[0];
      // console.log("schema: ", schema);
      if (schema === "merchant") {
        return "merchant";
      } else if (schema === "oauth2") {
        return "oauth2";
      } else if (schema === "users") {
        return "users";
      }
    };

    if (page.reference) {
      _.filter(page.reference, function (bart, lisa) {
        // console.log(lisa);
        // console.log(api());
        if (lisa === api()) {
          // console.log(bart);
          data.servers = bart.servers;

          _.filter(bart.components.schemas, function (mat, gron) {
            // console.log(gron);
            // console.log(props.resource);
            // console.log(api() + '.' + gron);
            if (api() + "." + gron === props.resource) {
              // console.log(mat);

              _.filter(mat.properties, function (burns, bob) {
                // console.log(bob, burns);
                if (bob !== "null") {
                  // console.log(bob, burns);
                  burns.name = bob;
                  data.schemas.push(burns);
                }
              });
            }
          });

          _.filter(bart.paths, function (homer, marge) {
            // console.log(homer);
            _.filter(bart.paths, function (flanders, moe) {
              // console.log(moe);
              _.filter(flanders, function (ralph, skinner) {
                if (
                  skinner === "post" ||
                  skinner === "get" ||
                  skinner === "put" ||
                  skinner === "delete"
                ) {
                  if (page.frontmatter.operation) {
                    if (page.frontmatter.operation === skinner) {
                      data.method = { operation: skinner, path: moe + "/" };
                      unsortedShit.push(ralph);
                    }
                  } else {
                    console.warn("page.frontmatter.operation not found...");
                  }
                }
              });
            });
          });
        }
      });
    }

    let uniqSchemas;

    if (unsortedShit.length > 0) {
      uniqSchemas = _.uniq(unsortedShit);
      // console.log(uniqSchemas);
    }

    if (uniqSchemas !== undefined) {
      _.filter(uniqSchemas, function (mon, key) {
        // console.log(mon);
        if (mon.operationId === props.resource) {
          // console.log(mon);
          _.filter(mon.responses, function (apu, smithers) {
            // console.log(smithers, apu);

            let title = apu.description.split(",")[0];
            let description = apu.description.split(",")[1];
            let code = {
              code: smithers,
              title: title,
              description: description,
            };
            data.statusCodes.push(code);
          });
          //
        }
      });
    }
  },
};
</script>
