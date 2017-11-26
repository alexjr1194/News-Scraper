var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comments'
  }]
});

var Article = mongoose.model('Article', article);

module.exports = Article;
