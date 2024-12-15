import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Currency Prices API',
  tagline: 'Get Real-Time Currency Prices in Any Base Currency — 100% Free and Easy to Use!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://currency.babakcode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/doc/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/babakcode/currency.prices.free/blob/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/babakcode/currency.prices.free/blob/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    metadata: [
      { name: 'icon', type: 'image/png', href: '/img/favicon-96x96.png', sizes: '96x96' },
      { name: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg' },
      { name: 'shortcut icon', href: '/img/favicon.ico' },
      { name: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
      { name: 'apple-mobile-web-app-title', content: 'Currencies' },
      { name: 'manifest', href: '/img/site.webmanifest' },
    ],
    image: 'img/currency-card.jpg',
    navbar: {
      title: 'Online Currency API',
      logo: {
        alt: 'Currency Prices API for free',
        src: 'img/favicon-96x96.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/babakcode/currency.prices.free',
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
              to: '/doc/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://YouTube.com/@BabakCode',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/babakcode/currency.prices.free',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Currency BabakCode, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
