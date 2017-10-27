const mongoose = require('mongoose');

const PostModel = mongoose.model('Post', {
  title: String,
  text: String,
  authorName: String,
  comments: [{
    id: Number,
    authorName: String,
    text: String,
  }]
});

module.exports = PostModel;