# 📋 Task Management Dashboard - Advanced React Architecture

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Advanced](https://img.shields.io/badge/Level-Advanced-red?style=for-the-badge)

A production-grade task management dashboard showcasing **multiple Contexts**, **performance optimization**, **complex state management**, and **real-world React patterns**. This is an advanced project that demonstrates enterprise-level architecture! 🚀

---

## 📸 Project Preview

```
┌───────────────────────────────────────────────────────────────────┐
│  📋 TaskFlow Pro               👤 John Doe    🌙 Dark    🔔 3     │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  📊 Dashboard Overview                    📅 January 17, 2026    │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐     │
│  │ 📝 Total    │ ✅ Done     │ ⏳ In Prog. │ 🔥 Urgent  │     │
│  │    24       │    12       │      8      │     4      │     │
│  └─────────────┴─────────────┴─────────────┴─────────────┘     │
│                                                                   │
│  🔍 [Search tasks...] 🏷️ [Filter] 📊 [Sort] [+ New Task]      │
│                                                                   │
│  📂 Tasks by Project                                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 🚀 Website Redesign (5 tasks)                           ▼│   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │ ✅ Design homepage mockup        🔴 High   👤 John │  │   │
│  │  │ ⏳ Implement responsive layout   🟡 Med    👤 Sarah│  │   │
│  │  │ 📝 Write documentation           🟢 Low    👤 Mike │  │   │
│  │  │    [Edit] [Delete] [Assign] [Comments: 3]         │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 💼 Mobile App (8 tasks)                                 ▼│   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │ ⏳ Build authentication flow     🔴 High   👤 Alex │  │   │
│  │  │ 📝 API integration               🟡 Med    👤 Emma │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  📊 Activity Timeline               🔔 Notifications (3)         │
│  • Task "Homepage design" completed  • New comment on Task #12  │
│  • Sarah assigned to "API work"      • Deadline approaching #8  │
│  • 3 tasks due tomorrow              • Mike mentioned you       │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🎯 What You'll Learn

This advanced project teaches you:

### Core Concepts
- ✅ **Multiple Contexts** - Separating concerns (Tasks, Auth, Theme, Notifications)
- ✅ **useReducer** - Complex state management patterns
- ✅ **Performance Optimization** - React.memo, useMemo, useCallback
- ✅ **Code Splitting** - Lazy loading with React.lazy & Suspense
- ✅ **Custom Hooks** - Creating reusable logic
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Compound Components** - Advanced component patterns
- ✅ **Optimistic Updates** - Better UX patterns

### Advanced Patterns
- ✅ **Context Composition** - Multiple providers working together
- ✅ **Memoization Strategies** - Preventing unnecessary re-renders
- ✅ **Derived State** - Computing values efficiently
- ✅ **State Normalization** - Organizing complex data
- ✅ **Action Creators** - Clean action management
- ✅ **Selector Patterns** - Efficient data selection
- ✅ **Virtualization** - Rendering large lists efficiently
- ✅ **Debouncing & Throttling** - Performance optimization

### Real-World Skills
- ✅ **Enterprise Architecture** - Production-ready patterns
- ✅ **Performance Profiling** - Using React DevTools
- ✅ **Accessibility (a11y)** - ARIA labels and keyboard navigation
- ✅ **Testing Strategies** - Unit and integration testing
- ✅ **Type Safety** - JSDoc for better DX
- ✅ **Code Organization** - Scalable folder structure

---

## 📚 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Project Architecture Overview](#-project-architecture-overview)
3. [Step 1: Setup & Structure](#-step-1-setup--project-structure)
4. [Step 2: Create Multiple Contexts](#-step-2-create-multiple-contexts)
5. [Step 3: Build Core Components](#-step-3-build-core-components)
6. [Step 4: Performance Optimization](#-step-4-performance-optimization)
7. [Step 5: Add Advanced Features](#-step-5-add-advanced-features)
8. [Step 6: Error Boundaries & Suspense](#-step-6-error-boundaries--suspense)
9. [Understanding Multiple Contexts](#-understanding-multiple-contexts)
10. [Performance Optimization Deep Dive](#-performance-optimization-deep-dive)
11. [Best Practices & Patterns](#-best-practices--patterns)
12. [Testing Strategies](#-testing-strategies)
13. [Deployment & Production](#-deployment--production)

---

## 🔧 Prerequisites

This is an **advanced project**. You should be comfortable with:

- ✅ **React Fundamentals** - Components, Props, State, Effects
- ✅ **Context API** - Creating and using contexts
- ✅ **useReducer** - Reducer pattern basics
- ✅ **Hooks** - useState, useEffect, useContext, useMemo, useCallback
- ✅ **JavaScript ES6+** - Destructuring, spread, arrow functions
- ✅ **Asynchronous JavaScript** - Promises, async/await

### Required Tools:
```bash
node --version  # v16+
npm --version   # v8+
```

**Recommended VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- React DevTools (browser extension)

---

## 🏗️ Project Architecture Overview

### 🎨 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         APP ROOT                            │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              AuthProvider (User & Auth)              │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │          ThemeProvider (Dark/Light)            │  │  │
│  │  │  ┌──────────────────────────────────────────┐  │  │  │
│  │  │  │    TaskProvider (Tasks & Projects)       │  │  │  │
│  │  │  │  ┌────────────────────────────────────┐  │  │  │  │
│  │  │  │  │  NotificationProvider (Alerts)     │  │  │  │  │
│  │  │  │  │  ┌──────────────────────────────┐  │  │  │  │  │
│  │  │  │  │  │       App Components         │  │  │  │  │  │
│  │  │  │  │  │                              │  │  │  │  │  │
│  │  │  │  │  │  • Dashboard               │  │  │  │  │  │
│  │  │  │  │  │  • TaskList                │  │  │  │  │  │
│  │  │  │  │  │  • TaskCard (Memoized)     │  │  │  │  │  │
│  │  │  │  │  │  • Filters                 │  │  │  │  │  │
│  │  │  │  │  │  • Statistics              │  │  │  │  │  │
│  │  │  │  │  └──────────────────────────────┘  │  │  │  │  │
│  │  │  │  └────────────────────────────────────┘  │  │  │  │
│  │  │  └──────────────────────────────────────────┘  │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

                    DATA FLOW PATTERNS

1. User Interaction → Component
2. Component → Context (via action)
3. Context → Reducer (state update)
4. New State → Context
5. Context → Subscribed Components (re-render)
6. Memoized Components → Skip if props same
```

### 🗂️ Folder Structure

```
task-dashboard/
├── src/
│   ├── contexts/
│   │   ├── AuthContext/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── authReducer.js
│   │   │   ├── authActions.js
│   │   │   └── authSelectors.js        # Memoized selectors
│   │   ├── TaskContext/
│   │   │   ├── TaskContext.jsx
│   │   │   ├── taskReducer.js
│   │   │   ├── taskActions.js
│   │   │   └── taskSelectors.js
│   │   ├── ThemeContext/
│   │   │   └── ThemeContext.jsx
│   │   └── NotificationContext/
│   │       └── NotificationContext.jsx
│   │
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── TaskList/
│   │   │   ├── TaskList.jsx           # Virtualized list
│   │   │   ├── TaskCard.jsx           # Memoized
│   │   │   ├── TaskCard.css
│   │   │   └── TaskCardSkeleton.jsx   # Loading state
│   │   ├── TaskForm/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskForm.css
│   │   ├── Filters/
│   │   │   ├── FilterBar.jsx          # Memoized
│   │   │   ├── SearchBox.jsx          # Debounced
│   │   │   └── Filters.css
│   │   ├── Statistics/
│   │   │   ├── StatsCards.jsx         # Memoized
│   │   │   ├── ActivityChart.jsx      # Lazy loaded
│   │   │   └── Statistics.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── NotificationBell.jsx
│   │   │   └── Header.css
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   └── ErrorBoundary/
│   │       └── ErrorBoundary.jsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.js             # Custom hook
│   │   ├── useLocalStorage.js
│   │   ├── useMediaQuery.js
│   │   └── useKeyboardShortcuts.js
│   │
│   ├── utils/
│   │   ├── taskHelpers.js
│   │   ├── dateHelpers.js
│   │   └── validators.js
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

### 🔑 Key Architecture Decisions

**Why Multiple Contexts?**
- **Separation of Concerns** - Each context handles one domain
- **Performance** - Components only re-render when their context changes
- **Scalability** - Easy to add new contexts without affecting others
- **Testing** - Each context can be tested independently

**Context Responsibilities:**

| Context | Responsibility | State Size |
|---------|---------------|------------|
| AuthContext | User, authentication, permissions | Small |
| ThemeContext | Dark/light mode, preferences | Tiny |
| TaskContext | Tasks, projects, filtering | Large |
| NotificationContext | Alerts, toasts, notifications | Medium |

---

## 🚀 Step 1: Setup & Project Structure

### 1.1 Create Project

```bash
# Create project
npm create vite@latest task-dashboard -- --template react

# Navigate
cd task-dashboard

# Install dependencies
npm install

# Install additional packages
npm install date-fns uuid
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

### 1.2 Create Folder Structure

```bash
# Create folders
mkdir -p src/contexts/AuthContext
mkdir -p src/contexts/TaskContext
mkdir -p src/contexts/ThemeContext
mkdir -p src/contexts/NotificationContext
mkdir -p src/components/Dashboard
mkdir -p src/components/TaskList
mkdir -p src/components/TaskForm
mkdir -p src/components/Filters
mkdir -p src/components/Statistics
mkdir -p src/components/Header
mkdir -p src/components/common
mkdir -p src/components/ErrorBoundary
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/data
```

---

## 🎨 Step 2: Create Multiple Contexts

### 2.1 Auth Context (User Management)

Create `src/contexts/AuthContext/authActions.js`:

```javascript
// Action Types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_USER = 'UPDATE_USER'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
```

Create `src/contexts/AuthContext/authReducer.js`:

```javascript
import { LOGIN, LOGOUT, UPDATE_USER, SET_LOADING, SET_ERROR } from './authActions'

export const initialAuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      }

    case LOGOUT:
      return {
        ...initialAuthState
      }

    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
```

Create `src/contexts/AuthContext/AuthContext.jsx`:

```javascript
import { createContext, useReducer, useContext, useEffect, useMemo, useCallback } from 'react'
import { authReducer, initialAuthState } from './authReducer'
import { LOGIN, LOGOUT, UPDATE_USER, SET_LOADING, SET_ERROR } from './authActions'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: LOGIN, payload: user })
      } catch (error) {
        console.error('Failed to load user:', error)
        localStorage.removeItem('user')
      }
    }
  }, [])

  // Save user to localStorage when it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user))
    } else {
      localStorage.removeItem('user')
    }
  }, [state.user])

  // Action Creators (Memoized to prevent re-creation)
  const login = useCallback(async (email, password) => {
    dispatch({ type: SET_LOADING, payload: true })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const user = {
        id: '1',
        name: 'John Doe',
        email,
        avatar: 'https://i.pravatar.cc/150?img=12',
        role: 'admin'
      }

      dispatch({ type: LOGIN, payload: user })
      return { success: true }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message })
      return { success: false, error: error.message }
    }
  }, [])

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT })
  }, [])

  const updateUser = useCallback((updates) => {
    dispatch({ type: UPDATE_USER, payload: updates })
  }, [])

  // Memoize value object to prevent unnecessary re-renders
  const value = useMemo(() => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
    login,
    logout,
    updateUser
  }), [state, login, logout, updateUser])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

### 🧑‍🏫 **Teacher's Explanation - Auth Context:**

**Why Separate Auth Context?**
- Authentication state changes rarely
- Components that only need user info won't re-render when tasks change
- Security-related logic isolated

**Memoization Strategy:**
```javascript
const value = useMemo(() => ({ ... }), [dependencies])
```
- Prevents creating new object every render
- Child components using React.memo won't re-render unnecessarily

**useCallback for Functions:**
```javascript
const login = useCallback(async (email, password) => { ... }, [])
```
- Functions are objects in JavaScript
- Without useCallback, new function created every render
- Causes children using React.memo to re-render

---

### 2.2 Theme Context (UI Preferences)

Create `src/contexts/ThemeContext/ThemeContext.jsx`:

```javascript
import { createContext, useState, useContext, useEffect, useMemo } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('medium')

  // Load preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const savedFontSize = localStorage.getItem('fontSize') || 'medium'
    setTheme(savedTheme)
    setFontSize(savedFontSize)
  }, [])

  // Apply theme to body
  useEffect(() => {
    document.body.className = `theme-${theme} font-${fontSize}`
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // Memoized value - theme changes rarely
  const value = useMemo(() => ({
    theme,
    fontSize,
    toggleTheme,
    setFontSize,
    isDark: theme === 'dark'
  }), [theme, fontSize])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

---

### 2.3 Task Context (Core Functionality)

Create `src/contexts/TaskContext/taskActions.js`:

```javascript
// Task Actions
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const SET_TASKS = 'SET_TASKS'

// Project Actions
export const ADD_PROJECT = 'ADD_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

// Filter Actions
export const SET_FILTER = 'SET_FILTER'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_SORT = 'SET_SORT'

// UI Actions
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
```

Create `src/contexts/TaskContext/taskReducer.js`:

```javascript
import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, TOGGLE_TASK, SET_TASKS,
  ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT,
  SET_FILTER, SET_SEARCH, SET_SORT,
  SET_LOADING, SET_ERROR
} from './taskActions'

export const initialTaskState = {
  tasks: [],
  projects: [],
  filters: {
    status: 'all',        // all, completed, active
    priority: 'all',      // all, high, medium, low
    project: 'all',       // all, or projectId
    assignee: 'all'       // all, or userId
  },
  searchQuery: '',
  sortBy: 'createdAt',    // createdAt, dueDate, priority, title
  sortOrder: 'desc',      // asc, desc
  isLoading: false,
  error: null
}

// Helper: Calculate task statistics
const calculateStats = (tasks) => {
  return {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length,
    highPriority: tasks.filter(t => t.priority === 'high').length,
    dueSoon: tasks.filter(t => {
      const due = new Date(t.dueDate)
      const now = new Date()
      const diff = due - now
      return diff > 0 && diff < 24 * 60 * 60 * 1000 // 24 hours
    }).length
  }
}

export const taskReducer = (state, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false
      }

    case ADD_TASK: {
      const newTask = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        completed: false,
        comments: [],
        attachments: []
      }

      return {
        ...state,
        tasks: [newTask, ...state.tasks]
      }
    }

    case UPDATE_TASK: {
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates, updatedAt: new Date().toISOString() }
          : task
      )

      return {
        ...state,
        tasks: updatedTasks
      }
    }

    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    }

    case TOGGLE_TASK: {
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload
          ? { 
              ...task, 
              completed: !task.completed,
              completedAt: !task.completed ? new Date().toISOString() : null
            }
          : task
      )

      return {
        ...state,
        tasks: updatedTasks
      }
    }

    case ADD_PROJECT: {
      const newProject = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }

      return {
        ...state,
        projects: [...state.projects, newProject]
      }
    }

    case UPDATE_PROJECT: {
      const updatedProjects = state.projects.map(project =>
        project.id === action.payload.id
          ? { ...project, ...action.payload.updates }
          : project
      )

      return {
        ...state,
        projects: updatedProjects
      }
    }

    case DELETE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        tasks: state.tasks.filter(task => task.projectId !== action.payload)
      }
    }

    case SET_FILTER: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      }
    }

    case SET_SEARCH: {
      return {
        ...state,
        searchQuery: action.payload
      }
    }

    case SET_SORT: {
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder || state.sortOrder
      }
    }

    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
```

Create `src/contexts/TaskContext/taskSelectors.js`:

```javascript
/**
 * Selectors - Functions that derive data from state
 * Memoized for performance
 */

// Get filtered and sorted tasks
export const getFilteredTasks = (state) => {
  let filtered = [...state.tasks]

  // Apply search filter
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase()
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query)
    )
  }

  // Apply status filter
  if (state.filters.status !== 'all') {
    filtered = filtered.filter(task => {
      if (state.filters.status === 'completed') return task.completed
      if (state.filters.status === 'active') return !task.completed
      return true
    })
  }

  // Apply priority filter
  if (state.filters.priority !== 'all') {
    filtered = filtered.filter(task => task.priority === state.filters.priority)
  }

  // Apply project filter
  if (state.filters.project !== 'all') {
    filtered = filtered.filter(task => task.projectId === state.filters.project)
  }

  // Apply assignee filter
  if (state.filters.assignee !== 'all') {
    filtered = filtered.filter(task => task.assignedTo === state.filters.assignee)
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let aVal, bVal

    switch (state.sortBy) {
      case 'title':
        aVal = a.title.toLowerCase()
        bVal = b.title.toLowerCase()
        break
      case 'dueDate':
        aVal = new Date(a.dueDate || 0)
        bVal = new Date(b.dueDate || 0)
        break
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        aVal = priorityOrder[a.priority] || 0
        bVal = priorityOrder[b.priority] || 0
        break
      case 'createdAt':
      default:
        aVal = new Date(a.createdAt)
        bVal = new Date(b.createdAt)
    }

    if (aVal < bVal) return state.sortOrder === 'asc' ? -1 : 1
    if (aVal > bVal) return state.sortOrder === 'asc' ? 1 : -1
    return 0
  })

  return filtered
}

// Get tasks by project
export const getTasksByProject = (state) => {
  const tasksByProject = {}

  state.tasks.forEach(task => {
    const projectId = task.projectId || 'unassigned'
    if (!tasksByProject[projectId]) {
      tasksByProject[projectId] = []
    }
    tasksByProject[projectId].push(task)
  })

  return tasksByProject
}

// Get statistics
export const getTaskStats = (state) => {
  return {
    total: state.tasks.length,
    completed: state.tasks.filter(t => t.completed).length,
    active: state.tasks.filter(t => !t.completed).length,
    highPriority: state.tasks.filter(t => t.priority === 'high' && !t.completed).length,
    dueSoon: state.tasks.filter(t => {
      if (t.completed || !t.dueDate) return false
      const due = new Date(t.dueDate)
      const now = new Date()
      const diff = due - now
      return diff > 0 && diff < 24 * 60 * 60 * 1000
    }).length,
    overdue: state.tasks.filter(t => {
      if (t.completed || !t.dueDate) return false
      return new Date(t.dueDate) < new Date()
    }).length
  }
}

// Get project statistics
export const getProjectStats = (state) => {
  return state.projects.map(project => {
    const projectTasks = state.tasks.filter(t => t.projectId === project.id)
    return {
      ...project,
      taskCount: projectTasks.length,
      completedCount: projectTasks.filter(t => t.completed).length,
      activeCount: projectTasks.filter(t => !t.completed).length
    }
  })
}
```

Create `src/contexts/TaskContext/TaskContext.jsx`:

```javascript
import { createContext, useReducer, useContext, useEffect, useMemo, useCallback } from 'react'
import { taskReducer, initialTaskState } from './taskReducer'
import { getFilteredTasks, getTasksByProject, getTaskStats, getProjectStats } from './taskSelectors'
import * as actions from './taskActions'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  // Load data from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    const savedProjects = localStorage.getItem('projects')

    if (savedTasks) {
      try {
        const tasks = JSON.parse(savedTasks)
        dispatch({ type: actions.SET_TASKS, payload: tasks })
      } catch (error) {
        console.error('Failed to load tasks:', error)
      }
    }

    if (savedProjects) {
      try {
        const projects = JSON.parse(savedProjects)
        projects.forEach(project => {
          dispatch({ type: actions.ADD_PROJECT, payload: project })
        })
      } catch (error) {
        console.error('Failed to load projects:', error)
      }
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
    localStorage.setItem('projects', JSON.stringify(state.projects))
  }, [state.tasks, state.projects])

  // Task Actions
  const addTask = useCallback((task) => {
    dispatch({ type: actions.ADD_TASK, payload: task })
  }, [])

  const updateTask = useCallback((id, updates) => {
    dispatch({ type: actions.UPDATE_TASK, payload: { id, updates } })
  }, [])

  const deleteTask = useCallback((id) => {
    dispatch({ type: actions.DELETE_TASK, payload: id })
  }, [])

  const toggleTask = useCallback((id) => {
    dispatch({ type: actions.TOGGLE_TASK, payload: id })
  }, [])

  // Project Actions
  const addProject = useCallback((project) => {
    dispatch({ type: actions.ADD_PROJECT, payload: project })
  }, [])

  const updateProject = useCallback((id, updates) => {
    dispatch({ type: actions.UPDATE_PROJECT, payload: { id, updates } })
  }, [])

  const deleteProject = useCallback((id) => {
    dispatch({ type: actions.DELETE_PROJECT, payload: id })
  }, [])

  // Filter Actions
  const setFilter = useCallback((filters) => {
    dispatch({ type: actions.SET_FILTER, payload: filters })
  }, [])

  const setSearch = useCallback((query) => {
    dispatch({ type: actions.SET_SEARCH, payload: query })
  }, [])

  const setSort = useCallback((sortBy, sortOrder) => {
    dispatch({ type: actions.SET_SORT, payload: { sortBy, sortOrder } })
  }, [])

  // Memoized derived state
  const filteredTasks = useMemo(() => getFilteredTasks(state), [
    state.tasks,
    state.filters,
    state.searchQuery,
    state.sortBy,
    state.sortOrder
  ])

  const tasksByProject = useMemo(() => getTasksByProject(state), [state.tasks])

  const taskStats = useMemo(() => getTaskStats(state), [state.tasks])

  const projectStats = useMemo(() => getProjectStats(state), [state.tasks, state.projects])

  // Memoize value object
  const value = useMemo(() => ({
    // State
    tasks: state.tasks,
    projects: state.projects,
    filters: state.filters,
    searchQuery: state.searchQuery,
    sortBy: state.sortBy,
    sortOrder: state.sortOrder,
    isLoading: state.isLoading,
    error: state.error,

    // Derived state (memoized)
    filteredTasks,
    tasksByProject,
    taskStats,
    projectStats,

    // Actions
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    addProject,
    updateProject,
    deleteProject,
    setFilter,
    setSearch,
    setSort
  }), [
    state,
    filteredTasks,
    tasksByProject,
    taskStats,
    projectStats,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    addProject,
    updateProject,
    deleteProject,
    setFilter,
    setSearch,
    setSort
  ])

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider')
  }
  return context
}
```

### 🧑‍🏫 **Teacher's Explanation - Task Context:**

**Selector Pattern:**
```javascript
const filteredTasks = useMemo(() => getFilteredTasks(state), [dependencies])
```
- Separates data transformation logic from component
- Easy to test selectors independently
- Reusable across components
- Memoized to prevent recalculation

**Why Memoize Derived State?**
```javascript
// Without memo - recalculates on EVERY render
const filteredTasks = getFilteredTasks(state)  // Expensive!

// With memo - recalculates only when dependencies change
const filteredTasks = useMemo(() => getFilteredTasks(state), [dependencies])
```

**Performance Impact:**
- Filtering 1000 tasks: ~5ms
- If component renders 100 times: 500ms wasted!
- With memo: Calculates once, reuses result

---

### 2.4 Notification Context

Create `src/contexts/NotificationContext/NotificationContext.jsx`:

```javascript
import { createContext, useState, useContext, useCallback, useMemo } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = useCallback((notification) => {
    const id = Date.now().toString()
    const newNotification = {
      id,
      ...notification,
      createdAt: new Date().toISOString()
    }

    setNotifications(prev => [newNotification, ...prev])

    // Auto-remove after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration || 5000)
    }

    return id
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  // Utility functions
  const success = useCallback((message, options = {}) => {
    return addNotification({ type: 'success', message, ...options })
  }, [addNotification])

  const error = useCallback((message, options = {}) => {
    return addNotification({ type: 'error', message, ...options })
  }, [addNotification])

  const info = useCallback((message, options = {}) => {
    return addNotification({ type: 'info', message, ...options })
  }, [addNotification])

  const warning = useCallback((message, options = {}) => {
    return addNotification({ type: 'warning', message, ...options })
  }, [addNotification])

  const value = useMemo(() => ({
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    success,
    error,
    info,
    warning
  }), [notifications, addNotification, removeNotification, clearAll, success, error, info, warning])

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider')
  }
  return context
}
```

---

## 🔄 Step 3: Compose All Providers

Update `src/App.jsx`:

```javascript
import { AuthProvider } from './contexts/AuthContext/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext'
import { TaskProvider } from './contexts/TaskContext/TaskContext'
import { NotificationProvider } from './contexts/NotificationContext/NotificationContext'
import Dashboard from './components/Dashboard/Dashboard'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <NotificationProvider>
            <TaskProvider>
              <Dashboard />
            </TaskProvider>
          </NotificationProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
```

### 🧑‍🏫 **Teacher's Explanation - Provider Composition:**

**Nesting Order Matters!**

```javascript
<AuthProvider>          // 1. Auth - Used by everyone
  <ThemeProvider>       // 2. Theme - UI preferences
    <NotificationProvider> // 3. Notifications - Used by tasks
      <TaskProvider>    // 4. Tasks - Depends on notifications
        <App />
      </TaskProvider>
    </NotificationProvider>
  </ThemeProvider>
</AuthProvider>
```

**Why This Order?**
1. **Auth** - Top level, rarely changes, needed everywhere
2. **Theme** - UI preference, rarely changes
3. **Notifications** - Tasks might trigger notifications
4. **Tasks** - Main app logic, changes frequently

**Performance Benefits:**
- Auth changes → Only components using auth re-render
- Theme changes → Only components using theme re-render
- Task changes → Only components using tasks re-render
- Components using only auth don't re-render when tasks change!

---

Due to length constraints, I'll create the README in parts. Would you like me to continue with:
1. **Components Implementation** (TaskCard, Dashboard, etc.)
2. **Performance Optimization Techniques**
3. **Custom Hooks**
4. **Testing & Deployment**

This README is extremely comprehensive and we're at about 35% complete. Shall I continue generating the rest?
