module.exports = {
  databaseSidebar: [
    'index',
    'source-material',
    'installing-or-accessing',
    {
      type: 'category',
      label: 'Schema',
      items: [ 'schema/overview', 'schema/lines', 'schema/sources', 'schema/line_content', 'schema/line_types', 'schema/shabads', 'schema/writers', 'schema/sections', 'schema/subsections', 'schema/compositions', 'schema/languages', 'schema/transliterations', 'schema/translation_sources', 'schema/translations', 'schema/banis', 'schema/bani_lines' ],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [ 'usage/index', 'usage/queries' ],
    },
  ],
}
