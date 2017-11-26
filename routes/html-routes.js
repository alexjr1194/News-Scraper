var db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Article.find({
      saved: false
    }, function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.render('home', {article: doc});
      }
    });
    // res.render('home');
  });

  app.get('/saved', function (req, res) {
    db.Article.find({
      saved: true
    }).populate('notes', 'body').exec(function (err, doc) {
      if (err) {
        res.send(err);
      } else {
        res.render('saved', {article: doc});
      }
    });
  });
};
