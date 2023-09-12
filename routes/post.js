const Task = require("../models/task.js");
const router = require("express").Router();

// Create a new task
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    const newTask = await task.save(); // Save the task
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a specific task by ID
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a task by ID
router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json("Task not found");
    }

    // Update task properties here
    // Example: task.text = req.body.text;
    // Update other properties as needed

    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a task by ID
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json("Task not found");
    }

    await task.deleteOne();
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
