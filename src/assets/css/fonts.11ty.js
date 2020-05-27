const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

module.exports = class {
  async data() {
    const cssFilePath = path.join(__dirname, "fonts.css");
    return {
      permalink: "/styles/fonts.css",
      cssFilePath,
      css: await readFile(cssFilePath),
      eleventyExcludeFromCollections: true,
    };
  }

  async render({ css, cssFilePath }) {
    return process.env.ELEVENTY_ENV === "production"
      ? await postcss([require("cssnano")])
          .process(css, { from: cssFilePath })
          .then((result) => result.css)
      : css;
  }
};
