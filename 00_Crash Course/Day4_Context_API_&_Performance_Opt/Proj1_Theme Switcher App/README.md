# 🌓 Theme Switcher App - Light/Dark Mode with Context API

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A beautiful, beginner-friendly React project that demonstrates **Context API**, **Props**, and **Theme Switching** functionality. Build a user profile card that seamlessly switches between light and dark modes! 🎨

---

## 📸 Project Preview

**Light Mode** ☀️
```
┌─────────────────────────────────────┐
│  🌓 Theme Switcher                  │
│                                     │
│  ┌───────────────────────────────┐ │
│  │     👤 Profile Picture        │ │
│  │                               │ │
│  │    John Doe                   │ │
│  │    Full Stack Developer       │ │
│  │                               │ │
│  │    "Building amazing apps!"   │ │
│  │                               │ │
│  │    [Switch to Dark Mode]      │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Dark Mode** 🌙
```
┌─────────────────────────────────────┐
│  🌓 Theme Switcher                  │
│                                     │
│  ┌───────────────────────────────┐ │
│  │     👤 Profile Picture        │ │░
│  │                               │ │░
│  │    John Doe                   │ │░
│  │    Full Stack Developer       │ │░
│  │                               │ │░
│  │    "Building amazing apps!"   │ │░
│  │                               │ │░
│  │    [Switch to Light Mode]     │ │░
│  └───────────────────────────────┘ │░
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└─────────────────────────────────────┘
```

---

## 🎯 What You'll Learn

By building this project, you'll master:

- ✅ **Creating a React project with Vite** (faster than Create React App!)
- ✅ **Context API** - Managing global theme state
- ✅ **Props** - Passing data from parent to child components
- ✅ **Components** - Building reusable UI pieces
- ✅ **State Management** - Using useState hook
- ✅ **CSS Styling** - Dynamic styling based on theme
- ✅ **Project Structure** - Organizing files professionally
- ✅ **Best Practices** - Writing clean, maintainable code

---

## 📚 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Step 1: Create React Project with Vite](#-step-1-create-react-project-with-vite)
3. [Step 2: Understanding Project Structure](#-step-2-understanding-project-structure)
4. [Step 3: Clean Up Default Files](#-step-3-clean-up-default-files)
5. [Step 4: Create Theme Context](#-step-4-create-theme-context)
6. [Step 5: Create Components](#-step-5-create-components)
7. [Step 6: Add Styling](#-step-6-add-styling)
8. [Step 7: Run Your App](#-step-7-run-your-app)
9. [React Concepts Explained](#-react-concepts-explained)
10. [Best Practices & Tips](#-best-practices--tips)
11. [Troubleshooting](#-troubleshooting)
12. [Next Steps](#-next-steps)

---

## 🔧 Prerequisites

Before we start, make sure you have:

- ✅ **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- ✅ **Code Editor** - VS Code recommended - [Download here](https://code.visualstudio.com/)
- ✅ **Basic HTML/CSS/JavaScript** knowledge
- ✅ **Terminal/Command Prompt** access

### Check if Node.js is installed:
```bash
node --version
npm --version
```

If you see version numbers, you're good to go! 🎉

---

## 🚀 Step 1: Create React Project with Vite

Let's create our React project! Open your terminal and follow along:

### 1.1 Navigate to Your Desired Folder

```bash
# Navigate to where you want to create the project
cd Desktop
# or
cd Documents
```

### 1.2 Create the Project

```bash
npm create vite@latest theme-switcher-app -- --template react
```

**What's happening here?** 🤔
- `npm create vite@latest` - Uses Vite to create a new project
- `theme-switcher-app` - Your project name (you can change this!)
- `--template react` - Tells Vite we want a React project

### 1.3 Navigate into Project Folder

```bash
cd theme-switcher-app
```

### 1.4 Install Dependencies

```bash
npm install
```

**What's happening?** 📦
This command installs all the necessary packages (React, ReactDOM, etc.) that your project needs to run.

**Wait for the installation to complete...** ⏳

✅ **Success!** You now have a React project created with Vite!

---

## 📁 Step 2: Understanding Project Structure

Open the project folder in VS Code:

```bash
code .
```

You'll see this structure:

```
theme-switcher-app/
├── node_modules/          # All installed packages (don't touch!)
├── public/                # Static files
│   └── vite.svg
├── src/                   # Our code goes here! 👈
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html             # Entry HTML file
├── package.json           # Project configuration
└── vite.config.js         # Vite configuration
```

### Important Folders & Files:

| File/Folder | Purpose |
|------------|---------|
| `src/` | Where we write our React components |
| `src/main.jsx` | Entry point - where React starts |
| `src/App.jsx` | Main App component |
| `public/` | Static assets (images, icons) |
| `package.json` | Lists all dependencies |

---

## 🧹 Step 3: Clean Up Default Files

Let's clean up the default Vite files we don't need:

### 3.1 Clear App.jsx

Open `src/App.jsx` and replace everything with:

```jsx
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Theme Switcher App</h1>
    </div>
  )
}

