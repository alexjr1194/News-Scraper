var db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Article.findAll({
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
    db.Article.FindAll({
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
