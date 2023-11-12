require("dotenv").config();
const mongoose = require("mongoose");

async function config() {
  await mongoose.connect(process.env.MONGOURL);
  console.log("Database Connection Successfull");
}

exports.config = config;
