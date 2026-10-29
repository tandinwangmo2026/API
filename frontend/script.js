// frontend/script.js
const API_URL = '/api/tasks'; // Because Express serves the frontend, we can use relative path

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Fetch and render tasks
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    
    li.innerHTML = `
      <span onclick="toggleTask(${task.id}, ${!task.completed})">${task.title}</span>
      <button onclick="deleteTask(${task.id})" class="delete-btn">X</button>
    `;
    taskList.appendChild(li);
  });
}

// Add a new task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = taskInput.value;
  
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  
  taskInput.value = '';
  fetchTasks();
});

// Toggle task completion
async function toggleTask(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  fetchTasks();
}

// Delete a task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchTasks();
}

// Initial fetch on load
fetchTasks();