# Task APIs - Full Stack Task Manager

A simple full-stack Task Manager application built with Node.js, Express, MySQL (Aiven), and vanilla JavaScript.

## 🚀 Features
- View all tasks
- Add a new task
- Toggle task completion status
- Delete a task
- Connects securely to an Aiven MySQL database using SSL

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Aiven Cloud)
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Libraries:** `mysql2`, `dotenv`, `cors`

## 📁 Project Structure
```text
TaskAPIs-main/
├── database/
│   └── schema.sql          # SQL script to set up the database
├── frontend/
│   ├── index.html          # Main UI
│   ├── script.js           # Frontend logic (Fetch API)
│   └── style.css           # Styling
├── src/
│   ├── controllers/        # Request/Response logic
│   ├── models/             # Database queries
│   ├── routes/             # API endpoints
│   └── db.js               # MySQL connection pool
├── .env.example            # Example environment variables
├── .gitignore              # Files to ignore in Git
├── package.json            # Project dependencies
├── server.js               # Express server entry point
└── test-db.js              # (Optional) Script to test DB connection