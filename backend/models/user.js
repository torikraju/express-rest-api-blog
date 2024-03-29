const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Object,
    default: 'I am new!'
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamp: true });

module.exports = mongoose.model('User', userSchema);
