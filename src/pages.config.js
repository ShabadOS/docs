const { EDIT_URL } = require( './consts' )

const sharedValues = {
  editUrl: EDIT_URL,
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
}

const pages = [
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'community',
      path: 'content/community',
      routeBasePath: 'community',
      sidebarPath: require.resolve( '../content/community/sidebar' ),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'database',
      path: 'content/database',
      routeBasePath: 'database',
      sidebarPath: require.resolve( '../content/database/sidebar' ),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'gurmukhi-utils',
      path: 'content/gurmukhi-utils',
      routeBasePath: 'gurmukhi-utils',
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'mobile',
      path: 'content/mobile',
      routeBasePath: 'mobile',
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'presenter',
      path: 'content/presenter',
      routeBasePath: 'presenter',
      sidebarPath: require.resolve( '../content/presenter/sidebar' ),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'theme-tool',
      path: 'content/theme-tool',
      routeBasePath: 'theme-tool',
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'viewer',
      path: 'content/viewer',
      routeBasePath: 'viewer',
      sidebarPath: require.resolve( '../content/viewer/sidebar' ),
    },
  ],
]

module.exports = pages
