'use strict'
require('dotenv').config();

module.exports = {
  jwt: {
    secret: process.env.JWT_TOKEN,
    expiresIn: '3h'
  },
  // You can add other configurations here
};