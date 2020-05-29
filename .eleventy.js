const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("src/assets/images/");

  eleventyConfig.addCollection("sectionsSorted", function (collectionApi) {
    return collectionApi.getFilteredByTag("section").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
    },
  };
};