export default App
```

**Explanation:** 🧑‍🏫
- `import './App.css'` - Imports styles for this component
- `function App()` - Our main App component (a JavaScript function!)
- `return (...)` - Returns JSX (HTML-like code in JavaScript)
- `export default App` - Makes this component available to other files

### 3.2 Clear App.css

Open `src/App.css` and replace everything with:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  min-height: 100vh;
  transition: all 0.3s ease;
}
```

**Explanation:** 🎨
- `*` - Applies to all elements
- `box-sizing: border-box` - Makes width/height calculations easier
- `min-height: 100vh` - Makes app at least full screen height
- `transition` - Smooth animation when theme changes

### 3.3 Update index.css

Open `src/index.css` and replace with:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 🎨 Step 4: Create Theme Context

Now let's create the Context API for theme management!

### 4.1 Create Context Folder

In your terminal (or VS Code):

```bash
mkdir src/context
```

### 4.2 Create ThemeContext.jsx

Create a new file: `src/context/ThemeContext.jsx`

```jsx
import { createContext, useState, useEffect } from 'react'

// Step 1: Create the Context
export const ThemeContext = createContext()

// Step 2: Create the Provider Component
export const ThemeProvider = ({ children }) => {
  // State to track current theme (default: 'light')
  const [theme, setTheme] = useState('light')

  // Load saved theme from localStorage when app starts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme // Apply theme to body
  }, [theme])

  // Function to toggle between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // Value object containing theme state and functions
  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### 🧑‍🏫 Teacher's Explanation - Line by Line:

**Line 1-2:**
```jsx
import { createContext, useState, useEffect } from 'react'
```
- We're importing tools from React:
  - `createContext` - Creates our theme context
  - `useState` - Manages theme state (light/dark)
  - `useEffect` - Performs side effects (localStorage operations)

**Line 5:**
```jsx
export const ThemeContext = createContext()
```
- Creates a Context object
- Think of it as a "radio station" that broadcasts theme information
- Components can "tune in" to access the theme

**Line 8:**
```jsx
export const ThemeProvider = ({ children }) => {
```
- This is the Provider component
- `children` = all components wrapped inside this provider
- Think of it as the "broadcaster" of our radio station

**Line 10:**
```jsx
const [theme, setTheme] = useState('light')
```
- Creates state variable `theme` with default value `'light'`
- `setTheme` is the function to change the theme
- Like a light switch - can be 'light' or 'dark'

**Lines 13-18:** (First useEffect)
```jsx
useEffect(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme)
  }
}, [])
```
- Runs once when the app starts (empty dependency array `[]`)
- Checks if user had a saved theme preference
- Loads that theme so user sees their last choice
- Like remembering your favorite radio station!

**Lines 21-24:** (Second useEffect)
```jsx
useEffect(() => {
  localStorage.setItem('theme', theme)
  document.body.className = theme
}, [theme])
```
- Runs whenever `theme` changes
- Saves new theme to localStorage
- Applies theme class to `<body>` element
- Keeps theme in sync with browser storage

**Lines 27-29:**
```jsx
const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
}
```
- Function to switch themes
- If current theme is 'light', switch to 'dark'
- If current theme is 'dark', switch to 'light'
- Like flipping a light switch! 💡

**Lines 32-35:**
```jsx
const value = {
  theme,
  toggleTheme
}
```
- Creates an object with theme data and functions
- This is what we're "broadcasting" to all components
- Components can access both the current theme AND the toggle function

**Lines 37-41:**
```jsx
return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
)
```
- Returns the Provider component
- Makes `value` available to all `children` components
- Any component inside this can access the theme!

---

## 🧩 Step 5: Create Components

Now let's create our UI components!

### 5.1 Create Components Folder

```bash
mkdir src/components
```

### 5.2 Create Header Component

Create file: `src/components/Header.jsx`

```jsx
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Header.css'

