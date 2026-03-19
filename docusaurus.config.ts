import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ARS Electronic Wiki",
  tagline: "Документация по SOM-модулям и несущим платам ARS",
  favicon: "img/favicon.ico",

  // Настройки совместимости с будущими версиями
  future: {
    v4: true,
  },

  // Основной URL сайта
  url: "https://wiki.arselectronic.ru",
  baseUrl: "/",

  // Конфигурация для GitHub Pages (не используется для VPS, но оставлено для структуры)
  organizationName: "arselectronic",
  projectName: "ars-wiki",

  // Ошибка при сборке, если найдены битые ссылки
  onBrokenLinks: "throw",

  // Настройки локализации
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Изображение для превью в соцсетях
    image: "img/ars-wiki-social-card.jpg",
    colorMode: {
      // Уважать системную цветовую тему пользователя
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ARS Electronic Wiki",
      logo: {
        alt: "ARS Electronic",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Документация",
        },
        {
          href: "https://arselectronic.ru/store",
          label: "Каталог", // Исправлена опечатка в "Каталог"
          position: "right",
        },
        {
          href: "https://arselectronic.ru",
          label: "Главный сайт",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Разделы",
          items: [
            {
              label: "Введение",
              to: "/intro",
            },
          ],
        },
        {
          title: "Ссылки",
          items: [
            {
              label: "ARS Electronic",
              href: "https://arselectronic.ru",
            },
            {
              label: "Каталог продукции",
              href: "https://arselectronic.ru/store",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ARS Electronic. Документация по продуктам SOM и несущим платам.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
