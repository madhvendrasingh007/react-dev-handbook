
# 🚀 Day 1: React Fundamentals & JSX
### Your Journey to Mastering React Begins Here! 🎯

---

## 📚 Table of Contents
1. [What is JSX?](#-what-is-jsx)
2. [JSX Syntax & Expressions](#-jsx-syntax--expressions)
3. [Functional Components](#-functional-components)
4. [Props & Component Composition](#-props--component-composition)
5. [Basic Styling in React](#-basic-styling-in-react)
6. [Best Practices & Common Mistakes](#-best-practices--common-mistakes)

---

## 🎨 What is JSX?

### Theory: Understanding JSX

**JSX** stands for **JavaScript XML**. It's a syntax extension for JavaScript that lets you write HTML-like code directly inside your JavaScript files [web:3][web:5]. Think of it as a bridge between HTML and JavaScript that makes building user interfaces feel natural and intuitive.

### 🏗️ Real-World Analogy

Imagine you're writing a letter (HTML) but you want to include some calculations or dynamic information (JavaScript) within it. Normally, you'd have to write the letter in one place and do calculations separately. JSX is like having a magic pen that lets you write both the letter AND do calculations right where you need them!

### How JSX Works: Behind the Scenes

```
📝 You Write JSX          →    🔄 Babel Transforms    →    🌐 Browser Understands
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const element =                  const element =              JavaScript creates
<h1>Hello!</h1>                  React.createElement(         DOM elements
                                 'h1', {}, 'Hello!')          
```

**What's happening?** [web:2][web:3]
- JSX is NOT valid JavaScript that browsers can understand
- A tool called **Babel** transforms JSX into regular JavaScript
- The transformation converts JSX into `React.createElement()` calls
- React then creates actual DOM elements that appear on your screen

---

## ✨ JSX Syntax & Expressions

### 1. Basic JSX Syntax

#### Rule #1: Single Parent Element [web:5]

```javascript
// ❌ WRONG - Multiple parent elements
const element = (
  <h1>Hello World</h1>
  <p>This won't work</p>
);

// ✅ CORRECT - Single parent wrapper
const element = (
  <div>
    <h1>Hello World</h1>
    <p>This works perfectly!</p>
  </div>
);

// ✅ ALSO CORRECT - Using React Fragment (cleaner!)
const element = (
  <>
    <h1>Hello World</h1>
    <p>No extra div in the DOM!</p>
  </>
);
```

**💡 Why?** JSX expressions must return a single element. Think of it like a gift box - you can have many items inside, but they all need to be in ONE box [web:5].

**🎯 Pro Tip:** Use React Fragments `<>...</>` when you don't want to add extra divs to your DOM [web:20].

#### Rule #2: All Tags Must Be Closed [web:5]

```javascript
// ❌ WRONG
const element = <img src="photo.jpg">
const element = <input type="text">

// ✅ CORRECT - Self-closing tags
const element = <img src="photo.jpg" />
const element = <input type="text" />
```

#### Rule #3: camelCase for Attributes [web:2][web:3]

```javascript
// ❌ WRONG - HTML style
<div class="container" onclick="handleClick()">
  <label for="email">Email</label>
</div>

// ✅ CORRECT - JSX style
<div className="container" onClick={handleClick}>
  <label htmlFor="email">Email</label>
</div>
```

**🔑 Key Differences:**
- `class` → `className` (class is a reserved keyword in JavaScript)
- `for` → `htmlFor` (for is a reserved keyword)
- `onclick` → `onClick`
- `onchange` → `onChange`
- All multi-word attributes use camelCase! [web:2]

### 2. JSX Expressions: The Superpower! 🦸

Expressions in JSX are written inside curly braces `{}` [web:3][web:8]. Think of curly braces as "JavaScript mode switchers" - they tell React "Hey, evaluate this as JavaScript!"

```javascript
// Basic expressions
const name = "Sarah";
const age = 25;

const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old</p>
    <p>Next year you'll be {age + 1}</p>
  </div>
);
```

**Parentheses `()`** are used to wrap multi-line JSX elements. They're optional but help with readability and prevent JavaScript's automatic semicolon insertion from breaking your code.
```javascript
const element = (
  <div>
    <h1>Hello, World!</h1>
  </div>
);
```

**Curly braces `{}`** are used to embed JavaScript expressions inside JSX. Whenever you want to use a variable, calculation, or any JavaScript code within your JSX, wrap it in curly braces.
```javascript
const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old</p>
    <p>Next year you'll be {age + 1}</p>
  </div>
);
```

> **Note:** Inside `{}`, you can only use expressions (things that return a value), not statements. Use ternary operators instead of `if` statements, and `.map()` instead of `for` loops.

| Syntax | Usage | Example |
|--------|-------|---------|
| `()` | Wrap JSX elements | `const el = (<div>...</div>)` |
| `{}` | Embed JavaScript expressions | `<h1>Hello {name}</h1>` |

> **Tip:** Think of `{}` as an escape hatch from JSX back into JavaScript. Everything inside curly braces is evaluated as JavaScript code.

#### What Can Go Inside `{}` ? [web:8]

```javascript
// ✅ Strings
<h1>{"Hello World"}</h1>

// ✅ Numbers
<p>{42}</p>

// ✅ Math expressions
<p>{10 + 20}</p>

// ✅ Variables
<p>{userName}</p>

// ✅ Function calls
<p>{getUserName()}</p>

// ✅ Ternary operators
<p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>

// ✅ Arrays (will be joined)
<p>{[1, 2, 3, 4]}</p>

// ✅ Object properties
<p>{user.name}</p>

// ❌ Objects directly (will cause error!)
<p>{user}</p> // ❌ Objects are not valid as React child [web:19]

// ❌ if statements (use ternary instead!)
<p>{if (true) { "Hello" }}</p> // ❌ Syntax error
```

### 3. Conditional Rendering in JSX

```javascript
const isLoggedIn = true;
const userName = "Alex";

// Method 1: Ternary operator (most common)
const element = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back, {userName}!</h1>
    ) : (
      <h1>Please sign in</h1>
    )}
  </div>
);

// Method 2: Logical AND (&&) operator
const element = (
  <div>
    {isLoggedIn && <h1>Welcome back, {userName}!</h1>}
    {!isLoggedIn && <h1>Please sign in</h1>}
  </div>
);

// Method 3: Variable assignment (for complex logic)
let greeting;
if (isLoggedIn) {
  greeting = <h1>Welcome back, {userName}!</h1>;
} else {
  greeting = <h1>Please sign in</h1>;
}

const element = <div>{greeting}</div>;
```

### 4. Rendering Lists in JSX

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const element = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

**⚠️ Important:** Always use a unique `key` prop when rendering lists [web:19]. Keys help React identify which items have changed, added, or removed.

```javascript
// ❌ BAD - Using index as key (can cause performance issues)
{items.map((item, index) => <Item key={index} {...item} />)}

// ✅ GOOD - Using unique identifier
{items.map(item => <Item key={item.id} {...item} />)}
```

### 5. Comments in JSX [web:3]

```javascript
const element = (
  <div>
    {/* This is a comment in JSX */}
    <h1>Hello World</h1>

    {/* 
      Multi-line comments
      work like this 
    */}
  </div>
);
```

---

## 🧩 Functional Components

### Theory: What Are Components?

**Components** are the building blocks of React applications [web:6][web:9]. They're like LEGO blocks - small, reusable pieces that you can combine to build complex user interfaces.

### 🏗️ The LEGO Analogy

Imagine building with LEGO:
- Each LEGO block = A React Component
- Different colored blocks = Different types of components
- Instructions manual = Props (we'll cover this soon!)
- The final castle/car/house = Your complete app

You can:
- ✅ Reuse the same block multiple times
- ✅ Combine blocks to make bigger structures
- ✅ Swap blocks without breaking everything else
- ✅ Share your block designs (components) with others

### Anatomy of a Functional Component

```javascript
// Basic structure
function ComponentName() {
  // JavaScript logic goes here (optional)

  // Must return JSX
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}
```

### Creating Your First Component

```javascript
// Example 1: Simple Greeting Component
function Greeting() {
  return <h1>Hello, welcome to React! 👋</h1>;
}

// Example 2: Component with logic
function CurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time</h2>
      <p>It's {timeString}</p>
    </div>
  );
}

// Example 3: Arrow function component (modern style)
const WelcomeMessage = () => {
  return <h1>Welcome to React! 🚀</h1>;
};

// Example 4: Implicit return (super clean!)
const Footer = () => <footer>© 2026 My App</footer>;
```

### 📐 Component Architecture Visualization

```
┌─────────────────────────────────────────┐
│           App Component                 │  ← Root Component
│  ┌─────────────────────────────────┐    │
│  │      Header Component           │    │  ← Child Components
│  │  ┌──────────┐  ┌──────────┐     │    │
│  │  │   Logo   │  │   Menu   │     │    │  ← Grandchild Components
│  │  └──────────┘  └──────────┘     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │    Main Content Component       │    │
│  │  ┌──────────┐  ┌──────────┐     │    │
│  │  │ Article  │  │  Sidebar │     │    │
│  │  └──────────┘  └──────────┘     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │      Footer Component           │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Component Naming Rules ✍️

```javascript
// ✅ CORRECT - PascalCase (capitalize first letter)
function UserProfile() {}
function NavigationBar() {}
function ProductCard() {}

// ❌ WRONG - lowercase (React won't recognize it!)
function userProfile() {} // Treated as HTML tag, not component
function navigationbar() {}
```

**🎯 Rule:** Component names MUST start with a capital letter [web:9]!

### Using Components

```javascript
// Define components
function Header() {
  return <h1>My Awesome Website</h1>;
}

function MainContent() {
  return <p>Welcome to my site!</p>;
}

function Footer() {
  return <footer>© 2026</footer>;
}

// Compose them in a parent component
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

### Component Best Practices 🌟 [web:6][web:9]

#### 1. **Keep Components Small and Focused**

```javascript
// ❌ BAD - Component doing too much
function UserDashboard() {
  return (
    <div>
      <header>...</header>
      <nav>...</nav>
      <main>...</main>
      <aside>...</aside>
      <footer>...</footer>
    </div>
  );
}

// ✅ GOOD - Split into smaller components
function UserDashboard() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  );
}
```

**💡 Principle:** One component = One responsibility

#### 2. **Use Functional Components** [web:6][web:9]

In 2025, functional components are the standard. They're:
- ✅ Easier to read and write
- ✅ Easier to test
- ✅ Work seamlessly with React Hooks
- ✅ Better performance

```javascript
// ✅ Modern way - Functional Component
function Welcome() {
  return <h1>Hello!</h1>;
}

// ❌ Old way - Class Component (avoid for new code)
class Welcome extends React.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}
```

#### 3. **Meaningful Names** [web:9]

```javascript
// ❌ BAD - Unclear names
function Comp1() {}
function Thing() {}
function Data() {}

// ✅ GOOD - Descriptive names
function UserProfile() {}
function ShoppingCart() {}
function ProductCard() {}
```

---

## 🎁 Props & Component Composition

### Theory: What Are Props?

**Props** (short for "properties") are how you pass data from a parent component to a child component [web:10]. Think of props as arguments to a function!

### 🎁 Real-World Analogy

Imagine you're ordering a custom pizza:
- **The Pizza Shop** = Child Component
- **Your Order** = Props
- **The Pizza They Make** = Rendered Component

You tell them: "Large size, pepperoni, extra cheese" (props), and they make your custom pizza based on those specifications!

### Props Flow Visualization

```
┌──────────────────────────────────────┐
│       Parent Component               │
│                                      │
│  data = "Hello"                      │
│  color = "blue"                      │
│         │                            │
│         │ (passes props down)        │
│         ▼                            │
│  ┌────────────────────────┐          │
│  │   Child Component      │          │
│  │                        │          │
│  │  receives props:       │          │
│  │  { data, color }       │          │
│  └────────────────────────┘          │
└──────────────────────────────────────┘

Note: Props flow ONE WAY (parent → child) 🔽
```

### Passing Props: Step-by-Step

#### Step 1: Define a Component That Accepts Props

```javascript
import React from "react";

// Greeting component (destructuring props)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// UserCard component (multiple props)
function UserCard({ name, age, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// Main component (exported as default)
export default function App() {
  return (
    <div>
      <Greeting name="John" />
      <UserCard name="Alice" age={25} location="New York" />
    </div>
  );
}
```

#### Step 2: Pass Data to the Component [web:10]

```javascript
function App() {
  return (
    <div>
      {/* Passing props just like HTML attributes */}
      <Greeting name="Sarah" />
      <Greeting name="Alex" />

      <UserCard 
        name="John Doe" 
        age={28} 
        location="New York" 
      />
    </div>
  );
}
```

**🔑 Key Points:**
- String props: `name="Sarah"` (quotes, no braces)
- Number props: `age={28}` (curly braces!)
- Boolean props: `isActive={true}` or just `isActive`
- Array/Object props: `items={['a', 'b', 'c']}`

### Props Examples: From Simple to Complex

#### Example 1: Simple Text Props

```javascript
function WelcomeMessage({ message }) {
  return <p>{message}</p>;
}

// Usage
<WelcomeMessage message="Welcome to React!" />
```

#### Example 2: Multiple Props

```javascript
function ProductCard({ title, price, image, inStock }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      {inStock ? (
        <button>Add to Cart</button>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
}

// Usage
<ProductCard 
  title="Wireless Headphones"
  price={79.99}
  image="/headphones.jpg"
  inStock={true}
/>
```

#### Example 3: Props with Objects

```javascript
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Usage
const userData = {
  name: "Alice Johnson",
  email: "alice@example.com",
  age: 30
};

<UserProfile user={userData} />
```

#### Example 4: Props with Arrays

```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// Usage
const myTodos = ["Learn React", "Build a project", "Deploy app"];
<TodoList todos={myTodos} />
```

### Default Props 🎨

Give your props default values when they're not provided:

```javascript
// Method 1: Default parameters (ES6)
function Button({ text = "Click me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Usage
<Button /> // Uses defaults: "Click me", blue
<Button text="Submit" /> // Custom text, default color
<Button text="Cancel" color="red" /> // Both custom
```

### Props.children: The Special Prop ✨

`children` is a special prop that represents whatever you put BETWEEN the opening and closing tags [web:7]:

```javascript
// Component definition
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage - content between tags becomes 'children'
<Card>
  <h2>Card Title</h2>
  <p>This is the card content!</p>
  <button>Click me</button>
</Card>
```

## Props vs Children in React

**Regular props** are passed as attributes in the opening tag, while **children** is a special prop that represents content placed between opening and closing tags.

### Regular Props Example
```javascript
function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Usage - props passed as attributes
<Card title="Card Title" description="This is the card content!" />
```

### Children Prop Example
```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage - content between tags becomes 'children'
<Card>
  <h2>Card Title</h2>
  <p>This is the card content!</p>
  <button>Click me</button>
</Card>
```

> **Note:** `children` is automatically passed by React when you put content between component tags. You don't explicitly write `children={...}`.

### Comparison

| Feature | Regular Props | Children Prop |
|---------|---------------|---------------|
| **Syntax** | `<Card title="Hello" />` | `<Card>Hello</Card>` |
| **Passing data** | Attributes in opening tag | Content between tags |
| **Flexibility** | Fixed structure | Can pass any JSX/components |
| **Use case** | Simple data (strings, numbers) | Complex nested content |

### Combined Usage
You can use both regular props and children together:
```javascript
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="My Card">
  <p>This is flexible content!</p>
  <button>Action</button>
</Card>
```

> **Tip:** Use `children` when you want to create wrapper components (like layouts, containers, modals) where the content inside can vary. Use regular props for specific, predictable data.

### Component Composition: Building with Blocks 🏗️

**Composition** means combining smaller components to create larger ones [web:7][web:9]:

```javascript
// Small, reusable components
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />;
}

function UserName({ name }) {
  return <h3>{name}</h3>;
}

function UserBio({ bio }) {
  return <p>{bio}</p>;
}

// Composed component using the above
function UserCard({ user }) {
  return (
    <div className="user-card">
      <Avatar src={user.avatar} alt={user.name} />
      <UserName name={user.name} />
      <UserBio bio={user.bio} />
    </div>
  );
}

// Usage
const user = {
  name: "Emma Watson",
  avatar: "/emma.jpg",
  bio: "Software Developer & Tech Enthusiast"
};

<UserCard user={user} />
```

### Props Best Practices 🌟

#### 1. **Destructure Props for Clarity**

```javascript
// ❌ LESS CLEAR
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

// ✅ MORE CLEAR
function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
```

#### 2. **Keep Props Simple**

```javascript
// ❌ BAD - Too many individual props
<UserProfile 
  firstName="John"
  lastName="Doe"
  email="john@example.com"
  age={30}
  city="NYC"
  country="USA"
  phone="123-456"
/>

// ✅ GOOD - Group related data
const user = {
  name: { first: "John", last: "Doe" },
  contact: { email: "john@example.com", phone: "123-456" },
  location: { city: "NYC", country: "USA" },
  age: 30
};

<UserProfile user={user} />
```

#### 3. **Validate Props (TypeScript or PropTypes)**

```javascript
// With PropTypes (for JavaScript)
import PropTypes from 'prop-types';

function Button({ text, onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
```

---

## 🎨 Basic Styling in React

There are multiple ways to style React components [web:11]. Let's explore each method!

### Method 1: Inline Styles 🖌️

Inline styles in React are JavaScript objects with camelCase properties [web:13][web:14][web:15]:

```javascript
function StyledButton() {
  // Define style object
  const buttonStyle = {
    backgroundColor: 'blue',    // background-color → backgroundColor
    color: 'white',
    padding: '10px 20px',       // String values for CSS units
    fontSize: '16px',           // font-size → fontSize
    border: 'none',
    borderRadius: '5px',        // border-radius → borderRadius
    cursor: 'pointer'
  };

  return <button style={buttonStyle}>Click Me</button>;
}
```

#### Inline Styles: Quick Reference

```javascript
// CSS Property → React Style Property
'background-color'   →  backgroundColor
'font-size'         →  fontSize
'margin-top'        →  marginTop
'border-radius'     →  borderRadius
'z-index'           →  zIndex

// Number values (px assumed)
fontSize: 16        →  font-size: 16px
padding: 10         →  padding: 10px

// String values (specify units)
fontSize: '16px'
fontSize: '1.5rem'
width: '50%'
```

#### Dynamic Inline Styles

```javascript
function DynamicButton({ isPrimary }) {
  const buttonStyle = {
    backgroundColor: isPrimary ? 'blue' : 'gray',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  };

  return <button style={buttonStyle}>Click Me</button>;
}

// Usage
<DynamicButton isPrimary={true} />  // Blue button
<DynamicButton isPrimary={false} /> // Gray button
```

#### Inline Styles: Pros & Cons

**✅ When to Use:**
- Quick styling for single elements [web:18]
- Dynamic styles based on props/state [web:18]
- Component-specific styles that won't be reused
- Small adjustments to existing styles

**❌ When to Avoid:**
- Cannot use pseudo-classes (`:hover`, `:focus`)
- Cannot use media queries
- Can become messy with many styles
- No CSS optimization/minification

### Method 2: CSS Classes (External CSS) 📝

The traditional way - separate CSS file imported into your component:

```javascript
// UserCard.css
.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.user-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.user-name {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.user-bio {
  color: #666;
  line-height: 1.6;
}
```

```javascript
// UserCard.jsx
import './UserCard.css';  // Import CSS file

function UserCard({ name, bio }) {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-bio">{bio}</p>
    </div>
  );
}
```

**🎯 Remember:** Use `className`, NOT `class`! [web:2][web:16]

#### Conditional Classes

```javascript
function Button({ isPrimary, isDisabled }) {
  // Method 1: Template literals
  const buttonClass = `btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} ${isDisabled ? 'btn-disabled' : ''}`;

  return <button className={buttonClass}>Click Me</button>;
}

// Method 2: Array join
function Button({ isPrimary, isDisabled }) {
  const classes = [
    'btn',
    isPrimary ? 'btn-primary' : 'btn-secondary',
    isDisabled && 'btn-disabled'
  ].filter(Boolean).join(' ');

  return <button className={classes}>Click Me</button>;
}
```

### Method 3: CSS Modules 🎯

CSS Modules scope styles locally to avoid naming conflicts:

```css
/* UserCard.module.css */
.card {
  border: 1px solid #ddd;
  padding: 20px;
}

.title {
  font-size: 24px;
  color: blue;
}
```

```javascript
// UserCard.jsx
import styles from './UserCard.module.css';

function UserCard({ title }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
```

### Method 4: Combining Inline & External Styles

```javascript
import './Card.css';

function Card({ isHighlighted }) {
  // Inline style for dynamic values
  const highlightStyle = {
    border: isHighlighted ? '3px solid gold' : '1px solid #ddd'
  };

  return (
    <div className="card" style={highlightStyle}>
      <h2 className="card-title">My Card</h2>
    </div>
  );
}
```

### Styling Best Practices 🌟

#### 1. **Choose the Right Method** [web:18]

```javascript
// ✅ Inline: Dynamic, state-based styles
<div style={{ backgroundColor: isActive ? 'green' : 'gray' }}>

// ✅ CSS Classes: Reusable, static styles
<div className="card">

// ✅ CSS Modules: Component-scoped styles
<div className={styles.card}>
```

#### 2. **Keep Styles Organized**

```javascript
// ❌ BAD - Messy inline styles
<div style={{ padding: '10px', margin: '20px', backgroundColor: 'blue', color: 'white', fontSize: '16px' }}>

// ✅ GOOD - Extract to variable
const containerStyle = {
  padding: '10px',
  margin: '20px',
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '16px'
};

<div style={containerStyle}>
```

#### 3. **Use Meaningful Class Names**

```javascript
// ❌ BAD
<div className="box1">
<div className="thing">

// ✅ GOOD
<div className="user-profile-card">
<div className="product-list-item">
```

---

## ⚠️ Best Practices & Common Mistakes

### 🚫 Common Mistakes to Avoid

#### 1. **Using `class` Instead of `className`** [web:16]

```javascript
// ❌ WRONG
<div class="container">Content</div>

// ✅ CORRECT
<div className="container">Content</div>
```

#### 2. **Forgetting to Close Tags** [web:5]

```javascript
// ❌ WRONG
<img src="photo.jpg">
<input type="text">

// ✅ CORRECT
<img src="photo.jpg" />
<input type="text" />
```

#### 3. **Multiple Parent Elements** [web:5]

```javascript
// ❌ WRONG
return (
  <h1>Title</h1>
  <p>Content</p>
);

// ✅ CORRECT
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);
```

#### 4. **Rendering Objects Directly** [web:19]

```javascript
const user = { name: 'Alice', age: 30 };

// ❌ WRONG - Objects are not valid React children!
<div>{user}</div>

// ✅ CORRECT - Render specific properties
<div>{user.name}</div>
<div>{user.age}</div>
```

#### 5. **Using Index as Key in Lists** [web:19]

```javascript
// ❌ BAD - Can cause performance and rendering issues
{items.map((item, index) => 
  <div key={index}>{item}</div>
)}

// ✅ GOOD - Use unique identifier
{items.map(item => 
  <div key={item.id}>{item.name}</div>
)}
```

#### 6. **Lowercase Component Names**

```javascript
// ❌ WRONG - React treats it as HTML tag
function myComponent() {
  return <div>Hello</div>;
}

// ✅ CORRECT - PascalCase for components
function MyComponent() {
  return <div>Hello</div>;
}
```

#### 7. **Forgetting Curly Braces for Non-String Props**

```javascript
// ❌ WRONG
<UserCard age="25" isActive="true" />

// ✅ CORRECT
<UserCard age={25} isActive={true} />
```

### 🎯 Do's and Don'ts Quick Reference

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use `className` | Use `class` |
| Use PascalCase for components | Use lowercase for components |
| Close all JSX tags | Leave tags unclosed |
| Use unique keys in lists | Use array index as key |
| Extract complex logic | Write everything inline |
| Use functional components | Use class components (for new code) |
| Destructure props | Access props.prop.prop.prop |
| Keep components focused | Create giant components |
| Use fragments `<>` | Add unnecessary divs |
| Validate props | Assume props exist |

---

## 🎓 Learning Tips & Resources

### 💡 Learning Tips

1. **Type the Code Yourself** 
   - Don't just copy-paste! Muscle memory matters.

2. **Break Things on Purpose**
   - Try removing a `className` → See the error
   - Forget a closing tag → Understand why it fails
   - Render an object directly → Learn the boundaries

3. **Read Error Messages Carefully**
   - React gives AMAZING error messages!
   - They tell you exactly what's wrong and where

4. **Build Mini Projects Daily**
   - One concept = One mini project
   - Example: Learned props? Build 5 different card components!

5. **Use React DevTools**
   - Install React Developer Tools browser extension
   - Inspect your components in real-time

### 📝 Today's Key Takeaways

- **JSX** = HTML-like syntax in JavaScript
- **Components** = Reusable UI building blocks
- **Props** = Data passed from parent to child (one-way flow)
- **Styling** = Multiple methods (inline, CSS, modules)
- **Always** use `className`, not `class`
- **Always** close JSX tags
- **Always** use PascalCase for component names

### 🚀 What's Next?

After mastering Day 1, you'll be ready for:
- **Day 2:** State Management & Events
- **Day 3:** Hooks (useState, useEffect)
- **Day 4:** Forms & Controlled Components
- And much more!

---

### 📌 Quick Reference Card

```javascript
// JSX Basics
<div className="container">
  <h1>{variable}</h1>
  {condition && <p>Show if true</p>}
  {condition ? <p>True</p> : <p>False</p>}
</div>

// Component
function MyComponent({ prop1, prop2 }) {
  return <div>{prop1} {prop2}</div>;
}

// Usage
<MyComponent prop1="Hello" prop2={42} />

// Styling
const style = { color: 'blue', fontSize: '16px' };
<div style={style} className="my-class">Styled</div>

// Lists
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

---

**Happy Coding! 💻✨**

Remember: Practice > Perfection. Start building! 🚀

---

*Made with ❤️ for React learners*
