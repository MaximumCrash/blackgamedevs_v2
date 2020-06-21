const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Black Game Devs`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        path: `${__dirname}/src/layouts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${__dirname}/people/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `companies`,
        path: `${__dirname}/companies/`,
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
          default: require.resolve("./src/components/default_layout.js"),
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
        component: require.resolve(`./src/layouts/site_layout.js`),
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
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
          "@components": path.resolve(__dirname, "src/components"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@public": path.resolve(__dirname, "public"),
          "@people": path.resolve(__dirname, "people"),
          "@companies": path.resolve(__dirname, "companies"),
        },
        extensions: [
          //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [
          {
            name: "en",
            filterNodes: node =>
              node.frontmatter !== undefined &&
              node.fileAbsolutePath &&
              node.fileAbsolutePath.match(/(\/people\/|\/companies\/).+/) !==
                null,
          },
        ],
        fields: [
          { name: "name", store: true, attributes: { boost: 20 } },
          { name: "location", store: true, attributes: {boost: 10} },
          { name: "skills", store: true, attributes: { boost: 15 } },
          { name: "id", store: true },
          { name: "type", store: true },
        ],
        resolvers: {
          Mdx: {
            name: ({ rawBody }) => {
              return rawBody
                ? rawBody
                    .split("\n")
                    .find(n => n[0] === "#")
                    .replace(/^#\s/, "")
                : null
            },
            location: ({ rawBody }) => {
              return rawBody
                ? rawBody
                    .substring(
                      rawBody.lastIndexOf("<Location>") + 11,
                      rawBody.lastIndexOf("</Location>")
                    )
                    .split("\n")
                    .filter(n => n !== "")
                : null
            },
            skills: ({ rawBody }) => {
              return rawBody
                ? rawBody
                    .substring(
                      rawBody.lastIndexOf("<Skills>") + 9,
                      rawBody.lastIndexOf("</Skills>")
                    )
                    .split("\n")
                    .filter(n => n !== "")
                : null
            },
            id: ({ id }) => id,
            type: ({ fileAbsolutePath }) => {
              const pathHasType =
                fileAbsolutePath.includes("/people/") ||
                fileAbsolutePath.includes("/companies/")

              if (pathHasType) {
                if (fileAbsolutePath.includes("/people")) {
                  return "people"
                }

                return "companies"
              } else {
                return null
              }
            },
          },
        },
        filename: "search_index.json",
        fetchOptions: {
          credentials: "same-origin",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
