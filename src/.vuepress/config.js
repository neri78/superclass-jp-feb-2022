const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Superclassハンズオンラボ',
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    // sidebar: 'auto'
    // sidebar: [
    //   {
    //     title: 'Group 1',   // required
    //     path: '/labs/01-twilio-functions/',      // optional, link of the title, which should be an absolute path and must exist
    //     sidebarDepth: 10,    // optional, defaults to 1
    //     children: [
    //       '/labs/01-twilio-functions/2',
    //       '/3'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     path: '/labs/02-anonymous-calls/',      // optional, link of the title, which should be an absolute path and must exist
    //     collapsable: true, // optional, defaults to true
    //     sidebarDepth: 1,    // optional, defaults to 1
    //     children: [
    //       '',
    //       '1'
    //     ]
    //   }
    // ]
    sidebar: [
      {
      title: "Twilio Functionsの活用",
      collapsable: true,
      // path: '/labs/01-twilio-functions/',
      children: [
          '/labs/01-twilio-functions/',
          '/labs/01-twilio-functions/ui-base-function',
          '/labs/01-twilio-functions/runtime-handler',
          '/labs/01-twilio-functions/serverless-toolkit'
        ],
        displayAllHeaders: true
      },
      {
        title: "匿名通話の実現",
        collapsable: true,
        children: [
          '/labs/02-anonymous-calls/',
          '/labs/02-anonymous-calls/twilio-proxy',
          '/labs/02-anonymous-calls/twilio-client'
        ],
        displayAllHeaders: true
      },
      {
        title: "Twilio Frontlineの体験",
        collapsable: true,
        children: [
          '/labs/03-twilio-frontline/',
          '/labs/03-twilio-frontline/twilio-frontline',
          '/labs/03-twilio-frontline/sso',
          '/labs/03-twilio-frontline/integration-service'
        ],
        displayAllHeaders: true
      }
      ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
