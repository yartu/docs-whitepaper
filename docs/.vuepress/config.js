import { defaultTheme, viteBundler } from "vuepress";

module.exports = {
  title: "Yartu Blocksuite Whitepaper",
  description: "Future of Business Applications",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        href: "/images/logos/yartu-logo-icon.svg",
      },
    ],
    // ["link", { rel: "stylesheet", type: "text/css", href: "/input.css" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/reset.css",
      },
    ],
    // ["script", { src: "https://cdn.tailwindcss.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/icons/colored-icons/yartu-colored-icons.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/icons/font-icons/yartu-icons.css",
      },
    ],
  ],
  theme: defaultTheme({
    logo: "/images/logos/yartu-logo.svg",
    logoDark: "/images/logos/yartu-logo-dark.png",
    navbar: [
      // NavbarItem
      {
        text: "Abstract",
        link: "/whitepaper/abstract.md",
      },
    ],
    sidebar: {
      "/whitepaper/": [
        {
          text: "Abstract",
          link: "/whitepaper/abstract.md",
        },
        {
          text: "About Yartu",
          link: "/whitepaper/about.md",
        },
        {
          text: "Products Developed By Yartu",
          children: [
            {
              text: "Yartu Suite",
              link: "/whitepaper/products/suite.md",
            },
            {
              text: "eYartu",
              link: "/whitepaper/products/eyartu.md",
            },
            {
              text: "Yartu Block Suite",
              link: "/whitepaper/products/blocksuite.md",
            },
          ],
        },

        {
          text: "Team",
          link: "/whitepaper/team.md",
        },
        {
          text: "Roadmap",
          link: "/whitepaper/roadmap.md",
        },
        {
          text: "Reference",
          link: "/whitepaper/reference.md",
        },
        {
          text: "Contact",
          link: "/whitepaper/contact.md",
        },
      ],
    },
  }),
  plugins: [
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, "./ComponentsUsage/"),
    //   componentsPatterns: "**/*",
    // }),
  ],
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  bundler: viteBundler({
    postcssOptions: {
      plugins: {
        tailwindcss: {
          config: "./tailwind.config.js",
        },
        autoprefixer: {},
      },
    },
  }),
};
