<div align="center">

# ⚡ Day 2: State Management & Event Handling

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/useState-Hook-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Day-02-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [🔵 useState Hook Fundamentals](#-usestate-hook-fundamentals) |
| 4 | [🖱️ Event Handling](#%EF%B8%8F-event-handling) |
| 5 | [🔀 Conditional Rendering](#-conditional-rendering) |
| 6 | [📋 Lists and Keys in React](#-lists-and-keys-in-react) |
| 7 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 8 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ `useState` hook fundamentals
✅ Event handling (`onClick`, `onChange`, `onSubmit`)
✅ Conditional rendering
✅ Lists and keys in React

---

## 💡 Real-Life Analogy

### 📓 Smart Notebook Concept

> **State** is like a notebook where React keeps track of changing information.
> When you update the notebook (`setState`), React **automatically re-renders** the page to show the new information —
> like a smartboard that updates itself the moment you write on it.

```
📓 Regular Variable (Dumb Notebook)      🔁 React State (Smart Notebook)
─────────────────────────────────────    ──────────────────────────────────────────
  let score = 0;                           const [score, setScore] = useState(0);

  score = score + 1;                       setScore(score + 1);
  // You updated the notebook ✍️           // You updated the notebook ✍️
  // BUT the screen stays the same ❌      // Screen updates automatically ✅
                                           // React "reacts" to every change!
```

> 🧠 **The Key Insight:** A regular variable resets every render. `useState` gives a component **persistent memory** — it remembers its value across renders and tells React to update the UI whenever it changes.

---

## 🔵 useState Hook Fundamentals

### 📖 Theory

`useState` is React's most fundamental hook. It adds **state** — dynamic, changeable data — to a functional component.

Before hooks (React < 16.8), only class components could hold state. `useState` brought that power to functional components in a clean, simple way.

**What happens when state changes?**

```
setScore(10)  →  React schedules a re-render
              →  Component function runs again
              →  New JSX is returned
              →  React compares old JSX vs new JSX (Virtual DOM diff)
              →  Only the changed parts update in real DOM ✅
```

---

### 🔬 Anatomy of useState

```jsx
const [state, setState] = useState(initialValue);
//     │       │                    │
//     │       │                    └── Starting value (runs only once)
//     │       └── Updater function (triggers re-render)
//     └── Current value (read-only snapshot)
```

- `state` — the **current value** — treat it as read-only
- `setState` — the **only correct way** to update state
- `initialValue` — can be a string, number, boolean, array, object, or even a function

---

### 💻 useState in Action — Theme Toggle

```jsx
import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const pageStyle = {
    backgroundColor : isDark ? "#1e1e2e" : "#ffffff",
    color           : isDark ? "#cdd6f4" : "#1e1e2e",
    minHeight       : "100vh",
    display         : "flex",
    flexDirection   : "column",
    alignItems      : "center",
    padding         : "40px",
    transition      : "all 0.3s ease"
  };

  return (
    <div style={pageStyle}>
      <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <p>The page background changes based on state!</p>
      <button onClick={() => setIsDark(prev => !prev)}>
        Switch to {isDark ? "Light ☀️" : "Dark 🌙"}
      </button>
    </div>
  );
}
```

**📌 What this shows:**
- `isDark` starts as `false` (light mode)
- Clicking the button calls `setIsDark(prev => !prev)` — flips the boolean
- React re-renders the component with the new value
- Styles and text update to reflect the new state

---

### 🧩 Multiple State Variables

Each piece of state should be **independent**. Use multiple `useState` calls for unrelated data:

```jsx
function UserDashboard() {
  const [username,   setUsername]   = useState("Madhvendra");
  const [followers,  setFollowers]  = useState(4200);
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab,  setActiveTab]  = useState("posts");

  return (
    <div>
      <h2>
        {username} {isVerified && "✅"}
      </h2>
      <p>👥 {followers.toLocaleString()} followers</p>

      {/* Tab navigation */}
      <div className="tabs">
        {["posts", "reels", "saved"].map(tab => (
          <button
            key      = {tab}
            onClick  = {() => setActiveTab(tab)}
            style    = {{ fontWeight: activeTab === tab ? "bold" : "normal" }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <p>Viewing: <strong>{activeTab}</strong></p>
    </div>
  );
}
```

---

### 🗂️ State with Objects & Arrays

When state is an **object or array**, always spread the existing state — never mutate directly:

```jsx
function ProfileEditor() {
  const [profile, setProfile] = useState({
    name     : "Madhvendra Singh",
    role     : "React Developer",
    skills   : ["JavaScript", "React"],
    available: true
  });

  // ✅ Updating one field — spread the rest
  const updateRole = (newRole) => {
    setProfile(prev => ({ ...prev, role: newRole }));
  };

  // ✅ Adding to an array inside state
  const addSkill = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  // ✅ Removing from an array inside state
  const removeSkill = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Role: {profile.role}</p>
      <p>Status: {profile.available ? "🟢 Available" : "🔴 Busy"}</p>

      <h4>Skills:</h4>
      <ul>
        {profile.skills.map((skill, i) => (
          <li key={i}>
            {skill}
            <button onClick={() => removeSkill(skill)}>✕</button>
          </li>
        ))}
      </ul>

      <button onClick={() => addSkill("TypeScript")}>+ Add TypeScript</button>
      <button onClick={() => setProfile(prev => ({ ...prev, available: !prev.available }))}>
        Toggle Availability
      </button>
    </div>
  );
}
```

> ⚠️ **Never do this:**
> ```jsx
> profile.name = "New Name";   // ❌ Mutating state directly
> setProfile(profile);         // ❌ React won't detect the change (same reference!)
> ```
> Always create a **new object** with spread: `setProfile(prev => ({ ...prev, name: "New Name" }))`

---

### ⚡ Functional Updates — The `prev` Pattern

When the new state **depends on the old state**, always use the functional form `setState(prev => ...)`:

```jsx
function ScoreBoard() {
  const [score, setScore] = useState(0);

  // ✅ SAFE — uses latest state via prev
  const increment = () => setScore(prev => prev + 1);
  const double    = () => setScore(prev => prev * 2);
  const reset     = () => setScore(0);    // doesn't depend on prev, so direct is fine

  // ❌ RISKY — may use a stale value if multiple updates are batched
  // const increment = () => setScore(score + 1);

  return (
    <div>
      <h2>🏆 Score: {score}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={double}>×2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

> 💡 **Rule:** If your new value depends on the previous value → use `prev => newValue`. If it's an independent value → direct update is fine.

---

## 🖱️ Event Handling

### 📖 Theory

React events are **synthetic events** — React wraps native browser events in a unified API that works identically across all browsers. They follow the same W3C standard but are normalized for consistency.

**Key differences from HTML events:**

| HTML | React | Why? |
|------|-------|------|
| `onclick="doThis()"` | `onClick={doThis}` | Passes the function, doesn't call it |
| `onchange` | `onChange` | camelCase convention |
| String value | Function reference | JSX is JavaScript, not HTML |
| No `e.preventDefault()` needed for forms | Must call `e.preventDefault()` | React doesn't auto-prevent defaults |

---

### 🖱️ onClick — Click Events

```jsx
function ActionButtons() {
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog(prev => [`${new Date().toLocaleTimeString()} — ${message}`, ...prev]);
  };

  return (
    <div>
      {/* Inline arrow function — for passing arguments */}
      <button onClick={() => addLog("Primary button clicked")}>
        🔵 Primary
      </button>

      {/* Function reference — for no-argument handlers */}
      <button onClick={() => addLog("Danger button clicked")} style={{ background: "red" }}>
        🔴 Danger
      </button>

      {/* Accessing the event object */}
      <button onClick={(e) => {
        e.target.textContent = "✅ Clicked!";
        addLog("Event object accessed");
      }}>
        🟡 Click Me
      </button>

      <hr />
      <h4>Activity Log:</h4>
      <ul>
        {log.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
    </div>
  );
}
```

---

### ✏️ onChange — Input Events

`onChange` fires on **every keystroke** — this is how React keeps its state in sync with what the user types (Controlled Components):

```jsx
function SearchBar() {
  const [query,   setQuery]   = useState("");
  const [filter,  setFilter]  = useState("all");

  // e.target.value = current input value
  const handleSearch = (e) => setQuery(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  const movies = [
    { id: 1, title: "Inception",       genre: "sci-fi"  },
    { id: 2, title: "Interstellar",    genre: "sci-fi"  },
    { id: 3, title: "The Dark Knight", genre: "action"  },
    { id: 4, title: "Parasite",        genre: "thriller"},
    { id: 5, title: "Avengers",        genre: "action"  },
  ];

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase()) &&
    (filter === "all" || m.genre === filter)
  );

  return (
    <div>
      <input
        type        = "text"
        value       = {query}           // controlled — React owns the value
        onChange    = {handleSearch}
        placeholder = "🔍 Search movies..."
      />

      <select value={filter} onChange={handleFilter}>
        <option value="all">All Genres</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
      </select>

      <p>{filtered.length} result(s) found</p>
      <ul>
        {filtered.map(m => <li key={m.id}>🎬 {m.title} — {m.genre}</li>)}
      </ul>
    </div>
  );
}
```

---

### 📬 onSubmit — Form Events

```jsx
function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error"

  // Generic handler — works for all fields using their `name` attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();   // ← prevents page reload

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    console.log("Form submitted:", form);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });  // reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name        = "name"
        value       = {form.name}
        onChange    = {handleChange}
        placeholder = "Your name"
      />
      <input
        name        = "email"
        type        = "email"
        value       = {form.email}
        onChange    = {handleChange}
        placeholder = "Your email"
      />
      <textarea
        name        = "message"
        value       = {form.message}
        onChange    = {handleChange}
        placeholder = "Your message"
      />
      <button type="submit">📨 Send Message</button>

      {status === "success" && <p style={{ color: "green" }}>✅ Message sent!</p>}
      {status === "error"   && <p style={{ color: "red"  }}>❌ Please fill all fields.</p>}
    </form>
  );
}
```

**📌 What `e.preventDefault()` does:**
- Browsers by default **reload the page** on form submit
- `e.preventDefault()` stops that native behavior
- React then handles the submission entirely with JavaScript

---

### 🗂️ Common Events Reference

| Event | Element | What it captures |
|-------|---------|-----------------|
| `onClick` | Button, div, any | Mouse click |
| `onChange` | Input, select, textarea | Value change |
| `onSubmit` | Form | Form submission |
| `onKeyDown` | Input | Key pressed (with `e.key`) |
| `onKeyUp` | Input | Key released |
| `onFocus` | Input | Input gains focus |
| `onBlur` | Input | Input loses focus |
| `onMouseEnter` | Any element | Hover begins |
| `onMouseLeave` | Any element | Hover ends |
| `onScroll` | Div, window | Scroll event |

---

## 🔀 Conditional Rendering

### 📖 Theory

Conditional rendering means showing **different UI based on state, props, or any condition**. Since JSX only accepts expressions (not statements), React uses JavaScript's expression-based conditionals — primarily ternary (`? :`) and logical AND (`&&`).

```
Condition         Method              Use When
─────────────     ──────────────────  ──────────────────────────────────
true/false        Logical &&          Show something OR show nothing
either/or         Ternary ? :         Show one thing OR another thing
multiple options  Variable / switch   Complex, many-branch logic
```

---

### 🔀 All 3 Methods in Practice

```jsx
function NotificationCenter() {
  const [isLoggedIn,    setIsLoggedIn]    = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [plan,          setPlan]          = useState("free"); // free | pro | enterprise

  // Method 3 helper — multiple branches
  const getPlanBadge = () => {
    switch (plan) {
      case "enterprise": return <span style={{ background: "#f1c40f" }}>👑 Enterprise</span>;
      case "pro":        return <span style={{ background: "#9b59b6" }}>⭐ Pro</span>;
      default:           return <span style={{ background: "#95a5a6" }}>🆓 Free</span>;
    }
  };

  return (
    <div>
      {/* Method 1: Logical && — show only if true */}
      {notifications > 0 && (
        <div className="badge">
          🔔 You have {notifications} new notification{notifications > 1 ? "s" : ""}
        </div>
      )}

      {/* Method 2: Ternary — either/or */}
      {isLoggedIn
        ? <p>👋 Welcome back, Madhvendra!</p>
        : <p>🔐 Please sign in to continue.</p>
      }

      {/* Method 3: Variable / function — multi-branch */}
      <div>Your plan: {getPlanBadge()}</div>

      {/* Controls */}
      <button onClick={() => setIsLoggedIn(p => !p)}>
        {isLoggedIn ? "Sign Out" : "Sign In"}
      </button>

      <button onClick={() => setNotifications(0)}>
        Clear Notifications
      </button>

      <select onChange={e => setPlan(e.target.value)} value={plan}>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
}
```

---

### 🎯 Conditional Rendering Patterns

```jsx
// Pattern 1: Guard clause — return early
function UserCard({ user }) {
  if (!user) return <p>No user found.</p>;     // early exit
  if (user.banned) return <p>🚫 Banned user</p>;

  return <div><h2>{user.name}</h2></div>;
}

// Pattern 2: Null return — render nothing
function Tooltip({ message, visible }) {
  if (!visible) return null;   // renders nothing, no DOM node
  return <div className="tooltip">{message}</div>;
}

// Pattern 3: Conditional className
function Button({ isActive, children }) {
  return (
    <button className={`btn ${isActive ? "btn-active" : "btn-inactive"}`}>
      {children}
    </button>
  );
}

// Pattern 4: Short-circuit with 0 — common GOTCHA ⚠️
const count = 0;
// ❌ This renders "0" on screen (0 is falsy but renders!)
{count && <p>You have {count} items</p>}

// ✅ Fix — convert to boolean explicitly
{count > 0 && <p>You have {count} items</p>}
{!!count    && <p>You have {count} items</p>}
```

> ⚠️ **The `0` Gotcha:** `&&` short-circuits at falsy values — but `0` is falsy AND it renders as the character "0" in the DOM. Always compare explicitly: `count > 0 && ...`

---

## 📋 Lists and Keys in React

### 📖 Theory

React renders lists by using JavaScript's `.map()` method to transform an array of data into an array of JSX elements.

**Why `.map()` and not a `for` loop?**
Because JSX `{}` only accepts **expressions** (things that return a value). `.map()` returns a new array — that's an expression. A `for` loop is a statement — not allowed inside `{}`.

**Why do keys matter?**

```
Without keys — React re-renders entire list on every change  ❌ (slow)
With keys    — React identifies exactly which item changed   ✅ (fast)

Example: Adding "Dune" to the top of a movie list
  Without keys → React re-renders ALL items
  With keys    → React only inserts the new item, leaves rest untouched
```

---

### 📋 Basic List Rendering

```jsx
function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception",       rating: 9.3, genre: "Sci-Fi",   watched: true  },
    { id: 2, title: "Interstellar",    rating: 8.7, genre: "Sci-Fi",   watched: false },
    { id: 3, title: "The Dark Knight", rating: 9.0, genre: "Action",   watched: true  },
    { id: 4, title: "Parasite",        rating: 8.6, genre: "Thriller", watched: false },
  ]);

  const toggleWatched = (id) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  };

  const removeMovie = (id) => {
    setMovies(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div>
      <h2>🎬 My Watchlist ({movies.length})</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ opacity: movie.watched ? 0.5 : 1 }}>

            <input
              type     = "checkbox"
              checked  = {movie.watched}
              onChange = {() => toggleWatched(movie.id)}
            />

            <strong>{movie.title}</strong>
            <span> — ⭐ {movie.rating} | {movie.genre}</span>
            {movie.watched && <span> ✅</span>}

            <button onClick={() => removeMovie(movie.id)}>🗑</button>
          </li>
        ))}
      </ul>

      <p>
        {movies.filter(m => m.watched).length} / {movies.length} watched
      </p>
    </div>
  );
}
```

---

### 🔑 Keys — The Rules

```jsx
// ❌ BAD — index as key (breaks on reorder, filter, or insert)
{movies.map((movie, index) => (
  <MovieCard key={index} movie={movie} />
))}

