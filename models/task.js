const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    category: String,
    dueDate: Date,
    completed: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
