# 🚀 Day 3: Advanced Hooks & Side Effects

<div align="center">

![React Banner](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Status](https://img.shields.io/badge/Status-Learning-yellow?style=for-the-badge)
![Day](https://img.shields.io/badge/Day-3-blue?style=for-the-badge)

**Mastering the Dynamic Side of React** 🎯

</div>

---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [1. useEffect Hook & Lifecycle](#-1-useeffect-hook--lifecycle)
- [2. Data Fetching from APIs](#-2-data-fetching-from-apis)
- [3. React Router Basics](#-3-react-router-basics)
- [4. Custom Hooks Creation](#-4-custom-hooks-creation)
- [5. Forms & Controlled Components](#-5-forms--controlled-components)
- [Learning Resources](#-learning-resources)
- [What's Next?](#-whats-next)

---

## 🎯 Introduction

Welcome to **Day 3** of your React journey! Today, we're diving into the **dynamic side** of React - how components interact with the outside world, respond to changes, and manage complex behaviors. Think of today as learning how to make your React app "come alive" with real data, navigation, and sophisticated interactions.

### What You'll Master Today:
- 🔄 **Side Effects**: Making your components interact with the world beyond React
- 🌐 **API Integration**: Fetching real data from external sources
- 🧭 **Navigation**: Creating multi-page applications with routing
- 🛠️ **Custom Hooks**: Building reusable logic for your applications
- 📝 **Forms**: Handling user input the React way

---

## 🔄 1. useEffect Hook & Lifecycle

### 🧠 What is useEffect?

**Simple Definition**: `useEffect` is React's way of performing **side effects** in functional components. A side effect is any operation that reaches outside the component to do something - like fetching data, updating the DOM, setting up subscriptions, or timers.

### 🌍 Real-World Analogy

Think of `useEffect` like **setting up automatic tasks in your home**:
- **When you move in** (component mounts): Turn on the electricity, set up internet
- **When something changes** (component updates): Adjust the thermostat when temperature preferences change
- **When you move out** (component unmounts): Cancel subscriptions, turn off utilities

### 📖 Deep Theory

#### Understanding Side Effects

In programming, a **pure function** only computes a result from its inputs without affecting anything outside. React components should be pure - given the same props/state, they return the same JSX.

But real applications need to:
- Fetch data from servers 🌐
- Update document title 📄
- Set up event listeners 🎧
- Connect to WebSockets 🔌
- Interact with browser APIs 🖥️

These operations are **side effects** because they affect things outside the component's scope. `useEffect` is the designated place to handle them safely.

#### The Lifecycle Connection

React components go through three phases:
1. **Mounting**: Component is created and inserted into the DOM
2. **Updating**: Component re-renders due to state/props changes
3. **Unmounting**: Component is removed from the DOM

`useEffect` can hook into all these phases!

### 💻 Syntax Breakdown

```javascript
useEffect(() => {
  // Effect logic (runs after render)

  return () => {
    // Cleanup logic (runs before next effect or unmount)
  };
}, [dependencies]); // Dependency array
```

**Three Parts Explained**:

1. **Effect Function**: The code you want to run
2. **Cleanup Function** (optional): Code to run before the next effect or when component unmounts
3. **Dependency Array**: Controls when the effect runs

### 🔍 Dependency Array Deep Dive

The dependency array is **crucial** - it tells React when to re-run your effect:

#### **No Dependency Array** (Runs Every Render)
```javascript
useEffect(() => {
  console.log('Runs after EVERY render');
});
```
⚠️ **Dangerous**: Can cause infinite loops!

#### **Empty Dependency Array** (Runs Once)
```javascript
useEffect(() => {
  console.log('Runs only once after initial mount');
}, []);
```
✅ **Use for**: Data fetching on mount, subscriptions, one-time setups

#### **With Dependencies** (Runs When Dependencies Change)
```javascript
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```
✅ **Use for**: Syncing with specific state/props

### 📝 Step-by-Step Examples

#### Example 1: Document Title Updater
```javascript
import { useState, useEffect } from 'react';

function PageTitle() {
  const [count, setCount] = useState(0);

  // Updates document title whenever count changes
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;

    // No cleanup needed for this effect
  }, [count]); // Only re-run when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**What Happens**:
1. Component renders with count = 0
2. After render, effect runs → sets title to "You clicked 0 times"
3. User clicks button → count becomes 1
4. Component re-renders with count = 1
5. After render, effect runs again → sets title to "You clicked 1 times"

#### Example 2: Timer with Cleanup
```javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Setting up timer...');

    // Set up the timer
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleaning up timer...');
      clearInterval(intervalId); // Prevent memory leaks!
    };
  }, []); // Empty array = run once on mount

  return <div>Seconds: {seconds}</div>;
}
```

**Why Cleanup Matters**:
- Without cleanup, timers keep running even after component unmounts
- This causes **memory leaks** and unexpected behavior
- Cleanup runs before next effect and on unmount

#### Example 3: Fetching Data on Prop Change
```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset states when userId changes
    setLoading(true);
    setUser(null);

    // Fetch user data
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

    // No cleanup needed unless we want to cancel the fetch
  }, [userId]); // Re-run when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>Hello, {user.name}!</div>;
}
```

### 🎨 Visual Flow Diagram

```
Component Lifecycle with useEffect:

[Component Created]
       ↓
[Initial Render]
       ↓
[useEffect Runs] ← (componentDidMount equivalent)
       ↓
[User Interaction / Props Change]
       ↓
[State/Props Update]
       ↓
[Re-render]
       ↓
[Cleanup Function Runs] ← (from previous effect)
       ↓
[useEffect Runs Again] ← (componentDidUpdate equivalent)
       ↓
[Component Unmounts]
       ↓
[Final Cleanup Runs] ← (componentWillUnmount equivalent)
```

### ✅ Do's and ❌ Don'ts

#### ✅ DO:
- **Always include dependencies** in the dependency array
- **Use cleanup functions** for subscriptions, timers, and event listeners
- **Keep effects focused** - one effect per concern
- **Use multiple useEffects** to separate different concerns
- **Handle loading and error states** when fetching data

#### ❌ DON'T:
- **Don't omit dependencies** that are used inside the effect
- **Don't mutate state directly** inside useEffect without setState
- **Don't create infinite loops** (updating state that triggers the same effect)
- **Don't forget cleanup** for subscriptions and timers
- **Don't use useEffect for calculations** - use useMemo instead

### 🚨 Common Mistakes

#### Mistake 1: Missing Dependencies
```javascript
// ❌ BAD: count is used but not in dependencies
useEffect(() => {
  console.log(count);
}, []);

// ✅ GOOD: Include all dependencies
useEffect(() => {
  console.log(count);
}, [count]);
```

#### Mistake 2: Infinite Loop
```javascript
// ❌ BAD: Updates state that triggers the effect
useEffect(() => {
  setCount(count + 1);
}, [count]); // Creates infinite loop!

// ✅ GOOD: Use proper dependencies
useEffect(() => {
  // Only run once or with specific trigger
  setCount(0);
}, []); // Empty array prevents loop
```

### 💡 Pro Tips

1. **Use ESLint Plugin**: Install `eslint-plugin-react-hooks` to catch dependency issues
2. **Separate Concerns**: Multiple useEffects are better than one complex one
3. **Think Declaratively**: Describe what should happen, not imperatively controlling when
4. **Async Handling**: Can't make useEffect itself async, but can use async functions inside

```javascript
// ✅ Correct way to use async in useEffect
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('/api/data');
    const data = await result.json();
    setData(data);
  };

  fetchData();
}, []);
```

---

## 🌐 2. Data Fetching from APIs

### 🧠 What is Data Fetching?

**Simple Definition**: Data fetching is the process of requesting information from external sources (APIs, databases) and displaying it in your React application. It's how your app gets dynamic, real-time data.

### 🌍 Real-World Analogy

Think of data fetching like **ordering food from a restaurant**:
- **You place an order** (make API request) 📱
- **Wait for preparation** (loading state) ⏳
- **Receive your food** (data arrives) 🍕
- **Or get notified of issues** (error handling) ❌

### 📖 Deep Theory

#### Understanding APIs

**API (Application Programming Interface)** is a way for different software to communicate. In web development, we typically use **REST APIs** that:
- Use HTTP methods (GET, POST, PUT, DELETE)
- Return data in JSON format
- Have specific endpoints (URLs) for different data

#### The Fetch Cycle

When fetching data in React:
1. **Component mounts** → Initiate fetch
2. **Loading state** → Show user something is happening
3. **Data arrives** → Update state with data
4. **Component re-renders** → Display the data
5. **Handle errors** → Show user-friendly error messages

### 💻 Fetching Methods in React

#### Method 1: Using Fetch API (Native)
```javascript
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using native fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Check if request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty array = fetch once on mount

  // Render based on state
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### Method 2: Using Async/Await (Cleaner)
```javascript
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create async function inside useEffect
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Always runs, even if error
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>⏳ Loading posts...</div>;
  if (error) return <div>❌ Error: {error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
```

