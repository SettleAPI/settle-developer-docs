[![Netlify Status](https://api.netlify.com/api/v1/badges/f4516111-2bfc-4ae0-9fc3-626cfe56e954/deploy-status)](https://app.netlify.com/sites/settle-developer-docs/deploys)

# Settle API Docs

## Introduction

This is the repo for the [Settle APIs Documentation](https://developer.settle.eu/) website. It's buildt using [Vuepress](https://vuepress.vuejs.org/) - a minimalistic Vue-powered static site generator from [Evan You](https://evanyou.me/), the creator of [Vue.js](https://vuejs.org/), and [Netlify CMS](https://www.netlifycms.org/) - an open source content management for your [Git workflow](https://guides.github.com/introduction/flow/).

**_TL;DR:_** _[Contributing and setting up local environment](#contributing)_

## VuePress

**VuePress** is composed of two parts: a [minimalistic static site generator](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) with a Vue-powered [theming system](https://vuepress.vuejs.org/theme/) and [Plugin API](https://vuepress.vuejs.org/plugin/), and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue’s own sub projects.

Each page generated by **VuePress** has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Yet, once the page is loaded, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Extra pages are fetched on demand as the user navigates around the site.

### How It Works

A VuePress site is in fact a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) powered by [Vue](http://vuejs.org/), [Vue Routerand](https://github.com/vuejs/vue-router) and [webpack](http://webpack.js.org/). If you’ve used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use [Vue DevTools](https://github.com/vuejs/vue-devtools) to debug your custom theme!).

During the build, we create a server-rendered version of the app and render the corresponding HTML by virtually visiting each route. This approach is inspired by [Nuxt](https://nuxtjs.org/)'s `nuxt generate` command and other projects like [Gatsby](https://www.gatsbyjs.org/).

Each [Markdown](https://www.markdownguide.org/) file is compiled into HTML with [markdown-it](https://github.com/markdown-it/markdown-it) and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

## Netlify CMS

**Netlify CMS** is an open source content management system for your [Git workflow](https://guides.github.com/introduction/flow/) that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

At its core, **Netlify CMS** is an open-source React app that acts as a wrapper for the [Git workflow](https://guides.github.com/introduction/flow/), using the **GitHub**, GitLab, or Bitbucket API. This provides many advantages, including:

- **Fast, web-based UI:** With rich-text editing, real-time preview, and drag-and-drop media uploads.
- **Platform agnostic:** Works with most static site generators.
- **Easy installation:** Add two files to your site and hook up the backend by including those files in your build process or linking to our Content Delivery Network (CDN).
- **Modern authentication:** Using **GitHub**, GitLab, or Bitbucket and JSON web tokens.
- **Flexible content types:** Specify an unlimited number of content types with custom fields.
- **Fully extensible:** Create custom-styled previews, UI widgets, and editor plugins.

### How it works

**Netlify CMS** allows a user to enter content through an intuitive and easy to use interface which will then get used by **Vuepress** to create the appropriate pages. When saving content on **Netlify CMS**, the data gets saved into this git repository as markdown files.

## Setup local environment

1. ### Clone this repo

   `git clone https://github.com/SettleAPI/settle-developer-docs.git`

2. ### Navigate into your newly created Settle API docs directory

   `cd settle-developer-docs`

3. ### Install dependencies

   `yarn install`

4. ### Add .env.local file

   Create a new file in the root folder named `.env.local` and add the `GITHUB_TOKEN` environment variable found in the Netlify Deploy Settings.

   Learn more about environment variables over in the [Netlify docs](https://docs.netlify.com/configure-builds/environment-variables/)

5. ### Start the local dev server

   `yarn docs:dev`

   By default, you should now see your scaffolded Settle APIs docs site at [https://localhost:8080](https://localhost:8080)🚀

6. ### Start the local CMS server

   `npx netlify-cms-proxy-server`

   Open [http://localhost:8080/admin/](http://localhost:8080/admin/) to verify that your can administer your content locally. If the default port (8081) is in use, the proxy server won't start and you will see an error message. In this case, follow [these steps](https://www.netlifycms.org/docs/beta-features/#configure-the-netlify-cms-proxy-server-port-number) before proceeding.

   **Note:** `netlify-cms-proxy-server` runs an unauthenticated express server. As any client can send requests to the server, it should only be used for local development.

## Contributing

1. ### Create your feature branch

   `git checkout -b feat/my-awesome-feature`

2. ### Commit your changes

   `git commit -am 'My Awesome Feature'`

3. ### Push to the branch

   `git push origin feat/my-awesome-feature`

4. ### Open a Pull Request 🤓

   `gh pr create --title "My Awesome feature" --body "This is my new awesome feature." --base dev`

   **NOTE:** Pull Requests are used to start conversation about proposed changes before they're code is reviewed and eventually merged into the main branch, and **we will only consider Pull Requests initiated towards the [dev branch](https://github.com/SettleAPI/settle-developer-docs/tree/dev)**. Pull Requests towards any other branch will be ignored and closed without any further notifications.
