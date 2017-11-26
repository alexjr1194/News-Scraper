var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');

var app = express();
var port = process.env.PORT || 8080;

var db = require('./models');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var connection = require('./config/connection.js');


app.set('views', './views');
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

var htmlRoutes = require('./routes/html-routes.js')(app);


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('===============================\nSite is working on PORT: ' + port + '!!!');
  }
});
