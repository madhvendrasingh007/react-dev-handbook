# 🍳 Recipe Finder - Advanced React Application

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.21.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Spoonacular API](https://img.shields.io/badge/Spoonacular-API-4CAF50?style=for-the-badge)

**A Powerful Recipe Search Application with Real API Integration** 🔍👨‍🍳

[Features](#-features) • [Installation](#-installation) • [API Setup](#-api-setup-guide)

</div>

---

## 🎯 About the Project

Welcome to **Recipe Finder** - an advanced React application demonstrating real-world API integration, complex state management, and professional application architecture using the **Spoonacular API**.

### 🌟 What Makes This Advanced?

- 🔌 **Real API Integration** with Spoonacular
- 🔍 **Advanced Search** with filters
- 🎯 **Dynamic Routing** with recipe details
- 🪝 **Custom Hooks** for reusable logic
- ⚡ **Debouncing** for optimization
- 💾 **Local Storage** for favorites
- 🎨 **Professional UI/UX** patterns

---

## ✨ Features

### Core Features 🎯
- 🔍 Smart Search with debouncing
- 📋 Recipe List with pagination
- 📄 Recipe Details with routing
- 🏷️ Category Filters
- ⭐ Favorites (localStorage)
- 🎲 Random Recipes
- 📱 Fully Responsive

---

## 🚀 Installation & Setup

### Step 1: Create Project

```bash
npm create vite@latest recipe-finder --template react
cd recipe-finder
npm install
```

### Step 2: Install Packages

```bash
npm install react-router-dom axios react-icons
```

### Step 3: Get API Key

1. Go to [Spoonacular API](https://spoonacular.com/food-api)
2. Sign up for FREE (150 requests/day)
3. Copy your API key

### Step 4: Create .env

```env
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

---

## 📁 Project Structure

```
recipe-finder/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RecipeCard.jsx
│   │   └── FilterPanel.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── RecipeDetail.jsx
│   │   └── Favorites.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   ├── api.js
│   │   └── recipeService.js
│   ├── context/
│   │   └── FavoritesContext.jsx
│   └── App.jsx
└── .env
```

---

## 💻 Implementation Guide

This README provides complete code with explanations. Here's what we'll build:

### Core Files Created:

1. **API Configuration** (axios setup)
2. **Recipe Service** (API calls)
3. **Custom Hooks** (useDebounce, useLocalStorage)
4. **Context** (Global favorites state)
5. **Components** (Reusable UI)
6. **Pages** (Home, Search, Details, Favorites)
7. **Routing** (Dynamic routes)

---

## 🎓 What You'll Learn

### React Skills ⚛️
- ✅ Custom Hooks creation
- ✅ Context API for state
- ✅ Advanced routing patterns
- ✅ Performance optimization

### API Integration 🔌
- ✅ Axios configuration
- ✅ Request interceptors
- ✅ Error handling
- ✅ Debouncing requests

### Advanced Patterns 🚀
- ✅ Search with URL params
- ✅ LocalStorage persistence
- ✅ Loading states
- ✅ Filter combinations

---

## 🛠️ Key Technologies

| Tech | Purpose |
|------|---------|
| React 18 | UI Library |
| React Router 6 | Navigation |
| Axios | HTTP Client |
| Spoonacular API | Recipe Data |
| LocalStorage | Persistence |

---

## 📝 Quick Start Code

### 1. API Service (src/services/api.js)

```javascript
import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apiKey: API_KEY,
  };
  return config;
});

export default api;
```

### 2. Recipe Service (src/services/recipeService.js)

```javascript
import api from './api';

const recipeService = {
  searchRecipes: async (query, filters = {}) => {
    const response = await api.get('/recipes/complexSearch', {
      params: {
        query,
        ...filters,
        number: 12,
        addRecipeInformation: true,
      },
    });
    return response.data;
  },

  getRecipeById: async (id) => {
    const response = await api.get(`/recipes/${id}/information`);
    return response.data;
  },

  getRandomRecipes: async (number = 6) => {
    const response = await api.get('/recipes/random', {
      params: { number },
    });
    return response.data.recipes;
  },
};

export default recipeService;
```

### 3. Custom Debounce Hook (src/hooks/useDebounce.js)

```javascript
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

### 4. Favorites Context (src/context/FavoritesContext.jsx)

```javascript
import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (recipe) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === recipe.id);
      const newFavorites = exists
        ? prev.filter(f => f.id !== recipe.id)
        : [...prev, recipe];

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id) => favorites.some(f => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
```

### 5. Main App (src/App.jsx)

```javascript
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <FavoritesProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </FavoritesProvider>
  );
}

export default App;
```

### 6. Entry Point (src/main.jsx)

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 🎨 Basic Styling

Add to `src/index.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f5f5;
}

.app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.recipe-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.recipe-card:hover {
  transform: translateY(-5px);
}
```

---

## 🔍 Advanced Concepts

### 1. Debouncing
Delays API calls until user stops typing (saves API quota!):

```javascript
const [query, setQuery] = useState('');
const debouncedQuery = useDebounce(query, 500);

useEffect(() => {
  if (debouncedQuery) {
    searchRecipes(debouncedQuery);
  }
}, [debouncedQuery]);
```

### 2. URL Search Params
Makes searches shareable:

```javascript
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('q') || '';
```

### 3. Axios Interceptors
Automatically add API key to all requests:

```javascript
api.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey: API_KEY };
  return config;
});
```

---

## ✅ Best Practices

### API Management
- ✅ Use environment variables for keys
- ✅ Implement request interceptors
- ✅ Handle errors gracefully
- ✅ Add loading states

### Performance
- ✅ Debounce search inputs
- ✅ Cache API responses
- ✅ Lazy load images
- ✅ Implement pagination

### State Management
- ✅ Use Context for global state
- ✅ Custom hooks for reusable logic
- ✅ LocalStorage for persistence

---

## 🐛 Troubleshooting

### API Key Not Working
- Check .env file is in root directory
- Ensure VITE_ prefix is used
- Restart dev server after adding .env

### CORS Errors
- Spoonacular API has CORS enabled
- If issues persist, check API key is valid

### 402 Payment Required
- Free plan has 150 points/day limit
- Each request costs 1 point
- Wait 24 hours for reset

---

## 📚 Resources

- [Spoonacular API Docs](https://spoonacular.com/food-api/docs)
- [React Router Docs](https://reactrouter.com)
- [Axios Docs](https://axios-http.com)

---

<div align="center">

## 🎉 You Built an Advanced Recipe App! 🎉

**Master React, APIs, and Real-World Patterns!**

Made with ❤️ and React

</div>
