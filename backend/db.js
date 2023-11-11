const mongoose = require("mongoose")

async function config(){
    await mongoose.connect("mongodb://localhost:27017")
    console.log("db.js -> Database Connection Successfull")
}

exports.config = config