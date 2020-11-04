const { EDIT_URL } = require( './consts' )

const pages = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'community',
      path: 'content/community',
      routeBasePath: 'community',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'database',
      path: 'content/database',
      routeBasePath: 'database',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'gurmukhi-utils',
      path: 'content/gurmukhi-utils',
      routeBasePath: 'gurmukhi-utils',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'mobile',
      path: 'content/mobile',
      routeBasePath: 'mobile',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'presenter',
      path: 'content/presenter',
      routeBasePath: 'presenter',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'theme-tool',
      path: 'content/theme-tool',
      routeBasePath: 'theme-tool',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'tutorials',
      path: 'content/tutorials',
      routeBasePath: 'tutorials',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'viewer',
      path: 'content/viewer',
      routeBasePath: 'viewer',
      editUrl: EDIT_URL,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
]

module.exports = pages
