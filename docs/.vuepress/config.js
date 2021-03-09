const { description } = require('../../package');

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
    lastUpdated: true,
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
              { text: 'Settle Merhant', link: '/api/merchant' },
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
      '/api/': [
        {
          title: 'API Reference', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: getApiSidebar(),
        },
        '/api/resources/types',
        {
          title: 'Resources', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: getResourcesSidebar(),
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
        showDepth: -1,
        ignore: [
          '/',
          // '/api/'
          // more...
        ],
        expand: {
          default: true,
          trigger: 'hover',
        },
        // customClass: 'your-customClass',
        disableGlobalUI: false,
      },
    ],
    [
      '@silvanite/markdown-classes',
      {
        prefix: 'md',
        rules: [
          'api_reference_FiraCode',
        ],
      },
    ],
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

function getApiSidebar() {
  return ['/api/merchant', '/api/oauth', '/api/send'];
}

function getResourcesSidebar() {
  return ['/api/resources/endpoints'];
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
