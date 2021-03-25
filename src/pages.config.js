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
      sidebarPath: require.resolve( './sidebars/community' ),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'database',
      path: 'content/database',
      routeBasePath: 'database',
      sidebarPath: require.resolve( './sidebars/database' ),
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
      sidebarPath: require.resolve( './sidebars/presenter' ),
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
      id: 'tutorials',
      path: 'content/tutorials',
      routeBasePath: 'tutorials',
      sidebarPath: require.resolve( './sidebars/tutorials' ),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'viewer',
      path: 'content/viewer',
      routeBasePath: 'viewer',
      sidebarPath: require.resolve( './sidebars/viewer' ),
    },
  ],
]

module.exports = pages
