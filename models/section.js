const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sectionSchema =  new Schema({
  sectionName:  {
      type: String,
      required: true
  },
  sectionOwner: {
    type: String,
    default: "admin"
  },
  isActive:  {
    type: Boolean,
    default: true
  },
  articles: {
    type: Array,
    dafault: []
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
module.exports =  mongoose.model('Section', sectionSchema);
