module.exports = {
  tutorialsSidebar: [
    'index',
    'install',
    'url-endpoints',
    'chromecast',
    {
      collapsed: false,
      type: 'category',
      label: 'Viewer',
      items: [ 'viewer/proofreading' ],
    },
    {
      type: 'category',
      label: 'Overlay',
      items: [
        'overlay/index',
        'overlay/get-started',
        'overlay/add-livestream-captioning',
        'overlay/create-custom-theme',
      ],
    },
  ],
}
