/* eslint-disable global-require */
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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shabados/docs',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve( './sidebars.js' ),
          editUrl: 'https://github.com/shabados/docs/edit/dev/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/shabados/docs/edit/dev/website/blog/',
        },
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      },
    ],
  ],
}
