const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const UserSchema = new Schema({
  __id: {
    type: String,
    default: uuidv4,
  },
  name: String,
  dateOfBirth: Date,
  docType: String,
  docNumber: String,
  email: String,
  password: String,
  statur: Number,
  address: {
    street: String,
    complement: String,
    country: String,
    state: String,
    city: String,
    zipCode: String,
    number: String,
  },
}, {
  timestamps: {},
});

module.exports = new mongoose.model('User', UserSchema);
