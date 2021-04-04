const { description } = require('../../package');
require("dotenv").config({ path: ".env.local" });
// require('dotenv').config()
const moment = require('moment');
// console.log(process.env.GITHUB_TOKEN);

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

  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
  },

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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
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
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guides',
        link: '/api/guides/',
      },
      {
        text: 'Reference',
        link: '/api/reference/rest/v1/',
      },
      {
        text: 'Samples',
        link: '/api/samples/',
      },
      {
        text: 'Support',
        link: '/api/support/',
      },
      // {
      //   text: 'Reference',
      //   ariaLabel: 'API Reference Menu',
      //   items: [
      //     {
      //       text: 'REST Resources',
      //       items: [
      //         { text: 'Settle Merhant', link: '/api/reference/rest/v1/merchant/' },
      //         { text: 'Settle OAuth', link: '/api/reference/rest/v1/oauth2/' },
      //         { text: 'Settle Send', link: '/api/reference/rest/v1/merchant.payment.send/' },
      //       ],
      //     },
      //     {
      //       text: 'Resources',
      //       items: [
      //         { text: 'Endpoints', link: '/api/reference/rest/endpoints/' },
      //         { text: 'Complex Types', link: '/api/reference/rest/types/' },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: 'Tutorials',
      //   link: '/tutorials/',
      // },
    ],
    sidebar: {
      '/api/guides/': [
        {
          title: 'Guides', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            ['/api/guides/', 'Overview'],
            {
              title: 'Quickstarts', // required
              collapsable: false,
              children: [
                ['/api/guides/quickstarts/node', 'Node.js'],
                ['/api/guides/quickstarts/python', 'Python'],
              ],
            },
            {
              title: 'Request and Send Payments', // required
              collapsable: false,
              children: [
                ['/api/guides/payments/request', 'Request Payment'],
                ['/api/guides/payments/send', 'Send Payment'],
              ],
            },
          ],
        },
      ],
      '/api/reference/rest/': [
        {
          title: 'REST Reference', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
          children: [['/api/reference/rest/v1/', 'Resource Summary']],
        },
        {
          title: 'REST Resources', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          // children: getApiSidebar(),
          children: [
            get_sidebar_reference_merchant(),
            get_sidebar_reference_merchant_balance(),
            get_sidebar_reference_merchant_logo(),
            get_sidebar_reference_merchant_payment_request(),
            get_sidebar_reference_merchant_payment_request_outcome(),
            get_sidebar_reference_merchant_payment_send(),
            get_sidebar_reference_merchant_payment_send_outcome(),
            get_sidebar_reference_merchant_pos(),
            get_sidebar_reference_merchant_sales_summary(),
            get_sidebar_reference_merchant_settlement(),
            get_sidebar_reference_merchant_settlement_account(),
            get_sidebar_reference_merchant_settlement_latest(),
            get_sidebar_reference_merchant_settlement_report(),
            get_sidebar_reference_merchant_shortlink(),
            get_sidebar_reference_merchant_ssp_users(),
            get_sidebar_reference_merchant_statusCodes(),
            get_sidebar_reference_merchant_users(),
            get_sidebar_reference_oauth2(),
            get_sidebar_reference_oauth2_auth_code(),
            get_sidebar_reference_oauth2_auth_request(),
            get_sidebar_reference_oauth2_auth_token(),
            get_sidebar_reference_oauth2_error(),
            get_sidebar_reference_oauth2_qrImage(),
            get_sidebar_reference_oauth2_user_info(),
            get_sidebar_reference_users_permissions(),
            get_sidebar_reference_users_permissions_request(),
            get_sidebar_reference_users_permissions_request_outcome(),
            get_sidebar_reference_users_permissions_scope(),
          ],
        },
        '/api/reference/rest/v1/types',
        // {
        //   title: 'Resources', // required
        //   collapsable: false, // optional, defaults to true
        //   sidebarDepth: 1, // optional, defaults to 1
        //   children: getResourcesSidebar(),
        // },
      ],
      '/api/support': [
        {
          title: 'Support', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
          children: [
            // get_sidebar_support(),
            ['/api/support/', 'How to Get Help'],
            [
              'https://stackoverflow.com/questions/tagged/settle-api',
              'Stack Overflow',
            ],
            [
              'https://stackoverflow.com/questions/tagged/settle-api',
              'Issue Tracker',
            ],
            [
              'https://stackoverflow.com/questions/tagged/settle-api',
              'Feature Request',
            ],
            ['/api/release-notes', 'Release Notes'],
            ['/api/terms', 'Terms of Service'],
          ],
        },
      ],
      '/discovery': [
        {
          title: 'API Discovery Service', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            get_sidebar_discovery_home(),
            get_sidebar_discovery_guides(),
            get_sidebar_discovery_reference(),
          ],
        },
      ],
      '/': [
        {
          title: 'Introduction', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: getIntroductionSidebar(),
        },
        {
          title: 'Guides', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: getGuidesSidebar(),
        },
        {
          title: 'Tutorials', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
          children: getImpIntSidebar(),
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [require('./plugins/getTypes.js')],
  plugins: [
    [require('./plugins/getTypes.js')],
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
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 1,
        ignore: [
          '/',
          '/$discovery/',
          // more...
        ],
        expand: {
          default: true,
          trigger: 'hover',
        },
        customClass: 'onThisPageMenu',
        disableGlobalUI: false,
      },
    ],
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

    // [
    //   'register-components',
    //   {
    //     components: [
    //       {
    //         name: 'Types',
    //         path: './components/Types.vue',
    //       },
    //     ],
    //   },
    // ],
  ],
};

