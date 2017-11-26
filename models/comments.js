var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comments = new Schema({
  auther: {
    type: String
  },
  content: {
    type: String
  }
});

var Comments = mongoose.model('Comments', comments);

module.exports = Comments;
