// ---- GRAB ELEMENTS ----
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");

// ---- TASKS ARRAY ----
// This is our data. Every task is an object with 3 properties
let tasks = [];

// ---- RENDER TASKS ----
// This function reads the tasks array and builds the HTML
const renderTasks = () => {
  // Clear the list first to avoid duplicates
  taskList.innerHTML = "";

  // Loop through every task and create an li for each
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    // If task is completed add the completed class
    if (task.completed) {
      li.classList.add("completed");
    }

    // Build the inside of each task item
    li.innerHTML = `
      <input 
        type="checkbox" 
        class="task-checkbox" 
        ${task.completed ? "checked" : ""}
        data-index="${index}"
      />
      <span class="task-text">${task.text}</span>
      <button class="delete-btn" data-index="${index}">✕</button>
    `;

    taskList.appendChild(li);
  });

  // Update the counter every time tasks render
  updateCounter();
};

// ---- ADD TASK ----
const addTask = () => {
  // Get the value and remove extra spaces
  const text = taskInput.value.trim();

  // Don't add empty tasks
  if (text === "") {
    taskInput.style.boxShadow = "0 0 0 3px #e74c3c";
    setTimeout(() => {
      taskInput.style.boxShadow = "";
    }, 1000);
    return;
  }

  // Create a new task object and push to array
  tasks.push({
    text: text,
    completed: false,
  });

  // Clear the input
  taskInput.value = "";

  // Re-render the list
  renderTasks();
  saveTasks();
};

// ---- TOGGLE COMPLETE ----
const toggleTask = (index) => {
  // Flip the completed value
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  saveTasks();
};

// ---- DELETE TASK ----
const deleteTask = (index) => {
  // Remove task from array using filter
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
  saveTasks();
};

// ---- UPDATE COUNTER ----
const updateCounter = () => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  totalCount.textContent = `${total} task${total !== 1 ? "s" : ""}`;
  completedCount.textContent = `${completed} completed`;
};

// ---- EVENT LISTENERS ----

// Click the Add button
addBtn.addEventListener("click", addTask);

// Press Enter key to add task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// Click checkbox or delete button inside the list
// We listen on the parent because task items are created dynamically
taskList.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("task-checkbox")) {
    toggleTask(Number(index));
  }

  if (e.target.classList.contains("delete-btn")) {
    deleteTask(Number(index));
  }
});
// Save tasks to Local Storage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Load tasks from Local Storage
const loadTasks = () => {
  const saved = localStorage.getItem("tasks");
  tasks = saved ? JSON.parse(saved) : [];
};
// At the very bottom of your file
loadTasks();
renderTasks();
