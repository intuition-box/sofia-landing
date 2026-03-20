import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sofia Chronicles',
  tagline: 'Sofia',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://sofia.intuition.box',
  baseUrl: '/docs-app/',

  organizationName: 'intuition-box',
  projectName: 'Sofia',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Sofia Chronicles',
          blogSidebarTitle: 'Last Articles',
          blogSidebarCount: 'ALL',
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
    image: 'img/favicon.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Sofia',
      logo: {
        alt: 'Sofia Logo',
        src: 'img/sofiaLogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Sofia Chronicles', position: 'left'},
        {
          href: 'https://github.com/intuition-box',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/bDXWsV7Bb',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', to: '/docs/intro' },
            { label: 'Sofia Chronicles', to: '/blog' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/bDXWsV7Bb' },
            { label: 'X', href: 'https://x.com/0xsofia3' },
            { label: 'GitHub', href: 'https://github.com/intuition-box' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Board', href: 'https://board-sofia.intuition.box/' },
            { label: 'Intuition', href: 'https://intuition.systems' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sofia — Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
