const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema =  new Schema({
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "active"
  },
  rights: {
    type: String,
    default: "all"
  },
  title: {
    type: String,
    required: true
  },
  text: {
      type: String,
      required: true
  },
  answer: {
      type: String,
      required: true
  },
  sectionId: {
    type: String,
    required: true
  },
  sectionName: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
module.exports =  mongoose.model('Article', articleSchema);
