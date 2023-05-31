
const User = require('../models/userModel');

const cookieController = {};

// store the user id in a cookie
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.userId, {
    nextAge: 6000,
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;