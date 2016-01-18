var fs = require('fs');

var extractor = require('extractor'),
pages  = ['http://dou.ua/'],
selector = {
	'page_title':'title',
	'titles': 'h2',
    'li': 'ul[id="fp-articles_recent"] > li > a ' // ul[id="fp-articles_recent"] > li:nth-child(1) > a 
    };
   
pages.forEach(function(page) {
    extractor.scrape(page, selector, function (err, data, env) {
        if (err) throw err;
 
        console.log("Processed " + env.pathname);
        console.log("Last modified " + env.modified);
        console.log("Page record: " + JSON.stringify(data));
        /*
        fs.writeFile("test.txt", JSON.stringify(data), function(err) {
            if(err) {
                    return console.log(err);
            }

            console.log("The file was saved!");
        }); 
        */
    });
});

// Run: > node scraper.js
