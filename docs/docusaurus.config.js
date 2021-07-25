const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Racoon Design',
  tagline: 'Bootstrap 4 Design System',
  url: 'https://axionstack.com/racoon-design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'axionstack', // Usually your GitHub org/user name.
  projectName: 'racoon-design', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Racoon Design',
      logo: {
        alt: 'Racoon Design',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'components',
          position: 'left',
          label: 'Components',
        },
        {
          href: 'https://github.com/axionstack/racoon-design',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/sE2AsaN8Rm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/axionstack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Axion Stack. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/axionstack/racoon-design/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/axionstack/racoon-design/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