// ✅ GOOD — stable unique ID from data
{movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}

// ✅ ALSO VALID — unique string if no id exists
{movies.map((movie) => (
  <MovieCard key={movie.title} movie={movie} />
))}
```

**Why index as key causes bugs:**

```
Original list:          After removing "Inception":
  key=0  Inception        key=0  Interstellar    ← React thinks this is Inception!
  key=1  Interstellar     key=1  Dark Knight     ← wrong mapping → UI glitches
  key=2  Dark Knight
```

---

### 🔍 Filtering & Sorting Lists

```jsx
function FilterableList() {
  const [items]    = useState([
    { id: 1, name: "MacBook Pro",   category: "laptop",  price: 189990 },
    { id: 2, name: "iPhone 15 Pro", category: "phone",   price: 134900 },
    { id: 3, name: "iPad Air",      category: "tablet",  price: 59900  },
    { id: 4, name: "Dell XPS",      category: "laptop",  price: 129990 },
    { id: 5, name: "Samsung S24",   category: "phone",   price: 79999  },
  ]);

  const [category, setCategory] = useState("all");
  const [sortBy,   setSortBy]   = useState("name");

  const displayed = items
    .filter(item => category === "all" || item.category === category)
    .sort((a, b) => sortBy === "price" ? a.price - b.price : a.name.localeCompare(b.name));

  return (
    <div>
      {/* Filter controls */}
      <select onChange={e => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="laptop">💻 Laptops</option>
        <option value="phone">📱 Phones</option>
        <option value="tablet">📟 Tablets</option>
      </select>

      <select onChange={e => setSortBy(e.target.value)}>
        <option value="name">Sort: Name</option>
        <option value="price">Sort: Price</option>
      </select>

      <p>{displayed.length} products found</p>

      <ul>
        {displayed.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> — ₹{item.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**📌 Key points:**
- `.filter()` returns a new array with matching items — **does not mutate original**
- `.sort()` is chained after `.filter()` — both are expressions, valid inside render
- `key={item.id}` is on the outermost element inside `.map()`

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. Mutating state directly
state.count = 5;              // React won't detect this!
setState(state);

// ✅ Fix — always return a new value
setState(prev => ({ ...prev, count: 5 }));


// ❌ 2. Using stale state in updates
setScore(score + 1);          // 'score' may be stale in closures
setScore(score + 1);          // this second call may still see old value!

// ✅ Fix — use functional updates
setScore(prev => prev + 1);
setScore(prev => prev + 1);   // always gets the latest value


// ❌ 3. Missing key prop in lists
{items.map(item => <li>{item.name}</li>)}   // Warning + potential bugs

// ✅ Fix
{items.map(item => <li key={item.id}>{item.name}</li>)}


// ❌ 4. Index as key when list can be reordered/filtered
{items.map((item, i) => <Card key={i} {...item} />)}

// ✅ Fix
{items.map(item => <Card key={item.id} {...item} />)}


// ❌ 5. Calling setState in render (infinite loop!)
function Bad() {
  const [x, setX] = useState(0);
  setX(1);          // ← runs during render → re-render → runs again → 💥
  return <div>{x}</div>;
}

// ✅ Fix — put it inside an event handler or useEffect
<button onClick={() => setX(1)}>Set</button>


// ❌ 6. Not calling e.preventDefault() on form submit
<form onSubmit={handleSubmit}>   // page reloads if you forget!

// ✅ Fix
const handleSubmit = (e) => {
  e.preventDefault();
  // ... rest of logic
};


// ❌ 7. The "0" gotcha in conditional rendering
{count && <p>{count} items</p>}   // renders "0" when count is 0!

// ✅ Fix
{count > 0 && <p>{count} items</p>}
```

---

### ✅ Do's & Don'ts — Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use `setState` to update state | Mutate state directly |
| Use `prev => ...` for dependent updates | Use `stateVar + 1` in loops or closures |
| Use stable `item.id` as list key | Use array index as key |
| Call `e.preventDefault()` on form submit | Let forms cause page reload |
| Keep state minimal — only what changes | Store derived data in state |
| Use `count > 0 &&` for safe conditionals | Use `count &&` risking "0" on screen |
| Handle loading & error states | Assume API calls always succeed |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **`useState`** | Gives a component memory | Never mutate directly — always use `setState` |
| **Functional update** | `setState(prev => ...)` | Use when new value depends on old value |
| **Object/Array state** | State holding complex data | Spread `...prev` before updating |
| **`onClick`** | Click event handler | Pass a function reference, never call it: `onClick={fn}` |
| **`onChange`** | Input value handler | Use `e.target.value` to read the typed value |
| **`onSubmit`** | Form submission handler | Always call `e.preventDefault()` first |
| **Ternary `? :`** | Either/or rendering | Best for two-branch conditions |
| **Logical `&&`** | Show or show nothing | Use `count > 0 &&` to avoid the "0" bug |
| **`.map()` + key** | Rendering lists | Use stable unique `id` — never array index |
| **`.filter()`** | Narrowing a list | Returns new array — never mutates original |

<br/>

```
🗺️  Day 2 Mental Model

  User Action (click / type / submit)
          │
          ▼
  Event Handler (onClick / onChange / onSubmit)
          │
          ▼
  setState(newValue)  or  setState(prev => newValue)
          │
          ▼
  React schedules re-render
          │
          ▼
  Component runs again with new state
          │
          ▼
  React diffs Virtual DOM → updates only what changed ✅
```

<br/>

> 🚀 **Up Next — Day 3:**
> `useEffect` · Data Fetching · React Router · Custom Hooks · Controlled Forms

<br/>

<div align="center">

**Happy Coding! 💻✨**

*Master state and you master React.* 🚀

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
