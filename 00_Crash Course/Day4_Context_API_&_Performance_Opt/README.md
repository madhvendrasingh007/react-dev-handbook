<div align="center">

# 🎨 Day 4: Context API & Performance Optimization

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Context_API-Hook-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Day-04-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [📡 Context API & useContext](#-context-api--usecontext) |
| 4 | [🔁 useReducer for Complex State](#-usereducer-for-complex-state) |
| 5 | [⚡ React.memo & useMemo](#-reactmemo--usememo) |
| 6 | [🔒 useCallback Hook](#-usecallback-hook) |
| 7 | [✂️ Lazy Loading & Code Splitting](#%EF%B8%8F-lazy-loading--code-splitting) |
| 8 | [🛡️ Error Boundaries](#%EF%B8%8F-error-boundaries) |
| 9 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 10 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ Context API and `useContext` hook
✅ `useReducer` for complex state
✅ `React.memo` and `useMemo`
✅ `useCallback` hook
✅ Lazy loading and code splitting
✅ Error boundaries

---

## 💡 Real-Life Analogy

### 📡 Radio Broadcast Tower — Context API

> **Context API** is like a **radio broadcast tower**.
> Instead of passing messages person-to-person (prop drilling), the tower **broadcasts to everyone** who tunes in —
> any component with a radio (consumer) can listen without the parent manually handing it down.

```
❌ Prop Drilling (Telephone Chain)       ✅ Context API (Radio Tower)
──────────────────────────────────────   ──────────────────────────────────────
  App                                      📡 ThemeContext.Provider
   └─▶ Page        (receives theme)             │ broadcasts "dark"
        └─▶ Layout (receives theme)             │
             └─▶ Sidebar (receives theme)       ├── 📻 Header   (tunes in)
                  └─▶ Button (USES theme)       ├── 📻 Sidebar  (tunes in)
                                                └── 📻 Footer   (tunes in)
  (Every middle component carries it ❌)   (No middleman needed ✅)
```

### 🏪 Vending Machine — useReducer

> `useReducer` is like a **vending machine** — you press a button (dispatch an action),
> the machine processes it using its internal rules (reducer function),
> and delivers a new state (your snack) without you knowing the internal wiring.

---

## 📡 Context API & useContext

### 📖 Theory

**Context API** solves the **prop drilling** problem — when you need to pass data through many layers of components that don't actually need it, just to reach a deeply nested child.

Context creates a **global data channel** — a Provider broadcasts a value, and any Consumer in the tree can read it directly, regardless of how deeply nested it is.

```
Without Context                         With Context
──────────────────────────────────      ───────────────────────────────────
  App (has user data)                     <UserContext.Provider value={user}>
   ↓ passes user as prop                    App
  Page (doesn't need user)                  └── Page
   ↓ passes user down again                      └── Sidebar
  Sidebar (doesn't need user)                          └── Avatar
   ↓ passes user again                                      ↑
  Avatar (finally uses user!)                   useContext(UserContext) ✅
                                                No prop chain needed!
```

---

### 🔨 3 Steps to Use Context

```
Step 1: createContext()    →   Create the channel
Step 2: <Context.Provider> →   Broadcast the value
Step 3: useContext()       →   Tune in from any component
```

---

### 💻 Theme Context — Full Example

```jsx
import { createContext, useContext, useState } from "react";

// Step 1: Create the context (with a default value)
const ThemeContext = createContext({
  theme  : "light",
  toggle : () => {}
});

// Step 2: Provider — broadcasts theme to all children
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggle = () => setTheme(t => t === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — cleaner than calling useContext everywhere
function useTheme() {
  return useContext(ThemeContext);
}

// Step 3: Any component tunes in — no props needed!
function Navbar() {
  const { theme, toggle } = useTheme();

  const style = {
    background : theme === "dark" ? "#1e1e2e" : "#ffffff",
    color      : theme === "dark" ? "#cdd6f4" : "#1e1e2e",
    padding    : "16px 24px",
    display    : "flex",
    justifyContent: "space-between",
    alignItems    : "center"
  };

  return (
    <nav style={style}>
      <span>⚛️ React App</span>
      <button onClick={toggle}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

function Footer() {
  const { theme } = useTheme();
  return (
    <footer style={{ background: theme === "dark" ? "#181825" : "#f5f5f5", padding: "16px", textAlign: "center" }}>
      © 2026 — {theme} theme active
    </footer>
  );
}

// Wrap app with Provider — everything inside can now access theme
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>Page content here</main>
      <Footer />
    </ThemeProvider>
  );
}
```

**📌 What this shows:**
- `Navbar` and `Footer` both read `theme` directly — no prop passing
- `toggle` is also available anywhere — no callback drilling
- The custom `useTheme()` hook makes consuming context even cleaner

---

### 👤 User Auth Context — Real-World Pattern

```jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login  = (userData) => setUser(userData);
  const logout = ()          => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

// Usage in any component
function ProfileButton() {
  const { user, isLoggedIn, logout } = useAuth();

  return isLoggedIn
    ? <button onClick={logout}>👋 {user.name} — Sign Out</button>
    : <button>🔐 Sign In</button>;
}
```

> 💡 **Best Practice:** Always create a custom hook (like `useAuth`, `useTheme`) that wraps `useContext`.
> It gives a better error message if someone uses it outside the provider, and makes refactoring easier.

---

## 🔁 useReducer for Complex State

### 📖 Theory

`useReducer` is an alternative to `useState` for managing **complex state logic**. While `useState` is perfect for independent values, `useReducer` shines when:

- State has **multiple sub-values** that change together
- The next state depends on the **previous state** in a complex way
- State transitions follow **predictable, named rules** (like a state machine)

```
useState                              useReducer
──────────────────────────────────    ──────────────────────────────────────
  setCount(count + 1)                   dispatch({ type: "INCREMENT" })
  setCount(count - 1)                   dispatch({ type: "DECREMENT" })
  setCount(0)                           dispatch({ type: "RESET" })
  setItems([...items, newItem])         dispatch({ type: "ADD",    payload: item })
  setItems(items.filter(...))           dispatch({ type: "REMOVE", payload: id })

  Multiple setStates scattered ❌       All logic in one reducer ✅
                                        Easy to test & reason about ✅
```

---

### 🔬 Anatomy of useReducer

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
//      │       │                     │         │
//      │       │                     │         └── Starting state object
//      │       │                     └── Pure function: (state, action) → newState
//      │       └── Function to send actions
//      └── Current state
```

```jsx
// Reducer — a pure function that handles all state transitions
function reducer(state, action) {
  switch (action.type) {
    case "ACTION_NAME":
      return { ...state, /* new state */ };
    default:
      return state;   // always return state for unknown actions
  }
}
```

---

### 💻 Shopping Cart with useReducer

```jsx
import { useReducer } from "react";

const INITIAL_STATE = {
  items    : [],
  total    : 0,
  itemCount: 0
};

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM": {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        // Item already in cart → increase quantity
        return {
          ...state,
          items    : state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
          total    : state.total + action.payload.price,
          itemCount: state.itemCount + 1
        };
      }
      // New item → add to cart
      return {
        ...state,
        items    : [...state.items, { ...action.payload, qty: 1 }],
        total    : state.total + action.payload.price,
        itemCount: state.itemCount + 1
      };
    }

    case "REMOVE_ITEM": {
      const item = state.items.find(i => i.id === action.payload);
      return {
        ...state,
        items    : state.items.filter(i => i.id !== action.payload),
        total    : state.total - (item.price * item.qty),
        itemCount: state.itemCount - item.qty
      };
    }

    case "CLEAR_CART":
      return INITIAL_STATE;

    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const products = [
    { id: 1, name: "MacBook Pro M3", price: 189990 },
    { id: 2, name: "AirPods Pro",    price: 24900  },
    { id: 3, name: "MagSafe Charger",price: 3900   },
  ];

  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} — ₹{p.price.toLocaleString()}</span>
          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
            + Add to Cart
          </button>
        </div>
      ))}

      <hr />
      <h2>🛒 Cart ({cart.itemCount} items)</h2>
      {cart.items.map(item => (
        <div key={item.id}>
          <span>{item.name} × {item.qty} — ₹{(item.price * item.qty).toLocaleString()}</span>
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
            🗑 Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{cart.total.toLocaleString()}</h3>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}
```

**📌 Key benefits visible here:**
- Every state change is a **named action** — easy to trace what happened
- The reducer is a **pure function** — easy to test in isolation
- `dispatch` replaces multiple scattered `setState` calls

---

## ⚡ React.memo & useMemo

### 📖 Theory

React re-renders a component every time its **parent re-renders** — even if the component's own props didn't change. For expensive components or calculations, this is wasteful.

**Two tools to control this:**

| Tool | What it memoizes | Use when |
|------|:----------------:|---------|
| `React.memo` | A **component** — skips re-render if props unchanged | Child component with expensive render |
| `useMemo` | A **computed value** — recalculates only when deps change | Heavy calculation inside a component |

---

### ⚡ React.memo — Skip Unnecessary Re-renders

```jsx
import { useState, memo } from "react";

// Without memo — re-renders every time parent renders
// With memo — only re-renders when its props actually change
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  console.log(`Rendering: ${product.name}`);  // watch this in DevTools

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price.toLocaleString()}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

function Store() {
  const [cartCount,  setCartCount]  = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "MacBook Pro",  price: 189990 },
    { id: 2, name: "iPhone 15",    price: 79900  },
    { id: 3, name: "iPad Air",     price: 59900  },
  ];

  const handleAdd = (product) => setCartCount(c => c + 1);

  // Without memo: typing in search re-renders ALL ProductCards
  // With memo:    only the Store re-renders, ProductCards are skipped ✅
  return (
    <div>
      <input
        value       = {searchQuery}
        onChange    = {e => setSearchQuery(e.target.value)}
        placeholder = "Search (watch console)..."
      />
      <p>🛒 Cart: {cartCount} items</p>

      {products.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={handleAdd} />
      ))}
    </div>
  );
}
```

> ⚠️ **Memo only does a shallow comparison** of props. If you pass a new object or function reference on every render, memo won't help — that's where `useCallback` comes in.

---

### 💡 useMemo — Cache Expensive Calculations

```jsx
import { useState, useMemo } from "react";