#### Method 3: Using Axios (Popular Library)
```javascript
import axios from 'axios';

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);

        // Axios automatically parses JSON and throws errors
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/comments'
        );

        setComments(response.data); // Axios puts data in .data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // ... render logic
}
```

### 🔍 Advanced Patterns

#### Pattern 1: Canceling Requests (Avoiding Memory Leaks)
```javascript
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchResults = async () => {
      try {
        const response = await fetch(
          \`https://api.example.com/search?q=\${query}\`,
          { signal: controller.signal } // Pass abort signal
        );

        const data = await response.json();
        setResults(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', err);
        }
      }
    };

    if (query) {
      fetchResults();
    }

    // Cleanup: abort fetch if component unmounts or query changes
    return () => controller.abort();
  }, [query]);

  // ... render logic
}
```

**Why This Matters**: If user types fast and changes the query, old requests are canceled, preventing race conditions and memory leaks.

#### Pattern 2: Pagination
```javascript
function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);

      const response = await fetch(
        \`https://api.example.com/items?page=\${page}&limit=10\`
      );

      const data = await response.json();

      setItems(prev => [...prev, ...data.items]); // Append new items
      setHasMore(data.hasMore);
      setLoading(false);
    };

    fetchPage();
  }, [page]); // Re-fetch when page changes

  return (
    <div>
      {items.map(item => <div key={item.id}>{item.name}</div>)}

      {hasMore && (
        <button onClick={() => setPage(p => p + 1)} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
```

