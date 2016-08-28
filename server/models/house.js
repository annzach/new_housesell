const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  address: {type: String, required: true},
  sqft:{type: Number, required: true},
  beds:{type: Number, required: true},
  baths:{type: Number, required: true},
  price:{type: Number, required: true},
  picture:{type: String, required: true},
  zipcode:{type: Number, required: true},
  buyer:{ type: mongoose.Schema.Types.ObjectId, ref: 'Buyer' }
  // currentOwner:{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
  // previousOwner:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }]
});

const House = mongoose.model('House', houseSchema);
module.exports = House;



