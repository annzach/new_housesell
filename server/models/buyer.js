const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phoneNum: {type: Number, required: true},
  email:{type: String}
});

const Buyer = mongoose.model('Buyer', buyerSchema);
module.exports = Buyer;
