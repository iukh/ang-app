const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema =  new Schema({
  name:  {
      type: String,
      required: true
  },
  email:  {
    type: String,
    unique: true,
    required: true
  },
  password:  {
      type: String,
      required: true
  },
  isAdmin:  {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "Active"
  }
});
customerSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};
module.exports = mongoose.model('Customer', customerSchema);
