# 📝 Multi-Page Blog with React Router

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.21.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A Complete Multi-Page Blog Application with Navigation & Routing** 📰✨

[Features](#-features) • [Installation](#-installation) • [Learning Guide](#-learning-guide) • [Routing Concepts](#-routing-concepts-explained)

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
- [React Router Concepts](#-react-router-concepts-explained)
- [Component Breakdown](#-component-breakdown)
- [Routing Patterns](#-routing-patterns)
- [Best Practices](#-best-practices)
- [Troubleshooting](#-troubleshooting)
- [What You'll Learn](#-what-youll-learn)

---

## 🎯 About the Project

Welcome to the **Multi-Page Blog** project! This is an intermediate-level React application that demonstrates how to create a **Single Page Application (SPA)** with multiple routes, navigation, and dynamic content using **React Router**.

### 🌟 What Makes This Project Special?

This project teaches you:
- 🧭 **Client-side routing** without page reloads
- 🔗 **Navigation** between different pages
- 📄 **Dynamic routes** with URL parameters
- 🎨 **Nested layouts** with shared components
- 💡 **Protected routes** and 404 pages
- 🚀 **Real-world blog structure** with multiple pages

### 🎓 Perfect For:

- React learners who understand components and state
- Developers learning React Router for the first time
- Building portfolio projects with navigation
- Understanding SPA (Single Page Application) architecture

---

## ✨ Features

### Core Features 🎯
- 🏠 **Home Page**: Landing page with blog intro and featured posts
- 👤 **About Page**: Information about the blog/author
- 📝 **Blog Page**: List of all blog posts with summaries
- 📰 **Individual Post Pages**: Full blog post with dynamic routing
- 🧭 **Navigation Bar**: Sticky navbar with active link highlighting
- 🔍 **Search Functionality**: Filter posts by title
- 🏷️ **Categories**: Filter posts by category tags
- 📱 **Responsive Design**: Mobile-friendly layout
- ❌ **404 Page**: Custom not found page

### Advanced Features 🚀
- ⚡ **Smooth Navigation**: No page reloads
- 🎨 **Active Link Styling**: Visual feedback for current page
- 🔄 **Loading States**: Smooth transitions
- 📊 **Read Time Calculation**: Estimated reading time
- 🗓️ **Post Dates**: Display publication dates
- 💬 **Author Info**: Author details for each post

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **React 18** | UI library for components | 18.2.0 |
| **React Router** | Client-side routing | 6.21.0 |
| **Vite** | Build tool & dev server | 5.0.0 |
| **CSS3** | Styling & animations | - |
| **JavaScript ES6+** | Modern JavaScript | - |

---

## ✅ Prerequisites

Before starting, ensure you have:

- ✅ **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** or **yarn** package manager
- ✅ **Code Editor** (VS Code recommended)
- ✅ **Basic React knowledge** (components, props, state)
- ✅ **Basic understanding of routing concepts**

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

### Step 1: Create React Project with Vite ⚡

```bash
# Create new Vite project
npm create vite@latest blog-app --template react

# Navigate into project folder
cd blog-app

# Install dependencies
npm install
```

### Step 2: Install React Router 🧭

```bash
# Install React Router DOM
npm install react-router-dom
```

**What is React Router DOM?** 🤔
- It's a library that enables navigation between different views/pages
- Creates a Single Page Application (SPA) experience
- No full page reloads when navigating

### Step 3: Project Cleanup 🧹

Remove unnecessary default files:

```bash
# Remove these files (we'll create our own)
rm src/App.css
rm src/index.css
```

### Step 4: Create Folder Structure 📁

```bash
# Create folders
mkdir src/pages
mkdir src/components
mkdir src/data

# Create page files
touch src/pages/Home.jsx
touch src/pages/About.jsx
touch src/pages/Blog.jsx
touch src/pages/BlogPost.jsx
touch src/pages/NotFound.jsx

# Create component files
touch src/components/Navbar.jsx
touch src/components/Footer.jsx
touch src/components/BlogCard.jsx
touch src/components/Layout.jsx

# Create data file
touch src/data/blogData.js

# Create CSS files
touch src/App.css
touch src/index.css
```

### Step 5: Start Development Server 🏃

```bash
npm run dev
```

Open browser at: **http://localhost:5173**

---

## 📁 Project Structure

Here's the complete structure we'll build:

```
blog-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   ├── BlogCard.jsx        # Blog post card
│   │   └── Layout.jsx          # Shared layout wrapper
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── About.jsx           # About page
│   │   ├── Blog.jsx            # Blog list page
│   │   ├── BlogPost.jsx        # Individual post page
│   │   └── NotFound.jsx        # 404 error page
│   ├── data/
│   │   └── blogData.js         # Mock blog post data
│   ├── App.jsx                 # Main app with routes
│   ├── App.css                 # Main styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── README.md
```

---

## 💻 Step-by-Step Implementation

Let's build this app step by step, with detailed explanations! 👨‍🏫

### Step 1: Create Mock Blog Data 📚

**File: \`src/data/blogData.js\`**

First, let's create some fake blog posts to work with.

```javascript
// This is our "database" of blog posts
// In a real app, this would come from a backend API

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    author: "Jane Doe",
    date: "2026-01-15",
    category: "Tutorial",
    readTime: "5 min read",
    excerpt: "Learn the fundamentals of React and build your first component. This comprehensive guide covers everything from JSX to state management.",
    content: \`
      <h2>Introduction to React</h2>
      <p>React is a powerful JavaScript library for building user interfaces. Created by Facebook, it has become one of the most popular front-end technologies.</p>

      <h3>Why Choose React?</h3>
      <ul>
        <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state</li>
        <li><strong>Declarative:</strong> Design simple views for each state in your application</li>
        <li><strong>Learn Once, Write Anywhere:</strong> Develop new features without rewriting existing code</li>
      </ul>

      <h3>Your First Component</h3>
      <p>Let's create a simple Hello World component:</p>
      <pre><code>function HelloWorld() {
  return <h1>Hello, World!</h1>;
}</code></pre>

      <p>This is a functional component - just a JavaScript function that returns JSX!</p>

      <h3>Next Steps</h3>
      <p>Now that you understand the basics, try creating more complex components with props and state. Practice is key to mastering React!</p>
    \`,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    author: "John Smith",
    date: "2026-01-12",
    category: "Tutorial",
    readTime: "8 min read",
    excerpt: "Deep dive into React Hooks - useState, useEffect, and more. Master the modern way of writing React components.",
    content: \`
      <h2>What Are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components.</p>

      <h3>useState Hook</h3>
      <p>The useState hook lets you add state to functional components:</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>

      <h3>useEffect Hook</h3>
      <p>useEffect lets you perform side effects in function components:</p>
      <pre><code>useEffect(() => {
  document.title = \\`Count: \\${count}\\`;
}, [count]);</code></pre>

      <h3>Rules of Hooks</h3>
      <ul>
        <li>Only call hooks at the top level</li>
        <li>Only call hooks from React functions</li>
        <li>Custom hooks must start with "use"</li>
      </ul>

      <p>Hooks have revolutionized how we write React components, making code more readable and maintainable.</p>
    \`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
  },
  {
    id: 3,
    title: "React Router: Complete Guide",
    slug: "react-router-complete-guide",
    author: "Sarah Johnson",
    date: "2026-01-10",
    category: "Tutorial",
    readTime: "10 min read",
    excerpt: "Master client-side routing in React. Learn how to create multi-page applications with React Router.",
    content: \`
      <h2>Introduction to React Router</h2>
      <p>React Router enables navigation between different views in your React application without page reloads.</p>

      <h3>Installation</h3>
      <pre><code>npm install react-router-dom</code></pre>

      <h3>Basic Setup</h3>
      <p>Wrap your app with BrowserRouter:</p>
      <pre><code>import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);</code></pre>

      <h3>Defining Routes</h3>
      <p>Use Routes and Route components:</p>
      <pre><code><Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes></code></pre>

      <h3>Navigation</h3>
      <p>Use Link components instead of anchor tags:</p>
      <pre><code><Link to="/about">About</Link></code></pre>

      <p>React Router is essential for building modern single-page applications!</p>
    \`,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800"
  },
  {
    id: 4,
    title: "State Management in React",
    slug: "state-management-in-react",
    author: "Mike Chen",
    date: "2026-01-08",
    category: "Advanced",
    readTime: "12 min read",
    excerpt: "Explore different state management solutions for React applications, from Context API to Redux.",
    content: \`
      <h2>Managing State in React</h2>
      <p>As your application grows, managing state becomes more complex. Let's explore different approaches.</p>

      <h3>Local State (useState)</h3>
      <p>Perfect for component-specific data:</p>
      <pre><code>const [user, setUser] = useState(null);</code></pre>

      <h3>Context API</h3>
      <p>Great for sharing data across many components:</p>
      <pre><code>const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}</code></pre>

      <h3>Redux</h3>
      <p>Powerful state management for large applications with complex state logic.</p>

      <h3>Choosing the Right Solution</h3>
      <ul>
        <li><strong>Small apps:</strong> useState and props</li>
        <li><strong>Medium apps:</strong> Context API</li>
        <li><strong>Large apps:</strong> Redux or Zustand</li>
      </ul>
    \`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    id: 5,
    title: "Building Responsive UIs",
    slug: "building-responsive-uis",
    author: "Emily Davis",
    date: "2026-01-05",
    category: "Design",
    readTime: "7 min read",
    excerpt: "Learn best practices for creating responsive React applications that work on all devices.",
    content: \`
      <h2>Responsive Design in React</h2>
      <p>Creating applications that look great on all devices is crucial in modern web development.</p>

      <h3>Mobile-First Approach</h3>
      <p>Start with mobile styles and scale up:</p>
      <pre><code>/* Mobile styles (default) */
.container {
  padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}</code></pre>

      <h3>Flexbox and Grid</h3>
      <p>Use modern CSS layout techniques:</p>
      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}</code></pre>

      <h3>Responsive Images</h3>
      <p>Use the srcset attribute for optimized images:</p>
      <pre><code><img 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  src="medium.jpg"
  alt="Responsive image"
/></code></pre>

      <p>Responsive design isn't just about screen sizes - it's about creating the best experience for every user!</p>
    \`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
  },
  {
    id: 6,
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
    author: "Alex Turner",
    date: "2026-01-03",
    category: "Advanced",
    readTime: "15 min read",
    excerpt: "Advanced techniques to optimize your React applications for better performance and user experience.",
    content: \`
      <h2>Optimizing React Performance</h2>
      <p>Learn how to make your React applications faster and more efficient.</p>

      <h3>React.memo</h3>
      <p>Prevent unnecessary re-renders:</p>
      <pre><code>const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});</code></pre>

      <h3>useMemo and useCallback</h3>
      <p>Memoize expensive calculations:</p>
      <pre><code>const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>

      <h3>Code Splitting</h3>
      <p>Load components only when needed:</p>
      <pre><code>const LazyComponent = lazy(() => import('./LazyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense></code></pre>

      <h3>Virtual Scrolling</h3>
      <p>Render only visible items in long lists using libraries like react-window.</p>

      <p>Performance optimization is an ongoing process - profile your app and optimize bottlenecks!</p>
    \`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  }
];

// Helper function to get a post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))];
};
```

**What's Here?** 🤔

- **blogPosts array**: Contains 6 sample blog posts with all details
- **Helper functions**: Utility functions to filter and find posts
- **Rich content**: Each post has HTML content, images, metadata

---

### Step 2: Create Global Styles 🎨

**File: \`src/index.css\`**

```css
/* ========== GLOBAL RESET & VARIABLES ========== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Color Palette */
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #ec4899;
  --accent-color: #8b5cf6;

  /* Text Colors */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;

  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-dark: #111827;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;

  /* Transitions */
  --transition: all 0.3s ease;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  line-height: 1.6;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1rem; }
h6 { font-size: 0.875rem; }

p {
  margin-bottom: var(--spacing-sm);
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: var(--transition);
}

a:hover {
  color: var(--primary-dark);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
```

---

### Step 3: Build the Layout Component 🏗️

**File: \`src/components/Layout.jsx\`**

This component wraps all pages and provides consistent structure.

```javascript
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Layout component provides consistent structure for all pages
function Layout() {
  return (
    <div className="app-layout">
      {/* Navbar appears on every page */}
      <Navbar />

      {/* Main content area */}
      <main className="main-content">
        {/* Outlet renders the matched child route */}
        <Outlet />
      </main>

      {/* Footer appears on every page */}
      <Footer />
    </div>
  );
}

export default Layout;
```

**What is \`<Outlet />\`?** 🤔

Think of \`<Outlet />\` like a **picture frame** 🖼️:
- The frame (Navbar + Footer) stays the same
- The picture (page content) changes based on the route
- When you navigate to /home → Home component renders in the Outlet
- When you navigate to /about → About component renders in the Outlet

---

### Step 4: Create the Navigation Bar 🧭

**File: \`src/components/Navbar.jsx\`**

```javascript
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo / Brand */}
          <Link to="/" className="nav-brand">
            📝 ReactBlog
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              {/* NavLink automatically adds 'active' class when route matches */}
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
```

**NavLink vs Link** 🔗

| Feature | Link | NavLink |
|---------|------|---------|
| Basic navigation | ✅ | ✅ |
| Knows if active | ❌ | ✅ |
| Auto-styling | ❌ | ✅ |
| Use case | Regular links | Navigation menus |

**Real-World Analogy:**
- **Link** = A regular road sign (shows direction)
- **NavLink** = A GPS with current location highlighted (shows where you are)

---

### Step 5: Create the Footer Component 👣

**File: \`src/components/Footer.jsx\`**

```javascript
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>📝 ReactBlog</h3>
            <p>Learn React through practical tutorials and guides.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ReactBlog. Built with React & React Router.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

---

### Step 6: Create the Blog Card Component 🎴

**File: \`src/components/BlogCard.jsx\`**

This component displays a summary of each blog post.

```javascript
import { Link } from 'react-router-dom';

// BlogCard receives a post object as props
function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {/* Post Image */}
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <span className="blog-card-category">{post.category}</span>
      </div>

      {/* Post Content */}
      <div className="blog-card-content">
        {/* Post Meta */}
        <div className="blog-card-meta">
          <span className="author">👤 {post.author}</span>
          <span className="date">📅 {post.date}</span>
          <span className="read-time">⏱️ {post.readTime}</span>
        </div>

        {/* Post Title */}
        <h3 className="blog-card-title">
          <Link to={\`/blog/\${post.slug}\`}>
            {post.title}
          </Link>
        </h3>

        {/* Post Excerpt */}
        <p className="blog-card-excerpt">{post.excerpt}</p>

        {/* Read More Link */}
        <Link to={\`/blog/\${post.slug}\`} className="read-more-link">
          Read More →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
```

**Dynamic Links** 🔗

Notice this line:
```javascript
<Link to={\`/blog/\${post.slug}\`}>
```

This creates **dynamic URLs** like:
- \`/blog/getting-started-with-react\`
- \`/blog/understanding-react-hooks\`

Each post has a unique URL based on its slug!

---

### Step 7: Build the Home Page 🏠

**File: \`src/pages/Home.jsx\`**

```javascript
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

function Home() {
  // Get only the first 3 posts for featured section
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to ReactBlog 📝
            </h1>
            <p className="hero-subtitle">
              Learn React through practical tutorials, guides, and best practices.
              From beginner to advanced, we've got you covered!
            </p>
            <div className="hero-buttons">
              <Link to="/blog" className="btn btn-primary">
                Explore Blog
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="featured-posts">
        <div className="container">
          <div className="section-header">
            <h2>Featured Posts ✨</h2>
            <p>Check out our latest and most popular articles</p>
          </div>

          <div className="blog-grid">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/blog" className="btn btn-outline">
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning? 🚀</h2>
            <p>Join thousands of developers learning React</p>
            <Link to="/blog" className="btn btn-primary">
              Start Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
```

**Code Breakdown:** 📝

1. **Import blogPosts data**: Get our mock blog posts
2. **featuredPosts**: Use \`.slice(0, 3)\` to get first 3 posts
3. **Hero Section**: Welcome message with call-to-action buttons
4. **Featured Posts**: Display 3 posts using BlogCard component
5. **map()**: Loop through posts and create a BlogCard for each

---

### Step 8: Build the Blog List Page 📰

**File: \`src/pages/Blog.jsx\`**

```javascript
import { useState } from 'react';
import { blogPosts, getCategories } from '../data/blogData';
import BlogCard from '../components/BlogCard';

function Blog() {
  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get all categories
  const categories = ['All', ...getCategories()];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Blog Posts 📚</h1>
          <p>Explore our collection of React tutorials and guides</p>
        </div>

        {/* Search and Filter */}
        <div className="blog-controls">
          {/* Search Bar */}
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={\`filter-btn \${selectedCategory === category ? 'active' : ''}\`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="no-results">
              <p>😔 No posts found matching your criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>Showing {filteredPosts.length} of {blogPosts.length} posts</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
```

**Advanced Features Here:** 🎯

1. **Search Functionality**: Filter posts by title/excerpt
2. **Category Filter**: Filter by category tags
3. **Dynamic Filtering**: Combine both search and category
4. **No Results Handling**: Show message when no posts match
5. **Results Count**: Display how many posts are shown

**How Filtering Works:**
```javascript
const filteredPosts = blogPosts.filter(post => {
  // Check if post title or excerpt includes search term
  const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());

  // Check if post category matches selected category (or 'All' is selected)
  const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

  // Return true only if BOTH conditions are met
  return matchesSearch && matchesCategory;
});
```

---

### Step 9: Build Individual Blog Post Page 📄

**File: \`src/pages/BlogPost.jsx\`**

This is where React Router really shines - dynamic routes!

```javascript
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug } from '../data/blogData';

function BlogPost() {
  // Get the 'slug' parameter from the URL
  const { slug } = useParams();

  // Navigate programmatically
  const navigate = useNavigate();

  // Find the post with matching slug
  const post = getPostBySlug(slug);

  // If post doesn't exist, show error
  if (!post) {
    return (
      <div className="container">
        <div className="post-not-found">
          <h1>😞 Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
        >
          ← Back
        </button>

        {/* Post Header */}
        <article className="blog-post">
          <header className="post-header">
            <div className="post-category-badge">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>

            <div className="post-meta">
              <span className="author">
                <strong>By:</strong> {post.author}
              </span>
              <span className="date">
                <strong>Published:</strong> {post.date}
              </span>
              <span className="read-time">
                <strong>Read Time:</strong> {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Post Content */}
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Footer */}
          <footer className="post-footer">
            <div className="post-tags">
              <strong>Category:</strong>
              <span className="tag">{post.category}</span>
            </div>

            <Link to="/blog" className="btn btn-outline">
              ← Back to All Posts
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
```

**Key Concepts Explained:** 🔑

#### 1. **useParams Hook**
```javascript
const { slug } = useParams();
```
- Extracts URL parameters
- If URL is \`/blog/getting-started-with-react\`
- Then \`slug\` = \`"getting-started-with-react"\`

**Real-World Analogy:**
Like reading a name tag at a conference - the URL is the badge, useParams reads the name!

#### 2. **useNavigate Hook**
```javascript
const navigate = useNavigate();
navigate(-1); // Go back one page
navigate('/blog'); // Go to specific page
```

#### 3. **dangerouslySetInnerHTML**
```javascript
<div dangerouslySetInnerHTML={{ __html: post.content }} />
```
- Renders HTML strings as actual HTML
- ⚠️ "Dangerous" because it can expose to XSS attacks
- ✅ Safe here because we control the content

---

### Step 10: Create About Page 👤

**File: \`src/pages/About.jsx\`**

```javascript
function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>About ReactBlog 👋</h1>
          <p>Learn more about our mission and team</p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission 🎯</h2>
            <p>
              ReactBlog is dedicated to helping developers master React through 
              practical, hands-on tutorials and real-world examples. We believe 
              in learning by doing, and our content reflects that philosophy.
            </p>
            <p>
              Whether you're just starting with React or looking to level up your 
              skills, we have content tailored to your journey. From basic concepts 
              to advanced patterns, we cover it all.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer 📚</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Practical Tutorials</h3>
                <p>Step-by-step guides with real code examples</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Best Practices</h3>
                <p>Learn industry-standard patterns and techniques</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Advanced Topics</h3>
                <p>Deep dives into complex React concepts</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Beginner Friendly</h3>
                <p>Clear explanations for developers of all levels</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team 👥</h2>
            <p>
              ReactBlog is created and maintained by experienced React developers 
              who are passionate about teaching and sharing knowledge. We're 
              constantly updating our content to reflect the latest React features 
              and best practices.
            </p>
          </section>

          <section className="about-section cta">
            <h2>Join Our Community 🌟</h2>
            <p>
              Follow us on social media and join thousands of developers learning 
              React together. Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="social-links">
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
```

---

### Step 11: Create 404 Not Found Page ❌

**File: \`src/pages/NotFound.jsx\`**

```javascript
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2>Page Not Found 😞</h2>
          <p>
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              Browse Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
```

**Why 404 Page?** 🤔

When users navigate to a route that doesn't exist (like \`/xyz123\`), React Router will match the catch-all route (\`*\`) and show this page.

---

### Step 12: Set Up Routes in App.jsx 🛣️

**File: \`src/App.jsx\`**

This is the heart of routing - where we define all our routes!

```javascript
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Parent Route with Layout */}
      <Route path="/" element={<Layout />}>
        {/* Nested Routes - all share the Layout */}
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="about" element={<About />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
```

**Understanding Route Structure:** 🏗️

```
<Route path="/" element={<Layout />}>        ← Parent route (wrapper)
  <Route index element={<Home />} />         ← / (homepage)
  <Route path="blog" element={<Blog />} />   ← /blog
  <Route path="blog/:slug" />                ← /blog/any-slug-here
  <Route path="about" />                     ← /about
  <Route path="*" />                         ← Any other path (404)
</Route>
```

**Key Points:**

1. **\`index\` route**: Renders at parent's path (\`/\`)
2. **\`:slug\`**: Dynamic parameter (matches any value)
3. **\`*\`**: Catch-all for unmatched routes
4. **Nested routes**: All children render inside \`<Outlet />\` of parent

---

### Step 13: Configure Router in main.jsx 🚀

**File: \`src/main.jsx\`**

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter enables routing in entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

**Why BrowserRouter?** 🤔

It uses HTML5 History API to keep UI in sync with URL:
- Clean URLs: \`/blog\` instead of \`/#/blog\`
- Back/forward browser buttons work
- Bookmarking works correctly

---

### Step 14: Complete Styling 🎨

**File: \`src/App.css\`**

```css
/* ========== LAYOUT ========== */

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Navbar height */
}

/* ========== NAVBAR ========== */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  box-shadow: var(--shadow-md);
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.nav-link.active {
  color: var(--primary-color);
  background: var(--bg-secondary);
  font-weight: 600;
}

/* ========== FOOTER ========== */

.footer {
  background: var(--bg-dark);
  color: white;
  padding: var(--spacing-xl) 0 var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-section h3, .footer-section h4 {
  margin-bottom: var(--spacing-sm);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: var(--spacing-xs);
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

/* ========== HOME PAGE ========== */

.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* ========== BUTTONS ========== */

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition);
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: white;
  color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--bg-secondary);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
}

/* ========== SECTIONS ========== */

.featured-posts, .cta-section {
  padding: var(--spacing-xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

.section-footer {
  text-align: center;
  margin-top: var(--spacing-lg);
}

/* ========== BLOG GRID ========== */

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

/* ========== BLOG CARD ========== */

.blog-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.blog-card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card-category {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}

.blog-card-content {
  padding: var(--spacing-md);
}

.blog-card-meta {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-sm);
}

.blog-card-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.blog-card-title a {
  color: var(--text-primary);
}

.blog-card-title a:hover {
  color: var(--primary-color);
}

.blog-card-excerpt {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.read-more-link {
  color: var(--primary-color);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.read-more-link:hover {
  color: var(--primary-dark);
}

/* ========== BLOG PAGE ========== */

.blog-page {
  padding: var(--spacing-xl) 0;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

.blog-controls {
  margin-bottom: var(--spacing-xl);
}

.search-box {
  margin-bottom: var(--spacing-md);
}

.search-input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid var(--bg-secondary);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.category-filter {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid var(--bg-secondary);
  background: white;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.no-results {
  text-align: center;
  padding: var(--spacing-xl);
}

.no-results p {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
}

.results-count {
  text-align: center;
  color: var(--text-secondary);
  padding-top: var(--spacing-md);
}

/* ========== BLOG POST PAGE ========== */

.blog-post-page {
  padding: var(--spacing-xl) 0;
}

.back-button {
  background: var(--bg-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 500;
  margin-bottom: var(--spacing-lg);
  transition: var(--transition);
}

.back-button:hover {
  background: var(--primary-color);
  color: white;
}

.blog-post {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
}

.post-header {
  margin-bottom: var(--spacing-lg);
}

.post-category-badge {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.post-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.post-meta {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  color: var(--text-secondary);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--bg-secondary);
}

.post-image {
  margin: var(--spacing-lg) 0;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: auto;
  display: block;
}

.post-content {
  line-height: 1.8;
  color: var(--text-primary);
}

.post-content h2 {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.post-content h3 {
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.post-content p {
  margin-bottom: var(--spacing-md);
}

.post-content ul, .post-content ol {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
}

.post-content li {
  margin-bottom: var(--spacing-xs);
}

.post-content pre {
  background: var(--bg-dark);
  color: #e5e7eb;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
}

.post-content code {
  background: var(--bg-secondary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 2px solid var(--bg-secondary);
}

.post-tags {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.tag {
  background: var(--bg-secondary);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

/* ========== ABOUT PAGE ========== */

.about-page {
  padding: var(--spacing-xl) 0;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-section {
  background: var(--bg-primary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-md);
  border: 2px solid var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.feature-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-md);
}

.social-link {
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
}

.social-link:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

/* ========== NOT FOUND PAGE ========== */

.not-found-page {
  padding: var(--spacing-xl) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.not-found-title {
  font-size: 8rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.not-found-content h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.not-found-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-lg);
}

/* ========== CTA SECTION ========== */

.cta-section {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  padding: var(--spacing-xl) 0;
  text-align: center;
  border-radius: var(--radius-lg);
  margin: var(--spacing-xl) 0;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
}

/* ========== RESPONSIVE DESIGN ========== */

@media (max-width: 768px) {
  .nav-links {
    gap: var(--spacing-sm);
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-meta {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .post-footer {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .not-found-title {
    font-size: 5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }

  .nav-brand {
    font-size: 1.25rem;
  }

  .nav-links {
    flex-wrap: wrap;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .blog-post {
    padding: var(--spacing-md);
  }
}
```

---

## 🎓 React Router Concepts Explained

### 1. What is React Router? 🧭

**Simple Definition**: React Router is a library that enables **client-side routing** in React applications. It allows you to navigate between different views without reloading the entire page.

**Traditional Websites vs SPAs:**

| Traditional Website | SPA with React Router |
|---------------------|----------------------|
| Click link → Server sends new HTML → Full page reload | Click link → JavaScript changes view → No reload |
| Slow, visible loading | Fast, smooth transitions |
| Loses application state | Maintains state |

### 2. Core Concepts 🔑

#### BrowserRouter
The wrapper that enables routing in your entire app.

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

**Think of it as:** The GPS system in your car - it needs to be installed (wrapped) around everything to work.

#### Routes & Route
Define which component renders for each URL.

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
</Routes>
```

**Think of it as:** A phone directory - each path (name) matches a component (phone number).

#### Link & NavLink
Navigate without page reload.

```javascript
<Link to="/about">About</Link>
<NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''}>
  Blog
</NavLink>
```

**Think of it as:** Teleportation instead of walking (no reload) - NavLink also knows where you currently are!

#### useParams
Extract URL parameters.

```javascript
// URL: /blog/my-post-slug
const { slug } = useParams();
// slug = "my-post-slug"
```

**Think of it as:** Reading a package label to see what's inside.

#### useNavigate
Programmatically navigate (navigate from code, not clicks).

```javascript
const navigate = useNavigate();
navigate('/blog');        // Go to blog
navigate(-1);             // Go back
navigate('/blog', { replace: true }); // Replace history
```

**Think of it as:** A remote control for navigation.

#### Outlet
Placeholder where child routes render.

```javascript
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />  {/* Child routes render here */}
      <Footer />
    </div>
  );
}
```

**Think of it as:** A picture frame - frame stays same, picture (content) changes.

### 3. Routing Patterns 🎯

#### Nested Routes
Routes within routes, sharing a common layout.

```javascript
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="blog" element={<Blog />} />
</Route>
```

**URL Structure:**
- \`/\` → Shows Layout with Home inside
- \`/blog\` → Shows Layout with Blog inside

#### Dynamic Routes
Routes with variable parts.

```javascript
<Route path="/blog/:slug" element={<BlogPost />} />
<Route path="/users/:userId/posts/:postId" element={<Post />} />
```

**Matches:**
- \`/blog/hello-world\`
- \`/blog/react-tutorial\`
- \`/users/123/posts/456\`

#### Index Routes
Default child route at parent's path.

```javascript
<Route path="dashboard" element={<Dashboard />}>
  <Route index element={<Overview />} />  {/* Shows at /dashboard */}
  <Route path="settings" element={<Settings />} />  {/* Shows at /dashboard/settings */}
</Route>
```

#### Catch-All Routes (404)
Matches any unmatched route.

```javascript
<Route path="*" element={<NotFound />} />
```

**Matches:** Any URL that doesn't match previous routes.

---

## ✅ Best Practices

### 1. Project Organization 📂

```
✅ DO: Separate pages and components
✅ DO: Use meaningful route paths
✅ DO: Keep route configuration in one place

❌ DON'T: Mix routing logic across files
❌ DON'T: Use generic page names
```

### 2. Navigation 🧭

```javascript
✅ DO: Use <Link> for internal navigation
<Link to="/blog">Blog</Link>

✅ DO: Use <NavLink> for navigation menus
<NavLink to="/blog" className={({isActive}) => ...}>

❌ DON'T: Use <a> tags for internal links
<a href="/blog">Blog</a>  // ❌ Causes page reload!
```

### 3. Dynamic Routes 🎯

```javascript
✅ DO: Use descriptive parameter names
<Route path="/blog/:slug" />
<Route path="/users/:userId" />

❌ DON'T: Use generic names
<Route path="/blog/:id" />  // Not descriptive
```

### 4. Code Organization 🗂️

```javascript
✅ DO: Extract shared layouts
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

❌ DON'T: Repeat navbar/footer in every page
```

### 5. Error Handling 🛡️

```javascript
✅ DO: Always have a 404 page
<Route path="*" element={<NotFound />} />

✅ DO: Handle missing data gracefully
if (!post) {
  return <div>Post not found</div>;
}
```

---

## 🐛 Troubleshooting

### Issue: 404 on Refresh in Production

**Problem:** Page works when navigating within app, but shows 404 on refresh.

**Solution:** Configure server to serve index.html for all routes.

**Vite (vite.config.js):**
```javascript
export default {
  server: {
    historyApiFallback: true
  }
}
```

### Issue: Active Link Not Highlighting

**Problem:** NavLink doesn't show active state.

**Solution:** Check className function syntax:

```javascript
// ✅ Correct
<NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>

// ❌ Wrong
<NavLink to="/blog" className="active">
```

### Issue: useParams Returns Undefined

**Problem:** Parameter is undefined.

**Solution:**
1. Check route definition has \`:paramName\`
2. Ensure you're using correct parameter name
3. Verify component is rendered inside the route

```javascript
// Route definition
<Route path="/blog/:slug" element={<BlogPost />} />

// Component usage
const { slug } = useParams();  // Must match :slug
```

### Issue: Link Causes Page Reload

**Problem:** Navigation reloads entire page.

**Solution:** Use \`Link\` from react-router-dom, not regular \`<a>\`:

```javascript
// ✅ Correct
import { Link } from 'react-router-dom';
<Link to="/blog">Blog</Link>

// ❌ Wrong
<a href="/blog">Blog</a>
```

---

## 🎯 What You'll Learn

By completing this project, you will master:

### React Router Skills 🧭
- ✅ Setting up client-side routing
- ✅ Creating nested route structures
- ✅ Using dynamic routes with parameters
- ✅ Implementing navigation with Link and NavLink
- ✅ Programmatic navigation with useNavigate
- ✅ Extracting URL parameters with useParams
- ✅ Creating layouts with Outlet
- ✅ Handling 404 pages

### React Skills ⚛️
- ✅ Component composition and reusability
- ✅ Props drilling and data flow
- ✅ State management with useState
- ✅ Conditional rendering
- ✅ List rendering with map()
- ✅ Event handling
- ✅ Filtering and searching data

### Web Development Skills 🌐
- ✅ Single Page Application (SPA) architecture
- ✅ URL structure and navigation
- ✅ Responsive design patterns
- ✅ CSS Grid and Flexbox
- ✅ Component-based styling
- ✅ User experience best practices

---

## 🚀 Enhancement Ideas

### Level 1: Beginner 🌱
- [ ] Add a contact page with a form
- [ ] Implement dark/light theme toggle
- [ ] Add loading animations between routes
- [ ] Create a breadcrumb navigation
- [ ] Add social share buttons to posts

### Level 2: Intermediate 🌿
- [ ] Implement pagination for blog list
- [ ] Add related posts section
- [ ] Create author profile pages
- [ ] Add search with query parameters
- [ ] Implement comments section (mock data)
- [ ] Add reading progress bar
- [ ] Create tag-based filtering

### Level 3: Advanced 🌳
- [ ] Connect to real API (Contentful, Strapi)
- [ ] Add authentication and protected routes
- [ ] Implement infinite scroll
- [ ] Add markdown support for posts
- [ ] Create admin panel for CRUD operations
- [ ] Add SEO meta tags dynamically
- [ ] Implement server-side rendering (Next.js)

---

## 📚 Additional Resources

### Documentation 📖
- [React Router Official Docs](https://reactrouter.com)
- [React Documentation](https://react.dev)
- [MDN - History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

### Video Tutorials 🎥
- [React Router 6 Complete Guide](https://www.youtube.com)
- [Building Multi-Page Apps](https://www.youtube.com)

### Tools 🛠️
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [React Router DevTools](https://github.com/remix-run/react-router-devtools)

---

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

## 🎉 Congratulations! You Built a Multi-Page Blog! 🎉

**You've mastered React Router and created a professional blog application!**

### Next Steps:
- 📸 Take screenshots for your portfolio
- 🚀 Deploy to Vercel/Netlify/GitHub Pages
- 💼 Add to your resume
- 🔄 Try enhancement ideas
- 🌟 Star this repo if you found it helpful!

---

**Made with ❤️ and React Router** | [Report Bug](https://github.com/yourusername/blog-app/issues) | [Request Feature](https://github.com/yourusername/blog-app/issues)

### Happy Coding! 💻✨

</div>
