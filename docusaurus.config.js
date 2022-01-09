// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DC Kirrberg e.V.',
  tagline: 'Herzlich Willkommen auf der Website des Dartsportverein DC Kirrberg e.V.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dckirrberg', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dckirrberg/website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dckirrberg/webiste/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'DC Kirrberg',
        items: [
          {to: '/team', label: 'Über uns', position: 'left'},
          {to: '/spenden', label: 'Spenden', position: 'left'},
          {to: '/sponsoring', label: 'Sponsor', position: 'left'},
          {to: '/blog', label: 'News', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mehr',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/dckirrberg',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/dckirrberg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Impressum',
                to: '/docs/impressum',
              },
            ],
          },
        ],
        copyright: `E-Mail: <a href="mailto:vorstand@dcirrberg.de">vorstand@dcirrberg.de</a> - © ${new Date().getFullYear()} DC Kirrberg e.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
