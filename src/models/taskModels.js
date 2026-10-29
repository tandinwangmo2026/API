// src/models/taskModel.js
const db = require('../db');

const Task = {
  // Get all tasks
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return rows;
  },

  // Create a new task
  create: async (title) => {
    const [result] = await db.query(
      'INSERT INTO tasks (title, completed) VALUES (?, ?)', 
      [title, false]
    );
    return { id: result.insertId, title, completed: false };
  },

  // Toggle completion status
  toggleComplete: async (id, completed) => {
    const [result] = await db.query(
      'UPDATE tasks SET completed = ? WHERE id = ?',
      [completed, id]
    );
    return result.affectedRows > 0;
  },

  // Delete a task
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = Task;