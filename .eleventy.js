module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("src/assets/css/");

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
