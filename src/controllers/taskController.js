// src/controllers/taskController.js
const Task = require('../models/taskModel');

// GET /tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// POST /tasks
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = await Task.create(title);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// PUT /tasks/:id
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    
    const updated = await Task.toggleComplete(id, completed);
    if (!updated) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// DELETE /tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.delete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};