function getIntroductionSidebar() {
  return [
    '/introduction/',
    '/introduction/interacting',
    '/introduction/callbacks',
    '/introduction/error-responses',
    '/introduction/media-type',
    '/introduction/a-note-on-settle-api-users',
    '/introduction/versioning',
    ['/introduction/resiliency', 'Resiliency'],
  ];
}

function getGuidesSidebar() {
  return [
    '/guides/',
    '/guides/authentication',
    '/guides/callbacks',
    '/guides/attachments',
    '/guides/ledgers',
    '/guides/settlements',
    '/guides/permission-requests',
    '/guides/qr-acceptance',
  ];
}

function get_sidebar_discovery_home() {
  return ['/discovery/', 'Overview'];
}

function get_sidebar_discovery_guides() {
  return {
    title: 'Guides', // required
    path: '/discovery/v1/guides/getting-started', // optional, link of the title, which should be an absolute path and must exist
    collapsable: false, // optional, defaults to true
    sidebarDepth: 0, // optional, defaults to 1
    children: [
      ['/discovery/v1/guides/getting-started', 'Introduction'],
      // get_sidebar_reference_payment_request(),
      // getReferencePosSidebar(),
    ],
  };
}

function get_sidebar_discovery_reference() {
  return {
    title: 'API Reference', // required
    path: '/discovery/v1/reference/', // optional, link of the title, which should be an absolute path and must exist
    collapsable: false, // optional, defaults to true
    sidebarDepth: 0, // optional, defaults to 1
    children: [
      ['/discovery/v1/reference/', 'Overview'],
      {
        title: 'Discovery Document', // required
        path: '/discovery/v1/reference/apis/', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0, // optional, defaults to 1
        children: [
          ['/discovery/v1/reference/apis/', 'Overview'],
          ['/discovery/v1/reference/apis/list', 'list'],
        ],
      },
    ],
  };
}

function getApiSidebar() {
  return [
    {
      title: 'Merchant API', // required
      // path: '/api/reference/merchant/getProfile', // optional, link of the title, which should be an absolute path and must exist
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      children: [
        '/api/reference/merchant/getProfile',
        '/api/reference/merchant/lookup',
        // get_sidebar_reference_payment_request(),
        // getReferencePosSidebar(),
      ],
      initialOpenGroupIndex: 0,
    },
    {
      title: 'OAuth API', // required
      path: '/api/oauth', // optional, link of the title, which should be an absolute path and must exist
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      // children: [
      //   '/'
      // ]
    },
    {
      title: 'Settle Send', // required
      path: '/api/send', // optional, link of the title, which should be an absolute path and must exist
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      // children: [
      //   '/'
      // ]
    },
  ];
}

function getReferencePosSidebar() {
  return {
    title: 'POS', // required
    path: '/api/reference/pos/overview', // optional, link of the title, which should be an absolute path and must exist
    // collapsable: true, // optional, defaults to true
    // sidebarDepth: 1, // optional, defaults to 1
    children: [
      ['/api/reference/pos/overview', 'Overview'],
      ['/api/reference/pos/create', 'Create POS'],
      '/api/reference/pos/list',
      '/api/reference/pos/update',
      '/api/reference/pos/delete',
      '/api/reference/pos/get',
    ],
    initialOpenGroupIndex: 0,
  };
}

