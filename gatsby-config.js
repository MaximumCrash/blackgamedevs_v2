const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Black Game Developers`,
    description: `A list of black game developers, designers, artists, and more. Here they are. Hire them. Buy their stuff.`,
    author: `Arthur Ward, Jr, Catt Small, Chris Algoo, Réjon Taylor-Foster (@Maximum_Crash)`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `layouts`,
        path: `${__dirname}/src/modules/layouts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `directory`,
        path: `${__dirname}/directory/`,
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        preset: "@theme-ui/preset-funk",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    "gatsby-remark-unwrap-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/modules/layouts/default_layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "none",
              disableBgImage: true,
              maxWidth: 1000,
              wrapperStyle: result => `width: 100%;margin-left: 0;`,
            },
          },
          {
            resolve: "gatsby-remark-unwrap-images",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/modules/layouts/site_layout.js`),
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Black Game Developers`,
        short_name: `BGD`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#EF3054`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        include_favicon: false,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          workboxConfig: {
            globPatterns: ['**/*']
          }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Martel\:400,700`, `Poppins\:300,400,700`],
        display: "swap",
      },
    },
    {
      //NOTE(Rejon): This is what allows us to do aliased imports like "@modules/ect..."
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, "src"),
          "@modules": path.resolve(__dirname, "src/modules"),
          "@layouts": path.resolve(__dirname, "src/modules/layouts"),
          "@ui": path.resolve(__dirname, "src/modules/ui"),
          "@utils": path.resolve(__dirname, "src/utils.js"),
          "@search": path.resolve(__dirname, "src/modules/search"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@public": path.resolve(__dirname, "public"),
          "@dir": path.resolve(__dirname, "directory"),
        },
        extensions: [
          //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js",
        ],
      },
    },
  ],
}
