/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpCon',
  tagline: 'OpCon',
  url: 'http://sma-open-docs.azurewebsites.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opcon-docs', // Usually your GitHub org/user name.
  projectName: 'opcon-docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'bddf6389ef0ace7fe7c256dd06f93527',
      indexName: 'helpsmatechnologies',
      
      // Optional: see doc section below
      appId: 'INBLTCHZ2N',
    },       
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/opcon-docs/opcon-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/opcon-docs/opcon-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