function Analytics({ transactions }) {
  const [filter, setFilter]   = useState("all");
  const [sortBy, setSortBy]   = useState("date");

  // Without useMemo — recalculates on EVERY render (even unrelated state changes)
  // With useMemo — only recalculates when transactions or filter changes
  const stats = useMemo(() => {
    console.log("Calculating stats...");  // should run only when deps change

    const filtered = transactions.filter(t =>
      filter === "all" || t.type === filter
    );

    const total   = filtered.reduce((sum, t) => sum + t.amount, 0);
    const avg     = filtered.length ? total / filtered.length : 0;
    const highest = Math.max(...filtered.map(t => t.amount), 0);

    return { filtered, total, avg, highest };
  }, [transactions, filter]);  // only recalculates when these change

  return (
    <div>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="credit">Credits</option>
        <option value="debit">Debits</option>
      </select>

      <p>📊 Total: ₹{stats.total.toLocaleString()}</p>
      <p>📈 Average: ₹{stats.avg.toFixed(2)}</p>
      <p>🏆 Highest: ₹{stats.highest.toLocaleString()}</p>
      <p>{stats.filtered.length} transactions shown</p>
    </div>
  );
}
```

> 💡 **When NOT to use useMemo:** Don't wrap every calculation — memoization itself has a cost. Use it only when a calculation is genuinely slow (complex sorting, filtering large arrays, heavy math).

---

## 🔒 useCallback Hook

### 📖 Theory

In JavaScript, a function defined inside a component is **recreated on every render** — it's a brand new reference each time. This breaks `React.memo` because memo sees a new `onAddToCart` prop and re-renders anyway.

`useCallback` **memoizes a function** so it keeps the same reference between renders unless its dependencies change.

```
Without useCallback                   With useCallback
──────────────────────────────────    ───────────────────────────────────
  Every render creates new fn ref       Function ref stays the same
  memo sees new prop reference          memo sees same prop reference
  Child re-renders anyway ❌            Child skips re-render ✅