#### Pattern 3: Dependent Fetches
```javascript
function UserPosts({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // First: Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  // Second: Fetch posts only after user is loaded
  useEffect(() => {
    if (!user) return; // Don't fetch if user not loaded

    const fetchPosts = async () => {
      const response = await fetch(\`/api/users/\${user.id}/posts\`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [user]); // Depend on user

  // ... render logic
}
```

### ✅ Do's and ❌ Don'ts

#### ✅ DO:
- **Always handle loading states** - show spinners/skeletons
- **Always handle errors** - display user-friendly messages
- **Use try-catch blocks** with async/await
- **Cancel requests** on cleanup to prevent memory leaks
- **Validate data** before using it
- **Use environment variables** for API endpoints

#### ❌ DON'T:
- **Don't fetch without error handling**
- **Don't forget loading indicators**
- **Don't expose API keys** in client-side code
- **Don't fetch on every render** - use proper dependencies
- **Don't trust API data blindly** - validate and sanitize

### 🚨 Common Mistakes

#### Mistake 1: Not Handling Loading State
```javascript
// ❌ BAD: No loading state
function BadComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, []);

  return data.map(item => <div>{item.name}</div>); // Will be empty initially
}

// ✅ GOOD: Proper loading state
function GoodComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return data.map(item => <div key={item.id}>{item.name}</div>);
}
```

### 💡 Pro Tips

