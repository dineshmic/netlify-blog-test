const { DateTime } = require('luxon'); // Import Luxon's DateTime module

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // Remove single quotes from the dateObj string
        const dateStringWithoutQuotes = dateObj.replace(/'/g, '');
        
        // Parse the date string using Luxon's DateTime
        const parsedDate = DateTime.fromJSDate(new Date(dateStringWithoutQuotes));
        
        // Format the parsed date as a localized date string
        return parsedDate.toLocaleString(DateTime.DATE_MED);
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}