function Header() {
  // Access theme from Context
  const { theme } = useContext(ThemeContext)

  return (
    <header className={`header header-${theme}`}>
      <h1>🌓 Theme Switcher App</h1>
      <p>Experience the power of Context API!</p>
    </header>
  )
}

export default Header
```

### 🧑‍🏫 Explanation:

**Line 1-2:**
```jsx
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
```
- `useContext` - Hook to access context data
- We import our ThemeContext we created earlier

**Line 7:**
```jsx
const { theme } = useContext(ThemeContext)
```
- "Tune in" to the ThemeContext radio station
- Extract the `theme` value
- Now we know if it's 'light' or 'dark'!

**Line 10:**
```jsx
<header className={`header header-${theme}`}>
```
- Dynamic class name!
- If theme is 'light': `"header header-light"`
- If theme is 'dark': `"header header-dark"`
- CSS will style each differently

### 5.3 Create ProfileCard Component

Create file: `src/components/ProfileCard.jsx`

```jsx
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './ProfileCard.css'

function ProfileCard({ name, role, bio, image }) {
  // Access theme and toggleTheme from Context
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`profile-card profile-card-${theme}`}>
      {/* Profile Image */}
      <div className="profile-image">
        <img src={image} alt={name} />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-bio">"{bio}"</p>
      </div>

      {/* Theme Toggle Button */}
      <button 
        className={`theme-button theme-button-${theme}`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
      </button>
    </div>
  )
}