function getResourcesSidebar() {
  return ['/api/resources/endpoints'];
}

function get_sidebar_reference_merchant() {
  return {
    title: 'merchant', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant/', 'Overview'],
      ['/api/reference/rest/v1/merchant/getProfile', 'getProfile'],
      ['/api/reference/rest/v1/merchant/lookup', 'lookup'],
    ],
  };
}

function get_sidebar_reference_merchant_balance() {
  return {
    title: 'merchant.balance', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.balance/', 'Overview'],
      ['/api/reference/rest/v1/merchant.balance/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_logo() {
  return {
    title: 'merchant.logo', // required
    // path: '/api/reference/rest/v1/merchant.logo.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.logo/', 'Overview'],
      ['/api/reference/rest/v1/merchant.logo/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_payment_request() {
  return {
    title: 'merchant.payment.request', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.request/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.request/create', 'create'],
      ['/api/reference/rest/v1/merchant.payment.request/list', 'list'],
      ['/api/reference/rest/v1/merchant.payment.request/update', 'update'],
      ['/api/reference/rest/v1/merchant.payment.request/get', 'get'],
      // ['/api/reference/rest/v1/merchant.paymentRequest/getOutcome', 'getOutcome'],
    ],
  };
}

function get_sidebar_reference_merchant_payment_request_outcome() {
  return {
    title: 'merchant.payment.request.outcome', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.request.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.request.outcome/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_payment_send() {
  return {
    title: 'merchant.payment.send', // required
    // path: '/api/reference/rest/v1/merchant.paymentsend/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.send/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.send/create', 'create'],
    ],
  };
}

function get_sidebar_reference_merchant_payment_send_outcome() {
  return {
    title: 'merchant.payment.send.outcome', // required
    // path: '/api/reference/rest/v1/merchant.paymentsend/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.payment.send.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.payment.send.outcome/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_pos() {
  return {
    title: 'merchant.pos', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.pos/', 'Overview'],
      ['/api/reference/rest/v1/merchant.pos/create', 'create'],
      ['/api/reference/rest/v1/merchant.pos/list', 'list'],
      ['/api/reference/rest/v1/merchant.pos/get', 'get'],
      ['/api/reference/rest/v1/merchant.pos/update', 'update'],
      ['/api/reference/rest/v1/merchant.pos/delete', 'delete'],
    ],
  };
}

function get_sidebar_reference_merchant_sales_summary() {
  return {
    title: 'merchant.sales.summary', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.sales.summary/', 'Overview'],
      ['/api/reference/rest/v1/merchant.sales.summary/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_settlement() {
  return {
    title: 'merchant.settlement', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_settlement_account() {
  return {
    title: 'merchant.settlement.account', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement.account/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement.account/get', 'get'],
      ['/api/reference/rest/v1/merchant.settlement.account/update', 'update'],
    ],
  };
}

function get_sidebar_reference_merchant_settlement_latest() {
  return {
    title: 'merchant.settlement.latest', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement.latest/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement.latest/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_settlement_report() {
  return {
    title: 'merchant.settlement.report', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.settlement.report/', 'Overview'],
      ['/api/reference/rest/v1/merchant.settlement.report/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_shortlink() {
  return {
    title: 'merchant.shortlink', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.shortlink/', 'Overview'],
      ['/api/reference/rest/v1/merchant.shortlink/create', 'create'],
      ['/api/reference/rest/v1/merchant.shortlink/list', 'list'],
      ['/api/reference/rest/v1/merchant.shortlink/get', 'get'],
      ['/api/reference/rest/v1/merchant.shortlink/update', 'update'],
      ['/api/reference/rest/v1/merchant.shortlink/delete', 'delete'],
    ],
  };
}

function get_sidebar_reference_merchant_ssp_users() {
  return {
    title: 'merchant.ssp.users', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.ssp.users/', 'Overview'],
      ['/api/reference/rest/v1/merchant.ssp.users/create', 'create'],
      ['/api/reference/rest/v1/merchant.ssp.users/get', 'get'],
      ['/api/reference/rest/v1/merchant.ssp.users/delete', 'delete'],
    ],
  };
}

function get_sidebar_reference_merchant_statusCodes() {
  return {
    title: 'merchant.statusCodes', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.statusCodes/', 'Overview'],
      ['/api/reference/rest/v1/merchant.statusCodes/list', 'list'],
      ['/api/reference/rest/v1/merchant.statusCodes/get', 'get'],
    ],
  };
}

function get_sidebar_reference_merchant_users() {
  return {
    title: 'merchant.users', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.users/', 'Overview'],
      ['/api/reference/rest/v1/merchant.users/create', 'create'],
      ['/api/reference/rest/v1/merchant.users/get', 'get'],
      ['/api/reference/rest/v1/merchant.users/update', 'update'],
      ['/api/reference/rest/v1/merchant.users/delete', 'delete'],
    ],
  };
}

function get_sidebar_reference_oauth2() {
  return {
    title: 'oauth2', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [['/api/reference/rest/v1/oauth2/', 'Overview']],
  };
}

function get_sidebar_reference_oauth2_auth_code() {
  return {
    title: 'oauth2.auth.code', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.auth.code/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.auth.code/create', 'create'],
      ['/api/reference/rest/v1/oauth2.auth.code/get', 'get'],
    ],
  };
}

function get_sidebar_reference_oauth2_auth_request() {
  return {
    title: 'oauth2.auth.request', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.auth.request/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.auth.request/create', 'create'],
      ['/api/reference/rest/v1/oauth2.auth.request/get', 'get'],
    ],
  };
}

function get_sidebar_reference_oauth2_auth_token() {
  return {
    title: 'oauth2.auth.token', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.auth.token/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.auth.token/create', 'create'],
    ],
  };
}

function get_sidebar_reference_oauth2_error() {
  return {
    title: 'oauth2.error', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.error/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.error/get', 'get'],
    ],
  };
}

function get_sidebar_reference_oauth2_qrImage() {
  return {
    title: 'oauth2.qrImage', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.qrImage/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.qrImage/create', 'create'],
    ],
  };
}

function get_sidebar_reference_oauth2_user_info() {
  return {
    title: 'oauth2.user.info', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/oauth2.user.info/', 'Overview'],
      ['/api/reference/rest/v1/oauth2.user.info/get', 'get'],
    ],
  };
}

function get_sidebar_reference_users_permissions() {
  return {
    title: 'users.permissions', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/users.permissions/', 'Overview'],
      ['/api/reference/rest/v1/users.permissions/get', 'get'],
      ['/api/reference/rest/v1/users.permissions/update', 'update'],
    ],
  };
}

