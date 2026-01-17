# ✅ Todo List Application - React Day 2 Project

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A feature-rich, interactive Todo List application built with React to master **state management**, **lists & keys**, **event handling**, **forms**, and **conditional rendering**. Perfect for intermediate React learners! 🚀

---

## 📸 Preview

```
┌────────────────────────────────────────────┐
│                                            │
│         📝 My Todo List                    │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ Enter a new task...          [Add]   │ │
│  └──────────────────────────────────────┘ │
│                                            │
│  Filter: [All] [Active] [Completed]       │
│                                            │
│  ☐ Learn React Hooks                   ❌ │
│  ☑ Build Counter App                   ❌ │
│  ☐ Create Todo List                    ❌ │
│  ☐ Master State Management             ❌ │
│                                            │
│  Total: 4 | Completed: 1 | Active: 3      │
│                                            │
│           [Clear Completed]                │
│                                            │
└────────────────────────────────────────────┘
```

---

## 🎯 Project Goals

By building this project, you will learn:

✅ Managing complex state with arrays of objects  
✅ Working with forms and controlled inputs  
✅ Rendering dynamic lists with proper keys  
✅ Filtering and manipulating arrays  
✅ Conditional rendering with multiple states  
✅ Event handling (add, delete, toggle)  
✅ Component composition and data flow  
✅ Using unique IDs for list items  
✅ CSS animations and transitions  

---

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Lightning-fast build tool
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with animations
- **UUID** - Generating unique IDs (optional)

---

## 📚 Table of Contents