1. **Use Loading Skeletons**: Better UX than spinners
2. **Debounce Search Queries**: Don't fetch on every keystroke
3. **Cache Responses**: Store fetched data to avoid redundant requests
4. **Use React Query/SWR**: Libraries that handle caching, revalidation, etc.
5. **Error Retry Logic**: Allow users to retry failed requests

---

## 🧭 3. React Router Basics

### 🧠 What is React Router?

**Simple Definition**: React Router is a library that enables **navigation** between different views/pages in a React application without reloading the entire page. It creates a **Single Page Application (SPA)** experience.

### 🌍 Real-World Analogy

Think of React Router like **rooms in a house**:
- Your house (app) has multiple rooms (pages) 🏠
- You can move between rooms (navigate) without leaving the house 🚪
- Each room has its own purpose (different content) 🛋️
- You always know which room you're in (current URL) 📍

### 📖 Deep Theory

#### Understanding Single Page Applications (SPAs)

Traditional websites:
- Click link → Browser requests new HTML → Full page reload → New page displays

SPAs with React Router:
- Click link → JavaScript changes view → Only component updates → URL changes (no reload)

**Benefits**:
- ⚡ Faster navigation (no full page reloads)
- 🎨 Smoother transitions and animations
- 💾 Maintains application state
- 📱 Better mobile experience

#### How React Router Works

React Router uses the browser's **History API** to:
1. **Update URL** without page reload
2. **Listen to URL changes**
3. **Render appropriate components** based on URL

### 💻 Installation & Setup

```bash
# Install React Router
npm install react-router-dom
```

### 📝 Step-by-Step Basic Setup

#### Step 1: Wrap App with BrowserRouter
```javascript
// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**What BrowserRouter Does**: Provides routing context to all components in the app.

#### Step 2: Define Routes
```javascript
// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

**Key Components**:
- **\`<Routes>\`**: Container for all route definitions
- **\`<Route>\`**: Defines a path and what component to render
- **\`<Link>\`**: Creates navigational links (replaces \`<a>\`)

#### Step 3: Create Page Components
```javascript
// pages/Home.jsx
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}

export default Home;

// pages/About.jsx
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
}

export default About;
```

### 🔍 Advanced Routing Concepts

#### 1. Dynamic Routes (URL Parameters)
```javascript
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/users/:userId" element={<UserProfile />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

// Using the parameter
function UserProfile() {
  const { userId } = useParams(); // Extract :userId from URL

  return <div>Viewing profile for user: {userId}</div>;
}

// Example: /users/123 → userId will be "123"
```

**Real Example with Data Fetching**:
```javascript
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(\`https://api.example.com/products/\${productId}\`)
      .then(r => r.json())
      .then(setProduct);
  }, [productId]); // Re-fetch when productId changes

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
```

#### 2. Nested Routes
```javascript
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} /> {/* /dashboard */}
        <Route path="profile" element={<Profile />} /> {/* /dashboard/profile */}
        <Route path="settings" element={<Settings />} /> {/* /dashboard/settings */}
      </Route>
    </Routes>
  );
}

// Layout component with nested routes
function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      {/* Outlet renders the matched child route */}
      <Outlet />
    </div>
  );
}
```

**\`<Outlet>\` Explained**: It's a placeholder where child routes will be rendered. Think of it as a "slot" for nested content.

#### 3. Programmatic Navigation
```javascript
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login logic
    const success = await loginUser();

    if (success) {
      // Navigate programmatically after successful login
      navigate('/dashboard');

      // Or go back
      // navigate(-1);

      // Or replace current history entry (can't go back)
      // navigate('/dashboard', { replace: true });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* form fields */}
      <button type="submit">Login</button>
    </form>
  );
}
```

#### 4. 404 Not Found Page
```javascript
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}
```

#### 5. Protected Routes (Authentication)
```javascript
import { Navigate } from 'react-router-dom';

