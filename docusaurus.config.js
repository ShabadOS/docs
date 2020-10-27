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
        src: 'img/logo.svg',
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
              label: 'Slack',
              href: 'https://shabados.slack.com',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/shabad_os',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/shabad_os',
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/15166196059',
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
