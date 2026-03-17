<div align="center">

# 🚀 Day 6: Real-World Application & Best Practices

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Production-Ready-28a745?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Day-06-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [🏗️ Project Architecture & Folder Structure](#%EF%B8%8F-project-architecture--folder-structure) |
| 4 | [🗃️ State Management Libraries](#%EF%B8%8F-state-management-libraries) |
| 5 | [🌐 API Integration Patterns](#-api-integration-patterns) |
| 6 | [🔐 Authentication & Protected Routes](#-authentication--protected-routes) |
| 7 | [🚢 Deployment — Vercel & Netlify](#-deployment--vercel--netlify) |
| 8 | [📊 Performance Monitoring & Debugging](#-performance-monitoring--debugging) |
| 9 | [⬛ Next.js Basics (Optional)](#-nextjs-basics-optional) |
| 10 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 11 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ Project architecture and folder structure
✅ State management libraries (Redux Toolkit or Zustand overview)
✅ API integration patterns
✅ Authentication and protected routes
✅ Deployment (Vercel/Netlify)
✅ Performance monitoring and debugging
✅ Next.js basics (optional)

---

## 💡 Real-Life Analogy

### 🏗️ House Construction Concept

> Building a React app is like **constructing a house**.
> Day 1–5 taught you individual skills — plumbing, electrical, carpentry.
> Day 6 is about **bringing it all together** with proper architecture,
> making sure everything works efficiently, and ensuring the house is
> ready for people to live in (deployment).

```
🏗️ House Construction → React App
──────────────────────────────────────────────────────────
  Blueprint / Floor Plan    →   Folder structure & architecture
  Rooms (Kitchen, Bedroom)  →   Feature-based folders (auth/, cart/, profile/)
  Plumbing (water flow)     →   API integration patterns
  Security System           →   Authentication & protected routes
  Electrical wiring         →   State management (Redux / Zustand)
  Interior inspection       →   Performance monitoring & debugging
  Keys handed to owner      →   Deployment to Vercel / Netlify

  A house built without a blueprint =
  A React app built without architecture = technical debt 💸
```

---

## 🏗️ Project Architecture & Folder Structure

### 📖 Theory

A well-organised folder structure makes a project **navigable, scalable, and team-friendly**. React has no enforced structure — but two dominant approaches exist:

```
Structure by Type                   Structure by Feature (recommended ✅)
────────────────────────────────    ──────────────────────────────────────────
  src/                                src/
  ├── components/                     ├── features/
  │   ├── Navbar.jsx                  │   ├── auth/
  │   ├── Button.jsx                  │   │   ├── AuthPage.jsx
  │   └── Modal.jsx                   │   │   ├── useAuth.js
  ├── pages/                          │   │   ├── authSlice.js
  │   ├── Home.jsx                    │   │   └── authAPI.js
  │   └── Dashboard.jsx               │   ├── cart/
  ├── hooks/                          │   │   ├── CartPage.jsx
  │   └── useFetch.js                 │   │   ├── cartSlice.js
  ├── utils/                          │   │   └── CartItem.jsx
  │   └── formatDate.js               │   └── products/
  └── services/                       │       ├── ProductList.jsx
      └── api.js                      │       └── productAPI.js
                                      ├── components/   ← shared UI only
  Works for small apps ✅              ├── hooks/        ← shared hooks
  Breaks as app grows ❌               ├── utils/
                                      ├── services/
                                      └── app/           ← store, router, App.jsx
                                      Scales to any size ✅
```

---

### 💻 Recommended Folder Structure

```
my-react-app/
│
├── public/                         # Static files served as-is
│   └── favicon.ico
│
├── src/
│   ├── app/                        # App-level config
│   │   ├── App.jsx                 # Root component
│   │   ├── router.jsx              # All route definitions
│   │   └── store.js                # Redux/Zustand store setup
│   │
│   ├── features/                   # Feature-based modules
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── authSlice.js        # Redux slice or Zustand store
│   │   │   ├── authAPI.js          # API calls for auth
│   │   │   └── useAuth.js          # Custom hook
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.jsx
│   │   │   └── DashboardStats.jsx
│   │   └── products/
│   │       ├── ProductList.jsx
│   │       ├── ProductCard.jsx
│   │       ├── ProductDetail.jsx
│   │       └── productAPI.js
│   │
│   ├── components/                 # Truly shared, reusable UI
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Spinner.jsx
│   │   │   └── Input.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       ├── Sidebar.jsx
│   │       └── Footer.jsx
│   │
│   ├── hooks/                      # Shared custom hooks
│   │   ├── useFetch.js
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   │
│   ├── utils/                      # Pure helper functions
│   │   ├── formatDate.js
│   │   ├── formatCurrency.js
│   │   └── validators.js
│   │
│   ├── services/                   # API layer (axios instances, interceptors)
│   │   └── apiClient.js
│   │
│   ├── constants/                  # App-wide constants
│   │   └── routes.js
│   │
│   └── main.jsx                    # Entry point
│
├── .env                            # Environment variables (never commit!)
├── .env.example                    # Template for teammates
├── vite.config.js
└── package.json
```

**📌 Key rules:**
- `features/` — each feature owns its own components, hooks, and API calls
- `components/` — only truly shared UI that multiple features use
- `services/` — all HTTP logic lives here, never scattered in components
- `.env` — API keys, base URLs, secrets — always in `.gitignore`

---

## 🗃️ State Management Libraries

### 📖 Theory

As apps grow beyond 2–3 related state values, React's built-in tools (`useState`, `useContext`) become harder to scale. External state management libraries provide **a single, predictable source of truth** accessible anywhere in the app.

```
useState / useContext              Redux Toolkit / Zustand
──────────────────────────────    ────────────────────────────────────────
  Works great for local state       Works great for global shared state
  Context causes extra re-renders   Optimised subscriptions, no prop drilling
  Fine for small/medium apps        Designed for large, team-based apps
  No DevTools time-travel           Redux DevTools: replay any state change ✅
```

---

### 🗃️ Redux Toolkit — The Modern Redux

```bash
npm install @reduxjs/toolkit react-redux
```

```jsx
// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name        : "counter",
  initialState: { value: 0, history: [] },

  reducers: {
    increment   : (state) => { state.value += 1; },               // Immer allows "mutation" syntax ✅
    decrement   : (state) => { state.value -= 1; },
    incrementBy : (state, action) => { state.value += action.payload; },
    reset       : (state) => { state.value = 0; state.history = []; }
  }
});

export const { increment, decrement, incrementBy, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

```jsx
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
    // add more slices here as app grows
  }
});
```

```jsx
// src/main.jsx
import { Provider } from "react-redux";
import { store }    from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

```jsx
// Any component — read and update global state
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./counterSlice";

function CounterWidget() {
  const count    = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Global Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementBy(10))}>+10</button>
    </div>
  );
}
```

---

### 🐻 Zustand — Minimal & Fast

```bash
npm install zustand
```

```jsx
// src/features/cart/useCartStore.js
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items    : [],
  total    : 0,

  addItem: (product) => set(state => {
    const exists = state.items.find(i => i.id === product.id);
    if (exists) {
      return {
        items: state.items.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
        total: state.total + product.price
      };
    }
    return {
      items: [...state.items, { ...product, qty: 1 }],
      total: state.total + product.price
    };
  }),

  removeItem: (id) => set(state => {
    const item = state.items.find(i => i.id === id);
    return {
      items: state.items.filter(i => i.id !== id),
      total: state.total - (item.price * item.qty)
    };
  }),

  clearCart: () => set({ items: [], total: 0 })
}));

// Usage in any component — no Provider needed!
function CartButton() {
  const { items, addItem, total } = useCartStore();

  return (
    <div>
      <span>🛒 {items.length} items — ₹{total.toLocaleString()}</span>
      <button onClick={() => addItem({ id: 1, name: "MacBook", price: 189990 })}>
        Add MacBook
      </button>
    </div>
  );
}
```

### Redux Toolkit vs Zustand

| Feature | Redux Toolkit | Zustand |
|---------|:-------------:|:-------:|
| Setup complexity | Medium | Minimal |
| Boilerplate | Low (vs old Redux) | Very low |
| DevTools | Excellent ✅ | Basic |
| Bundle size | ~11KB | ~1KB |
| Provider needed | Yes | No |
| Best for | Large teams, complex state | Small–medium apps |
| TypeScript support | Excellent | Excellent |

---

## 🌐 API Integration Patterns

### 📖 Theory

In production apps, API calls should never be scattered across components. A dedicated **API layer** centralises base URLs, auth headers, error handling, and request/response transforms in one place.

---

### 💻 Axios Client Setup

```bash
npm install axios
```

```jsx
// src/services/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL        : import.meta.env.VITE_API_BASE_URL,  // from .env
  timeout        : 10000,
  headers        : { "Content-Type": "application/json" }
});

// REQUEST interceptor — attach token to every outgoing request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE interceptor — handle errors globally
apiClient.interceptors.response.use(
  (response) => response.data,    // unwrap data automatically
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";    // auto logout on token expiry
    }
    if (error.response?.status === 500) {
      console.error("Server error:", error.response.data);
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;
```

```jsx
// src/features/products/productAPI.js
import apiClient from "../../services/apiClient";

export const productAPI = {
  getAll    : (params)   => apiClient.get("/products", { params }),
  getById   : (id)       => apiClient.get(`/products/${id}`),
  create    : (data)     => apiClient.post("/products", data),
  update    : (id, data) => apiClient.put(`/products/${id}`, data),
  delete    : (id)       => apiClient.delete(`/products/${id}`)
};
```

```jsx
// src/features/products/ProductList.jsx
import { useState, useEffect } from "react";
import { productAPI } from "./productAPI";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);
  const [page,     setPage]     = useState(1);

  useEffect(() => {
    setLoading(true);
    productAPI.getAll({ page, limit: 10 })
      .then(data => { setProducts(data.products); setLoading(false); })
      .catch(err  => { setError(err);             setLoading(false); });
  }, [page]);

  if (loading) return <p>⏳ Loading products...</p>;
  if (error)   return <p>❌ {error}</p>;

  return (
    <div>
      {products.map(p => <div key={p.id}>{p.name} — ₹{p.price}</div>)}
      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>← Prev</button>
      <span> Page {page} </span>
      <button onClick={() => setPage(p => p + 1)}>Next →</button>
    </div>
  );
}
```

---

### 🔑 Environment Variables

```bash
# .env  (never commit to git!)
VITE_API_BASE_URL=https://api.myapp.com/v1
VITE_APP_NAME=My React App

# .env.example  (commit this — teammates copy it)
VITE_API_BASE_URL=https://api.example.com/v1
VITE_APP_NAME=App Name
```

```jsx
// Access in code
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// ⚠️ Vite requires VITE_ prefix — CRA uses REACT_APP_ prefix
```

---

## 🔐 Authentication & Protected Routes

### 📖 Theory

Authentication in a React SPA involves:
1. **Storing a token** after login (localStorage or httpOnly cookie)
2. **Attaching the token** to API requests (via interceptor)
3. **Protecting routes** — redirecting unauthenticated users
4. **Persisting auth state** — staying logged in on page refresh

---

### 💻 Auth Context + Protected Route

```jsx
// src/features/auth/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "./authAPI";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);  // checking token on mount

  // Persist login — check stored token on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      authAPI.getProfile()
        .then(user  => setUser(user))
        .catch(()   => localStorage.removeItem("authToken"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { token, user } = await authAPI.login({ email, password });
    localStorage.setItem("authToken", token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside <AuthProvider>");
  return ctx;
};
```

```jsx
// src/components/layout/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/AuthContext";

function ProtectedRoute({ allowedRoles }) {
  const { isLoggedIn, user, loading } = useAuth();

  // Still checking token — don't flash login page
  if (loading) return <p>⏳ Checking session...</p>;

  // Not logged in → redirect to login, remember where they were going
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  // Role-based access control (optional)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;   // renders the child route
}

export default ProtectedRoute;
```

```jsx
// src/app/router.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/"         element={<Home />}     />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes — any logged-in user */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile"   element={<Profile />}   />
        </Route>

        {/* Admin-only routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

```jsx
// Login page — uses the auth context
function LoginPage() {
  const { login } = useAuth();
  const navigate  = useNavigate();
  const [form,  setForm]  = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/dashboard");   // redirect after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>🔐 Sign In</h2>
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      <input name="email"    type="email"    value={form.email}    onChange={e => setForm(p => ({ ...p, email:    e.target.value }))} placeholder="Email"    />
      <input name="password" type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  );
}
```

---

## 🚢 Deployment — Vercel & Netlify

### 📖 Theory

Deployment makes your app publicly accessible on the internet. Both Vercel and Netlify offer **zero-config deployment** — connect your GitHub repo and they auto-deploy on every push to `main`.

```
Local Machine                   Vercel / Netlify
──────────────────────────────  ─────────────────────────────────────────
  npm run build                   Detects React/Vite automatically
       │                          Runs build command
       ▼                          Uploads dist/ to global CDN
  dist/ folder                    Assigns URL (yourapp.vercel.app)
  (optimised static files)        HTTPS configured automatically ✅
                                  Custom domain support ✅
```

---

### 💻 Deploying to Vercel

```bash
# Option 1: Vercel CLI
npm install -g vercel
vercel login
vercel              # deploy from project root
vercel --prod       # deploy to production URL

# Option 2: Git integration (recommended)
# 1. Push code to GitHub
# 2. Go to vercel.com → New Project → Import from GitHub
# 3. Vercel auto-detects Vite/CRA settings
# 4. Add environment variables in Vercel dashboard
# 5. Click Deploy — done! 🎉
```

```bash
# vercel.json — optional config for SPA routing
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
# Without this, refreshing /dashboard returns 404 on Vercel ❌
```

---

### 💻 Deploying to Netlify

```bash
# Option 1: Netlify CLI
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist

# Option 2: Git integration
# 1. Go to netlify.com → Add new site → Import from Git
# 2. Build command:   npm run build
# 3. Publish dir:     dist (Vite) or build (CRA)
# 4. Add environment variables in Netlify dashboard
```

```bash
# public/_redirects — fix client-side routing on Netlify
/*    /index.html   200
# Without this, refreshing /profile returns 404 on Netlify ❌
```

### Vercel vs Netlify

| Feature | Vercel | Netlify |
|---------|:------:|:-------:|
| React/Vite auto-detect | ✅ | ✅ |
| Free tier | ✅ | ✅ |
| Custom domain | ✅ | ✅ |
| Edge functions | ✅ | ✅ |
| Preview deployments | ✅ | ✅ |
| Best known for | Next.js apps | Static sites / SPAs |
| Analytics (free) | Basic | Basic |

---

## 📊 Performance Monitoring & Debugging

### 📖 Theory

A production React app needs tools to **measure, visualise, and fix** performance issues. Slow renders, unnecessary re-renders, and large bundle sizes are the most common culprits.

---

### 🛠️ React DevTools

```
Install: Chrome/Firefox extension → "React Developer Tools"

Components Tab:
  ├── Inspect component tree
  ├── See current props and state
  ├── Edit state/props live
  └── Highlight re-renders (⚙️ → "Highlight updates when components render")

Profiler Tab:
  ├── Record a session
  ├── See which components rendered and how long they took
  ├── Flame graph → tall bars = slow renders
  └── "Why did this render?" — shows exact prop/state that changed
```

---

### 💻 React.Profiler — Measure in Code

```jsx
import { Profiler } from "react";

function onRenderCallback(id, phase, actualDuration) {
  if (actualDuration > 16) {   // > 16ms = drops below 60fps
    console.warn(`⚠️ Slow render in <${id}> [${phase}]: ${actualDuration.toFixed(2)}ms`);
  }
}

// Wrap any component to measure it
function App() {
  return (
    <Profiler id="ProductList" onRender={onRenderCallback}>
      <ProductList />
    </Profiler>
  );
}
```

---

### 💻 Bundle Analysis — Find What's Making It Big

```bash
# Vite
npm install --save-dev rollup-plugin-visualizer

# vite.config.js
import { visualizer } from "rollup-plugin-visualizer";

export default {
  plugins: [
    react(),
    visualizer({ open: true, gzipSize: true })  // opens a treemap in browser
  ]
}

npm run build   # generates stats.html — shows every package's size
```

```
Common culprits found by bundle analysis:
  moment.js    → replace with date-fns (10x smaller)
  lodash       → import specific functions: import debounce from "lodash/debounce"
  large images → compress with squoosh.app before adding to project
```

---

### 💻 Web Vitals Monitoring

```bash
npm install web-vitals
```

```jsx
// src/main.jsx
import { onCLS, onINP, onLCP, onFCP, onTTFB } from "web-vitals";

// Log to console during development
function reportWebVitals(metric) {
  if (import.meta.env.DEV) {
    console.log(`📊 ${metric.name}: ${metric.value.toFixed(2)}`);
  }
  // In production, send to your analytics endpoint:
  // analytics.track(metric.name, { value: metric.value });
}

onCLS(reportWebVitals);    // Cumulative Layout Shift
onINP(reportWebVitals);    // Interaction to Next Paint
onLCP(reportWebVitals);    // Largest Contentful Paint
onFCP(reportWebVitals);    // First Contentful Paint
onTTFB(reportWebVitals);   // Time to First Byte
```

### Web Vitals Reference

| Metric | Meaning | Good Score |
|--------|---------|:----------:|
| **LCP** | How fast main content loads | < 2.5s |
| **INP** | How fast UI responds to interaction | < 200ms |
| **CLS** | How much layout shifts unexpectedly | < 0.1 |
| **FCP** | When first content appears | < 1.8s |
| **TTFB** | Server response time | < 800ms |

---

## ⬛ Next.js Basics (Optional)

### 📖 Theory

**Next.js** is a React framework that adds **server-side capabilities** on top of React. While React is a UI library, Next.js is a full-stack framework — it handles routing, server rendering, API routes, and optimisation out of the box.

```
React (Vite/CRA)                    Next.js
──────────────────────────────      ─────────────────────────────────────
  Client-side rendering only          SSR, SSG, ISR + CSR
  Manual React Router setup           File-based routing (no config)
  Separate backend needed             Built-in API routes
  SEO requires extra work             SEO-optimised by default ✅
  Good for: SPAs, dashboards          Good for: blogs, e-commerce, full-stack
```

---

### 💻 Next.js File-Based Routing

```
app/                           →   URL
├── page.jsx                   →   /
├── about/
│   └── page.jsx               →   /about
├── blog/
│   ├── page.jsx               →   /blog
│   └── [slug]/
│       └── page.jsx           →   /blog/:slug  (dynamic)
├── dashboard/
│   ├── layout.jsx             →   Shared layout for all /dashboard/* routes
│   ├── page.jsx               →   /dashboard
│   └── settings/
│       └── page.jsx           →   /dashboard/settings
└── api/
    └── products/
        └── route.js           →   /api/products  (API endpoint)
```

---

### 💻 Server vs Client Components

```jsx
// app/products/page.jsx — Server Component (default in Next.js App Router)
// Runs on the server, data fetched before HTML is sent to browser
async function ProductsPage() {
  // Direct DB/API call — no useEffect, no loading state needed!
  const products = await fetch("https://api.example.com/products").then(r => r.json());

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  );
}

export default ProductsPage;
```

```jsx
// app/products/AddToCartButton.jsx — Client Component
// Needs interactivity → mark with "use client"
"use client";
import { useState } from "react";

function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <button onClick={() => setAdded(true)}>
      {added ? "✅ Added!" : "Add to Cart"}
    </button>
  );
}
```

```jsx
// app/api/products/route.js — API Route (replaces a separate Express endpoint)
import { NextResponse } from "next/server";

export async function GET(request) {
  const products = await db.product.findMany();   // fetch from DB
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const created = await db.product.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
```

> 💡 **When to choose Next.js over React + Vite:**
> - You need **SEO** (blogs, e-commerce, marketing pages)
> - You want **server-side data fetching** without a separate backend
> - You're building a **full-stack app** with API routes in the same project

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. Committing .env files with secrets
git add .env   // ← NEVER do this — API keys exposed publicly!

// ✅ Fix — add to .gitignore
echo ".env" >> .gitignore
// Provide .env.example with placeholder values for teammates


// ❌ 2. Putting API base URL directly in components
fetch("https://api.myapp.com/products")   // ❌ hard to change for different environments

// ✅ Fix — always use environment variables
fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)


// ❌ 3. Not handling loading/error states in production
const { data } = useFetch("/api/user");
return <h1>{data.name}</h1>;   // Crashes on first render!

// ✅ Fix
if (loading) return <Spinner />;
if (error)   return <ErrorMessage message={error} />;


// ❌ 4. Storing tokens in sessionStorage with no expiry check
// Tokens can expire server-side — always verify on app load

// ✅ Fix — validate token on mount (as shown in AuthProvider above)


// ❌ 5. Missing SPA redirect config on deployment
// Refreshing /dashboard → 404 on Vercel/Netlify without redirect rules

// ✅ Fix
// Vercel:  add vercel.json with rewrites
// Netlify: add public/_redirects file


// ❌ 6. Importing entire lodash / moment
import _ from "lodash";   // imports entire 72KB library!

// ✅ Fix — named imports or specific paths
import debounce from "lodash/debounce";
import { format } from "date-fns";      // tree-shakeable ✅
```

---

### ✅ Do's & Don'ts — Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use feature-based folder structure | Organise only by file type (components/, pages/) |
| Store all API calls in a service layer | Scatter `fetch()` across components |
| Use environment variables for secrets | Hardcode API keys or base URLs |
| Add `_redirects` or `vercel.json` for SPA routing | Deploy without redirect rules |
| Check Web Vitals before releasing | Ship without performance metrics |
| Use React DevTools Profiler for slow renders | Guess which component is slow |
| Analyse bundle before production | Ship with unknown large dependencies |
| Validate auth token on app load | Assume stored token is always valid |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **Folder structure** | Feature-based organisation | Group by feature, not file type |
| **Redux Toolkit** | Predictable global state | Use for large/team apps needing DevTools |
| **Zustand** | Minimal global state | Use for small–medium apps with less ceremony |
| **API layer** | Centralised HTTP client | All `fetch`/`axios` calls live in `services/` |
| **Auth flow** | Token → Context → Protected Routes | Always verify token on app load |
| **Protected Routes** | Redirect unauthenticated users | Use `<Outlet />` pattern with React Router |
| **Deployment** | Vercel / Netlify auto-deploy | Always add SPA redirect rules |
| **Performance** | DevTools, Profiler, Web Vitals | Measure before optimising |
| **Bundle size** | Visualise and trim large deps | Analyse before every major release |
| **Next.js** | Full-stack React framework | Use when SEO or SSR is required |

<br/>

```
🗺️  Day 6 — The Complete Picture

  Feature Folder                 API Layer               Auth Flow
  ─────────────────────          ─────────────────────   ─────────────────────
  features/                      apiClient.js            AuthProvider
    auth/                          interceptors             → token check
    products/                      error handling           → setUser
    dashboard/                                           ProtectedRoute
                                                           → <Outlet />
  State (pick one)               Deployment              Performance
  ─────────────────────          ─────────────────────   ─────────────────────
  Redux Toolkit                  Vercel / Netlify        DevTools Profiler
    slices                         env variables         Web Vitals
    store                          redirect rules        Bundle Analyser
  Zustand
    create()
```

<br/>

> 🎉 **You've completed the 6-Day React Crash Course!**
> You now have: architecture skills, state management knowledge, auth patterns, deployment experience, and performance tools.
> **Go build something real. 🚀**

<br/>

<div align="center">

**Happy Coding! 💻✨**

*A house is only as strong as its foundation — architect your app well.* 🏗️

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
