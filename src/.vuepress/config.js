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
  dest: 'docs/',
  base: '/superclass-jp-feb-2022/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0263E0' }],
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
    ],
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
