/* eslint-disable global-require */

const pages = require( './src/pages.config' )
const { EDIT_URL } = require( './src/consts' )

module.exports = {
  title: 'Shabad OS Docs',
  tagline: 'Documentation site for Shabad OS',
  url: 'https://docs.shabados.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shabados',
  projectName: 'docs',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
        lightIcon: '😎',
        lightIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
      },
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like Shabad OS, give our repos a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/shabados">GitHub</a>! ⭐️',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Documentation',
      logo: {
        alt: 'ShabadOS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/',
          label: 'Products',
          position: 'left',
          items: [
            { to: 'database/', label: 'Database' },
            { to: 'presenter/', label: 'Presenter' },
            { to: 'viewer/', label: 'Viewer' },
            { to: 'mobile/', label: 'Mobile' },
            { to: 'gurmukhi-utils/', label: 'Gurmukhi Utils' },
            { to: 'theme-tool/', label: 'Theme Tool' },
          ],
        },
        { to: 'tutorials/', label: 'Tutorials', position: 'left' },
        { to: 'community/', label: 'Community', position: 'left' },
        {
          href: 'https://github.com/shabados/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // https://v2.docusaurus.io/docs/search/
      apiKey: 'placeholder',
      indexName: 'placeholder',
    },
    prism: {
      theme: require( 'prism-react-renderer/themes/github' ),
      darkTheme: require( 'prism-react-renderer/themes/vsDark' ),
      defaultLanguage: 'javascript',
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              href: 'https://chat.shabados.com',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/shabad_os',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/shabad_os',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shabados/docs',
            },
          ],
        },
      ],
    },
  },
  plugins: [ ...pages ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl: EDIT_URL,
        },
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      },
    ],
  ],
}
