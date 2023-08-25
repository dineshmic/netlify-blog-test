const { DateTime } = require('luxon'); 

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter("postDate", (dateObj) => {
        var dateStringWithoutQuotes = dateObj.replace(/'/g, '');
        var parsedDate = DateTime.fromJSDate(new Date(dateStringWithoutQuotes));
        return parsedDate.toLocaleString(DateTime.DATE_MED);
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}