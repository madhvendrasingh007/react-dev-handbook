<div align="center">

# 🏆 Day 5: Advanced Patterns & Mastery

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Advanced-Patterns-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Day-05-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [🎁 Higher Order Components (HOCs)](#-higher-order-components-hocs) |
| 4 | [🎭 Render Props Pattern](#-render-props-pattern) |
| 5 | [🧩 Compound Components](#-compound-components) |
| 6 | [🎛️ Controlled vs Uncontrolled Components](#%EF%B8%8F-controlled-vs-uncontrolled-components) |
| 7 | [🪝 Custom Hooks Library](#-custom-hooks-library) |
| 8 | [🧪 Testing with Jest & React Testing Library](#-testing-with-jest--react-testing-library) |
| 9 | [🔷 TypeScript with React Basics](#-typescript-with-react-basics) |
| 10 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 11 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ Higher Order Components (HOCs)
✅ Render props pattern
✅ Compound components
✅ Controlled vs uncontrolled components
✅ Custom hooks library
✅ Testing with Jest and React Testing Library
✅ TypeScript with React basics

---

## 💡 Real-Life Analogy

### 🎁 Gift Wrapper Concept — HOCs

> **HOCs** are like **gift wrappers**.
> You give them a component (the gift), and they wrap it with **additional functionality**
> (wrapping paper, ribbon) — without changing what's inside the box.

```
🎁 HOC Analogy
──────────────────────────────────────────────────────────
  Gift (Component)    +   Wrapper (HOC)   =   Final Product
  ─────────────────       ─────────────       ──────────────
  <Dashboard />       +   withAuth()      =   Protected page
  <ProductList />     +   withLoader()    =   Page with spinner
  <UserCard />        +   withTracking()  =   Card + analytics
  <Button />          +   withTooltip()   =   Button + tooltip

  The gift NEVER changes — only the wrapping does 🎀
```

### 🍽️ Restaurant Menu System — Compound Components

> **Compound components** are like a **restaurant menu system** —
> `<Menu>` and `<MenuItem>` work together as a family,
> sharing internal state without the consumer ever managing it.

---

## 🎁 Higher Order Components (HOCs)

### 📖 Theory

A **Higher Order Component** is a function that takes a component as input and returns a **new, enhanced component**. It's a pattern for reusing component logic — wrapping behaviour like authentication, logging, or loading states around any component without modifying the original.

```
Normal Function:    input value   → output value
Higher Order Fn:    input fn      → output fn
HOC:                input Component → output enhanced Component
```

```
withAuth(Dashboard)
  │
  ├── Is user logged in?
  │     ├── YES → render <Dashboard />   (the original gift, unwrapped)
  │     └── NO  → render <LoginPage />   (HOC intercepts ✅)
  │
  └── Dashboard never knows about auth logic — separation of concerns ✅
```

---

### 💻 HOC 1 — withAuth (Authentication Guard)

```jsx
import { useNavigate } from "react-router-dom";

// HOC — wraps any component with auth protection
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return (
        <div style={{ textAlign: "center", padding: "48px" }}>
          <h2>🔐 Access Denied</h2>
          <p>You must be logged in to view this page.</p>
          <button onClick={() => window.location.href = "/login"}>
            Sign In
          </button>
        </div>
      );
    }

    // Pass all original props through — component stays intact
    return <WrappedComponent {...props} />;
  };
}

// Regular component — knows nothing about auth
function AdminDashboard({ title }) {
  return <h1>📊 {title}</h1>;
}

// Enhanced version — now protected
const ProtectedDashboard = withAuth(AdminDashboard);

// Usage
<ProtectedDashboard title="Admin Panel" />
```

---

### 💻 HOC 2 — withLoader (Loading Spinner)

```jsx
// HOC — adds loading state to any component
function withLoader(WrappedComponent, loadingText = "Loading...") {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "24px" }}>
          <div style={{
            width: "24px", height: "24px",
            border: "3px solid #e0e0e0",
            borderTop: "3px solid #61DAFB",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <span>{loadingText}</span>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
}

// Regular movie list component
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(m => <li key={m.id}>🎬 {m.title}</li>)}
    </ul>
  );
}

// Enhanced — now has loading state
const MovieListWithLoader = withLoader(MovieList, "Fetching movies...");

// Usage
function App() {
  const [loading, setLoading] = useState(true);
  const [movies,  setMovies]  = useState([]);

  return <MovieListWithLoader isLoading={loading} movies={movies} />;
}
```

---

### 💻 HOC Chaining — Compose Multiple HOCs

```jsx
// HOC — adds analytics tracking
function withTracking(WrappedComponent, eventName) {
  return function TrackedComponent(props) {
    const handleClick = () => {
      console.log(`📈 Event tracked: ${eventName}`);
      // analytics.track(eventName);
    };

    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Stack HOCs — order matters (inner-most applies first)
const EnhancedDashboard = withAuth(
  withLoader(
    withTracking(AdminDashboard, "dashboard_view"),
    "Loading dashboard..."
  )
);

// Final component has: auth guard + loading state + click tracking
<EnhancedDashboard isLoading={false} title="Analytics" />
```

> 💡 **Naming Convention:** Always prefix HOC names with `with` — `withAuth`, `withLoader`, `withTracking`. This makes it immediately clear the function is a HOC.

---

## 🎭 Render Props Pattern

### 📖 Theory

The **Render Props** pattern shares stateful logic between components by passing a **function as a prop**. The parent component manages the state — the consumer decides how to render it.

```
HOC Pattern                           Render Props Pattern
──────────────────────────────────    ────────────────────────────────────
  const Enhanced = withX(Component)    <DataProvider
  // wraps at definition time            render={(data) => <Component data={data} />}
                                       />
  // consumer can't control output     // consumer controls exact rendering ✅
```

---

### 💻 Render Props — Mouse Position Tracker

```jsx
import { useState } from "react";

// Provider component — manages state, calls render prop with data
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove = {handleMouseMove}
      style       = {{ width: "100%", height: "300px", border: "1px dashed #ccc" }}
    >
      {render(position)}   {/* consumer decides what to render */}
    </div>
  );
}

// Consumer 1 — shows coordinates as text
function CoordinateDisplay() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p style={{ padding: "16px" }}>
          📍 Mouse at X: {x}, Y: {y}
        </p>
      )}
    />
  );
}

// Consumer 2 — draws a circle that follows the mouse
function FollowingDot() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div style={{
          position    : "absolute",
          left        : x - 10,
          top         : y - 10,
          width       : "20px",
          height      : "20px",
          borderRadius: "50%",
          background  : "#61DAFB",
          pointerEvents: "none"
        }} />
      )}
    />
  );
}
```

---

### 💻 Render Props — Data Fetcher

```jsx
// Reusable data fetcher using render props
function DataFetcher({ url, render }) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res  => res.json())
      .then(data => { setData(data);         setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [url]);

  return render({ data, loading, error });   // pass state to consumer
}

// Consumer decides the UI completely
function UserProfile() {
  return (
    <DataFetcher
      url    = "https://api.github.com/users/madhvendrasingh007"
      render = {({ data: user, loading, error }) => {
        if (loading) return <p>⏳ Loading profile...</p>;
        if (error)   return <p>❌ {error}</p>;
        return (
          <div>
            <img src={user.avatar_url} alt={user.login} width={60} style={{ borderRadius: "50%" }} />
            <h2>{user.name}</h2>
            <p>⭐ {user.public_repos} public repos</p>
          </div>
        );
      }}
    />
  );
}
```

> 💡 **Children as a function** — a common variation uses `children` instead of a `render` prop:
> ```jsx
> <MouseTracker>
>   {({ x, y }) => <p>Position: {x}, {y}</p>}
> </MouseTracker>
> ```

---

## 🧩 Compound Components

### 📖 Theory

**Compound Components** are a group of components that work together as a family — sharing **implicit internal state** through Context. The consumer gets a clean, declarative API without managing any of the shared logic.

```
Without Compound Components (prop soup)   With Compound Components (clean API)
──────────────────────────────────────    ─────────────────────────────────────
  <Tabs                                     <Tabs defaultIndex={0}>
    tabs={["A", "B", "C"]}                    <Tabs.List>
    panels={[<A />, <B />, <C />]}              <Tabs.Tab>A</Tabs.Tab>
    defaultIndex={0}                            <Tabs.Tab>B</Tabs.Tab>
    onTabChange={handleChange}                </Tabs.List>
  />                                          <Tabs.Panel><A /></Tabs.Panel>
                                              <Tabs.Panel><B /></Tabs.Panel>
  (rigid, hard to customise ❌)             </Tabs>
                                            (flexible, readable ✅)
```

---

### 💻 Compound Components — Tabs System

```jsx
import { createContext, useContext, useState } from "react";

// Shared context — internal to the compound component family
const TabsContext = createContext();

// Parent — owns and manages state
function Tabs({ defaultIndex = 0, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

// Child — Tab List wrapper
function TabList({ children }) {
  return <div role="tablist" style={{ display: "flex", borderBottom: "2px solid #e0e0e0" }}>{children}</div>;
}

// Child — Individual Tab button
function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;

  return (
    <button
      role      = "tab"
      onClick   = {() => setActiveIndex(index)}
      style     = {{
        padding        : "10px 20px",
        background     : "none",
        border         : "none",
        borderBottom   : isActive ? "2px solid #61DAFB" : "2px solid transparent",
        color          : isActive ? "#61DAFB" : "#666",
        fontWeight     : isActive ? "bold" : "normal",
        cursor         : "pointer",
        transition     : "all 0.2s"
      }}
    >
      {children}
    </button>
  );
}

// Child — Panel that shows when its index is active
function TabPanel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  if (activeIndex !== index) return null;

  return (
    <div role="tabpanel" style={{ padding: "20px" }}>
      {children}
    </div>
  );
}

// Attach sub-components as properties (clean dot notation API)
Tabs.List  = TabList;
Tabs.Tab   = Tab;
Tabs.Panel = TabPanel;

// Usage — reads like natural HTML, zero state management by consumer
function App() {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>📊 Overview</Tabs.Tab>
        <Tabs.Tab index={1}>🎬 Projects</Tabs.Tab>
        <Tabs.Tab index={2}>⚙️ Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel index={0}>
        <h3>Overview Content</h3>
        <p>Welcome to your dashboard!</p>
      </Tabs.Panel>

      <Tabs.Panel index={1}>
        <h3>Your Projects</h3>
        <p>18+ React projects completed 🚀</p>
      </Tabs.Panel>

      <Tabs.Panel index={2}>
        <h3>Settings</h3>
        <p>Configure your preferences here.</p>
      </Tabs.Panel>
    </Tabs>
  );
}
```

**📌 What makes this powerful:**
- Consumer never touches `activeIndex` state — the `Tabs` parent manages it
- Any `Tab` or `Panel` at any nesting depth automatically syncs via Context
- The dot-notation API (`Tabs.Tab`, `Tabs.Panel`) signals they belong together

---

## 🎛️ Controlled vs Uncontrolled Components

### 📖 Theory

This determines **who owns the truth** for an input's value:

```
Controlled                              Uncontrolled
──────────────────────────────────      ──────────────────────────────────
  React state owns the value              DOM owns the value
  value={state}                           ref={inputRef}
  onChange updates state                  inputRef.current.value to read
  React re-renders on change              React doesn't know about changes
  Validate in real-time ✅                Read value only on demand
  Complex forms with interdependencies    Simple one-off forms
  React's recommended approach ✅         File inputs (always uncontrolled)
```

---

### 💻 Controlled vs Uncontrolled — Side by Side

```jsx
import { useState, useRef } from "react";

// ✅ Controlled — React is the single source of truth
function ControlledForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = username.length >= 3 && password.length >= 8;

  return (
    <form>
      <input
        value       = {username}
        onChange    = {e => setUsername(e.target.value)}
        placeholder = "Username (min 3 chars)"
        style       = {{ borderColor: username.length > 0 && username.length < 3 ? "red" : "" }}
      />

      <input
        type        = "password"
        value       = {password}
        onChange    = {e => setPassword(e.target.value)}
        placeholder = "Password (min 8 chars)"
      />

      {/* Real-time feedback — only possible with controlled */}
      {!isValid && username.length > 0 && (
        <p style={{ color: "red" }}>⚠️ Username min 3 chars, password min 8 chars</p>
      )}

      <button disabled={!isValid}>Submit {isValid ? "✅" : "🔒"}</button>
    </form>
  );
}

// Uncontrolled — DOM owns the value, read on demand
function UncontrolledForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    console.log("Form data:", data);
    // Can only validate on submit — no real-time feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={usernameRef} placeholder="Username" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

| Feature | Controlled | Uncontrolled |
|---------|:----------:|:------------:|
| Real-time validation | ✅ | ❌ |
| Instant disable/enable | ✅ | ❌ |
| Programmatic reset | ✅ (`setState("")`) | ✅ (`ref.value = ""`) |
| File input support | ❌ | ✅ (always use ref) |
| React recommendation | ✅ | Limited cases |

---

## 🪝 Custom Hooks Library

### 📖 Theory

A **custom hooks library** is a collection of reusable hooks — each solving one specific problem — that you can use across any project. Think of it as your personal utility belt for React logic.

> 🔑 **Rule:** A custom hook is any function starting with `use` that calls other hooks. Extract logic into custom hooks when the same `useState` + `useEffect` pattern appears in more than one component.

---

### 🪝 Hook 1 — useToggle

```jsx
import { useState, useCallback } from "react";

// Simple on/off toggler
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle  = useCallback(() => setValue(v => !v),         []);
  const setTrue  = useCallback(() => setValue(true),            []);
  const setFalse = useCallback(() => setValue(false),           []);

  return [value, toggle, setTrue, setFalse];
}

// Usage
function Modal() {
  const [isOpen, toggleModal, openModal, closeModal] = useToggle(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <h2>📋 Modal Title</h2>
          <p>Modal content here...</p>
          <button onClick={closeModal}>Close ✕</button>
        </div>
      )}
    </>
  );
}
```

---

### 🪝 Hook 2 — usePrevious

```jsx
import { useRef, useEffect } from "react";

// Stores the previous value of any variable
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;   // updates AFTER render — so ref holds previous render's value
  }, [value]);

  return ref.current;
}

// Usage — show what changed
function PriceTracker({ price }) {
  const prevPrice = usePrevious(price);

  const change = prevPrice !== undefined ? price - prevPrice : 0;
  const arrow  = change > 0 ? "📈" : change < 0 ? "📉" : "➡️";

  return (
    <div>
      <h3>₹{price.toLocaleString()} {arrow}</h3>
      {prevPrice && (
        <p style={{ color: change >= 0 ? "green" : "red" }}>
          {change >= 0 ? "+" : ""}{change} from ₹{prevPrice.toLocaleString()}
        </p>
      )}
    </div>
  );
}
```

---

### 🪝 Hook 3 — useMediaQuery

```jsx
import { useState, useEffect } from "react";

// Reactively tracks a CSS media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = (e) => setMatches(e.matches);

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

// Usage — responsive component logic in JS
function ResponsiveNav() {
  const isMobile  = useMediaQuery("(max-width: 768px)");
  const isTablet  = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  if (isMobile)  return <HamburgerMenu />;
  if (isTablet)  return <CompactNav />;
  return <FullNav />;
}
```

---

## 🧪 Testing with Jest & React Testing Library

### 📖 Theory

**Testing** ensures your components work as expected and continue to work after future changes. React Testing Library (RTL) follows one core philosophy:

> *"Test your components the way users use them — not implementation details."*

```
Unit Tests         →  Test a single function / hook in isolation
Integration Tests  →  Test multiple components working together
E2E Tests          →  Test the full user journey in a real browser (Cypress, Playwright)

Jest               →  Test runner: runs tests, assertions, mocking
RTL                →  Renders components and queries the DOM like a user would
```

---

### 🧪 Setting Up & Basic Test Structure

```jsx
// Button.jsx
function Button({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
```

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

// describe — groups related tests
describe("Button Component", () => {

  // test / it — individual test case
  test("renders with correct text", () => {
    render(<Button>Click Me</Button>);

    // getByText — finds element by visible text
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();   // mock function — tracks calls
    render(<Button onClick={handleClick}>Submit</Button>);

    fireEvent.click(screen.getByText("Submit"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button disabled>Submit</Button>);

    expect(screen.getByText("Submit")).toBeDisabled();
  });
});
```

---

### 🧪 Testing a Component with State

```jsx
// Counter.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {

  test("starts at 0", () => {
    render(<Counter />);
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });

  test("increments on button click", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("➕ Increment"));
    expect(screen.getByText("Score: 1")).toBeInTheDocument();
  });

  test("resets to 0", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("➕ Increment"));
    fireEvent.click(screen.getByText("➕ Increment"));
    fireEvent.click(screen.getByText("🔄 Reset"));
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
  });
});
```

---

### 🧪 Testing Async — API Fetch

```jsx
import { render, screen, waitFor } from "@testing-library/react";
import UserCard from "./UserCard";

// Mock the global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok   : true,
    json : () => Promise.resolve({ id: 1, name: "Madhvendra Singh", role: "Developer" })
  })
);

test("displays user data after fetch", async () => {
  render(<UserCard userId={1} />);

  // Loading state
  expect(screen.getByText("⏳ Loading...")).toBeInTheDocument();

  // Wait for async update
  await waitFor(() => {
    expect(screen.getByText("Madhvendra Singh")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });
});
```

### 🧪 Common RTL Queries Reference

| Query | When to Use | Example |
|-------|------------|---------|
| `getByText` | Visible text on screen | `getByText("Submit")` |
| `getByRole` | Semantic HTML roles | `getByRole("button")` |
| `getByLabelText` | Form labels | `getByLabelText("Email")` |
| `getByPlaceholderText` | Input placeholders | `getByPlaceholderText("Search...")` |
| `getByTestId` | `data-testid` attribute | `getByTestId("user-card")` |
| `queryByText` | Verify element doesn't exist | `expect(queryByText("X")).toBeNull()` |
| `findByText` | Async — element appears later | `await findByText("Loaded!")` |

---

## 🔷 TypeScript with React Basics

### 📖 Theory

**TypeScript** adds **static typing** to JavaScript — you declare what shape your data takes, and TypeScript catches type errors at compile time before your app runs.

```
JavaScript                          TypeScript
──────────────────────────────      ────────────────────────────────────
  function greet(name) {              function greet(name: string): string {
    return "Hello " + name;             return "Hello " + name;
  }                                   }
  greet(42);   // runs, bug ❌         greet(42);  // Error at compile time ✅
                                       // Argument of type 'number' is not
                                       // assignable to parameter of type 'string'
```

---

### 🔷 Typing Props

```tsx
// Define the shape of props with an interface
interface UserCardProps {
  name      : string;
  age       : number;
  role      : "admin" | "user" | "moderator";   // union type — only these values
  avatar?   : string;                            // ? = optional prop
  onFollow  : (userId: number) => void;          // function type
}

// TypeScript knows exactly what props are expected
function UserCard({ name, age, role, avatar, onFollow }: UserCardProps) {
  return (
    <div>
      {avatar && <img src={avatar} alt={name} />}
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <span className={`badge badge-${role}`}>{role}</span>
      <button onClick={() => onFollow(1)}>Follow</button>
    </div>
  );
}

// ✅ Correct usage
<UserCard name="Madhvendra" age={22} role="admin" onFollow={handleFollow} />

// ❌ TypeScript catches this at compile time:
<UserCard name={42} age="twenty" role="superuser" />
//              ^^            ^^^         ^^^^^^^^^
//         not string     not number   not in union
```

---

### 🔷 Typing useState & Events

```tsx
import { useState } from "react";

interface Movie {
  id     : number;
  title  : string;
  rating : number;
  genre  : "action" | "sci-fi" | "thriller" | "drama";
}

function MovieApp() {
  // TypeScript infers Movie[] from the initial value
  const [movies,  setMovies]  = useState<Movie[]>([]);
  const [selected, setSelected] = useState<Movie | null>(null);
  const [query,   setQuery]   = useState<string>("");

  // Typing event handlers
  const handleSearch  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TypeScript ensures e has preventDefault()
  };

  const handleSelect = (movie: Movie) => {
    setSelected(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleSearch} />
      {movies.map(m => (
        <div key={m.id} onClick={() => handleSelect(m)}>
          {m.title}
        </div>
      ))}
    </form>
  );
}
```

---

### 🔷 Typing Custom Hooks

```tsx
interface FetchState<T> {
  data    : T | null;
  loading : boolean;
  error   : string | null;
}

// Generic hook — works with ANY data shape
function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data   : null,
    loading: true,
    error  : null
  });

  useEffect(() => {
    fetch(url)
      .then(res  => res.json() as Promise<T>)
      .then(data => setState({ data, loading: false, error: null }))
      .catch(err => setState({ data: null, loading: false, error: err.message }));
  }, [url]);

  return state;
}

// Usage — TypeScript knows data is Movie[]
const { data: movies, loading } = useFetch<Movie[]>("/api/movies");
//             ↑ TypeScript knows this is Movie[] | null, not any ✅
```

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. HOC with a missing displayName — hard to debug in DevTools
function withAuth(WrappedComponent) {
  return function(props) { ... };   // shows as "Component" in DevTools ❌
}

// ✅ Fix — add displayName
function withAuth(WrappedComponent) {
  function AuthComponent(props) { ... }
  AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;
  return AuthComponent;
}


// ❌ 2. Defining HOC inside render — creates new component on every render
function App() {
  const Protected = withAuth(Dashboard);   // ❌ recreated every render → state lost!
  return <Protected />;
}

// ✅ Fix — define outside component
const ProtectedDashboard = withAuth(Dashboard);
function App() {
  return <ProtectedDashboard />;
}


// ❌ 3. Querying implementation details in tests
const { container } = render(<Button>Submit</Button>);
container.querySelector(".btn-primary");   // ❌ tests CSS class = implementation detail

// ✅ Fix — query what the user sees
screen.getByRole("button", { name: "Submit" });   // ✅ tests behaviour


// ❌ 4. Not using TypeScript strict mode — defeats the purpose
// tsconfig.json: "strict": false   ← many errors silently pass

// ✅ Fix — always enable strict mode
// tsconfig.json: "strict": true


// ❌ 5. Using `any` type — TypeScript with no types
function process(data: any) { ... }   // ❌ any disables all type checking

// ✅ Fix — use generics or proper types
function process<T>(data: T): T { ... }
```

---

### ✅ Do's & Don'ts — Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| Prefix HOCs with `with` | Give HOCs ambiguous names |
| Set `displayName` on HOC output | Leave HOCs unnamed in DevTools |
| Define HOCs outside render | Create HOCs inside component render |
| Use Render Props for flexible rendering | Force HOC when consumer needs rendering control |
| Attach compound sub-components with dot notation | Export sub-components separately |
| Use controlled inputs for forms with validation | Mix controlled and uncontrolled in same form |
| Test user behaviour, not implementation | Query by class names or internal state |
| Enable TypeScript `strict` mode | Use `any` as a shortcut |
| Type all props with `interface` or `type` | Leave props untyped in TypeScript |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **HOC** | Function: Component → Enhanced Component | Prefix with `with`, define outside render |
| **Render Props** | Share logic via a function prop | Consumer controls the UI output |
| **Compound Components** | Family of components sharing implicit state | Use Context internally, dot notation API externally |
| **Controlled** | React state owns the input value | `value={state}` + `onChange={setter}` |
| **Uncontrolled** | DOM owns the input value | Use `ref` — for file inputs only otherwise |
| **Custom Hooks** | Reusable stateful logic extracted to `use*` function | One hook = one responsibility |
| **Testing** | Verify components work from user perspective | Query by role/text, not class names |
| **TypeScript** | Static typing for React | Always use `strict` mode, avoid `any` |

<br/>

```
🗺️  Day 5 Pattern Decision Tree

  Need to reuse logic across components?
      │
      ├── Logic is stateful?
      │       ├── YES → Custom Hook (useX)
      │       └── NO  → Utility function
      │
      ├── Need to add behaviour (auth, logging) to a component?
      │       └── HOC (withX)
      │
      ├── Parent manages state, consumer controls rendering?
      │       └── Render Props
      │
      ├── Group of components sharing invisible state?
      │       └── Compound Components
      │
      └── Input needs real-time validation?
              ├── YES → Controlled Component
              └── NO  → Uncontrolled (or Controlled still fine)
```

<br/>


<div align="center">

**Happy Coding! 💻✨**

*Patterns are tools — use the right one for the right job.* 🚀

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
