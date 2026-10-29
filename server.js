// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Serve Frontend static files
app.use(express.static(path.join(__dirname, 'frontend')));

// API Routes
app.use('/api/tasks', taskRoutes);

// Catch-all route to serve index.html for frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});