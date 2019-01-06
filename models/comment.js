const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema =  new Schema({
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "active"
  },
  text: {
      type: String,
      required: true
  },
  articleId: {
      type: String,
      required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
module.exports =  mongoose.model('Comment', commentSchema);
