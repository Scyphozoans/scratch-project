const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK = 10;
const bcrypt = require('bcryptjs');

// define user schema
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, SALT_WORK, function(err, hash) {
    this.password = hash;
  });
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema);