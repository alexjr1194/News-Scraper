var db = require('../models');
var request = require("request");
var cheerio = require("cheerio");

module.exports = function (app) {
  app.get('/scrape', function (req, res) {
    request('https://www.nytimes.com/section/world', function (err, response, html) {
      var $ = cheerio.load(html);
      var result = {};

      $('div.story-body').each(function (i, element) {
        var link = $(element).find('a').attr('href');
        var title = $(element).find('h2.headline').text().trim();
        var summary = $(element).find('p.summary').text().trim();
        result.link = link;
        result.title = title;
        if (summary) {
          result.summary = summary;
        }
        var entry = new db.Article(result);
        db.Article.find({title: result.title}, function (err, data) {
          if (data.length === 0) {
            entry.save(function (err, data) {
              if (err) throw err;
            });
          }
        });
      });
      console.log('scrape finished');
      res.redirect('/');
    });
  });
};
