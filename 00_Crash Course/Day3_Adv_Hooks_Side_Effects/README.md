<div align="center">

# 🔄 Day 3: Advanced Hooks & Side Effects

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/useEffect-Hook-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Day-03-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [🔄 useEffect Hook & Lifecycle](#-useeffect-hook--lifecycle) |
| 4 | [🌐 Data Fetching from APIs](#-data-fetching-from-apis) |
| 5 | [🗺️ React Router Basics](#%EF%B8%8F-react-router-basics) |
| 6 | [🪝 Custom Hooks Creation](#-custom-hooks-creation) |
| 7 | [📝 Forms & Controlled Components](#-forms--controlled-components) |
| 8 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 9 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ `useEffect` hook and lifecycle
✅ Data fetching from APIs
✅ React Router basics (navigation, dynamic routes)
✅ Custom hooks creation
✅ Forms and controlled components

---

## 💡 Real-Life Analogy

### 🤖 Personal Assistant Concept

> `useEffect` is like a **personal assistant** that watches for specific changes and takes action automatically.
> When you open your fridge (component **mounts**), the light turns on (effect **runs**).
> When you close it (component **unmounts**), the light turns off (**cleanup** runs).

```
🏠 Fridge Analogy                      React useEffect
──────────────────────────────────     ──────────────────────────────────────────
  Open fridge   → light turns ON  →   Component mounts   → effect runs ✅
  Inside fridge → light stays ON  →   Component updates  → re-runs if deps changed
  Close fridge  → light turns OFF →   Component unmounts → cleanup runs 🧹
```

> 🧠 **Key Insight:** React renders UI — but sometimes you need to do things *outside* the render cycle: fetch data, set a timer, subscribe to an event. These are **side effects** — and `useEffect` is how React manages them safely.

---

## 🔄 useEffect Hook & Lifecycle

### 📖 Theory

Every React component goes through a **lifecycle**:

```
  1️⃣  MOUNT      → Component appears in the DOM for the first time
  2️⃣  UPDATE     → State or props change → component re-renders
  3️⃣  UNMOUNT    → Component is removed from the DOM
```

Before hooks, you needed a **class component** with `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to handle these phases. `useEffect` replaces all three in a single, clean API.

---

### 🔬 Anatomy of useEffect

```jsx
useEffect(() => {
  // 1️⃣ EFFECT — runs after render
  // Place your side effect code here

  return () => {
    // 2️⃣ CLEANUP — runs before the next effect OR before unmount
    // Cancel subscriptions, clear timers, abort requests
  };

}, [dependencies]); // 3️⃣ DEPENDENCY ARRAY — controls when effect re-runs
```

---

### ⚙️ Dependency Array — The Control Panel

The dependency array is the most important part of `useEffect`. It tells React **when** to re-run the effect:

| Dependency Array | When Effect Runs | Real-World Use Case |
|:----------------:|-----------------|---------------------|
| Not provided | After **every** render | Rarely used — almost always causes issues |
| `[]` empty | **Once** on mount only | Fetch initial data, set up subscriptions |
| `[value]` | Mount + when `value` changes | Re-fetch when a search query changes |
| `[a, b]` | Mount + when `a` or `b` changes | Sync multiple state values |

```jsx
import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Effect: start a timer when component mounts
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: stop the timer when component unmounts
    // Without this → timer keeps running in background → memory leak! 💧
    return () => clearInterval(timer);

  }, []); // [] → run once on mount only

  return (
    <div>
      <h2>🕐 {time.toLocaleTimeString()}</h2>
      <p>{time.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" })}</p>
    </div>
  );
}
```

**📌 What this shows:**
- `[]` means the timer starts once when the component appears
- The cleanup `clearInterval(timer)` prevents a memory leak
- Without cleanup, the timer would keep running even after the component is gone

---

### 📡 useEffect with Dependencies

```jsx
function LiveSearch() {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't fetch if query is empty
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    // Debounce — wait 500ms after user stops typing before fetching
    const debounceTimer = setTimeout(() => {
      fetch(`https://api.example.com/search?q=${query}`)
        .then(res  => res.json())
        .then(data => {
          setResults(data.results);
          setLoading(false);
        });
    }, 500);

    // Cleanup — cancel the debounce timer if user types again before 500ms
    return () => clearTimeout(debounceTimer);

  }, [query]); // Re-runs every time query changes

  return (
    <div>
      <input
        value       = {query}
        onChange    = {e => setQuery(e.target.value)}
        placeholder = "🔍 Search..."
      />
      {loading && <p>Searching...</p>}
      <ul>
        {results.map(r => <li key={r.id}>{r.title}</li>)}
      </ul>
    </div>
  );
}
```

---

### 🔁 Three useEffect Patterns Side by Side

```jsx
// Pattern 1: Run ONCE on mount — like componentDidMount
useEffect(() => {
  console.log("Component appeared!");
}, []);

// Pattern 2: Run when specific value changes — like componentDidUpdate
useEffect(() => {
  console.log("userId changed to:", userId);
  // fetch new user data here
}, [userId]);

// Pattern 3: Run + Cleanup — subscriptions, timers, event listeners
useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

---

## 🌐 Data Fetching from APIs

### 📖 Theory

Fetching data is one of the most common side effects in React apps. Since `fetch()` is **asynchronous**, it doesn't return the data immediately — it returns a **Promise**. We use `useEffect` to start the fetch after the component renders, then store the response in state to trigger a re-render with the data.

```
Component renders (empty state)
         │
         ▼
  useEffect runs → fetch() called
         │
         ▼
  Promise resolves → setData(result)
         │
         ▼
  Component re-renders with real data ✅
```

---

### 🌐 Complete Fetch Pattern

```jsx
import { useState, useEffect } from "react";

function GitHubProfile({ username }) {
  const [user,    setUser]    = useState(null);
  const [repos,   setRepos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Using AbortController to cancel fetch if component unmounts mid-request
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`User not found (${res.status})`);
        return res.json();
      })
      .then(data => {
        setUser(data);
        return fetch(`https://api.github.com/users/${username}/repos`, { signal: controller.signal });
      })
      .then(res  => res.json())
      .then(data => {
        setRepos(data.slice(0, 5));  // show top 5 repos
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();  // cleanup — cancel on unmount

  }, [username]); // re-fetch if username prop changes

  if (loading) return <p>⏳ Loading profile...</p>;
  if (error)   return <p>❌ Error: {error}</p>;
  if (!user)   return null;

  return (
    <div className="profile">
      <img src={user.avatar_url} alt={user.login} width={80} style={{ borderRadius: "50%" }} />
      <h2>{user.name || user.login}</h2>
      <p>👥 {user.followers} followers · 📦 {user.public_repos} repos</p>
      <p>{user.bio}</p>

      <h4>Top Repositories:</h4>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              ⭐ {repo.stargazers_count} — {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**📌 Always handle these 3 states when fetching:**
- `loading: true` → show a spinner / skeleton
- `error: message` → show a friendly error message
- `data: result` → show the actual content

---

### ⚡ async/await Style

```jsx
useEffect(() => {
  // ⚠️ useEffect callback cannot be async directly
  // Define an inner async function and call it

  const fetchData = async () => {
    try {
      setLoading(true);
      const res  = await fetch(`https://api.example.com/posts`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

> ⚠️ **Why not `async` directly on the callback?**
> `useEffect(() => async () => {...})` would return a Promise, not a cleanup function — React doesn't know what to do with a Promise as cleanup. Always wrap in an inner `async` function.

---

## 🗺️ React Router Basics

### 📖 Theory

React is a **Single Page Application (SPA)** framework — the browser loads one HTML file and JavaScript handles all navigation. React Router intercepts URL changes and renders the matching component **without reloading the page**.

```
Traditional Website (Multi-Page)        React SPA (Single-Page)
──────────────────────────────────      ───────────────────────────────────
  /home    → browser fetches home.html  /home    → React renders <Home />
  /about   → browser fetches about.html /about   → React renders <About />
  /contact → browser fetches contact   /contact → React renders <Contact />
  (Full page reload each time ❌)        (Instant, no reload ✅)
```

---

### 🗺️ Setup & Basic Routing

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Pages
const Home     = () => <h1>🏠 Welcome Home</h1>;
const About    = () => <h1>👤 About Us</h1>;
const NotFound = () => <h1>❌ 404 — Page Not Found</h1>;

// Main App
function App() {
  return (
    <BrowserRouter>
      {/* Navigation — Link prevents full page reload */}
      <nav>
        <NavLink to="/"      style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          About
        </NavLink>
      </nav>

      {/* Route definitions */}
      <Routes>
        <Route path="/"       element={<Home />}     />
        <Route path="/about"  element={<About />}    />
        <Route path="*"       element={<NotFound />} />  {/* catch-all */}
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 🔗 Dynamic Routes & useParams

Dynamic routes use `:paramName` as a placeholder in the path. The actual value is read inside the component using the `useParams` hook:

```jsx
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception",       year: 2010, director: "Christopher Nolan", rating: 9.3 },
  { id: 2, title: "Interstellar",    year: 2014, director: "Christopher Nolan", rating: 8.7 },
  { id: 3, title: "The Dark Knight", year: 2008, director: "Christopher Nolan", rating: 9.0 },
];

// List page — shows all movies
function MovieList() {
  return (
    <div>
      <h2>🎬 Movies</h2>
      {movies.map(m => (
        <div key={m.id}>
          <Link to={`/movies/${m.id}`}>{m.title}</Link>
        </div>
      ))}
    </div>
  );
}

// Detail page — shows one movie based on :id in URL
function MovieDetail() {
  const { id }     = useParams();       // reads :id from /movies/:id
  const navigate   = useNavigate();     // programmatic navigation
  const movie      = movies.find(m => m.id === Number(id));

  if (!movie) return <p>Movie not found. <button onClick={() => navigate("/movies")}>Go Back</button></p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>   {/* browser history back */}
      <h2>{movie.title} ({movie.year})</h2>
      <p>🎬 Director: {movie.director}</p>
      <p>⭐ Rating: {movie.rating}/10</p>
    </div>
  );
}

// Routing setup
function App() {
  return (
    <Routes>
      <Route path="/movies"     element={<MovieList />}   />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}
```

---

### 🔒 Nested Routes

```jsx
// Nested routes share a common layout
function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="overview">Overview</Link> |
        <Link to="stats">Stats</Link>
      </nav>
      <Outlet />   {/* renders the active child route here */}
    </div>
  );
}

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index         element={<Overview />} />   {/* /dashboard */}
    <Route path="stats"  element={<Stats />}   />   {/* /dashboard/stats */}
  </Route>
</Routes>
```

---

### 🗺️ React Router Hooks — Quick Reference

| Hook | Purpose | Example |
|------|---------|---------|
| `useParams` | Read URL parameters | `const { id } = useParams()` |
| `useNavigate` | Programmatic navigation | `navigate("/home")` or `navigate(-1)` |
| `useLocation` | Read current URL info | `const { pathname } = useLocation()` |
| `useSearchParams` | Read/write query strings | `?search=react` |

---

## 🪝 Custom Hooks Creation

### 📖 Theory

A **custom hook** is a JavaScript function whose name starts with `use` that calls other hooks internally. It lets you **extract reusable stateful logic** out of components — so the same logic doesn't get copy-pasted across your app.

```
Without Custom Hooks                    With Custom Hooks
──────────────────────────────────      ────────────────────────────────
  ComponentA                            function useFetch(url) {
    useState(null)  ← duplicated          useState, useEffect, error...
    useEffect(fetch)← duplicated          return { data, loading, error }
    loading, error  ← duplicated        }
  ComponentB
    useState(null)  ← same code again   ComponentA → useFetch("/api/users")
    useEffect(fetch)← same code again   ComponentB → useFetch("/api/posts")
    loading, error  ← same code again   ComponentC → useFetch("/api/movies")
                                        (DRY ✅ — logic lives in one place)
```

> 🔑 **Rule:** If a function name starts with `use` and calls hooks inside → it's a custom hook. React's linter enforces hook rules on it automatically.

---

### 🪝 Custom Hook 1 — useFetch

```jsx
import { useState, useEffect } from "react";

// Reusable data-fetching hook
function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then(res  => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
      .then(data => { setData(data);         setLoading(false); })
      .catch(err => { if (err.name !== "AbortError") { setError(err.message); setLoading(false); } });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage — any component, any URL
function PostList() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  if (loading) return <p>⏳ Loading posts...</p>;
  if (error)   return <p>❌ {error}</p>;

  return (
    <ul>
      {posts?.map(post => <li key={post.id}><strong>{post.title}</strong></li>)}
    </ul>
  );
}
```

---

### 🪝 Custom Hook 2 — useLocalStorage

```jsx
import { useState } from "react";

// Syncs state with localStorage automatically
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// Usage — persists across page refreshes!
function Settings() {
  const [theme,    setTheme]    = useLocalStorage("theme",    "light");
  const [fontSize, setFontSize] = useLocalStorage("fontSize", 16);

  return (
    <div>
      <h2>⚙️ Settings</h2>
      <label>
        Theme:
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </label>
      <label>
        Font Size: {fontSize}px
        <input type="range" min="12" max="24" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
      </label>
      <p style={{ fontSize: `${fontSize}px` }}>Preview text at {fontSize}px</p>
    </div>
  );
}
```

---

### 🪝 Custom Hook 3 — useDebounce

```jsx
import { useState, useEffect } from "react";

// Delays updating a value until user stops typing
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);   // reset timer on every value change
  }, [value, delay]);

  return debouncedValue;
}

// Usage — API only called after user stops typing for 500ms
function SearchPage() {
  const [query,         setQuery]   = useState("");
  const debouncedQuery              = useDebounce(query, 500);
  const { data, loading }           = useFetch(
    debouncedQuery ? `https://api.example.com/search?q=${debouncedQuery}` : null
  );

  return (
    <div>
      <input
        value       = {query}
        onChange    = {e => setQuery(e.target.value)}
        placeholder = "🔍 Search... (waits 500ms)"
      />
      {loading && <p>Searching for "{debouncedQuery}"...</p>}
    </div>
  );
}
```

---

## 📝 Forms & Controlled Components

### 📖 Theory

A **controlled component** is an input whose value is driven entirely by React state. React is the **single source of truth** — the DOM just displays what React tells it to.

```
Uncontrolled Component          Controlled Component
───────────────────────────     ─────────────────────────────────
  DOM owns the value              React state owns the value
  You read it with a ref          You read it from state
  React doesn't know it changed   React knows on every keystroke
  Hard to validate in real-time   Easy to validate instantly ✅
```

---

### 📝 Complete Controlled Form

```jsx
import { useState } from "react";

const INITIAL_FORM = {
  fullName   : "",
  email      : "",
  password   : "",
  role       : "developer",
  agreeToTOS : false,
};

function RegistrationForm() {
  const [form,   setForm]   = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Generic handler — works for text, email, select
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear error when user starts fixing a field
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim())      newErrors.fullName  = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (form.password.length < 8)   newErrors.password  = "Minimum 8 characters";
    if (!form.agreeToTOS)           newErrors.agreeToTOS = "You must agree to continue";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("✅ Form submitted:", form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  if (submitted) return <p style={{ color: "green" }}>🎉 Registration successful!</p>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>📋 Register</h2>

      {/* Text input */}
      <div>
        <label>Full Name</label>
        <input
          name        = "fullName"
          value       = {form.fullName}
          onChange    = {handleChange}
          placeholder = "Madhvendra Singh"
        />
        {errors.fullName && <span style={{ color: "red" }}>⚠️ {errors.fullName}</span>}
      </div>

      {/* Email input */}
      <div>
        <label>Email</label>
        <input
          name        = "email"
          type        = "email"
          value       = {form.email}
          onChange    = {handleChange}
          placeholder = "you@example.com"
        />
        {errors.email && <span style={{ color: "red" }}>⚠️ {errors.email}</span>}
      </div>

      {/* Password input */}
      <div>
        <label>Password</label>
        <input
          name        = "password"
          type        = "password"
          value       = {form.password}
          onChange    = {handleChange}
          placeholder = "Min. 8 characters"
        />
        {errors.password && <span style={{ color: "red" }}>⚠️ {errors.password}</span>}
      </div>

      {/* Select dropdown */}
      <div>
        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="developer">👨‍💻 Developer</option>
          <option value="designer">🎨 Designer</option>
          <option value="manager">📊 Manager</option>
        </select>
      </div>

      {/* Checkbox */}
      <div>
        <label>
          <input
            name     = "agreeToTOS"
            type     = "checkbox"
            checked  = {form.agreeToTOS}
            onChange = {handleChange}
          />
          I agree to the Terms of Service
        </label>
        {errors.agreeToTOS && <span style={{ color: "red" }}>⚠️ {errors.agreeToTOS}</span>}
      </div>

      <button type="submit">🚀 Create Account</button>
      <button type="button" onClick={() => setForm(INITIAL_FORM)}>🔄 Reset</button>
    </form>
  );
}
```

**📌 Key points:**
- One `handleChange` handles **all** field types using `e.target.name`
- `type === "checkbox"` uses `checked` instead of `value`
- `[name]: value` — computed property key dynamically targets the right field
- Validation runs on submit; errors clear when the user fixes each field

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. Missing dependency in array → stale data / wrong behavior
useEffect(() => {
  fetchUser(userId);   // uses userId but it's not listed!
}, []);               // Bug: won't re-fetch when userId changes

// ✅ Fix
useEffect(() => {
  fetchUser(userId);
}, [userId]);          // Re-fetches when userId changes


// ❌ 2. Making the useEffect callback async directly
useEffect(async () => {       // Returns a Promise — React expects void or cleanup!
  const data = await fetch(url);
}, []);

// ✅ Fix — wrap in inner async function
useEffect(() => {
  const load = async () => { const data = await fetch(url); };
  load();
}, []);


// ❌ 3. Not cleaning up — memory leak
useEffect(() => {
  const timer = setInterval(() => doSomething(), 1000);
  // No return → timer runs forever after component unmounts!
}, []);

// ✅ Fix — always return cleanup for subscriptions and timers
useEffect(() => {
  const timer = setInterval(() => doSomething(), 1000);
  return () => clearInterval(timer);
}, []);


// ❌ 4. Setting state unconditionally in useEffect — infinite loop
useEffect(() => {
  setCount(count + 1);   // state update → re-render → effect runs → update → ...💥
}, [count]);

// ✅ Fix — add a condition or restructure the logic
useEffect(() => {
  if (count < 5) setCount(count + 1);
}, [count]);


// ❌ 5. Using <a> tag instead of <Link> in React Router
<a href="/about">About</a>    // Causes full page reload — loses all React state!

// ✅ Fix
<Link to="/about">About</Link>


// ❌ 6. Forgetting to handle loading & error states
const { data } = useFetch("/api/user");
return <h1>{data.name}</h1>;   // Crashes if data is null on first render!

// ✅ Fix
if (loading) return <p>Loading...</p>;
if (error)   return <p>Error!</p>;
return <h1>{data.name}</h1>;
```

---

### ✅ Do's & Don'ts — Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| List all used variables in dependency array | Omit dependencies — causes stale closures |
| Return cleanup from subscriptions & timers | Leave timers/listeners running after unmount |
| Use `AbortController` to cancel fetch | Let stale responses overwrite newer ones |
| Always handle loading & error states | Assume fetch always succeeds instantly |
| Use `<Link>` for navigation | Use `<a href>` — causes full page reload |
| Wrap async logic in inner function | Make `useEffect` callback `async` directly |
| Start custom hook names with `use` | Name hooks without `use` prefix |
| Keep custom hooks single-purpose | Put all logic into one giant custom hook |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **`useEffect`** | Runs side effects after render | Always clean up subscriptions & timers |
| **Dependency array** | Controls when effect re-runs | `[]` = once · `[val]` = on change · none = always |
| **Data fetching** | API calls inside `useEffect` | Handle loading, error, and data states |
| **`AbortController`** | Cancels in-flight fetch | Always abort on component unmount |
| **React Router** | Client-side navigation | Use `<Link>` not `<a>` — no page reload |
| **`useParams`** | Read dynamic URL segments | `const { id } = useParams()` |
| **`useNavigate`** | Programmatic redirect | `navigate("/path")` or `navigate(-1)` |
| **Custom hooks** | Reusable stateful logic | Name must start with `use` |
| **Controlled form** | React owns every input value | `value={state}` + `onChange={handler}` |
| **Form validation** | Check fields before submit | Validate on submit, clear errors on fix |

<br/>

```
🗺️  Day 3 Mental Model

  Component Mounts
        │
        ▼
  useEffect runs ──▶ fetch() / timer / subscription starts
        │
        ▼
  Data arrives ──▶ setState() ──▶ Re-render with data ✅
        │
        ▼ (when deps change)
  Cleanup runs ──▶ previous effect cancelled 🧹
  New effect runs ──▶ fresh fetch / subscription ✅
        │
        ▼ (component unmounts)
  Final cleanup runs ──▶ no memory leaks 💧✅
```

<br/>

> 🚀 **Up Next — Day 4:**
> `Context API` · `useReducer` · `React.memo` · `useMemo` · `useCallback` · Lazy Loading

<br/>

<div align="center">

**Happy Coding! 💻✨**

*Side effects managed cleanly = React apps that scale.* 🚀

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