1. [Getting Started](#-getting-started)
2. [Project Setup (Step-by-Step)](#-project-setup-step-by-step)
3. [Project Structure](#-project-structure)
4. [Code Explanation](#-code-explanation)
5. [React Concepts Used](#-react-concepts-used)
6. [Features](#-features)
7. [How to Run](#-how-to-run)
8. [Customization Ideas](#-customization-ideas)
9. [Common Issues & Solutions](#-common-issues--solutions)
10. [Learning Outcomes](#-learning-outcomes)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js** (v14 or higher) installed
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Basic knowledge of React (completed Counter App)

### Quick Check

```bash
node --version  # Should show v14 or higher
npm --version   # Should show version number
```

---

## 📦 Project Setup (Step-by-Step)

Let's build this project together, step by step! 🎓

### Step 1: Create React Project with Vite

Open your terminal:

```bash
# Navigate to your desired folder
cd Desktop

# Create new React project
npm create vite@latest todo-list-app -- --template react

# What this does:
# - Creates a new folder called 'todo-list-app'
# - Sets up React with Vite build tool
# - Installs necessary dependencies configuration
```

### Step 2: Navigate and Install Dependencies

```bash
# Enter the project folder
cd todo-list-app

# Install all required packages
npm install

# This installs React, React-DOM, and other dependencies
# Wait for it to complete (1-2 minutes)
```

### Step 3: Clean Up Default Files

Remove files we don't need:

**Delete these:**
- `src/App.css` (we'll create our own)
- All `.svg` files in `src/`

### Step 4: Create Project Structure

Create a `components` folder inside `src/`:

```bash
# Mac/Linux
mkdir src/components

# Windows
mkdir src\components
```

**Your structure will look like this:**

```
todo-list-app/
├── node_modules/          (auto-generated)
├── public/
├── src/
│   ├── components/        👈 We'll create files here
│   │   ├── TodoForm.jsx       (Input form)
│   │   ├── TodoItem.jsx       (Single todo item)
│   │   ├── TodoList.jsx       (List of todos)
│   │   └── TodoFilter.jsx     (Filter buttons)
│   ├── App.jsx           (Main component)
│   ├── App.css           (Styles)
│   ├── main.jsx          (Entry point)
│   └── index.css         (Global styles)
├── index.html
├── package.json
└── vite.config.js
```

---

## 📁 Project Structure

Let's understand what each file does:

```
todo-list-app/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx      👉 Form to add new todos
│   │   ├── TodoItem.jsx      👉 Single todo display with checkbox & delete
│   │   ├── TodoList.jsx      👉 Container for all todo items
│   │   └── TodoFilter.jsx    👉 Filter buttons (All/Active/Completed)
│   │
│   ├── App.jsx               👉 Main app with state management
│   ├── App.css               👉 All application styles
│   ├── main.jsx              👉 Entry point (renders App)
│   └── index.css             👉 Global CSS reset
│
├── index.html                👉 HTML template
├── package.json              👉 Dependencies & scripts
└── vite.config.js            👉 Vite configuration
```

---

## 💻 Code Explanation

Now let's write the code step by step! I'll explain everything in simple terms. 🎓

### File 1: `src/components/TodoForm.jsx`

**Purpose:** Form component to add new todos

```jsx
// TodoForm.jsx - Add New Todo Component

import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  // 🎯 LOCAL STATE for input field
  // This tracks what the user is typing
  const [inputValue, setInputValue] = useState('');

  // 🎯 HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Validation: Don't add empty todos
    if (inputValue.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    // Call the parent function to add todo
    onAddTodo(inputValue);

    // Clear the input field
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        ➕ Add
      </button>
    </form>
  );
}

export default TodoForm;
```

**🎓 What's Happening?**

1. **Local State (`inputValue`)**: Tracks what user types in the input
2. **Controlled Input**: `value={inputValue}` makes React control the input
3. **onChange Handler**: Updates state as user types
4. **Form Submission**: 
   - `e.preventDefault()` stops page reload
   - Validates input (no empty tasks)
   - Calls parent function `onAddTodo`
   - Clears input field

**Real-World Analogy:** 📝  
Think of this like a **order form at a restaurant**:
- You write your order (inputValue)
- You submit it (handleSubmit)
- The kitchen receives it (onAddTodo)
- Your notepad is cleared for next order (setInputValue(''))

---

### File 2: `src/components/TodoItem.jsx`

**Purpose:** Single todo item with checkbox and delete button

```jsx
// TodoItem.jsx - Individual Todo Item Component

function TodoItem({ todo, onToggle, onDelete }) {
  // Props received:
  // - todo: Object with id, text, completed
  // - onToggle: Function to mark complete/incomplete
  // - onDelete: Function to delete this todo

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox to toggle completion */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />

      {/* Todo text */}
      <span className="todo-text">
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        title="Delete task"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
```

**🎓 Breaking It Down:**

1. **Props Destructuring**: Gets `todo`, `onToggle`, `onDelete` from parent
2. **Dynamic Class**: Adds 'completed' class if todo is done
3. **Checkbox**: 
   - `checked={todo.completed}` - Shows if task is done
   - `onChange` - Calls toggle function with todo ID
4. **Delete Button**: Calls delete function with todo ID

**Key Point:** 🔑  
We pass `todo.id` to functions, not the entire todo. This helps parent component find which todo to update/delete.

---

### File 3: `src/components/TodoList.jsx`

**Purpose:** Renders list of all todos

```jsx
// TodoList.jsx - Todo List Container Component

import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  // If no todos, show a friendly message
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 No tasks yet! Add one above to get started.</p>
      </div>
    );
  }

  // Render list of todos
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}              // ⚠️ IMPORTANT: Unique key
          todo={todo}                 // Pass todo data
          onToggle={onToggle}         // Pass toggle function
          onDelete={onDelete}         // Pass delete function
        />
      ))}
    </div>
  );
}

export default TodoList;
```

**🎓 What's Happening?**

1. **Empty State**: Shows message when no todos exist
2. **Array.map()**: Loops through todos and renders TodoItem for each
3. **Key Prop**: `key={todo.id}` helps React track items efficiently
4. **Props Passing**: Passes functions down to TodoItem

**Real-World Analogy:** 📚  
Like a **playlist**:
- Each song (todo) needs a unique ID
- The playlist (TodoList) displays all songs
- Each song item (TodoItem) can play/pause or delete
- Empty playlist shows "Add some songs!"

---

### File 4: `src/components/TodoFilter.jsx`

**Purpose:** Filter buttons to show All/Active/Completed todos

```jsx
// TodoFilter.jsx - Filter Buttons Component

function TodoFilter({ currentFilter, onFilterChange }) {
  // Filter options
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="todo-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-button ${
            currentFilter === filter ? 'active' : ''
          }`}
        >
          {/* Capitalize first letter */}
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
```

**🎓 Explanation:**

1. **Filter Array**: Defines available filters
2. **Dynamic Active Class**: Highlights current filter
3. **onClick Handler**: Updates filter when clicked
4. **Capitalization**: Makes "all" → "All" for display

---

### File 5: `src/App.jsx` (Main Component)

**Purpose:** Main app component with all state management

```jsx
// App.jsx - Main Application Component

import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

function App() {
  // 🎯 STATE MANAGEMENT

  // Main todos state - array of todo objects
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Build Counter App', completed: true },
    { id: 3, text: 'Create Todo List', completed: false }
  ]);

  // Filter state - tracks which filter is active
  const [filter, setFilter] = useState('all');

  // Next ID for new todos (increments with each addition)
  const [nextId, setNextId] = useState(4);


  // 🎯 ADD TODO FUNCTION
  const addTodo = (text) => {
    const newTodo = {
      id: nextId,              // Unique ID
      text: text,               // Todo text
      completed: false          // Initially not completed
    };

    // Add to beginning of array (newest first)
    setTodos([newTodo, ...todos]);

    // Increment ID for next todo
    setNextId(nextId + 1);
  };


  // 🎯 TOGGLE TODO COMPLETION
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }  // Toggle this todo
          : todo                                      // Keep others unchanged
      )
    );
  };


  // 🎯 DELETE TODO
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // Keeps all todos except the one with matching ID
  };


  // 🎯 CLEAR COMPLETED TODOS
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    // Keeps only incomplete todos
  };


  // 🎯 FILTER TODOS BASED ON CURRENT FILTER
  const getFilteredTodos = () => {
    switch(filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;  // 'all' - return everything
    }
  };

  // Get filtered todos for display
  const filteredTodos = getFilteredTodos();


  // 🎯 CALCULATE STATISTICS
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;


  // 🎯 JSX RETURN
  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <h1 className="app-title">📝 My Todo List</h1>

        {/* Add Todo Form */}
        <TodoForm onAddTodo={addTodo} />

        {/* Filter Buttons */}
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {/* Statistics */}
        <div className="stats">
          <span>Total: {totalTodos}</span>
          <span>Completed: {completedTodos}</span>
          <span>Active: {activeTodos}</span>
        </div>

        {/* Clear Completed Button */}
        {completedTodos > 0 && (
          <button onClick={clearCompleted} className="clear-button">
            🗑️ Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
```

**🎓 Deep Dive - State Management:**

#### **1. Todos State**
```jsx
const [todos, setTodos] = useState([...]);
```
- **Array of objects**: Each todo has `id`, `text`, `completed`
- **Why objects?** We need multiple properties per todo
- **Why array?** We have multiple todos

#### **2. Adding Todos**
```jsx
const newTodo = { id: nextId, text: text, completed: false };
setTodos([newTodo, ...todos]);
```
- Create new todo object
- Spread operator `...todos` keeps existing todos
- New todo goes first (newest on top)

#### **3. Toggling Todos**
```jsx
todos.map((todo) =>
  todo.id === id
    ? { ...todo, completed: !todo.completed }
    : todo
)
```
- **map()** creates new array
- **Ternary operator**: If ID matches, toggle `completed`
- **Spread operator** `...todo` keeps other properties
- **!todo.completed** flips boolean (true ↔ false)

#### **4. Deleting Todos**
```jsx
todos.filter((todo) => todo.id !== id)
```
- **filter()** keeps todos that don't match ID
- Returns new array without deleted todo

#### **5. Filtering Display**
```jsx
const getFilteredTodos = () => {
  switch(filter) {
    case 'active': return todos.filter(todo => !todo.completed);
    case 'completed': return todos.filter(todo => todo.completed);
    default: return todos;
  }
};
```
- **Doesn't modify original todos**
- Just filters what we display
- Real todos array stays unchanged

---

### File 6: `src/App.css`

**Purpose:** Complete styling for the application

```css
/* App.css - Todo List Application Styles */

/* ========== GLOBAL RESET ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== APP CONTAINER ========== */
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* ========== MAIN CONTAINER ========== */
.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== TITLE ========== */
.app-title {
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* ========== TODO FORM ========== */
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.todo-input {
  flex: 1;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;
}

.todo-input:focus {
  border-color: #667eea;
}

.add-button {
  padding: 15px 25px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(17, 153, 142, 0.3);
}

.add-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(17, 153, 142, 0.4);
}

.add-button:active {
  transform: translateY(0);
}

/* ========== FILTER BUTTONS ========== */
.todo-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.filter-button {
  padding: 10px 20px;
  background: #f0f0f0;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.filter-button:hover {
  background: #e0e0e0;
}

.filter-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

/* ========== TODO LIST ========== */
.todo-list {
  margin-bottom: 20px;
  max-height: 400px;
  overflow-y: auto;
}

/* Custom Scrollbar */
.todo-list::-webkit-scrollbar {
  width: 8px;
}

.todo-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.todo-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.todo-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* ========== TODO ITEM ========== */
.todo-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.3s;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.todo-item:hover {
  background: #f0f0f0;
  transform: translateX(5px);
}

/* Completed todo styling */
.todo-item.completed {
  background: #e8f5e9;
  opacity: 0.7;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

/* ========== CHECKBOX ========== */
.todo-checkbox {
  width: 24px;
  height: 24px;
  margin-right: 15px;
  cursor: pointer;
  accent-color: #667eea;
}

/* ========== TODO TEXT ========== */
.todo-text {
  flex: 1;
  font-size: 1.1rem;
  color: #333;
  word-break: break-word;
}

/* ========== DELETE BUTTON ========== */
.delete-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s;
  padding: 5px;
}

.delete-button:hover {
  opacity: 1;
  transform: scale(1.2);
}

/* ========== EMPTY STATE ========== */
.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 1.1rem;
}

.empty-state p {
  margin: 0;
}

/* ========== STATISTICS ========== */
.stats {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #555;
}

.stats span {
  font-size: 0.95rem;
}

/* ========== CLEAR COMPLETED BUTTON ========== */
.clear-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(235, 51, 73, 0.3);
}

.clear-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(235, 51, 73, 0.4);
}

.clear-button:active {
  transform: translateY(0);
}

/* ========== RESPONSIVE DESIGN ========== */
@media (max-width: 640px) {
  .container {
    padding: 20px;
  }

  .app-title {
    font-size: 2rem;
  }

  .todo-form {
    flex-direction: column;
  }

  .add-button {
    width: 100%;
  }

  .filter-button {
    flex: 1;
    font-size: 0.85rem;
  }

  .stats {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
```

**🎓 CSS Highlights:**

1. **Flexbox Layout**: Responsive and flexible
2. **Gradients**: Beautiful color transitions
3. **Animations**: 
   - `slideIn` - Container entrance
   - `fadeIn` - Todo items appear
4. **Hover Effects**: Interactive feedback
5. **Completed State**: Strikethrough and reduced opacity
6. **Custom Scrollbar**: Better UX for long lists
7. **Responsive**: Mobile-friendly breakpoints

---

### File 7: `src/main.jsx`

**Purpose:** Application entry point

```jsx
// main.jsx - Application Entry Point

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### File 8: `src/index.css`

**Purpose:** Global CSS reset

```css
/* index.css - Global Styles */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

---

## 🧠 React Concepts Used

### 1️⃣ **Complex State Management**

**Managing Array of Objects:**

```jsx
const [todos, setTodos] = useState([
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: true }
]);
```

**Real-World Analogy:** 📊  
Like a **spreadsheet**:
- Each row is a todo object
- Columns are properties (id, text, completed)
- You can add rows, delete rows, update cells

**Key Operations:**

```jsx
// ADD - Spread operator adds to beginning
setTodos([newTodo, ...todos]);

// UPDATE - Map creates new array with changes
setTodos(todos.map(todo => 
  todo.id === id ? { ...todo, completed: !todo.completed } : todo
));

// DELETE - Filter keeps everything except deleted
setTodos(todos.filter(todo => todo.id !== id));
```

---

### 2️⃣ **Controlled Components & Forms**

**What's a Controlled Component?**  
React controls the input value through state.

```jsx
const [inputValue, setInputValue] = useState('');

<input
  value={inputValue}              // React controls value
  onChange={(e) => setInputValue(e.target.value)}  // Updates state
/>
```

**Real-World Analogy:** 🎮  
Like a **video game controller**:
- You (user) press buttons (type)
- Controller (React state) tracks inputs
- Game (component) responds to controller state

**Why Controlled?**
- React always knows current value
- Easy to validate
- Can programmatically change value
- Single source of truth

---

### 3️⃣ **Lists and Keys**

**Why Keys Matter:**

```jsx
{todos.map((todo) => (
  <TodoItem
    key={todo.id}  // ⚠️ Must be unique and stable
    todo={todo}
  />
))}
```

**What Happens Without Keys?**

Imagine you have:
```
1. Buy milk
2. Learn React
3. Exercise
```

You delete "Learn React" (item 2).

**❌ Without proper keys:**
- React thinks item 3 became item 2
- Checkbox states get mixed up
- Wrong items might get deleted

**✅ With proper keys (IDs):**
- React knows exactly which item was removed
- Other items maintain their identity
- Everything works correctly

**Key Rules:**
1. Must be **unique** among siblings
2. Should be **stable** (don't change between renders)
3. Don't use array index if list can reorder/delete

---

### 4️⃣ **Props Drilling**

**What is Props Drilling?**  
Passing data down through multiple component levels.

```jsx
// App (has state and functions)
<TodoList 
  todos={todos}
  onToggle={toggleTodo}
  onDelete={deleteTodo}
/>

// TodoList (receives and passes down)
<TodoItem
  todo={todo}
  onToggle={onToggle}  // Passes function down
  onDelete={onDelete}
/>

// TodoItem (finally uses it)
<button onClick={() => onDelete(todo.id)}>Delete</button>
```

**Real-World Analogy:** 📬  
Like **mail delivery**:
- You (App) send a letter
- Goes through post office (TodoList)
- Finally reaches recipient (TodoItem)

---

### 5️⃣ **Conditional Rendering**

**Multiple Techniques Used:**

```jsx
// 1. Ternary - Choose between two options
<div className={`todo-item ${todo.completed ? 'completed' : ''}`}>

// 2. Logical AND - Show/hide element
{completedTodos > 0 && (
  <button onClick={clearCompleted}>Clear Completed</button>
)}

// 3. Early return - Empty state
if (todos.length === 0) {
  return <div>No todos yet!</div>;
}

// 4. Switch statement - Multiple conditions
switch(filter) {
  case 'active': return todos.filter(...);
  case 'completed': return todos.filter(...);
  default: return todos;
}
```

---

### 6️⃣ **Event Handling**

**Different Event Types:**

```jsx
// 1. Form submission
<form onSubmit={handleSubmit}>

// 2. Input change
<input onChange={(e) => setInputValue(e.target.value)} />

// 3. Button click
<button onClick={handleClick}>

// 4. Checkbox change
<input type="checkbox" onChange={() => onToggle(id)} />
```

**Passing Arguments to Event Handlers:**

```jsx
// ✅ Method 1: Arrow function
<button onClick={() => deleteTodo(id)}>Delete</button>

// ✅ Method 2: Inline arrow function
<input onChange={(e) => setInputValue(e.target.value)} />

// ❌ WRONG: Calls immediately
<button onClick={deleteTodo(id)}>Delete</button>
```

---

## ✨ Features

Our Todo List Application includes:

- ✅ **Add Todos** - Create new tasks with form submission
- ✅ **Mark Complete** - Checkbox to toggle completion
- ✅ **Delete Todos** - Remove individual tasks
- ✅ **Filter View** - Show All/Active/Completed
- ✅ **Statistics** - Display total, completed, active counts
- ✅ **Clear Completed** - Bulk delete completed tasks
- ✅ **Empty State** - Friendly message when no todos
- ✅ **Validation** - Prevent adding empty tasks
- ✅ **Beautiful UI** - Gradients, animations, hover effects
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - Slide and fade transitions

---

## 🎮 How to Run

### Option 1: Clone Repository

```bash
# Clone the repo
git clone <your-repo-url>

# Navigate to folder
cd todo-list-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Build from Scratch

Follow the [Project Setup](#-project-setup-step-by-step) section!

### Running the Application

After running `npm run dev`, open:

**http://localhost:5173/**

You should see your Todo List App! 🎉


---

## 🐛 Common Issues & Solutions

### Issue 1: Todos Not Updating

**Problem:** Changes don't appear on screen

**Causes & Solutions:**

```jsx
// ❌ WRONG: Mutating state directly
todos.push(newTodo);
setTodos(todos);

// ✅ CORRECT: Create new array
setTodos([...todos, newTodo]);
```

---

### Issue 2: Wrong Todo Gets Deleted

**Problem:** Deleting todo removes wrong item

**Cause:** Using index as key

```jsx
// ❌ WRONG: Index as key
{todos.map((todo, index) => (
  <TodoItem key={index} />
))}

// ✅ CORRECT: Unique ID as key
{todos.map((todo) => (
  <TodoItem key={todo.id} />
))}
```

---

### Issue 3: Input Not Clearing After Submit

**Problem:** Text stays in input after adding todo

**Solution:**

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  onAddTodo(inputValue);
  setInputValue('');  // ✅ Clear input
};
```

---

### Issue 4: Can Add Empty Todos

**Problem:** Users can submit blank tasks

**Solution:**

```jsx
if (inputValue.trim() === '') {
  alert('Please enter a task!');
  return;  // Stop execution
}
```

---

### Issue 5: Filter Not Working

**Problem:** Filter doesn't update display

**Solution:** Make sure you're rendering `filteredTodos`, not `todos`:

```jsx
// ❌ WRONG
<TodoList todos={todos} />

// ✅ CORRECT
<TodoList todos={filteredTodos} />
```

---

## 📖 Learning Outcomes

### Technical Skills Mastered ✅

- Managing complex state (arrays of objects)
- Array manipulation (map, filter, find)
- Form handling and validation
- Controlled components
- Props drilling and component communication
- Conditional rendering patterns
- List rendering with proper keys
- Event handling with parameters
- CSS animations and transitions

### React Patterns Learned ✅

- **Lifting State Up** - State in parent, functions passed down
- **Component Composition** - Breaking UI into small pieces
- **Controlled Forms** - React controls input values
- **Declarative Filtering** - Filter data, not DOM
- **Immutable Updates** - Never mutate state directly

### Best Practices Applied ✅

- Keep components focused (single responsibility)
- Use descriptive names (handleAddTodo, not func1)
- Validate user input
- Provide user feedback (empty state, statistics)
- Use proper keys for lists
- Separate concerns (logic vs presentation)
- Make components reusable

---

## 🎯 Best Practices Demonstrated

### 1. State Management

```jsx
// ✅ GOOD: Minimal state, derive other values
const totalTodos = todos.length;
const completedTodos = todos.filter(t => t.completed).length;

// ❌ BAD: Store derived data in state
const [totalTodos, setTotalTodos] = useState(0);
```

### 2. Component Organization

```jsx
// ✅ GOOD: Small, focused components
<TodoForm />
<TodoFilter />
<TodoList />

// ❌ BAD: Everything in one component
<div>
  {/* 300 lines of JSX */}
</div>
```

### 3. Event Handlers

```jsx
// ✅ GOOD: Descriptive names
const handleAddTodo = () => { ... };
const handleToggleTodo = () => { ... };

// ❌ BAD: Unclear names
const handler1 = () => { ... };
const onClick = () => { ... };
```

### 4. Props Validation

```jsx
// ✅ GOOD: Check for required props
if (!onAddTodo) {
  console.error('onAddTodo prop is required');
  return null;
}
```

---

<div align="center">

### ⭐ If this helped you learn, please star this repo! ⭐

**Happy Coding! 🎨💻**

Made with ❤️ for React Learners

</div>

---

**Remember:** The best way to learn is by building. Don't just read - code along! 💪✨
