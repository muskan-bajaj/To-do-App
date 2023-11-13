const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const events = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  createdOn: {
    type: String,
    required: true,
  },
  Priority: {
    type: Number,
    required: true,
  },
  Completed: {
    type: Boolean,
    required: true,
  },
  Index: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("tasks", events);
