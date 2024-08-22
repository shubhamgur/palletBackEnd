const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
  storageType: String,
  storageBin: Number,
  storageLocation: String,
  storageDescription: String,
  warehouse: String,
  plant: String
});

const user = mongoose.model('palletData', blogSchema);
module.exports = user ;
