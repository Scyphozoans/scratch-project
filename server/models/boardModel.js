const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    boardName: { type: String, required: true },
    storage: { type: Array, default: [[],[],[],[]] },
    // users: { type: Object, required: true }
}, { minimize: false });

module.exports = mongoose.model('Board', boardSchema);
