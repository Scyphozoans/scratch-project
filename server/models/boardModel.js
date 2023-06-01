const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  boardname: { type: String, required: true },
  storage: { type: Array, required: true, default: [[], [], [], []] },
  users: { type: Object, required: true },
});

module.exports = mongoose.model('Board', boardSchema);
