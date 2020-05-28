const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

module.exports = class {
  async data() {
    const cssFilePath = path.join(__dirname, "styles.css");
    const isProductionBuild = process.env.ELEVENTY_ENV === "production";
    return {
      permalink: isProductionBuild ? false : "/styles/styles.css",
      cssFilePath,
      css: await readFile(cssFilePath),
      eleventyExcludeFromCollections: !isProductionBuild,
      tags: "cssasset",
    };
  }

  async render({ css, cssFilePath }) {
    return await postcss([
      require("postcss-import"),
      require("tailwindcss")("./tailwind.config.js"),
      require("postcss-nesting"),
      require("autoprefixer"),
      ...(process.env.ELEVENTY_ENV === "production"
        ? [require("cssnano")]
        : []),
    ])
      .process(css, { from: cssFilePath })
      .then((result) => result.css);
  }
};
