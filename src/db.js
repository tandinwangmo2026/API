// src/db.js
const mysql = require('mysql2');
require('dotenv').config();

// Create the connection pool. 
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Aiven requires SSL connections
  ssl: {
    rejectUnauthorized: false 
  }
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to Aiven MySQL database.');
    connection.release(); // Return connection to the pool
  }
});

// Export the promise-wrapped pool for async/await usage
module.exports = pool.promise();