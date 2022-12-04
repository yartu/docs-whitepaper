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
          text: "Industry Analysis and Product Comparison",
          link: "/whitepaper/comparison.md",
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
          text: "YBS Protocols",
          link: "/whitepaper/protocols/index.md",
          children: [
            {
              text: "DAO",
              link: "/whitepaper/protocols/dao.md",
            },
            {
              text: "Yartu Domain Naming Service (YDNS)",
              link: "/whitepaper/protocols/dns.md",
            },
            {
              text: "Signed Mail Protocol",
              link: "/whitepaper/protocols/email.md",
            },
            {
              text: "DFile",
              link: "/whitepaper/protocols/dfile.md",
            },
            {
              text: "Private Set Membership",
              link: "/whitepaper/protocols/membership.md",
            },
            {
              text: "NFT",
              link: "/whitepaper/protocols/nft.md",
            },
          ],
        },
        {
          text: "YBS Services",
          link: "/whitepaper/ybs/index.md",
          children: [
            {
              text: "YBS E-mail Service",
              link: "/whitepaper/ybs/email.md",
            },
            {
              text: "YBS Drive Service",
              link: "/whitepaper/ybs/drive.md",
            },
            {
              text: "YBS Office Service",
              link: "/whitepaper/ybs/office.md",
            },
            {
              text: "YBS Calendar Service",
              link: "/whitepaper/ybs/calendar.md",
            },
            {
              text: "YBS Project Service",
              link: "/whitepaper/ybs/project.md",
            },
            {
              text: "YBS Directory Service",
              link: "/whitepaper/ybs/directory.md",
            },
            {
              text: "YBS Conference Service",
              link: "/whitepaper/ybs/conference.md",
            },
            {
              text: "YBS Note Service",
              link: "/whitepaper/ybs/note.md",
            },
          ],
        },
        {
          text: "Yartu Block Suite Ecosystem",
          link: "/whitepaper/ecosystem/index.md",
          children: [
            {
              text: "Yartu Block Suite",
              link: "/whitepaper/ecosystem/ybs.md",
            },
            {
              text: "YARTU Token",
              link: "/whitepaper/ecosystem/token.md",
            },
            {
              text: "Yartu Block Suite Access Account",
              link: "/whitepaper/ecosystem/account.md",
            },
            {
              text: "Yartu Block Suite Wallet",
              link: "/whitepaper/ecosystem/wallet.md",
            },
            {
              text: "Yartu NFT Market",
              link: "/whitepaper/ecosystem/nft.md",
            },
          ],
        },
        {
          text: "Blockchain Technology",
          link: "/whitepaper/blockchain.md",
        },
        {
          text: "Token Business Model",
          link: "/whitepaper/business-model.md",
        },
        {
          text: "Token Economy",
          link: "/whitepaper/token-economy.md",
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