```

---

### 💻 useCallback in Practice

```jsx
import { useState, useCallback, memo } from "react";

// Memoized child — only re-renders when its props change
const ActionButton = memo(function ActionButton({ label, onClick }) {
  console.log(`Rendered: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function Dashboard() {
  const [count,  setCount]  = useState(0);
  const [darkMode, setDark] = useState(false);

  // ✅ Same function reference across renders — unless deps change
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);   // empty deps → never recreates

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  // Toggling dark mode re-renders Dashboard
  // But ActionButtons are SKIPPED because their callbacks haven't changed ✅
  return (
    <div>
      <p>Count: {count}</p>
      <ActionButton label="➕ Increment" onClick={handleIncrement} />
      <ActionButton label="🔄 Reset"     onClick={handleReset}     />
      <button onClick={() => setDark(d => !d)}>Toggle Dark Mode</button>
    </div>
  );
}
```

### React.memo vs useMemo vs useCallback — At a Glance

| Hook / API | Memoizes | Returns | Use Case |
|:----------:|:--------:|:-------:|---------|
| `React.memo` | A component | Component | Skip child re-renders |
| `useMemo` | A computed value | The value | Cache heavy calculations |
| `useCallback` | A function | The function | Stable function refs for memo'd children |

---

## ✂️ Lazy Loading & Code Splitting

### 📖 Theory

By default React bundles **all your components** into one JavaScript file. For large apps this means users download code for pages they may never visit — slowing down initial load.

**Code splitting** breaks the bundle into smaller chunks. **Lazy loading** loads those chunks only when needed — on navigation or interaction.

```
Without Code Splitting                  With Code Splitting
──────────────────────────────────      ───────────────────────────────────────
  Bundle: app.js (2MB)                    main.js       (200KB) ← loads first
  User downloads everything               home.chunk.js (100KB) ← loads on /home
  on first visit ❌                        dashboard.chunk.js    ← loads on /dashboard
                                          settings.chunk.js     ← loads on /settings
                                          (Users only download what they visit ✅)
```

---

### 💻 React.lazy + Suspense

```jsx
import { lazy, Suspense, useState } from "react";

// Components are loaded ONLY when rendered for the first time
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile   = lazy(() => import("./pages/Profile"));
const Settings  = lazy(() => import("./pages/Settings"));

// Loading fallback — shown while the chunk downloads
function PageSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px" }}>
      <div style={{ height: "32px", background: "#e0e0e0", borderRadius: "4px", width: "40%" }} />
      <div style={{ height: "16px", background: "#e0e0e0", borderRadius: "4px", width: "80%" }} />
      <div style={{ height: "16px", background: "#e0e0e0", borderRadius: "4px", width: "60%" }} />
    </div>
  );
}

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard": return <Dashboard />;
      case "profile":   return <Profile />;
      case "settings":  return <Settings />;
      default:          return <Dashboard />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPage("dashboard")}>📊 Dashboard</button>
        <button onClick={() => setPage("profile")}>👤 Profile</button>
        <button onClick={() => setPage("settings")}>⚙️ Settings</button>
      </nav>

      {/* Suspense shows fallback while the lazy component loads */}
      <Suspense fallback={<PageSkeleton />}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
```

**📌 Rules for lazy loading:**
- `React.lazy` only works with **default exports**
- Must always be wrapped in `<Suspense>` with a `fallback`
- Works best with **React Router** — lazy load each route's page component

---

## 🛡️ Error Boundaries

### 📖 Theory

JavaScript errors inside components can crash the **entire React tree**, leaving users with a blank white screen. **Error Boundaries** are React components that **catch errors** anywhere in their child tree and display a fallback UI instead — like a try/catch for components.

```
Without Error Boundary             With Error Boundary
───────────────────────────────    ─────────────────────────────────────
  One component crashes            One component crashes
  Entire app goes blank ❌          Error Boundary catches it
  User sees white screen           Shows friendly fallback UI ✅
  Confused user leaves ❌           Rest of app keeps working ✅
```

> ⚠️ **Class component only:** Error Boundaries must be class components — there is currently no hook equivalent. But you write them once and reuse them everywhere.

---

### 💻 Error Boundary Class Component

```jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Called when a child throws — updates state to show fallback
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Called after an error — good place to log to an error service
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    // logErrorToService(error, errorInfo);   ← Sentry, Datadog, etc.
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI — customise per use case
      return (
        <div style={{ padding: "24px", border: "2px solid #e74c3c", borderRadius: "8px", background: "#fdf2f2" }}>
          <h3>⚠️ Something went wrong</h3>
          <p style={{ color: "#e74c3c" }}>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            🔄 Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage — wrap any section of your app
function App() {
  return (
    <div>
      <Navbar />

      {/* If Dashboard crashes, only this section shows error — Navbar stays intact */}
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>

      {/* Separate boundary for each critical section */}
      <ErrorBoundary>
        <PaymentWidget />
      </ErrorBoundary>

      <Footer />
    </div>
  );
}

// Component that intentionally throws for testing
function BuggyComponent() {
  throw new Error("I crashed on purpose! 💥");
  return <div>You won't see this</div>;
}
```

> 💡 **Strategy:** Don't wrap the entire app in one boundary — wrap **individual sections** so a crash in one part doesn't hide other working parts.

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. Putting everything in one giant Context
const AppContext = createContext();
// Sharing user, theme, cart, notifications, language all in one context
// Any change to ANY value re-renders ALL consumers ❌

// ✅ Fix — split into multiple focused contexts
<AuthContext.Provider>       // user data
  <ThemeContext.Provider>    // theme only
    <CartContext.Provider>   // cart only
      <App />
    </CartContext.Provider>
  </ThemeContext.Provider>
</AuthContext.Provider>


// ❌ 2. Overusing useMemo / useCallback — premature optimisation
const double = useMemo(() => count * 2, [count]);   // ❌ Trivial calculation!
// Memoization has overhead — only use for genuinely expensive operations

// ✅ Use useMemo for real bottlenecks
const sortedData = useMemo(() =>
  largeDataset.sort((a, b) => b.score - a.score),
  [largeDataset]
);


// ❌ 3. useCallback with no actual benefit
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
// Pointless if the child is NOT wrapped in React.memo
// memo + useCallback work as a PAIR ✅


// ❌ 4. Calling dispatch on unmounted component
// If an async operation finishes after component unmounts and dispatches → warning
// ✅ Use cleanup in useEffect to cancel async operations


// ❌ 5. Forgetting Suspense when using React.lazy
const Dashboard = lazy(() => import("./Dashboard"));
// <Dashboard />   ← Error: lazy component must be in Suspense tree!

// ✅ Fix
<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>


// ❌ 6. Using Error Boundaries for event handler errors
// Error Boundaries only catch errors in render / lifecycle
// Errors inside onClick, onChange, etc. must be handled with try/catch
const handleClick = async () => {
  try {
    await doSomething();
  } catch (err) {
    setError(err.message);   // handle manually
  }
};
```

---

### ✅ Do's & Don'ts — Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| Split Context by domain (auth, theme, cart) | Put all global state in one context |
| Use custom hook to wrap `useContext` | Call `useContext` directly everywhere |
| Use `useReducer` for multi-step state logic | Use many `useState` for related values |
| Pair `React.memo` with `useCallback` | Use `memo` without stabilising function props |
| Use `useMemo` only for expensive calculations | Wrap every tiny computation in `useMemo` |
| Wrap `lazy` components in `<Suspense>` | Use `lazy` without a fallback |
| Use multiple focused Error Boundaries | Wrap entire app in one Error Boundary |
| Use `dispatch` with descriptive action types | Use cryptic or abbreviated action names |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **Context API** | Global data channel for any component | Split by domain — one context per concern |
| **`useContext`** | Hook to read from a context | Wrap in a custom hook for better DX |
| **`useReducer`** | State machine for complex updates | Use when state has many related transitions |
| **`React.memo`** | Skips re-render if props unchanged | Must pair with `useCallback` for function props |
| **`useMemo`** | Caches an expensive computed value | Only for genuinely heavy calculations |
| **`useCallback`** | Stabilises a function reference | Use when function is passed to memo'd child |
| **`React.lazy`** | Loads component only when needed | Always wrap in `<Suspense fallback={...}>` |
| **Error Boundary** | Catches render-time errors in children | Wrap individual sections, not the whole app |

<br/>

```
🗺️  Day 4 Mental Model

  Context API                 useReducer              Performance
  ──────────────────────      ──────────────────────  ─────────────────────────
  createContext()             dispatch(action)        React.memo
       │                           │                      + useCallback
  Provider broadcasts              │                  = skip re-renders
       │                       reducer(state, action)
  useContext()                     │                  useMemo
  any component reads          new state returned     = cache calculations

                                                      lazy() + Suspense
                                                      = smaller bundle
                                                      = faster initial load
```

<br/>

> 🚀 **Up Next — Day 5:**
> `HOCs` · `Render Props` · `Compound Components` · `Custom Hooks Library` · `Testing` · `TypeScript Basics`

<br/>

<div align="center">

**Happy Coding! 💻✨**

*Optimise with purpose — measure before you memoize.* 🚀

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
