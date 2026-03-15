<div align="center">

# 🚀 Day 1: React Fundamentals & JSX

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/JSX-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Day-01-FF6B6B?style=for-the-badge" />

</div>

---

## 📚 Table of Contents

| # | Topic |
|---|-------|
| 1 | [✅ Topics Covered](#-topics-covered) |
| 2 | [💡 Real-Life Analogy](#-real-life-analogy) |
| 3 | [🎨 What is JSX?](#-what-is-jsx) |
| 4 | [✨ JSX Syntax & Expressions](#-jsx-syntax--expressions) |
| 5 | [🧩 Functional Components](#-functional-components) |
| 6 | [🎁 Props & Component Composition](#-props--component-composition) |
| 7 | [🎨 Basic Styling in React](#-basic-styling-in-react) |
| 8 | [⚠️ Best Practices & Common Mistakes](#%EF%B8%8F-best-practices--common-mistakes) |
| 9 | [📝 Summary](#-summary) |

---

## ✅ Topics Covered

✅ JSX syntax and expressions
✅ Components (Functional Components)
✅ Props and component composition
✅ Basic styling in React

---

## 💡 Real-Life Analogy

### 🧩 LEGO Blocks Concept

> Think of React components like **LEGO blocks**.
> Each block (component) is a **reusable piece** that you can combine with other blocks to build something larger.
> **Props** are like the instructions that tell each block how to look and behave.

```
🧱 Individual Blocks         🏠 Combined Together
─────────────────────        ───────────────────────────────────
  [Header Block]              ┌──────────────────────────────┐
  [Sidebar Block]    ──▶      │  Header                      │
  [Card Block]                │  ┌──────────┐ ┌──────────┐   │
  [Footer Block]              │  │  Card    │ │  Card    │   │
                              │  └──────────┘ └──────────┘   │
                              │  Footer                      │
                              └──────────────────────────────┘

Props = Instructions on the LEGO box
        → color, size, text, behavior
```

---

## 🎨 What is JSX?

### 📖 Theory

**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript developed by the React team that allows you to write **HTML-like code inside JavaScript files**.

JSX is not valid JavaScript by itself — a tool called **Babel** compiles it into plain JavaScript that browsers can understand. Under the hood, every JSX element becomes a `React.createElement()` call which produces a plain JavaScript object describing the UI.

```
┌──────────────────┐       ┌──────────────────────────┐       ┌─────────────────────┐
│   You Write JSX  │  ──▶  │  Babel Compiles It       │  ──▶ │ Browser Runs JS     │
│                  │       │                          │       │                     │
│  <h1>Hello!</h1> │       │  React.createElement(    │       │  DOM Element        │
│                  │       │    'h1', null, 'Hello!'  │       │  appears on screen  │
│                  │       │  )                       │       │                     │
└──────────────────┘       └──────────────────────────┘       └─────────────────────┘
```

> 🔑 **Key Insight:** JSX is just syntactic sugar. `<h1>Hello</h1>` and `React.createElement('h1', null, 'Hello')` are identical — JSX just makes it human-readable.

### 🔬 JSX vs Plain JavaScript

```jsx
// ✍️ What you write (JSX) — clean and readable
const element = (
  <div className="profile">
    <h1>Madhvendra Singh</h1>
    <p>Full-Stack Developer 🚀</p>
  </div>
);

// ⚙️ What Babel produces — verbose and hard to read
const element = React.createElement(
  "div",
  { className: "profile" },
  React.createElement("h1", null, "Madhvendra Singh"),
  React.createElement("p",  null, "Full-Stack Developer 🚀")
);
```

Both produce the **same output**. JSX just makes the developer experience 10x better.

---

## ✨ JSX Syntax & Expressions

### 📖 Theory

JSX follows strict rules because it is compiled to JavaScript. These rules exist to ensure the output is valid JS. Understanding **why** each rule exists makes them easy to remember.

---

### 📏 Rule 1 — One Root Element

Every JSX expression must return **exactly one parent element**. This is because JSX compiles to a `return` statement in JavaScript — and a function can only return one value.

```jsx
// ❌ WRONG — Two siblings at root level
function Profile() {
  return (
    <h1>John Doe</h1>
    <p>Developer</p>   // Syntax Error!
  );
}

// ✅ CORRECT — Wrapped in a <div>
function Profile() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>Developer</p>
    </div>
  );
}

// ✅ BETTER — Use a Fragment (no extra node in DOM)
function Profile() {
  return (
    <>
      <h1>John Doe</h1>
      <p>Developer</p>
    </>
  );
}
```

> 💡 **Use `<>...</>`** (React Fragment) when you don't want an unnecessary `<div>` in your DOM tree — keeps the HTML clean.

---

### 📏 Rule 2 — All Tags Must Be Closed

HTML allows unclosed tags. JSX does **not**. Every tag must be explicitly closed.

```jsx
// ❌ WRONG — HTML habits won't work here
<img src="avatar.png">
<input type="text">
<br>

// ✅ CORRECT — Self-closing syntax
<img src="avatar.png" />
<input type="text" />
<br />
```

---

### 📏 Rule 3 — camelCase Attributes

HTML attributes use lowercase. JSX attributes use **camelCase** because JSX is inside JavaScript, and CSS properties/event handlers follow JS naming conventions.

```jsx
// ❌ WRONG — HTML style
<button class="btn" onclick="submit()">
  <label for="email">Email</label>
</button>

// ✅ CORRECT — JSX camelCase style
<button className="btn" onClick={submit}>
  <label htmlFor="email">Email</label>
</button>
```

| HTML | JSX | Reason |
|------|-----|--------|
| `class` | `className` | `class` is a reserved JS keyword |
| `for` | `htmlFor` | `for` is a reserved JS keyword (loops) |
| `onclick` | `onClick` | JS event naming convention |
| `onchange` | `onChange` | JS event naming convention |
| `tabindex` | `tabIndex` | camelCase convention |
| `readonly` | `readOnly` | camelCase convention |

---

### 🔥 Embedding JavaScript — The `{}` Power

Curly braces `{}` are your **escape hatch from JSX back into JavaScript**. Anything inside `{}` is evaluated as a JavaScript expression.

> 🧠 **Expression vs Statement:**
> An **expression** produces a value → allowed inside `{}`
> A **statement** performs an action → NOT allowed inside `{}`

```jsx
const user = {
  name     : "Aarav Mehta",
  role     : "React Developer",
  followers: 4200,
  isOnline : true
};

function ProfileCard() {
  return (
    <div className="card">
      {/* ✅ Variable */}
      <h2>{user.name}</h2>

      {/* ✅ String method */}
      <p>{user.role.toUpperCase()}</p>

      {/* ✅ Math expression */}
      <span>{user.followers > 1000 ? `${(user.followers/1000).toFixed(1)}k` : user.followers} followers</span>

      {/* ✅ Ternary (conditional) */}
      <span>{user.isOnline ? "🟢 Online" : "🔴 Offline"}</span>

      {/* ✅ Logical AND — renders only if true */}
      {user.followers > 1000 && <span>⭐ Popular Creator</span>}
    </div>
  );
}
```

**What can go inside `{}`?**

| Type | Example | Allowed? |
|------|---------|:--------:|
| Variable | `{name}` | ✅ |
| Math | `{price * 1.18}` | ✅ |
| String method | `{name.toUpperCase()}` | ✅ |
| Ternary | `{x ? "yes" : "no"}` | ✅ |
| Logical `&&` | `{isAdmin && <Badge />}` | ✅ |
| Function call | `{getGreeting()}` | ✅ |
| `if` statement | `{if(x){...}}` | ❌ |
| `for` loop | `{for(...){...}}` | ❌ |
| Object directly | `{userObject}` | ❌ |

---

### 🔀 Conditional Rendering

```jsx
const isLoggedIn = true;
const role       = "admin";

function Dashboard() {
  return (
    <div>
      {/* Method 1: Ternary — for if/else */}
      {isLoggedIn
        ? <h2>Welcome back! 👋</h2>
        : <h2>Please sign in 🔐</h2>
      }

      {/* Method 2: Logical && — for "show only if true" */}
      {role === "admin" && <button>🛠 Admin Panel</button>}

      {/* Method 3: Stored in variable — for complex logic */}
      {(() => {
        if (role === "admin")   return <span>🔑 Admin</span>;
        if (role === "mod")     return <span>🛡 Moderator</span>;
        return <span>👤 User</span>;
      })()}
    </div>
  );
}
```

---

### 📋 Rendering Lists with `.map()`

React uses JavaScript's `.map()` to transform data arrays into JSX arrays.

> 🧠 **Why `.map()`?** Because `.map()` is an **expression** (returns a new array) — while `for` is a **statement** — and only expressions are allowed in JSX `{}`.

```jsx
const movies = [
  { id: 1, title: "Inception",      rating: 9.3, genre: "Sci-Fi"  },
  { id: 2, title: "Interstellar",   rating: 8.7, genre: "Sci-Fi"  },
  { id: 3, title: "The Dark Knight",rating: 9.0, genre: "Action"  },
  { id: 4, title: "Parasite",       rating: 8.6, genre: "Thriller"},
];

function MovieList() {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          🎬 <strong>{movie.title}</strong> — ⭐ {movie.rating} | {movie.genre}
        </li>
      ))}
    </ul>
  );
}
```

> ⚠️ **Always add a `key` prop** when rendering lists. Keys help React identify which items changed, were added, or removed — making re-renders efficient.
>
> Use `item.id` as the key, **never the array index**.

```jsx
// ❌ BAD — Index as key causes bugs when list is reordered/filtered
{movies.map((movie, index) => <MovieCard key={index} {...movie} />)}

// ✅ GOOD — Stable unique ID
{movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
```

---

## 🧩 Functional Components

### 📖 Theory

A **component** is a JavaScript function that:
1. Accepts an optional input called **props**
2. Returns **JSX** (what to show on screen)

Components let you split the UI into **independent, reusable pieces**. Instead of one giant HTML file, you build small focused blocks and compose them together — just like the LEGO analogy.

**Two types exist — but Functional Components are the modern standard:**

| | Functional Component | Class Component |
|-|---------------------|-----------------|
| **Syntax** | Simple function | `class X extends React.Component` |
| **Hooks support** | ✅ Full support | ❌ Limited |
| **Readability** | ✅ Clean & concise | ❌ Verbose |
| **Performance** | ✅ Optimized | Heavier |
| **React Team Recommendation** | ✅ Use this | ❌ Legacy code only |

---

### 🏗️ Component Tree — Visual Structure

```
                    ┌───────────────────────┐
                    │      App (Root)        │   ← Entry point
                    └───────────┬───────────┘
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
     ┌───────────────┐  ┌────────────┐  ┌───────────────┐
     │    Header     │  │    Main    │  │    Footer     │
     └───────┬───────┘  └─────┬──────┘  └───────────────┘
             │                │
      ┌──────┴─────┐    ┌─────┴──────┐
      ▼            ▼    ▼            ▼
   [Logo]       [Nav] [MovieList] [Sidebar]
                           │
                    ┌──────┴──────┐
                    ▼             ▼
               [MovieCard]  [MovieCard]

  📌 Data flows: Parent → Child (top to bottom ⬇️ only)
```

---

### 🧬 Ways to Write a Functional Component

```jsx
// Style 1 — Function Declaration (most readable)
function MovieCard({ title, rating }) {
  return (
    <div className="movie-card">
      <h3>🎬 {title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
}

// Style 2 — Arrow Function with explicit return
const MovieCard = ({ title, rating }) => {
  return (
    <div className="movie-card">
      <h3>🎬 {title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
};

// Style 3 — Arrow Function with implicit return (one-liners)
const Badge = ({ label }) => <span className="badge">{label}</span>;

// Style 4 — With logic before return
function TemperatureCard({ celsius }) {
  const fahrenheit = (celsius * 9/5) + 32;
  const emoji      = celsius > 30 ? "🔥" : celsius < 10 ? "🥶" : "😊";

  return (
    <div>
      <p>{emoji} {celsius}°C / {fahrenheit}°F</p>
    </div>
  );
}
```

---

### ✍️ Component Naming Rules

```jsx
// ✅ PascalCase — React recognizes as a component
function UserProfile()   {}
function NavigationBar() {}
function ProductCard()   {}

// ❌ lowercase — React treats it as an HTML element!
function userProfile()   {}   // → renders <userprofile> in DOM (wrong!)
function productcard()   {}   // → not a component
```

> 🔑 **Rule:** Component names **must** start with a capital letter.
> React uses this to distinguish your components from built-in HTML tags.

---

### 🧱 Composing Components Together

```jsx
// Small, single-purpose components
function Avatar({ src, name }) {
  return <img src={src} alt={name} className="avatar" />;
}

function Username({ name, handle }) {
  return (
    <div>
      <h3>{name}</h3>
      <span>@{handle}</span>
    </div>
  );
}

function FollowerCount({ count }) {
  const display = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  return <p>👥 {display} followers</p>;
}

// Composed into a bigger component
function TwitterCard({ user }) {
  return (
    <div className="twitter-card">
      <Avatar        src={user.avatar}   name={user.name}   />
      <Username      name={user.name}    handle={user.handle} />
      <FollowerCount count={user.followers}                  />
    </div>
  );
}

// App composes everything
function App() {
  const user = {
    name     : "Madhvendra Singh",
    handle   : "madhvendra007",
    avatar   : "/avatar.jpg",
    followers: 12800
  };

  return <TwitterCard user={user} />;
}
```

---

## 🎁 Props & Component Composition

### 📖 Theory

**Props** (short for *properties*) are the mechanism for passing data **from a parent component to a child component** — exactly like passing arguments to a function.

**Three fundamental rules of Props:**
1. **Unidirectional** — Data flows only one way: parent → child
2. **Read-only** — A component must never modify its own props
3. **Explicit** — Props must be passed deliberately (nothing is implicit)

```
┌─────────────────────────────────────────────────────────┐
│                    Parent Component                     │
│                                                         │
│   const product = { name: "MacBook", price: 120000 }    │
│                          │                              │
│               passes props down ⬇️                      │
│                          │                              │
│          ┌───────────────▼────────────────┐             │
│          │         Child Component        │             │
│          │                                │             │
│          │  function ProductCard({        │             │
│          │    name, price                 │             │
│          │  }) { ... }                    │             │
│          └────────────────────────────────┘             │
│                                                         │
│  ⚠️  Child CANNOT send props back up to Parent          │
│     (That's what State & Callbacks are for — Day 2!)    │
└─────────────────────────────────────────────────────────┘
```

---

### 📦 Passing Different Types of Props

```jsx
function ProductCard({ name, price, rating, inStock, tags, onAddToCart }) {
  return (
    <div className={`product ${inStock ? "available" : "sold-out"}`}>
      <h2>{name}</h2>
      <p>₹{price.toLocaleString()}</p>
      <p>⭐ {rating}/5</p>

      {/* Render array prop */}
      <div className="tags">
        {tags.map((tag, i) => <span key={i} className="tag">#{tag}</span>)}
      </div>

      {/* Render based on boolean prop */}
      {inStock
        ? <button onClick={onAddToCart}>🛒 Add to Cart</button>
        : <button disabled>❌ Out of Stock</button>
      }
    </div>
  );
}

// Parent passes all types of props
function App() {
  return (
    <ProductCard
      name        = "MacBook Pro M3"
      price       = {189990}           // number — use {}
      rating      = {4.8}              // number — use {}
      inStock     = {true}             // boolean — use {}
      tags        = {["Apple", "Laptop", "M3 Chip"]}  // array — use {}
      onAddToCart = {() => alert("Added!")}  // function — use {}
    />
  );
}
```

**Props type quick reference:**

| Data Type | Syntax | Example |
|-----------|--------|---------|
| String | Quotes or `{}` | `name="Alice"` or `name={"Alice"}` |
| Number | `{}` | `age={25}` |
| Boolean | `{}` or shorthand | `isActive={true}` or just `isActive` |
| Array | `{}` | `items={[1,2,3]}` |
| Object | `{}` | `user={{ name: "Alice" }}` |
| Function | `{}` | `onClick={() => doSomething()}` |

---

### 🎯 Default Props

```jsx
// Give props fallback values using ES6 default parameters
function Avatar({ src = "/default-avatar.png", size = 48, alt = "User" }) {
  return (
    <img
      src    = {src}
      alt    = {alt}
      width  = {size}
      height = {size}
      style  = {{ borderRadius: "50%" }}
    />
  );
}

// All defaults apply
<Avatar />

// Partial override
<Avatar src="/madhvendra.jpg" size={96} />

// Full override
<Avatar src="/team.jpg" size={64} alt="Team Photo" />
```

---

### 👶 `props.children` — The Container Pattern

`children` is a **special built-in prop** that automatically contains everything placed between a component's opening and closing tags. This is how you build container/wrapper components.

```jsx
// Reusable card container — doesn't care what's inside!
function Card({ title, theme = "light", children }) {
  const styles = {
    background : theme === "dark" ? "#1e1e2e" : "#ffffff",
    color      : theme === "dark" ? "#cdd6f4" : "#333333",
    border     : "1px solid #e0e0e0",
    borderRadius: "12px",
    padding    : "20px",
    margin     : "10px"
  };

  return (
    <div style={styles}>
      {title && <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>{title}</h3>}
      {children}
    </div>
  );
}

// Totally different content — same Card wrapper!
function App() {
  return (
    <div>
      {/* Card with text */}
      <Card title="📰 News Update">
        <p>React 19 was released with exciting new features!</p>
        <a href="#">Read more →</a>
      </Card>

      {/* Card with a form */}
      <Card title="🔐 Login" theme="dark">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </Card>

      {/* Card without title */}
      <Card>
        <img src="/banner.jpg" alt="Banner" />
      </Card>
    </div>
  );
}
```

### Regular Props vs Children — When to Use Which?

| | Regular Props | `children` |
|-|:-------------:|:----------:|
| **Syntax** | `<Card title="Hi" />` | `<Card>Hi</Card>` |
| **Data type** | Strings, numbers, booleans | Any JSX — even other components |
| **Structure** | Fixed, predictable | Flexible, dynamic |
| **Best for** | Configuration data | Wrapper / layout components |
| **Example** | `<Button color="blue">` | `<Modal><Form /></Modal>` |

---

### 🔗 Prop Drilling vs Composition

```jsx
// 🔴 PROP DRILLING — passing props through every level (gets messy!)
function App() {
  const theme = "dark";
  return <Page theme={theme} />;           // passes theme ↓
}
function Page({ theme }) {
  return <Sidebar theme={theme} />;        // passes theme ↓
}
function Sidebar({ theme }) {
  return <Button theme={theme} />;         // passes theme ↓
}
function Button({ theme }) {
  return <button className={theme}>Click</button>;  // finally uses it
}

// ✅ COMPOSITION — use children to avoid unnecessary prop passing
function App() {
  return (
    <Page>
      <Sidebar>
        <Button className="dark">Click</Button>
      </Sidebar>
    </Page>
  );
}
```

---

## 🎨 Basic Styling in React

### 📖 Theory

React gives you **four main ways** to style components. Each has different trade-offs in scope, reusability, and dynamic capability. Choosing the right method depends on whether your styles are **static or dynamic**, **global or component-scoped**.

---

### Method 1 — Inline Styles 🖌️

Inline styles are written as **JavaScript objects**. CSS property names use camelCase because they are JS object keys.

```jsx
function PriceTag({ price, isOnSale }) {
  const tagStyle = {
    display        : "inline-block",
    backgroundColor: isOnSale ? "#e74c3c" : "#2ecc71",
    color          : "#ffffff",
    padding        : "6px 14px",
    borderRadius   : "20px",
    fontWeight     : "bold",
    fontSize       : "14px"
  };

  return (
    <span style={tagStyle}>
      {isOnSale ? `🏷️ ₹${price} SALE` : `₹${price}`}
    </span>
  );
}
```

**CSS → JSX Property Conversion:**
```
CSS                  JSX (camelCase)
───────────────────────────────────
background-color  →  backgroundColor
font-size         →  fontSize
border-radius     →  borderRadius
margin-top        →  marginTop
z-index           →  zIndex
flex-direction    →  flexDirection
```

> ✅ **Best for:** Dynamic styles that change based on props or state
> ❌ **Limitation:** Cannot use `:hover`, `:focus`, or media queries

---

### Method 2 — External CSS Classes 📄

The classic approach — write CSS in a separate `.css` file and import it.

```css
/* MovieCard.css */
.movie-card {
  background   : #1a1a2e;
  color        : #e0e0e0;
  border-radius: 12px;
  padding      : 20px;
  width        : 220px;
  transition   : transform 0.3s ease, box-shadow 0.3s ease;
  cursor       : pointer;
}

.movie-card:hover {
  transform  : translateY(-8px);
  box-shadow : 0 12px 24px rgba(0, 0, 0, 0.4);  /* hover — impossible with inline! */
}

.movie-title  { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.movie-rating { color: #f1c40f; font-size: 14px; }
.movie-genre  { background: #16213e; padding: 4px 10px; border-radius: 12px; font-size: 12px; }
```

```jsx
import "./MovieCard.css";  // Import the CSS file

function MovieCard({ title, rating, genre }) {
  return (
    <div className="movie-card">                     {/* className, NOT class */}
      <h3 className="movie-title">{title}</h3>
      <p  className="movie-rating">⭐ {rating}/10</p>
      <span className="movie-genre">{genre}</span>
    </div>
  );
}
```

> ✅ **Best for:** Static, reusable styles; pseudo-classes; media queries
> ❌ **Watch out:** Class names are **global** — can accidentally override styles from other files

---

### Method 3 — CSS Modules 🎯

CSS Modules work like external CSS but **scope class names locally** to the component — preventing naming conflicts across your app.

```css
/* MovieCard.module.css */
.card   { background: #1a1a2e; border-radius: 12px; padding: 20px; }
.title  { font-size: 18px; font-weight: 700; }
.badge  { background: #e74c3c; color: #fff; padding: 4px 10px; border-radius: 20px; }
```

```jsx
import styles from "./MovieCard.module.css";   // import as an object

function MovieCard({ title, genre }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.badge}>{genre}</span>
    </div>
  );
}

// 🔍 React auto-generates unique class names:
// styles.card  →  "MovieCard_card__3hKg4"
// styles.title →  "MovieCard_title__x91aB"
// This prevents collisions with other components' .card or .title classes!
```

---

### Method 4 — Dynamic Conditional Classes 🎨

Combine class names dynamically based on props using template literals:

```jsx
function Button({ variant = "primary", size = "md", disabled = false, children }) {
  // Build class string dynamically
  const classes = [
    "btn",
    `btn-${variant}`,           // btn-primary | btn-danger | btn-ghost
    `btn-${size}`,              // btn-sm | btn-md | btn-lg
    disabled ? "btn-disabled" : ""
  ].filter(Boolean).join(" ");

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary"  size="lg">🚀 Deploy</Button>
<Button variant="danger"   size="sm">🗑️ Delete</Button>
<Button variant="ghost"    disabled>⏳ Loading...</Button>
```

### Styling Methods at a Glance

| Method | Scope | `:hover` / Media Queries | Dynamic Styles | Best For |
|--------|:-----:|:------------------------:|:--------------:|----------|
| Inline Styles | Component | ❌ | ✅ Excellent | State/prop-driven styles |
| External CSS | Global | ✅ | Limited | Shared, reusable styles |
| CSS Modules | Local | ✅ | Limited | Component-scoped styles |
| Conditional Classes | Global | ✅ | ✅ Good | Variant-based components |

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Mistakes to Avoid

```jsx
// ❌ 1. class instead of className
<div class="card">...</div>
// ✅ Fix — class is a JS reserved keyword
<div className="card">...</div>

// ❌ 2. Unclosed self-closing tags
<img src="photo.jpg">  <input type="text">
// ✅ Fix
<img src="photo.jpg" />  <input type="text" />

// ❌ 3. Multiple root elements
return ( <h1>Title</h1> <p>Text</p> );
// ✅ Fix — use fragment
return ( <> <h1>Title</h1> <p>Text</p> </> );

// ❌ 4. Rendering an object directly
const user = { name: "Alice", age: 30 };
return <div>{user}</div>;              // Error: Objects are not valid React children
// ✅ Fix
return <div>{user.name} — {user.age}</div>;

// ❌ 5. Array index as key
{items.map((item, i) => <Card key={i} {...item} />)}
// ✅ Fix — use stable unique ID
{items.map(item => <Card key={item.id} {...item} />)}

// ❌ 6. Lowercase component name
function movieCard() { return <div>...</div>; }   // Treated as HTML element!
// ✅ Fix
function MovieCard() { return <div>...</div>; }

// ❌ 7. Non-string props as strings
<Card age="25" isActive="true" score="9.8" />
// ✅ Fix — use {} for non-strings
<Card age={25} isActive={true} score={9.8} />
```

---

### 🎯 Quick Reference — Do's & Don'ts

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use `className` | Use `class` |
| PascalCase for components | lowercase component names |
| Close all JSX tags | Leave tags open |
| Use `item.id` as list key | Use array index as key |
| Destructure props | Chain `props.x.y.z` |
| Use `<>` fragments | Add pointless `<div>` wrappers |
| Functional components | Class components for new code |
| Keep components small & focused | Build giant monolithic components |
| Default prop values | Assume props are always provided |
| Inline styles for dynamic values | Inline styles for everything |

---

## 📝 Summary

| Concept | What It Is | Golden Rule |
|---------|-----------|-------------|
| **JSX** | HTML-like syntax inside JS | Compiles to `React.createElement()` via Babel |
| **`{}`  Expressions** | Embed JS values in JSX | Expressions only — no `if`/`for` statements |
| **Components** | JS functions that return JSX | PascalCase · One responsibility · Return JSX |
| **Props** | Data passed parent → child | Read-only · One-way flow · Like function args |
| **`children`** | Content between tags | For wrappers, layouts, and modal containers |
| **`className`** | CSS class attribute in JSX | Never `class` — it is a JS reserved keyword |
| **Styling** | 4 methods available | Inline=dynamic · CSS=global · Modules=scoped |
| **Lists + Keys** | `.map()` + unique `key` | Stable ID as key · Never array index |

<br/>

```
🗺️  The Big Picture

  [ Data / Props ]
        │
        ▼
  [ Parent Component ]
        │ props ⬇️
        ▼
  [ Child Components ]  →  JSX  →  Babel  →  React.createElement()  →  Virtual DOM  →  Screen ✅
```

<div align="center">

**Happy Coding! 💻✨**

*Small steps every day compound into mastery.* 🚀

---

*Made with ❤️ for React learners*

![React](https://img.shields.io/badge/Keep%20Building-React-61DAFB?style=flat-square&logo=react)
![JS](https://img.shields.io/badge/Understand%20the-JS%20Roots-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
