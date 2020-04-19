require("ts-node").register({ files: true });

/** @type { import("gatsby").GatsbyConfig } */
module.exports = {
  plugins: ["gatsby-plugin-typescript"],
};