function get_sidebar_reference_users_permissions_request() {
  return {
    title: 'users.permissions.request', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/users.permissions.request/', 'Overview'],
      ['/api/reference/rest/v1/users.permissions.request/create', 'create'],
      ['/api/reference/rest/v1/users.permissions.request/get', 'get'],
    ],
  };
}

function get_sidebar_reference_users_permissions_request_outcome() {
  return {
    title: 'users.permissions.request.outcome', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/users.permissions.request.outcome/', 'Overview'],
      ['/api/reference/rest/v1/users.permissions.request.outcome/get', 'get'],
    ],
  };
}

function get_sidebar_reference_users_permissions_scope() {
  return {
    title: 'users.permissions.scope', // required
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/users.permissions.scope/', 'Overview'],
      ['/api/reference/rest/v1/users.permissions.scope/get', 'get'],
      ['/api/reference/rest/v1/users.permissions.scope/update', 'update'],
    ],
  };
}

function getImpIntSidebar() {
  return [
    ['/tutorials/', 'Introduction'],
    '/tutorials/implementation-and-integration/pos-with-static-qr',
    [
      '/tutorials/implementation-and-integration/ecr-solutions',
      'Integrating ECR solutions',
    ],
  ];
}

function get_sidebar_support() {
  return [
    ['/api/support/', 'How to Get Help'],
    ['https://stackoverflow.com/questions/tagged/settle-api', 'Stack Overflow'],
    ['https://stackoverflow.com/questions/tagged/settle-api', 'Issue Tracker'],
    [
      'https://stackoverflow.com/questions/tagged/settle-api',
      'Feature Request',
    ],
    ['/api/release-notes', 'Release Notes'],
    ['/api/terms', 'Terms of Service'],
  ];
}
