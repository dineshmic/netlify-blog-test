const { DateTime } = require('luxon'); 
/*
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
*/
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // Parse the date string directly using Luxon's DateTime
        const parsedDate = DateTime.fromISO(dateObj); 
        
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