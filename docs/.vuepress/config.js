const {
  description
} = require('../../package');
require("dotenv").config({
  path: ".env.local"
});
// require('dotenv').config()
const moment = require('moment');
// console.log(process.env.GITHUB_TOKEN);

const sidebar = require('./nav/sidebars.js');
// console.log('Sidebar Rest: ', sidebar.rest());
// console.log('Sidebar: ', sidebar.bar());

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader');
  },

  // markdown: {
  //   extractHeaders: ['h2', 'h3', 'h4']
  // },

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Settle Developer Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
    ],
  ],
  // base: '/docs/',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://settle.eu/wp-content/uploads/2020/10/Settle-color.svg',
    repo: 'SettleAPI/settle-developer-docs',
    docsBranch: 'dev',
    docsDir: 'docs',
    repoLabel: 'Contribute',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    searchPlaceholder: 'Press "/" to search..',
    // lastUpdated: true,
    smoothScroll: true,
    nav: require('./nav/top/mainNav.js'),
    sidebar: {
      '/api/reference/rest/': sidebar.rest()
    },
    // sidebar: {
    //   '/api/guides/': [{
    //     title: 'Guides', // required
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1, // optional, defaults to 1
    //     children: [
    //       ['/api/guides/', 'Overview'],
    //       {
    //         title: 'Quickstarts', // required
    //         collapsable: false,
    //         children: [
    //           ['/api/guides/quickstarts/node', 'Node.js'],
    //           ['/api/guides/quickstarts/python', 'Python'],
    //         ],
    //       },
    //       {
    //         title: 'Request and Send Payments', // required
    //         collapsable: false,
    //         children: [
    //           ['/api/guides/payments/request', 'Request Payment'],
    //           ['/api/guides/payments/send', 'Send Payment'],
    //         ],
    //       },
    //     ],
    //   }, ],
    //   '/api/reference/rest/': [{
    //       title: 'REST Reference', // required
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 0, // optional, defaults to 1
    //       children: [
    //         ['/api/reference/rest/v1/', 'Resource Summary']
    //       ],
    //     },
    //     {
    //       title: 'REST Resources', // required
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 1, // optional, defaults to 1
    //       // children: getApiSidebar(),
    //       children: [
    //         get_sidebar_reference_merchant(),
    //         get_sidebar_reference_merchant_balance(),
    //         get_sidebar_reference_merchant_logo(),
    //         get_sidebar_reference_merchant_payment_request(),
    //         get_sidebar_reference_merchant_payment_request_outcome(),
    //         get_sidebar_reference_merchant_payment_send(),
    //         get_sidebar_reference_merchant_payment_send_outcome(),
    //         get_sidebar_reference_merchant_pos(),
    //         get_sidebar_reference_merchant_sales_summary(),
    //         get_sidebar_reference_merchant_settlement(),
    //         get_sidebar_reference_merchant_settlement_account(),
    //         get_sidebar_reference_merchant_settlement_latest(),
    //         get_sidebar_reference_merchant_settlement_report(),
    //         get_sidebar_reference_merchant_shortlink(),
    //         get_sidebar_reference_merchant_ssp_users(),
    //         get_sidebar_reference_merchant_statusCodes(),
    //         get_sidebar_reference_merchant_users(),
    //         get_sidebar_reference_oauth2(),
    //         get_sidebar_reference_oauth2_auth_code(),
    //         get_sidebar_reference_oauth2_auth_request(),
    //         get_sidebar_reference_oauth2_auth_token(),
    //         get_sidebar_reference_oauth2_error(),
    //         get_sidebar_reference_oauth2_qrImage(),
    //         get_sidebar_reference_oauth2_user_info(),
    //         get_sidebar_reference_users_permissions(),
    //         get_sidebar_reference_users_permissions_request(),
    //         get_sidebar_reference_users_permissions_request_outcome(),
    //         get_sidebar_reference_users_permissions_scope(),
    //       ],
    //     },
    //     '/api/reference/rest/v1/types',
    //     // {
    //     //   title: 'Resources', // required
    //     //   collapsable: false, // optional, defaults to true
    //     //   sidebarDepth: 1, // optional, defaults to 1
    //     //   children: getResourcesSidebar(),
    //     // },
    //   ],
    //   '/api/support': [{
    //     title: 'Support', // required
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 0, // optional, defaults to 1
    //     children: [
    //       // get_sidebar_support(),
    //       ['/api/support/', 'How to Get Help'],
    //       [
    //         'https://stackoverflow.com/questions/tagged/settle-api',
    //         'Stack Overflow',
    //       ],
    //       [
    //         'https://stackoverflow.com/questions/tagged/settle-api',
    //         'Issue Tracker',
    //       ],
    //       [
    //         'https://stackoverflow.com/questions/tagged/settle-api',
    //         'Feature Request',
    //       ],
    //       ['/api/release-notes', 'Release Notes'],
    //       ['/api/terms', 'Terms of Service'],
    //     ],
    //   }, ],
    //   '/discovery': [{
    //     title: 'API Discovery Service', // required
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1, // optional, defaults to 1
    //     children: [
    //       get_sidebar_discovery_home(),
    //       get_sidebar_discovery_guides(),
    //       get_sidebar_discovery_reference(),
    //     ],
    //   }, ],
    //   '/': [{
    //       title: 'Introduction', // required
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 2, // optional, defaults to 1
    //       children: getIntroductionSidebar(),
    //     },
    //     {
    //       title: 'Guides', // required
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 2, // optional, defaults to 1
    //       children: getGuidesSidebar(),
    //     },
    //     {
    //       title: 'Tutorials', // required
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 0, // optional, defaults to 1
    //       children: getImpIntSidebar(),
    //     },
    //   ],
    // },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [require('./plugins/getTypes.js')],
  plugins: [
    // [require('./plugins/getTypes.js')],
    // [require('./plugins/getResource.js')],
    [require('./plugins/getOpenAPI.js')],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    // [
    //   'vuepress-plugin-right-anchor',
    //   {
    //     showDepth: 1,
    //     ignore: [
    //       '/',
    //       '/$discovery/',
    //       // more...
    //     ],
    //     expand: {
    //       default: true,
    //       trigger: 'hover',
    //     },
    //     customClass: 'onThisPageMenu',
    //     disableGlobalUI: false,
    //   },
    // ],
    [
      '@silvanite/markdown-classes',
      {
        prefix: 'md',
        rules: [
          'api_reference_FiraCode',
          'api_reference_method_heading',
          'api_reference_request_heading',
          'api_reference_types_heading',
        ],
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    ['vuepress-plugin-code-copy', true],
    'redirect-frontmatter',
    'img-lazy',
  ],
  extraWatchFiles: [
    // Navigation
    '.vuepress/nav/top/mainNav.js',
    // Sidebars
    '.vuepress/nav/sidebars.js',
    '.vuepress/nav/left/rest/rest.js',
    '.vuepress/nav/left/rest/v1/summary.js',
    '.vuepress/nav/left/rest/v1/resources.js',
    '.vuepress/nav/left/rest/v1/models/models.js',
    '.vuepress/nav/left/rest/v1/reference/merchant.js',
    '.vuepress/nav/left/rest/v1/reference/oauth2.js',
    '.vuepress/nav/left/rest/v1/reference/users.js',
    // Plugins
    '.vuepress/plugins/getOpenAPI.js',
  ],
};