export default ProfileCard
```

### 🧑‍🏫 Explanation:

**Line 5:**
```jsx
function ProfileCard({ name, role, bio, image }) {
```
- These are **PROPS** (properties)!
- Data passed from parent component
- Like receiving ingredients to make a recipe
- We'll use these to display user information

**Line 7:**
```jsx
const { theme, toggleTheme } = useContext(ThemeContext)
```
- Extract BOTH theme and toggleTheme from context
- `theme` - to know current theme
- `toggleTheme` - to switch themes when button clicked

**Line 13:**
```jsx
<img src={image} alt={name} />
```
- `src={image}` - Uses the image URL passed as prop
- `alt={name}` - Uses name for accessibility
- Props in action! 🎯

**Lines 18-20:**
```jsx
<h2 className="profile-name">{name}</h2>
<p className="profile-role">{role}</p>
<p className="profile-bio">"{bio}"</p>
```
- Displaying props data!
- `{name}` - Shows the name prop
- `{role}` - Shows the role prop
- `{bio}` - Shows the bio prop

**Lines 24-28:**
```jsx
<button 
  className={`theme-button theme-button-${theme}`}
  onClick={toggleTheme}
>
  {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
</button>
```
- Button to switch themes
- `onClick={toggleTheme}` - Calls toggleTheme when clicked
- Button text changes based on current theme
- Conditional rendering with ternary operator!

### 5.4 Update App.jsx

Replace `src/App.jsx` with:

```jsx
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  // User data (in real app, this might come from API)
  const userData = {
    name: "John Doe",
    role: "Full Stack Developer",
    bio: "Passionate about building amazing web applications with React!",
    image: "https://i.pravatar.cc/300?img=12"
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <ProfileCard 
            name={userData.name}
            role={userData.role}
            bio={userData.bio}
            image={userData.image}
          />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
```

### 🧑‍🏫 Explanation:

**Lines 8-13:**
```jsx
const userData = {
  name: "John Doe",
  role: "Full Stack Developer",
  bio: "Passionate about building amazing web applications with React!",
  image: "https://i.pravatar.cc/300?img=12"
}
```
- Object containing user information
- In a real app, this might come from a database or API
- We're hardcoding it for simplicity

**Line 16:**
```jsx
<ThemeProvider>
```
- Wrapping entire app with ThemeProvider
- Now ALL components inside can access the theme!
- This is the "broadcast tower" for our theme data

**Lines 20-25:**
```jsx
<ProfileCard 
  name={userData.name}
  role={userData.role}
  bio={userData.bio}
  image={userData.image}
/>
```
- **Passing props to ProfileCard!**
- `name={userData.name}` - Passes name as prop
- `role={userData.role}` - Passes role as prop
- And so on...
- ProfileCard receives and displays this data

### 5.5 Update main.jsx

Open `src/main.jsx` and ensure it looks like this:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Explanation:** 🧑‍🏫
- This is the entry point of your React app
- `ReactDOM.createRoot()` - Creates a root for React to render into
- `document.getElementById('root')` - Finds the HTML element with id="root"
- `<App />` - Renders our App component into that element
- `<React.StrictMode>` - Helps catch potential problems

---

## 🎨 Step 6: Add Styling

Let's make our app beautiful!

### 6.1 Create Header.css

Create file: `src/components/Header.css`

```css
.header {
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
}

.header-light {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.header-dark {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #e0e0e0;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }
}
```

### 6.2 Create ProfileCard.css

Create file: `src/components/ProfileCard.css`

```css
.profile-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

/* Light Theme Styles */
.profile-card-light {
  background: white;
  color: #333;
}

/* Dark Theme Styles */
.profile-card-dark {
  background: #2d2d2d;
  color: #e0e0e0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Profile Image */
.profile-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #667eea;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Profile Info */
.profile-info {
  margin-bottom: 2rem;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-role {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
}

.profile-card-dark .profile-role {
  color: #aaa;
}

.profile-bio {
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  margin-top: 1rem;
  padding: 0 1rem;
}

/* Theme Toggle Button */
.theme-button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.theme-button-light {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.theme-button-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.theme-button-dark {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.theme-button-dark:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 147, 251, 0.4);
}

.theme-button:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-card {
    max-width: 90%;
    padding: 1.5rem;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .profile-role {
    font-size: 1rem;
  }

  .profile-bio {
    font-size: 0.9rem;
  }
}
```

### 6.3 Update App.css

Replace `src/App.css` with:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* Light Theme for App */
body.light .App {
  background: #f5f7fa;
}

/* Dark Theme for App */
body.dark .App {
  background: #1a1a1a;
}

/* Main Content Area */
.main-content {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Smooth Animations */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## 🏃 Step 7: Run Your App

Everything is set up! Time to see your creation! 🎉

### 7.1 Start Development Server

In your terminal, run:

```bash
npm run dev
```

### 7.2 Open in Browser

You'll see output like:

```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open your browser and go to:** `http://localhost:5173/`

### 7.3 Test Your App! 🧪

Try these things:

1. ✅ Click the "Switch to Dark Mode" button
2. ✅ See the theme change instantly
3. ✅ Refresh the page - theme should persist!
4. ✅ Try switching multiple times
5. ✅ Resize your browser window (responsive design!)

🎉 **Congratulations!** Your Theme Switcher App is working!

---

## 📖 React Concepts Explained

Let's break down the React concepts used in this project:

### 🧩 1. Components

**What are Components?**

Components are **reusable pieces of UI**. Think of them as LEGO blocks that you can combine to build your app.

**In Our Project:**

```
App (Parent Component)
├── Header (Child Component)
└── ProfileCard (Child Component)
```

**Types of Components:**

1. **Functional Components** (We used these!)
```jsx
function Header() {
  return <h1>Hello!</h1>
}
```

2. **Benefits:**
- Reusable
- Modular (easy to maintain)
- Can be composed together
- Testable

### 📦 2. Props (Properties)

**What are Props?**

Props are **data passed from parent to child components**. They're like function parameters!

**In Our Project:**

```jsx
// Parent (App.jsx) - SENDING props
<ProfileCard 
  name="John Doe"           // ← Sending name prop
  role="Developer"          // ← Sending role prop
  bio="I love React!"       // ← Sending bio prop
  image="photo.jpg"         // ← Sending image prop
/>

// Child (ProfileCard.jsx) - RECEIVING props
function ProfileCard({ name, role, bio, image }) {
  return <h2>{name}</h2>  // ← Using name prop
}
```

**Key Points:**
- Props flow **ONE WAY** (parent → child)
- Props are **READ-ONLY** (can't be changed by child)
- Think of props as **ingredients in a recipe**

**Real-World Analogy:** 🍕
- Parent (Pizza Shop): Sends ingredients (props)
- Child (Pizza Chef): Uses ingredients but can't change them
- Result: Delicious pizza (rendered component)!

### 🌍 3. Context API

**What is Context API?**

Context lets you **share data across all components** without passing props through every level.

**Without Context (Prop Drilling):**

```
App (has theme)
├── Header (receives theme via props)
│   └── Nav (receives theme via props)
│       └── Button (receives theme via props) ❌ Too much passing!
```

**With Context:**

```
App (ThemeProvider wraps all)
├── Header (useContext to get theme) ✅
│   └── Nav (useContext to get theme) ✅
│       └── Button (useContext to get theme) ✅
```

**In Our Project:**

1. **Create Context:**
```jsx
export const ThemeContext = createContext()
```

2. **Create Provider:**
```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

3. **Wrap App:**
```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

4. **Use Context:**
```jsx
const { theme, toggleTheme } = useContext(ThemeContext)
```

**Real-World Analogy:** 📻
- Context = Radio station broadcasting music
- Provider = The broadcast tower
- useContext = Your radio tuning in
- Any radio (component) can tune in anywhere!

### 🎣 4. Hooks Used

#### useState

**Purpose:** Manage component state

```jsx
const [theme, setTheme] = useState('light')
//     ↑      ↑              ↑
//   current  function    initial
//   value    to update   value
```

**In Our Project:**
- Tracks whether theme is 'light' or 'dark'
- Changes when user clicks toggle button

#### useEffect

**Purpose:** Perform side effects (operations outside React)

```jsx
useEffect(() => {
  // Code runs after component renders
  localStorage.setItem('theme', theme)
}, [theme]) // ← Runs when theme changes
```

**In Our Project:**
- Saves theme to localStorage
- Loads theme on app start
- Applies theme class to body element

#### useContext

**Purpose:** Access context data

```jsx
const { theme, toggleTheme } = useContext(ThemeContext)
```

**In Our Project:**
- Components get current theme
- Components get toggle function
- No prop drilling needed!

### 🔄 5. Data Flow in Our App

```
1. User clicks "Switch to Dark Mode" button
            ↓
2. onClick calls toggleTheme()
            ↓
3. toggleTheme updates theme state in Context
            ↓
4. Context notifies all subscribed components
            ↓
5. Components re-render with new theme
            ↓
6. useEffect saves theme to localStorage
            ↓
7. CSS classes update based on new theme
            ↓
8. User sees dark mode! 🌙
```

---

## ✨ Best Practices & Tips

### 🎯 Component Best Practices

#### 1. One Component Per File
```
✅ GOOD:
src/components/Header.jsx
src/components/ProfileCard.jsx

❌ BAD:
src/components/AllComponents.jsx (multiple components in one file)
```

#### 2. Descriptive Component Names
```jsx
✅ GOOD: ProfileCard, UserAvatar, ThemeToggleButton
❌ BAD: Card, Avatar, Button
```

#### 3. Keep Components Small
```jsx
✅ GOOD: Each component does one thing well
❌ BAD: 500-line mega-component doing everything
```

### 📦 Props Best Practices

#### 1. Destructure Props
```jsx
✅ GOOD:
function ProfileCard({ name, role, bio }) {
  return <h2>{name}</h2>
}

❌ BAD:
function ProfileCard(props) {
  return <h2>{props.name}</h2>  // Repetitive "props."
}
```

#### 2. Provide Default Props
```jsx
function ProfileCard({ name = "Guest", role = "User" }) {
  return <h2>{name}</h2>
}
```

#### 3. Validate Props (Optional but Recommended)
```jsx
import PropTypes from 'prop-types'

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string.isRequired
}
```

### 🌍 Context Best Practices

#### 1. Create Custom Hooks
```jsx
// ✅ GOOD: Cleaner code
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// Usage
const { theme, toggleTheme } = useTheme()  // Simpler!
```

#### 2. Split Contexts by Concern
```jsx
✅ GOOD:
- ThemeContext (theme only)
- UserContext (user data only)
- AuthContext (authentication only)

❌ BAD:
- AppContext (everything in one!)
```

#### 3. Memoize Context Values
```jsx
const value = useMemo(() => ({
  theme,
  toggleTheme
}), [theme])

return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
)
```

### 🎨 CSS Best Practices

#### 1. Use CSS Modules or Scoped Styles
```jsx
// ProfileCard.module.css
.card { /* scoped to this component */ }

// Import
import styles from './ProfileCard.module.css'
<div className={styles.card}>
```

#### 2. Use CSS Variables for Themes
```css
:root {
  --bg-light: #f5f7fa;
  --bg-dark: #1a1a1a;
  --text-light: #333;
  --text-dark: #e0e0e0;
}
```

#### 3. Mobile-First Design
```css
/* Default: Mobile styles */
.header {
  font-size: 1.5rem;
}

/* Larger screens */
@media (min-width: 768px) {
  .header {
    font-size: 2.5rem;
  }
}
```

### 🚀 Performance Tips

#### 1. Use Keys in Lists
```jsx
{users.map(user => (
  <ProfileCard key={user.id} {...user} />  // ← Always add key!
))}
```

#### 2. Lazy Load Images
```jsx
<img loading="lazy" src={image} alt={name} />
```

#### 3. Memoize Expensive Calculations
```jsx
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])
```

### 🛠️ Debugging Tips

#### 1. Use React DevTools
- Install React DevTools browser extension
- Inspect component tree
- View props and state
- Track re-renders

#### 2. Add Console Logs Strategically
```jsx
function ProfileCard({ name }) {
  console.log('ProfileCard rendered with name:', name)
  return <h2>{name}</h2>
}
```

#### 3. Use Strict Mode
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. White Screen / App Not Loading

**Problem:** Browser shows blank white screen

**Solutions:**
```bash
# Check if dev server is running
npm run dev

# Check browser console for errors (F12)

# Make sure all files are saved

# Clear browser cache and reload
```

#### 2. "Module not found" Error

**Problem:** `Cannot find module './Component'`

**Solutions:**
- Check file path is correct
- Check file extension (.jsx vs .js)
- Make sure export/import match

```jsx
// Export
export default ProfileCard  // ← Must match

// Import
import ProfileCard from './ProfileCard'  // ← File name
```

#### 3. Context is Undefined

**Problem:** `Cannot read property 'theme' of undefined`

**Solutions:**
```jsx
// Make sure component is wrapped in Provider
<ThemeProvider>
  <YourComponent />  // ← Must be inside!
</ThemeProvider>

// Make sure you're using useContext correctly
const { theme } = useContext(ThemeContext)  // ✅
const theme = useContext(ThemeContext.theme)  // ❌ Wrong!
```

#### 4. Theme Not Persisting

**Problem:** Theme resets on page refresh

**Solution:** Check localStorage implementation:
```jsx
// Make sure you have both useEffects:
useEffect(() => {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
}, [])  // ← Load on mount

useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])  // ← Save when changed
```

#### 5. Styles Not Applying

**Problem:** CSS not working

**Solutions:**
```jsx
// Make sure CSS is imported
import './ProfileCard.css'  // ← Don't forget!

// Check class names match
<div className="profile-card">  // ← In JSX
.profile-card { }  // ← In CSS

// Check for typos in class names
```

#### 6. Props Not Showing

**Problem:** Component shows nothing or undefined

**Solutions:**
```jsx
// Check props are being passed
<ProfileCard name="John" />  // ← Passing prop

// Check props are being received
function ProfileCard({ name }) {  // ← Destructuring
  console.log(name)  // ← Debug
  return <h2>{name}</h2>
}

// Check for typos in prop names
```

---

## 🎓 Learning Challenges

Try these exercises to deepen your understanding:

### Beginner Challenges 🌱

1. **Add More Themes**
   - Add a "blue" theme option
   - Create a dropdown to select themes

2. **Add More User Data**
   - Add email, phone, location props
   - Display them in the ProfileCard

3. **Create Footer Component**
   - Make a footer component
   - Use Context to apply theme to it

### Intermediate Challenges 🌿

4. **Multiple Users**
   - Create an array of users
   - Display multiple ProfileCards
   - Each with different data

5. **Edit Profile**
   - Add an "Edit" button
   - Create a form to update user data
   - Use state to manage form data

6. **Theme Customization**
   - Let users pick custom colors
   - Use color picker input
   - Save custom colors to localStorage

### Advanced Challenges 🌳

7. **API Integration**
   - Fetch user data from an API (try JSONPlaceholder)
   - Display loading state while fetching
   - Handle errors gracefully

8. **Theme Animations**
   - Add smooth transitions between themes
   - Create loading animation for theme switch
   - Add fade-in effects

9. **Theme Presets**
   - Create multiple theme presets (Ocean, Forest, Sunset)
   - Let users save favorite theme
   - Add theme preview before applying

---

## 🚀 Next Steps

Congratulations on completing the Theme Switcher App! Here's what to learn next:

### Immediate Next Steps:

1. **✅ Add Functionality**
   - Add a "Favorites" feature
   - Implement user authentication
   - Add social media links

2. **✅ Improve Styling**
   - Add animations with Framer Motion
   - Try Tailwind CSS
   - Add loading skeletons

3. **✅ Deploy Your App**
   - Deploy to Vercel (free!)
   - Deploy to Netlify
   - Share with friends! 🎉

### Future Learning Path:

#### Week 1-2: React Fundamentals
- ✅ Components & Props (Done! ✓)
- ✅ Context API (Done! ✓)
- ⬜ Forms & Validation
- ⬜ React Router (navigation)

#### Week 3-4: Advanced React
- ⬜ useReducer for complex state
- ⬜ Custom Hooks
- ⬜ Performance Optimization
- ⬜ Error Boundaries

#### Week 5-6: Real-World Skills
- ⬜ API Integration (axios/fetch)
- ⬜ State Management (Redux/Zustand)
- ⬜ Testing (Jest, React Testing Library)
- ⬜ TypeScript with React

#### Week 7-8: Full Stack
- ⬜ Backend basics (Node.js/Express)
- ⬜ Database (MongoDB/PostgreSQL)
- ⬜ Authentication (JWT, OAuth)
- ⬜ Deployment & DevOps

---

## 📚 Additional Resources

### Official Documentation
- 📖 [React Docs](https://react.dev) - Best resource!
- 📖 [Vite Docs](https://vitejs.dev)
- 📖 [MDN Web Docs](https://developer.mozilla.org)

### Video Tutorials
- 🎥 [React Course - freeCodeCamp](https://www.youtube.com/c/Freecodecamp)
- 🎥 [Traversy Media](https://www.youtube.com/c/TraversyMedia)
- 🎥 [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified)

### Practice Platforms
- 💻 [Frontend Mentor](https://www.frontendmentor.io)
- 💻 [Codewars](https://www.codewars.com)
- 💻 [LeetCode](https://leetcode.com)

### Community
- 💬 [React Discord](https://discord.gg/react)
- 💬 [r/reactjs](https://reddit.com/r/reactjs)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

---

## 🎯 Project Summary

### What We Built:
- ✅ React app with Vite
- ✅ Theme switching (Light/Dark mode)
- ✅ Context API for global state
- ✅ Props for data passing
- ✅ Multiple reusable components
- ✅ Persistent theme with localStorage
- ✅ Responsive design
- ✅ Beautiful UI with smooth transitions

### Technologies Used:
- ⚛️ React 18
- ⚡ Vite
- 🎨 CSS3
- 📦 Context API
- 🎣 React Hooks

### Skills Learned:
- ✅ Project setup with Vite
- ✅ Component creation
- ✅ Props passing
- ✅ Context API usage
- ✅ State management with useState
- ✅ Side effects with useEffect
- ✅ CSS styling and theming
- ✅ localStorage integration

---

## 🤝 Contributing

Want to improve this project? Contributions are welcome!

### How to Contribute:
1. Fork this repository
2. Create a branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions:
- Add new themes
- Improve accessibility
- Add animations
- Write tests
- Improve documentation

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💖 Acknowledgments

- React team for amazing documentation
- Vite team for blazing fast tooling
- The React community for endless support
- You for learning and building! 🎉

---

## 📞 Connect & Support

If you found this helpful:

- ⭐ Star this repository
- 🐛 Report bugs in Issues
- 💡 Suggest improvements
- 📢 Share with friends learning React!

---

<div align="center">

### 🎉 Congratulations! You Did It! 🎉

You've successfully built a Theme Switcher App with React!

**Keep coding, keep learning, keep building!** 🚀

---

**Made with ❤️ and ☕ by learners like you**

*Happy Coding! 💻✨*

</div>
