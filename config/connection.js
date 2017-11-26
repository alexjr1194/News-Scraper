var mongoose = require('mongoose');

let connection = mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/newsScraper', {
    useMongoClient: true
  }
);

module.exports = connection;
