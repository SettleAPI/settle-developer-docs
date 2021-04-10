export default (callback) => {
    // console.clear();

    const site = this.$site;
    const page = this.$page;

    const frontmatter = this.$frontmatter;

    const props = this.$props;
    const data = this.$data;

    let reference;
    let currentMethods;

    function log(msg, ref) {
        console.log(msg, ": ", ref);
    }

    const operations = ["post", "get", "put", "delete"];

    if (page.reference) {
        reference = page.reference;
        // log("reference", reference);
    } else if (site.pages[0].reference) {
        reference = site.pages[0].reference;
        // log("reference", reference);
    } else {
        console.warn(
            "Neither $page.reference or $site.pages[0].reference found..."
        );
    }

    frontmatter.title = "REST Resource: " + frontmatter.title;

    // console.log(frontmatter.api);

    _.filter(reference, function (api, name) {
        // console.log(api.info);

        if (frontmatter.api === name) {
            // log("reference", reference[name]);
            // log("paths", reference[name].paths);

            _.filter(reference[name].paths, function (a, b) {
                // log("a", b);

                _.filter(a, function (c, d) {
                    // log("d", d);
                    operations.forEach((operation) => {
                        if (d === operation) {
                            // log("c", c);

                            let schema = c.operationId.split(/\.(?=[^\.]+$)/)[0];
                            // log("schema", schema);
                            // log("frontmatter.schema", frontmatter.schema);
                            if (schema === frontmatter.schema) {
                                // log("schema", schema);

                                let method = c.operationId.split(/\.(?=[^\.]+$)/)[1];
                                c.method = method;
                                // log("method", method);

                                let excerpt = c.description
                                    .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
                                    .split("|")[0];
                                // console.log(excerpt);

                                c.excerpt = excerpt;

                                // log("c", c);

                                data.methods.push(c);
                                currentMethods.push(c);
                                log("currentMethods", currentMethods);
                            }
                        }
                    });
                });
            });

        }
    });

    setTimeout(() => {
        callback(null, currentMethods);
    }, 3000);
};