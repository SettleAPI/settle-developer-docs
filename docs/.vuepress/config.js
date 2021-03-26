const { description } = require('../../package');
const moment = require('moment');

module.exports = {
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
    // lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Getting Started',
        link: '/introduction/',
      },
      {
        text: 'Guides',
        link: '/guides/',
      },
      {
        text: 'Reference',
        ariaLabel: 'API Reference Menu',
        items: [
          {
            text: 'APIs',
            items: [
              { text: 'Settle Merhant', link: '/api/reference/rest/v1/merchant/getProfile' },
              { text: 'Settle OAuth', link: '/api/oauth' },
              { text: 'Settle Send', link: '/api/send' },
            ],
          },
          {
            text: 'Resources',
            items: [
              { text: 'Endpoints', link: '/api/resources/endpoints' },
              { text: 'Complex Types', link: '/api/resources/types' },
            ],
          },
        ],
      },
      {
        text: 'Tutorials',
        link: '/tutorials/implementation-and-integration/pos-with-static-qr/',
      },
    ],
    sidebar: {
      '/api/reference/rest': [
        {
          title: 'REST Reference', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
          children: [['/api/reference/rest/', 'Resource Summary']],
        },
        {
          title: 'REST Resources', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          // children: getApiSidebar(),
          children: [
            // '/api/reference/rest/v1/merchant/getProfile',
            // '/api/reference/rest/v1/merchant/lookup',
            // '/api/reference/rest/v1/merchant.paymentRequest/create',
            // '/api/reference/rest/v1/merchant.paymentRequest/list',
            // '/api/reference/rest/v1/merchant.paymentRequest/modify',
            // '/api/reference/rest/v1/merchant.paymentRequest/getOutcome',
            get_sidebar_reference_merchant(),
            get_sidebar_reference_merchant_payment_request(),
            get_sidebar_reference_merchant_payment_request_outcome(),
          ],
        },
        '/api/reference/rest/v1/types',
        {
          title: 'Resources', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: getResourcesSidebar(),
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
          sidebarDepth: 2, // optional, defaults to 1
          children: getImpIntSidebar(),
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
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

function get_sidebar_reference_merchant_payment_request() {
  return {
    title: 'merchant.paymentRequest', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.paymentRequest/', 'Overview'],
      ['/api/reference/rest/v1/merchant.paymentRequest/create', 'create'],
      ['/api/reference/rest/v1/merchant.paymentRequest/list', 'list'],
      ['/api/reference/rest/v1/merchant.paymentRequest/modify', 'modify'],
      ['/api/reference/rest/v1/merchant.paymentRequest/get', 'get'],
      // ['/api/reference/rest/v1/merchant.paymentRequest/getOutcome', 'getOutcome'],
    ],
  };
}

function get_sidebar_reference_merchant_payment_request_outcome() {
  return {
    title: 'merchant.paymentRequest.outcome', // required
    // path: '/api/reference/rest/v1/merchant.paymentRequest/',
    collapsable: true,
    sidebarDepth: 0,
    children: [
      ['/api/reference/rest/v1/merchant.paymentRequest.outcome/', 'Overview'],
      ['/api/reference/rest/v1/merchant.paymentRequest.outcome/get', 'get'],
    ],
  };
}

function getImpIntSidebar() {
  return [
    '/tutorials/implementation-and-integration/pos-with-static-qr',
    [
      '/tutorials/implementation-and-integration/ecr-solutions',
      'Integrating ECR solutions',
    ],
  ];
}
