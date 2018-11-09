var feed = require('./node_modules/rss-to-json/index');

feed.load('https://blog.mozilla.org/addons/feed/', function(err, rss){
    console.log(rss);
});