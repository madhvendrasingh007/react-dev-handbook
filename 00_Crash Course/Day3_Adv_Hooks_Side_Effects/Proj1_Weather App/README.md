# 🌤️ Weather App - React API Project

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![OpenWeather API](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

**A Beautiful Weather Application Built with React & OpenWeather API** ☀️🌧️❄️

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Learning Guide](#-learning-guide)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Step-by-Step Implementation](#-step-by-step-implementation)
- [React Concepts Explained](#-react-concepts-explained)
- [API Integration Guide](#-api-integration-guide)
- [Best Practices](#-best-practices)
- [Troubleshooting](#-troubleshooting)
- [What You'll Learn](#-what-youll-learn)

---

## 🎯 About the Project

Welcome to the **Weather App** project! This is a beginner-friendly React application that fetches real-time weather data from the OpenWeather API and displays it in a beautiful, user-friendly interface.

### 🌟 What Makes This Project Special?

This project is designed specifically for learners who want to:
- 📚 Understand how React components work
- 🔄 Learn how to fetch data from external APIs
- 🎨 Practice passing data between components using props
- 💡 Build a real-world application from scratch
- 🛠️ Learn modern React development with Vite

### 🎓 Perfect For:

- React beginners who finished basic tutorials
- Developers learning API integration
- Students building their portfolio
- Anyone wanting hands-on practice with React

---

## ✨ Features

- 🌍 **Search Any City**: Get weather for any location worldwide
- 🌡️ **Real-Time Data**: Current temperature, humidity, wind speed
- 🎨 **Beautiful UI**: Clean, modern, and responsive design
- 🔄 **Loading States**: Professional loading indicators
- ❌ **Error Handling**: User-friendly error messages
- 📱 **Responsive**: Works on desktop, tablet, and mobile
- 🌈 **Weather Icons**: Visual representation of weather conditions

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building components |
| **Vite** | Fast build tool and development server |
| **OpenWeather API** | Free weather data provider |
| **CSS3** | Styling and responsive design |
| **JavaScript ES6+** | Modern JavaScript features |

---

## ✅ Prerequisites

Before starting, make sure you have:

- ✅ **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** or **yarn** (comes with Node.js)
- ✅ **Code Editor** (VS Code recommended)
- ✅ **Basic HTML, CSS, JavaScript knowledge**
- ✅ **Basic React understanding** (components, JSX)

### Check Your Installation:

```bash
# Check Node.js version
node --version
# Should show v18.x.x or higher

# Check npm version
npm --version
# Should show 9.x.x or higher
```

---

## 🚀 Installation & Setup

### Step 1: Get Your API Key 🔑

1. Go to [OpenWeather API](https://openweathermap.org/api)
2. Click "Sign Up" and create a free account
3. Navigate to "API Keys" section
4. Copy your API key (it looks like: `abc123def456ghi789jkl012mno345pq`)
5. **Note**: It may take 10-15 minutes for the key to activate

### Step 2: Create React Project with Vite ⚡

```bash
# Create new Vite project
npm create vite@latest weather-app --template react

# Navigate into project folder
cd weather-app

# Install dependencies
npm install
```

**What Just Happened?** 🤔
- ✅ Created a new folder called `weather-app`
- ✅ Set up React with Vite (faster than Create React App)
- ✅ Installed all necessary packages

### Step 3: Project Cleanup 🧹

Let's remove unnecessary files and start fresh:

```bash
# Remove these files (we'll create our own)
rm src/App.css
rm src/index.css
```

### Step 4: Create Environment File 🔐

Create a file named \`.env\` in the root directory:

```bash
# In the root folder (same level as package.json)
touch .env
```

Add your API key to \`.env\`:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

**Important Notes:**
- 🚨 **Never commit .env to GitHub** (add it to .gitignore)
- ✅ Vite requires prefix \`VITE_\` for environment variables
- ✅ Restart dev server after creating .env file

### Step 5: Update .gitignore 📝

Make sure \`.gitignore\` includes:

```gitignore
# Environment variables
.env
.env.local
.env.production

# Dependencies
node_modules

# Build files
dist
```

### Step 6: Start Development Server 🏃

```bash
npm run dev
```

Open browser and go to: **http://localhost:5173**

You should see the Vite + React default page. Now we're ready to build! 🎉

---

## 📁 Project Structure

Let's create our folder structure. Here's what we'll build:

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx      # Displays weather info
│   │   ├── SearchBar.jsx        # Search input component
│   │   └── LoadingSpinner.jsx   # Loading indicator
│   ├── App.jsx                  # Main component
│   ├── App.css                  # Main styles
│   └── main.jsx                 # Entry point
├── .env                         # API key (don't commit!)
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

### Create Component Files:

```bash
# Create components folder
mkdir src/components

# Create component files
touch src/components/WeatherCard.jsx
touch src/components/SearchBar.jsx
touch src/components/LoadingSpinner.jsx

# Create CSS file
touch src/App.css
```

---

## 💻 Step-by-Step Implementation

Now, let's build the app step by step! I'll explain every line of code like a teacher guiding you. 👨‍🏫

### Step 1: Understanding the Main Entry Point 🚪

**File: \`src/main.jsx\`**

This file is the **entry point** of our React app. Think of it as the front door of a house.

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This creates a "root" where React will render our app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**What's Happening Here?** 🤔

1. **Line 1-3**: We import React, ReactDOM, and our main App component
2. **Line 6**: \`document.getElementById('root')\` finds the \`<div id="root">\` in index.html
3. **Line 7**: \`<React.StrictMode>\` helps catch bugs during development
4. **Line 8**: \`<App />\` is our main component that we'll build next

**Real-World Analogy**: 
Think of this like plugging in a TV (React) into a wall socket (the 'root' div). Once connected, it powers up and displays content!

---

### Step 2: Building the Loading Spinner 🔄

**File: \`src/components/LoadingSpinner.jsx\`**

Let's start with the simplest component - a loading spinner. This shows users that data is being fetched.

```javascript
// This is a FUNCTIONAL COMPONENT
// It's just a JavaScript function that returns JSX (HTML-like code)

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Fetching weather data...</p>
    </div>
  );
}

export default LoadingSpinner;
```

**Code Breakdown:** 📝

- **Line 1-3**: Comments explaining what this component is
- **Line 5**: Function named \`LoadingSpinner\` - component names must start with capital letter!
- **Line 6-10**: JSX returned by the component (what users see)
- **Line 7**: A div with animated spinner (we'll style it with CSS)
- **Line 8**: Text to inform users
- **Line 12**: Export so other files can use this component

**Why Make This a Separate Component?** 🤷‍♂️

- ✅ **Reusability**: Can use it anywhere in the app
- ✅ **Maintainability**: Easy to update loading UI in one place
- ✅ **Organization**: Keeps code clean and modular

---

### Step 3: Creating the Search Bar Component 🔍

**File: \`src/components/SearchBar.jsx\`**

This component lets users type a city name and search for weather.

```javascript
// We need useState to manage the input value
import { useState } from 'react';

function SearchBar({ onSearch }) {
  // STATE: Stores what user types in the input
  const [city, setCity] = useState('');

  // FUNCTION: Called when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload (default form behavior)

    // Only search if user typed something
    if (city.trim()) {
      onSearch(city); // Call the function passed from parent (App.jsx)
      setCity(''); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name (e.g., London, Tokyo)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        🔍 Search
      </button>
    </form>
  );
}

export default SearchBar;
```

**Detailed Explanation:** 🎓

**Line 2**: Import \`useState\` hook to manage component state

**Line 4**: \`{ onSearch }\` - This is a **PROP**! The parent component (App.jsx) will pass a function called \`onSearch\` to this component.

**Line 6**: 
```javascript
const [city, setCity] = useState('');
```
- \`city\` = current value (starts as empty string '')
- \`setCity\` = function to update the value
- This is called **STATE** - data that can change over time

**Line 9-16**: The \`handleSubmit\` function
```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // Stop page from reloading
  if (city.trim()) {   // Check if input is not empty
    onSearch(city);    // Call parent's function with city name
    setCity('');       // Reset input to empty
  }
};
```

**Real-World Analogy for e.preventDefault()**:
Imagine a form is like a door that automatically closes (page reloads) when you click submit. \`e.preventDefault()\` is like holding the door open so you can control what happens next!

**Line 23-24**: The input field
```javascript
value={city}                        // What's displayed in input
onChange={(e) => setCity(e.target.value)}  // Update state when user types
```

This makes it a **CONTROLLED COMPONENT** - React controls the input's value, not the browser!

---

### Step 4: Building the Weather Card Component 🌤️

**File: \`src/components/WeatherCard.jsx\`**

This component displays the weather information using **PROPS**.

```javascript
// This component receives weather data as PROPS from App.jsx

function WeatherCard({ weather }) {
  // DESTRUCTURING: Extract values from weather object for easier use
  const {
    name,           // City name
    sys,            // System data (country code)
    main,           // Main weather data (temp, humidity)
    weather: weatherArray,  // Weather description array
    wind            // Wind data
  } = weather;

  // Get first weather item (OpenWeather API returns array)
  const weatherInfo = weatherArray[0];

  // Convert temperature from Kelvin to Celsius
  const tempCelsius = Math.round(main.temp - 273.15);
  const feelsLikeCelsius = Math.round(main.feels_like - 273.15);

  return (
    <div className="weather-card">
      {/* HEADER: City name and country */}
      <div className="weather-header">
        <h2>{name}, {sys.country}</h2>
        <p className="weather-description">{weatherInfo.description}</p>
      </div>

      {/* MAIN INFO: Temperature and icon */}
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{tempCelsius}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="weather-icon">
          {/* OpenWeather provides icon codes */}
          <img 
            src={\`https://openweathermap.org/img/wn/\${weatherInfo.icon}@2x.png\`}
            alt={weatherInfo.description}
          />
        </div>
      </div>

      {/* DETAILS: Additional weather information */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{feelsLikeCelsius}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
```

**Deep Dive Explanation:** 🔍

**Line 3**: \`{ weather }\` - This is a **PROP** coming from App.jsx
Think of props like **function arguments** but for components!

**Line 5-11**: **Destructuring** the weather object
```javascript
const { name, sys, main } = weather;
```
Instead of writing \`weather.name\`, \`weather.sys\`, we can just use \`name\`, \`sys\`.

**Real-World Analogy**:
Imagine you receive a package (weather object). Instead of keeping everything in the box, you unpack it (destructure) so you can easily use each item!

**Line 17-18**: **Temperature Conversion**
```javascript
const tempCelsius = Math.round(main.temp - 273.15);
```
OpenWeather API returns temperature in Kelvin, so we convert to Celsius:
- Kelvin to Celsius formula: K - 273.15
- \`Math.round()\` removes decimals for cleaner display

**Line 36-39**: **Dynamic Image URL**
```javascript
src={\`https://openweathermap.org/img/wn/\${weatherInfo.icon}@2x.png\`}
```
This uses **template literals** (backticks) to create dynamic URLs. The API returns an icon code (like "01d" for sunny), and we insert it into the URL.

---

### Step 5: Creating the Main App Component 🏗️

**File: \`src/App.jsx\`**

This is the **brain** of our application - it manages all the state and logic!

```javascript
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  // ========== STATE MANAGEMENT ==========

  // Stores weather data fetched from API
  const [weather, setWeather] = useState(null);

  // Tracks if data is currently being fetched
  const [loading, setLoading] = useState(false);

  // Stores error message if something goes wrong
  const [error, setError] = useState(null);

  // Get API key from environment variables
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // ========== FETCH WEATHER FUNCTION ==========

  const fetchWeather = async (city) => {
    // Step 1: Set loading to true and clear any previous errors
    setLoading(true);
    setError(null);
    setWeather(null); // Clear previous weather data

    try {
      // Step 2: Build API URL
      const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`;

      // Step 3: Make API request
      const response = await fetch(url);

      // Step 4: Check if request was successful
      if (!response.ok) {
        // Handle different error status codes
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling!');
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your .env file.');
        } else {
          throw new Error('Something went wrong. Please try again.');
        }
      }

      // Step 5: Convert response to JSON
      const data = await response.json();

      // Step 6: Update state with weather data
      setWeather(data);

    } catch (err) {
      // If any error occurs, store error message
      setError(err.message);
    } finally {
      // Always set loading to false when done (success or error)
      setLoading(false);
    }
  };

  // ========== RENDER UI ==========

  return (
    <div className="app">
      <div className="container">
        {/* HEADER */}
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
          <p>Get real-time weather information for any city</p>
        </header>

        {/* SEARCH BAR - Pass fetchWeather function as prop */}
        <SearchBar onSearch={fetchWeather} />

        {/* CONDITIONAL RENDERING */}

        {/* Show loading spinner while fetching */}
        {loading && <LoadingSpinner />}

        {/* Show error message if error exists */}
        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        {/* Show weather card if data exists and not loading */}
        {weather && !loading && <WeatherCard weather={weather} />}

        {/* Show welcome message if nothing is displayed yet */}
        {!weather && !loading && !error && (
          <div className="welcome-message">
            <p>👋 Search for a city to see weather information!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```

**Complete Code Walkthrough:** 📚

#### **STATE MANAGEMENT (Lines 8-17)**

```javascript
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

**Why Three Different States?**

1. **\`weather\`**: Stores the fetched weather data
   - \`null\` = No data yet
   - Object = Weather data received

2. **\`loading\`**: Shows if we're currently fetching data
   - \`false\` = Not fetching
   - \`true\` = Currently fetching

3. **\`error\`**: Stores error messages
   - \`null\` = No error
   - String = Error message to display

**Real-World Analogy**:
Think of these like traffic lights 🚦
- Green (weather exists) = Show data
- Yellow (loading true) = Show spinner
- Red (error exists) = Show error message

#### **API KEY (Line 20)**

```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

- \`import.meta.env\` is Vite's way of accessing environment variables
- \`VITE_\` prefix is required for Vite to expose the variable

#### **FETCH WEATHER FUNCTION (Lines 24-61)**

Let's break down this async function step by step:

**Step 1: Reset States**
```javascript
setLoading(true);    // Show loading spinner
setError(null);      // Clear previous errors
setWeather(null);    // Clear previous weather data
```

**Step 2: Build URL**
```javascript
const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`;
```
Template literal creates URL like:
\`https://api.openweathermap.org/data/2.5/weather?q=London&appid=abc123...\`

**Step 3: Make Request**
```javascript
const response = await fetch(url);
```
- \`await\` pauses execution until fetch completes
- Returns a Response object

**Step 4: Error Handling**
```javascript
if (!response.ok) {
  if (response.status === 404) {
    throw new Error('City not found...');
  }
  // ... other error cases
}
```
- \`response.ok\` is \`true\` if status is 200-299
- Different error messages for different status codes
- \`throw\` sends error to catch block

**Step 5: Parse JSON**
```javascript
const data = await response.json();
```
Converts JSON string response to JavaScript object

**Step 6: Update State**
```javascript
setWeather(data);
```
Stores weather data in state, triggering re-render

**Try-Catch-Finally**
```javascript
try {
  // Code that might fail
} catch (err) {
  setError(err.message);  // Handle error
} finally {
  setLoading(false);      // Always runs, even if error
}
```

#### **CONDITIONAL RENDERING (Lines 77-97)**

This is like a decision tree 🌳:

```javascript
{loading && <LoadingSpinner />}
```
**Reads as**: "If loading is true, show LoadingSpinner"

```javascript
{error && <div className="error-message">...</div>}
```
**Reads as**: "If error exists, show error message"

```javascript
{weather && !loading && <WeatherCard weather={weather} />}
```
**Reads as**: "If weather exists AND not loading, show WeatherCard"

```javascript
{!weather && !loading && !error && <div>...</div>}
```
**Reads as**: "If nothing else is happening, show welcome message"

---

### Step 6: Styling the Application 🎨

**File: \`src/App.css\`**

Let's make it beautiful! Here's a complete stylesheet with explanations:

```css
/* ========== GLOBAL RESET & VARIABLES ========== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Color palette */
  --primary-color: #2563eb;
  --secondary-color: #3b82f6;
  --success-color: #10b981;
  --error-color: #ef4444;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --background: #f3f4f6;
  --card-background: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: var(--text-dark);
}

/* ========== APP CONTAINER ========== */

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 600px;
  background: var(--card-background);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  padding: 30px;
}

/* ========== HEADER ========== */

.app-header {
  text-align: center;
  margin-bottom: 30px;
}

.app-header h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.app-header p {
  color: var(--text-light);
  font-size: 1rem;
}

/* ========== SEARCH BAR ========== */

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.search-button {
  padding: 15px 30px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.search-button:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.search-button:active {
  transform: translateY(0);
}

/* ========== LOADING SPINNER ========== */

.loading-spinner {
  text-align: center;
  padding: 40px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner p {
  color: var(--text-light);
  font-size: 1rem;
}

/* ========== ERROR MESSAGE ========== */

.error-message {
  background: #fee2e2;
  border: 2px solid var(--error-color);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
}

.error-message p {
  color: var(--error-color);
  font-size: 1rem;
  font-weight: 600;
}

/* ========== WELCOME MESSAGE ========== */

.welcome-message {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-light);
}

.welcome-message p {
  font-size: 1.2rem;
}

/* ========== WEATHER CARD ========== */

.weather-card {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.weather-header {
  text-align: center;
  margin-bottom: 30px;
}

.weather-header h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.weather-description {
  font-size: 1.2rem;
  color: var(--text-light);
  text-transform: capitalize;
}

/* ========== MAIN WEATHER INFO ========== */

.weather-main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
}

.temperature {
  display: flex;
  align-items: flex-start;
}

.temp-value {
  font-size: 5rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.temp-unit {
  font-size: 2rem;
  color: var(--text-light);
  margin-top: 10px;
}

.weather-icon img {
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

/* ========== WEATHER DETAILS ========== */

.weather-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.detail-item {
  background: var(--background);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.detail-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.detail-label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 8px;
}

.detail-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

/* ========== RESPONSIVE DESIGN ========== */

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }

  .search-bar {
    flex-direction: column;
  }

  .weather-main {
    flex-direction: column;
    gap: 20px;
  }

  .temp-value {
    font-size: 4rem;
  }

  .weather-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
  }

  .app-header h1 {
    font-size: 1.75rem;
  }

  .temp-value {
    font-size: 3.5rem;
  }
}
```

**CSS Explanation:** 🎨

1. **CSS Variables (Lines 9-21)**: Reusable color values
2. **Flexbox (Line 33-37)**: Centers container on page
3. **Grid (Line 286-289)**: Creates 2-column layout for details
4. **Animations (Lines 163-170)**: Smooth fade-in for weather card
5. **Hover Effects (Lines 100-103)**: Interactive button states
6. **Media Queries (Lines 317+)**: Responsive for mobile devices

---

## 🎓 React Concepts Explained

### 1. Components 🧩

**What are Components?**

Components are **reusable building blocks** of a React application. Think of them like LEGO bricks - each has a specific shape and purpose, and you combine them to build something bigger!

**Types in This Project:**

| Component | Type | Purpose |
|-----------|------|---------|
| \`App\` | **Smart/Stateful** | Manages state and logic |
| \`SearchBar\` | **Smart/Stateful** | Has its own state (input value) |
| \`WeatherCard\` | **Dumb/Presentational** | Just displays data, no logic |
| \`LoadingSpinner\` | **Dumb/Presentational** | Static UI element |

**Real-World Analogy:**
- **Smart Components** = Restaurant manager (makes decisions, manages everything)
- **Dumb Components** = Waiter (just displays menu, takes orders, follows instructions)

### 2. Props (Properties) 📦

**What are Props?**

Props are **arguments** you pass to components, like function parameters. They allow data to flow from parent to child components.

**Props in This Project:**

```javascript
// In App.jsx (PARENT)
<SearchBar onSearch={fetchWeather} />
<WeatherCard weather={weather} />

// In SearchBar.jsx (CHILD)
function SearchBar({ onSearch }) {
  onSearch(city); // Uses the prop!
}

// In WeatherCard.jsx (CHILD)
function WeatherCard({ weather }) {
  return <h2>{weather.name}</h2>; // Uses the prop!
}
```

**Key Rules:**
- ✅ Props flow **one way**: parent → child
- ✅ Props are **read-only** (immutable)
- ✅ Can pass any data type: strings, numbers, objects, functions

**Real-World Analogy:**
Props are like ingredients you give to a chef (component). You provide eggs and flour (props), the chef uses them to make a cake (rendered JSX), but the chef doesn't change the eggs themselves!

### 3. State 🔄

**What is State?**

State is **data that can change** over time within a component. When state changes, React re-renders the component.

**State in This Project:**

```javascript
// In App.jsx
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// In SearchBar.jsx
const [city, setCity] = useState('');
```

**State vs Props:**

| State | Props |
|-------|-------|
| Internal to component | Passed from parent |
| Can be changed | Read-only |
| Uses \`useState\` | Function parameters |
| Causes re-renders | Received from above |

### 4. Hooks 🎣

**What are Hooks?**

Hooks are special functions that let you "hook into" React features like state and lifecycle.

**Hooks Used:**

1. **\`useState\`**: Adds state to functional components
   ```javascript
   const [value, setValue] = useState(initialValue);
   ```

2. **\`useEffect\`** (not used in basic version, but you can add):
   ```javascript
   useEffect(() => {
     // Runs after render
   }, [dependencies]);
   ```

### 5. Conditional Rendering 🔀

**What is it?**

Showing different UI based on conditions.

**Examples from Our App:**

```javascript
// Show loading spinner if loading is true
{loading && <LoadingSpinner />}

// Show error if error exists
{error && <div>{error}</div>}

// Show weather if data exists AND not loading
{weather && !loading && <WeatherCard weather={weather} />}
```

**Patterns:**

| Pattern | Syntax | When to Use |
|---------|--------|-------------|
| **AND (&&)** | \`{condition && <Component />}\` | Show/hide based on truthy value |
| **Ternary** | \`{condition ? <A /> : <B />}\` | Choose between two options |
| **If-Else** | Regular if statements before return | Complex logic |

### 6. Async/Await 🕐

**What is it?**

A way to handle **asynchronous operations** (operations that take time, like API calls).

**In Our App:**

```javascript
const fetchWeather = async (city) => {
  const response = await fetch(url);  // Wait for response
  const data = await response.json(); // Wait for JSON parsing
  setWeather(data);                   // Update state
};
```

**Without Async/Await (older way):**
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => setWeather(data))
  .catch(error => console.error(error));
```

Async/await is cleaner and easier to read!

---

## 🌐 API Integration Guide

### Understanding the OpenWeather API 🔌

**API Endpoint:**
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
```

**Query Parameters:**
- \`q\`: City name (e.g., "London", "Tokyo", "New York")
- \`appid\`: Your API key

**Example Response:**
```json
{
  "name": "London",
  "sys": {
    "country": "GB"
  },
  "main": {
    "temp": 280.32,
    "feels_like": 278.99,
    "humidity": 81,
    "pressure": 1012
  },
  "weather": [
    {
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "wind": {
    "speed": 4.1
  }
}
```

### How We Use the Data 📊

```javascript
// Temperature (convert Kelvin to Celsius)
const tempCelsius = Math.round(main.temp - 273.15);

// Weather description
const description = weather[0].description;

// Weather icon
const iconUrl = \`https://openweathermap.org/img/wn/\${weather[0].icon}@2x.png\`;

// Other data
const humidity = main.humidity;
const windSpeed = wind.speed;
```

### Error Codes 🚨

| Code | Meaning | Our Handling |
|------|---------|--------------|
| 200 | Success | Display weather |
| 404 | City not found | "City not found..." |
| 401 | Invalid API key | "Invalid API key..." |
| 429 | Too many requests | "Please try again later" |

---

## ✅ Best Practices

### 1. Component Organization 📂

```
✅ DO: Separate components into files
✅ DO: Name components clearly (WeatherCard, not Card)
✅ DO: One component per file

❌ DON'T: Put all components in one file
❌ DON'T: Use generic names (Component1, Component2)
```

### 2. State Management 🎯

```javascript
✅ DO: Keep state as close to where it's used as possible
✅ DO: Use separate state variables for different concerns
✅ DO: Initialize state with appropriate types

// GOOD
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);

// BAD - mixing unrelated state
const [appState, setAppState] = useState({ weather: null, loading: false, error: null });
```

### 3. Props 📦

```javascript
✅ DO: Destructure props in function parameters
function WeatherCard({ weather }) { }

✅ DO: Pass only what's needed
<WeatherCard weather={weather} />

❌ DON'T: Pass entire objects when only parts are needed
<WeatherCard appState={appState} />
```

### 4. Error Handling 🛡️

```javascript
✅ DO: Use try-catch for async operations
✅ DO: Provide user-friendly error messages
✅ DO: Handle different error types

❌ DON'T: Leave errors unhandled
❌ DON'T: Show technical error messages to users
```

### 5. Environment Variables 🔐

```bash
✅ DO: Store API keys in .env
✅ DO: Add .env to .gitignore
✅ DO: Use VITE_ prefix for Vite projects

❌ DON'T: Commit .env to GitHub
❌ DON'T: Hardcode API keys in code
```

### 6. CSS Organization 🎨

```css
✅ DO: Use CSS variables for colors
✅ DO: Use meaningful class names
✅ DO: Group related styles together

❌ DON'T: Use inline styles everywhere
❌ DON'T: Use !important unless necessary
```

---

## 🐛 Troubleshooting

### Issue: "401 Unauthorized" Error

**Problem:** API key not working

**Solutions:**
1. Check if API key is correct in .env
2. Wait 10-15 minutes for new API keys to activate
3. Restart dev server after creating .env
   ```bash
   # Stop server (Ctrl+C), then
   npm run dev
   ```

### Issue: "City not found"

**Problem:** City name is incorrect

**Solutions:**
1. Check spelling
2. Try adding country code: "London,UK"
3. Use official city names (not nicknames)

### Issue: Environment Variable is Undefined

**Problem:** \`import.meta.env.VITE_WEATHER_API_KEY\` returns undefined

**Solutions:**
1. Ensure .env file is in root directory (same level as package.json)
2. Use \`VITE_\` prefix (required for Vite)
3. Restart dev server
4. Check for typos in variable name

### Issue: Components Not Rendering

**Problem:** Blank screen or errors

**Solutions:**
1. Check console for errors (F12 in browser)
2. Ensure all components are exported: \`export default ComponentName\`
3. Check import paths are correct
4. Verify component names start with capital letter

### Issue: Styles Not Applying

**Problem:** CSS not working

**Solutions:**
1. Check if App.css is imported in App.jsx
2. Verify class names match between JSX and CSS
3. Check for typos in CSS selectors
4. Clear browser cache (Ctrl+Shift+R)

---

## 🎯 What You'll Learn

By completing this project, you will:

### React Skills ⚛️
- ✅ Create functional components
- ✅ Use useState hook for state management
- ✅ Pass and receive props between components
- ✅ Implement conditional rendering
- ✅ Handle user input with controlled components
- ✅ Structure a React application properly

### JavaScript Skills 💻
- ✅ Use async/await for asynchronous operations
- ✅ Fetch data from REST APIs
- ✅ Handle promises and errors
- ✅ Destructure objects and arrays
- ✅ Use template literals
- ✅ Work with environment variables

### General Web Development 🌐
- ✅ API integration and error handling
- ✅ Responsive design with CSS
- ✅ User experience (loading states, error messages)
- ✅ Project organization and best practices
- ✅ Git and version control
- ✅ Environment variable management

---

## 🚀 Enhancement Ideas

Once you've completed the basic app, try adding these features:

### Level 1: Beginner 🌱
- [ ] Add Fahrenheit/Celsius toggle
- [ ] Show weather for user's current location (Geolocation API)
- [ ] Add more weather details (sunrise/sunset times)
- [ ] Improve error messages with different icons

### Level 2: Intermediate 🌿
- [ ] Add 5-day forecast
- [ ] Save recent searches (localStorage)
- [ ] Add loading skeleton instead of spinner
- [ ] Implement dark/light theme toggle
- [ ] Add search suggestions/autocomplete

### Level 3: Advanced 🌳
- [ ] Add weather charts (temperature trends)
- [ ] Implement offline mode (Service Workers)
- [ ] Add weather alerts/warnings
- [ ] Create shareable weather cards (Canvas API)
- [ ] Add unit tests (Jest, React Testing Library)

---

## 📚 Additional Resources

### Documentation 📖
- [React Official Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [OpenWeather API Docs](https://openweathermap.org/api)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Video Tutorials 🎥
- [React Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- [Async JavaScript](https://www.youtube.com/watch?v=PoRJizFvM7s)
- [CSS Flexbox & Grid](https://www.youtube.com/watch?v=JJSoEo8JSnc)

### Tools 🛠️
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools) - Browser extension
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Postman](https://www.postman.com/) - Test APIs

---

## 🤝 Contributing

Found a bug or want to improve something? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons from [OpenWeather Icons](https://openweathermap.org/weather-conditions)
- Built with React and Vite
- Inspired by the learning community

---

<div align="center">

## 🌟 You Did It! 🎉

**You've built a real weather application with React!**

Remember: Every expert was once a beginner. Keep coding, keep learning! 💪

### What's Next?
- 📸 Take a screenshot and share your project
- 🚀 Deploy to Vercel/Netlify
- 💼 Add to your portfolio
- 🔄 Try the enhancement ideas above

---

**Made with ❤️ and React** | [Report Bug](https://github.com/yourusername/weather-app/issues) | [Request Feature](https://github.com/yourusername/weather-app/issues)

</div>
