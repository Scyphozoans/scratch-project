const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  boardname: { type: String, required: true },
  storage: { type: Array, default: [[], [], [], []] },
  users: { type: Object, default: {} },
});

module.exports = mongoose.model('Board', boardSchema);
