require("ts-node").register({ files: true });

/** @type { import("gatsby").GatsbyConfig } */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.tsx?$/,
        stages: ["develop", "build-javascript"],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          localIdentName: "[emoji]",
        },
      },
    },
    "gatsby-plugin-typescript",
  ],
};