// Protected Route wrapper component
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth(); // Your auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}
```

### 🎨 Navigation Patterns

#### Active Link Styling
```javascript
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black'
        })}
      >
        About
      </NavLink>
    </nav>
  );
}
```

**NavLink vs Link**: \`NavLink\` knows when it's active and can apply special styling.

### ✅ Do's and ❌ Don'ts

#### ✅ DO:
- **Use \`<Link>\` instead of \`<a>\`** for internal navigation
- **Use \`useParams()\`** to access URL parameters
- **Use \`useNavigate()\`** for programmatic navigation
- **Create a 404 page** with catch-all route
- **Use nested routes** for layouts
- **Protect sensitive routes** with authentication checks

#### ❌ DON'T:
- **Don't use \`<a>\` tags** for internal links (causes full reload)
- **Don't forget to wrap app** in \`<BrowserRouter>\`
- **Don't nest \`<Routes>\`** improperly without \`<Outlet>\`
- **Don't hardcode URLs** - use route constants
- **Don't forget the \`*\` catch-all** for 404s

### 💡 Pro Tips

1. **Route Organization**: Keep routes in a separate config file for large apps
2. **Lazy Loading**: Use React.lazy() to code-split routes
3. **Query Parameters**: Use \`useSearchParams()\` for query strings
4. **Location State**: Pass data between routes using \`navigate('/path', { state: data })\`

---

## 🛠️ 4. Custom Hooks Creation

### 🧠 What are Custom Hooks?

**Simple Definition**: Custom hooks are **JavaScript functions** that use React hooks (like useState, useEffect) to encapsulate and **reuse stateful logic** across multiple components. They let you extract component logic into reusable functions.

### 🌍 Real-World Analogy

Think of custom hooks like **power tools**:
- **Built-in hooks** (useState, useEffect) are basic tools like hammers and screwdrivers 🔨
- **Custom hooks** are specialized power tools you build for specific tasks 🔧
- You combine basic tools to create something more powerful and reusable 💪
- Once built, you can use them anywhere in your workshop 🏗️

### 📖 Deep Theory

#### Why Custom Hooks?

**Problem**: Multiple components need the same logic (fetching data, form handling, window size detection)

**Old Solution**: Higher-Order Components (HOCs) or Render Props → Complex and hard to understand

**React Hooks Solution**: Extract logic into custom hooks → Simple, reusable, composable

#### Rules for Custom Hooks

1. **Name must start with "use"** (e.g., useFetch, useForm, useAuth)
2. **Can call other hooks** inside them
3. **Must be called at the top level** (same rules as built-in hooks)
4. **Can return anything** (values, functions, objects, arrays)

### 💻 Creating Custom Hooks - Step by Step

#### Example 1: useToggle (Simple Hook)

**Purpose**: Reusable toggle functionality

```javascript
import { useState } from 'react';

// Custom Hook Definition
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}

// Usage in components
function Modal() {
  const [isOpen, { toggle, setFalse }] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle Modal</button>

      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  const [isCollapsed, { toggle }] = useToggle(true);

  return (
    <aside className={isCollapsed ? 'collapsed' : 'expanded'}>
      <button onClick={toggle}>Toggle Sidebar</button>
    </aside>
  );
}
```

**Benefits**: No need to rewrite toggle logic in every component!

#### Example 2: useFetch (Data Fetching Hook)

**Purpose**: Reusable data fetching with loading and error states

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when URL changes
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch when URL changes

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function Posts() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Same pattern, different data!
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
        </article>
      ))}
    </div>
  );
}
```

#### Example 3: useLocalStorage (Persistent State)

**Purpose**: Sync state with localStorage

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use provided initial value
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

// Usage
function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Theme persists across page reloads!
```

#### Example 4: useDebounce (Performance Optimization)

**Purpose**: Delay state updates to reduce unnecessary operations

```javascript
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up timeout to update debounced value
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: clear timeout if value changes before delay
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

