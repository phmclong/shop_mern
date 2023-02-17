const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mapSchema = new Schema({
  tinh: Array,
  huyen: Array,
});

module.exports = mongoose.model("Map", mapSchema);
