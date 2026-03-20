module.exports = function (eleventyConfig) {
  // Passthrough copy — static assets go straight to output unchanged
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/base.css");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/app.js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/admin");
  // Pass through uploaded images from CMS
  eleventyConfig.addPassthroughCopy("src/uploads");

  // Insights (blog) collection sorted by date descending
  eleventyConfig.addCollection("insights", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/insights/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Date formatting filter — "March 19, 2026"
  eleventyConfig.addFilter("dateFormat", function (date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Short date — "March 2026"
  eleventyConfig.addFilter("dateShort", function (date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  });

  // Reading time
  eleventyConfig.addFilter("readingTime", function (content) {
    if (!content) return "1 min read";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 230);
    return `${minutes} min read`;
  });

  // Excerpt — strip HTML, first 160 chars
  eleventyConfig.addFilter("excerpt", function (content) {
    if (!content) return "";
    const stripped = content.replace(/<[^>]+>/g, "");
    if (stripped.length <= 160) return stripped;
    return stripped.substring(0, 157) + "...";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
  };
};