// Usage: Search that only fires after user stops typing
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);

  // Only search when debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(\`/api/search?q=\${debouncedSearchTerm}\`)
        .then(r => r.json())
        .then(setResults);
    }
  }, [debouncedSearchTerm]); // Triggers less frequently!

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      {/* Results */}
      {results.map(result => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
}
```

### 🔍 Advanced Custom Hooks

#### Example 5: useForm (Form Handling)

```javascript
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (callback, validate) => (e) => {
    e.preventDefault();

    // Validate if validation function provided
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      // Only call callback if no errors
      if (Object.keys(validationErrors).length === 0) {
        callback(values);
      }
    } else {
      callback(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    reset
  };
}

// Usage
function RegistrationForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.password || values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit, reset } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (formValues) => {
    console.log('Form submitted:', formValues);
    // API call here
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, validate)}>
      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}
```

### ✅ Do's and ❌ Don'ts

#### ✅ DO:
- **Name with "use" prefix** - React depends on this convention
- **Extract reusable logic** - DRY principle
- **Keep hooks focused** - one responsibility per hook
- **Return consistent values** - same return structure always
- **Document your hooks** - add JSDoc comments
- **Test custom hooks** - use @testing-library/react-hooks

#### ❌ DON'T:
- **Don't call hooks conditionally** inside custom hooks
- **Don't make hooks too complex** - break into smaller hooks
- **Don't mix unrelated logic** in one hook
- **Don't forget dependencies** in useEffect inside custom hooks
- **Don't return too many values** - use objects for clarity

### 💡 Pro Tips

1. **Composability**: Custom hooks can use other custom hooks
2. **TypeScript**: Add types for better developer experience
3. **Testing**: Test hooks in isolation with renderHook()
4. **Organization**: Create a \`hooks/\` folder for all custom hooks
5. **Share**: Publish useful hooks as npm packages

---

## 📝 5. Forms & Controlled Components

### 🧠 What are Controlled Components?

**Simple Definition**: A controlled component is a form element whose value is **controlled by React state**. React becomes the "single source of truth" for the form data.

### 🌍 Real-World Analogy

Think of controlled components like a **puppet master**:
- **Uncontrolled**: The puppet moves on its own (DOM controls the value) 🎭
- **Controlled**: You control every movement with strings (React state controls the value) 🎪

Or like a **thermostat**:
- You set the temperature (React state) → Thermostat displays it
- You change it → State updates → Display updates
- Always in sync! 🌡️

### 📖 Deep Theory

#### Controlled vs Uncontrolled

**Uncontrolled Components**:
```javascript
// DOM manages the value
function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value); // Get value from DOM
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  );
}
```

**Controlled Components**:
```javascript
// React state manages the value
function ControlledForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value); // Value from state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button>Submit</button>
    </form>
  );
}
```

**Why Controlled is Better**:
- ✅ Single source of truth (React state)
- ✅ Easy validation
- ✅ Conditional rendering based on input
- ✅ Instant feedback
- ✅ Better for complex forms

### 💻 Form Elements

#### 1. Text Input
```javascript
function TextInputExample() {
  const [name, setName] = useState('');

  return (
    <div>
      <label>
        Name:
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <p>Hello, {name}!</p>
    </div>
  );
}
```

#### 2. Textarea
```javascript
function TextareaExample() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <label>
        Message:
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={4}
        />
      </label>
      <p>Character count: {message.length}</p>
    </div>
  );
}
```

#### 3. Select Dropdown
```javascript
function SelectExample() {
  const [country, setCountry] = useState('');

  return (
    <div>
      <label>
        Country:
        <select 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </label>
      <p>Selected: {country}</p>
    </div>
  );
}
```

#### 4. Checkbox
```javascript
function CheckboxExample() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to terms and conditions
      </label>

      <button disabled={!agreed}>Submit</button>
    </div>
  );
}
```

#### 5. Radio Buttons
```javascript
function RadioExample() {
  const [plan, setPlan] = useState('');

  return (
    <div>
      <p>Choose a plan:</p>

      <label>
        <input 
          type="radio"
          value="free"
          checked={plan === 'free'}
          onChange={(e) => setPlan(e.target.value)}
        />
        Free
      </label>

      <label>
        <input 
          type="radio"
          value="pro"
          checked={plan === 'pro'}
          onChange={(e) => setPlan(e.target.value)}
        />
        Pro
      </label>

      <p>Selected plan: {plan}</p>
    </div>
  );
}
```

### 🔍 Handling Multiple Inputs

#### Pattern: Single Handler for Multiple Inputs
```javascript
function MultiInputForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    country: ''
  });

  // Generic handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value // Dynamic key based on input name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      <input 
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input 
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />

      <select 
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">Select Country</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### 🎯 Form Validation

#### Client-Side Validation
```javascript
function ValidatedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field was touched
    if (touched[name]) {
      const validationErrors = validate();
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate on blur
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      username: true,
      email: true,
      password: true
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    // Submit only if no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid, submitting:', formData);
      // API call here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && (
          <span style={{color: 'red'}}>{errors.username}</span>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span style={{color: 'red'}}>{errors.email}</span>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span style={{color: 'red'}}>{errors.password}</span>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
```

### 🚀 Advanced Form Patterns

#### 1. File Upload
```javascript
function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    // Upload file
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Upload successful:', data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />

      {preview && <img src={preview} alt="Preview" width="200" />}

      <button type="submit" disabled={!file}>Upload</button>
    </form>
  );
}
```

#### 2. Multi-Step Form
```javascript
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    // Step 2
    address: '',
    city: '',
    // Step 3
    cardNumber: '',
    expiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Info</h2>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Address</h2>
          <input 
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Payment</h2>
          <input 
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
          />
          <input 
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="Expiry"
          />
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}
```

### ✅ Do's and ❌ Don'ts

#### ✅ DO:
- **Use controlled components** for most forms
- **Validate on blur** for better UX
- **Show errors conditionally** (only if field is touched)
- **Prevent default form submission** with e.preventDefault()
- **Disable submit button** during submission
- **Provide instant feedback** when possible
- **Use proper input types** (email, number, tel, etc.)

#### ❌ DON'T:
- **Don't validate on every keystroke** (use onBlur or debounce)
- **Don't forget to handle edge cases** (empty strings, special characters)
- **Don't store sensitive data** in plain state
- **Don't trust client-side validation alone** - always validate on server
- **Don't make forms too long** - break into steps if needed

### 💡 Pro Tips

1. **Form Libraries**: Consider Formik, React Hook Form for complex forms
2. **Accessibility**: Use proper labels, ARIA attributes, and keyboard navigation
3. **Auto-save**: Save form progress to localStorage
4. **Loading States**: Show spinner during submission
5. **Success Feedback**: Clear form or show success message after submission

---

## 🎓 Learning Resources

### 📺 Video Tutorials
- [React useEffect Hook - Complete Guide](https://www.youtube.com)
- [React Router 6 Tutorial](https://www.youtube.com)
- [Custom Hooks Explained](https://www.youtube.com)

### 📖 Documentation
- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [React Router Documentation](https://reactrouter.com)
- [Forms in React](https://react.dev/learn/reacting-to-input-with-state)

### 🛠️ Practice Resources
- [JSONPlaceholder](https://jsonplaceholder.typicode.com) - Free fake API for testing
- [React Challenges](https://github.com/alexgurr/react-coding-challenges)

---

## 🚀 What's Next?

### Day 4 Preview: State Management & Context API
- Understanding prop drilling problems
- Context API for global state
- useReducer for complex state logic
- Performance optimization techniques

---

<div align="center">

## 💪 Keep Building! You're Making Amazing Progress! 🎉

**Remember**: The best way to learn is by **building**. Try creating a project that combines all these concepts!

### Project Ideas:
1. 📝 Todo App with API persistence
2. 🛍️ E-commerce product catalog with routing
3. 📰 News reader with API fetching
4. 📊 Dashboard with custom hooks

---

Made with ❤️ by a React Learner | [Day 1](../Day-1) | [Day 2](../Day-2) | **Day 3** | [Day 4](../Day-4)

</div>
