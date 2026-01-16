# 🎬 Movie List Component - React Project (Hard Level)

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Level](https://img.shields.io/badge/Level-Hard-red?style=for-the-badge)
![Learning](https://img.shields.io/badge/Learning-Nested_Components_&_Prop_Drilling-purple?style=for-the-badge)

### 🍿 Build a Movie Listing App with Nested Components & Prop Drilling

*Learn how data flows through multiple component levels — like a real-world React app*

[Live Demo](#) | [Report Bug](#) | [Learn More](#)

</div>

---

## 📚 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🧠 What You'll Learn](#-what-youll-learn)
- [🧩 Component Architecture](#-component-architecture)
- [🛠️ Prerequisites](#️-prerequisites)
- [⚡ Getting Started](#-getting-started)
  - [Step 1: Create Project (Vite)](#step-1-create-project-vite)
  - [Step 2: Create Folder Structure](#step-2-create-folder-structure)
  - [Step 3: Add Movie Data](#step-3-add-movie-data)
  - [Step 4: Build Nested Components](#step-4-build-nested-components)
  - [Step 5: Implement Prop Drilling](#step-5-implement-prop-drilling)
  - [Step 6: Styling (Clean UI)](#step-6-styling-clean-ui)
  - [Step 7: Bonus Features (Optional)](#step-7-bonus-features-optional)
- [🎓 Concepts Explained](#-concepts-explained)
- [✨ Best Practices](#-best-practices)
- [🚀 Run Locally](#-run-locally)
- [🎯 Challenges](#-challenges)
- [🐛 Troubleshooting](#-troubleshooting)
- [📖 Resources](#-resources)

---

## 🎯 Project Overview

In this project, you’ll build a **Movie List Component** — a mini movie catalog UI where each movie is rendered as a card, and each card contains nested child components (poster, title, meta info, genres, and actions).

The *main goal* is to practice **nested components** and understand **prop drilling** (passing data through multiple component levels). Prop drilling is a common pattern in React apps, especially before you learn Context or state libraries.

### ✅ Features
- 🎬 Render a list of movies from an array
- 🧱 Use nested components (MovieList → MovieCard → MovieMeta / MovieActions / GenreList)
- 🔁 Use `map()` to render lists
- 🧩 Pass props through multiple levels (**prop drilling**) [web:42][web:45]
- 🔀 Conditional UI (e.g., “Watched” badge)

---

## 🧠 What You'll Learn

### New / Hard Concepts

| Topic | Why it matters | Used in this project |
|------|----------------|----------------------|
| **Nested components** | Real apps are component trees | MovieCard has children |
| **Prop drilling** | Learn how data flows across layers | App → MovieList → MovieCard → MovieActions [web:42] |
| **Callback props** | Let child trigger parent updates | Mark Watched / Like |
| **Lifting state up** | Shared state lives in parent | Watched state in App [web:48] |

### Real-world analogy 🏢

Think of a company:
- **CEO (App)** owns the important decisions (state)
- **Managers (MovieList / MovieCard)** pass instructions down
- **Employees (MovieActions)** do the action, but must report back to CEO

Prop drilling is like the CEO’s message traveling through managers before it reaches the employee.

---

## 🧩 Component Architecture

This is the component tree we’ll build:

```
App
└── MovieList
    ├── MovieCard
    │   ├── MoviePoster
    │   ├── MovieMeta
    │   ├── GenreList
    │   │   └── GenreTag (repeated)
    │   └── MovieActions
    ├── MovieCard
    └── MovieCard
```

### 🧠 Prop drilling path (example)

```
App
  └─ passes onToggleWatched(movieId)
     ↓
MovieList
  └─ passes onToggleWatched(movieId)
     ↓
MovieCard
  └─ passes onToggleWatched(movieId)
     ↓
MovieActions
  └─ user clicks "Watched" → calls onToggleWatched(movieId)
```

---

## 🛠️ Prerequisites

- ✅ Comfortable with **components + props** (Project 1)
- ✅ Comfortable with **map() lists** (Project 2) [web:47]
- ✅ Basic CSS

---

## ⚡ Getting Started

### Step 1: Create Project (Vite)

```bash
npm create vite@latest movie-list-component
cd movie-list-component
npm install
npm run dev
```

Open: `http://localhost:5173/`

---

### Step 2: Create Folder Structure

Inside `src/`, create:

```
src/
├── components/
│   ├── movies/
│   │   ├── MovieList.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MoviePoster.jsx
│   │   ├── MovieMeta.jsx
│   │   ├── GenreList.jsx
│   │   ├── GenreTag.jsx
│   │   └── MovieActions.jsx
│   └── ui/
│       └── Badge.jsx
├── data/
│   └── movies.js
├── styles/
│   ├── globals.css
│   └── movies.css
├── App.jsx
└── main.jsx
```

Why this structure?
- `components/movies` = movie-specific UI
- `components/ui` = generic reusable UI (like Badge)
- `data` = mock data
- `styles` = clean separation of CSS

---

### Step 3: Add Movie Data

Create: `src/data/movies.js`

```js
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    durationMins: 148,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    genres: ["Sci-Fi", "Thriller"],
    isWatched: false,
    isLiked: false,
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    durationMins: 169,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500",
    genres: ["Sci-Fi", "Drama"],
    isWatched: true,
    isLiked: true,
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    durationMins: 152,
    poster: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=500",
    genres: ["Action", "Crime"],
    isWatched: false,
    isLiked: true,
  }
];

export default movies;
```

Tip: We include `isWatched` and `isLiked` so we can practice passing state + callbacks.

---

### Step 4: Build Nested Components

We’ll create small components, then compose them.

#### 4.1 `Badge` UI component

Create: `src/components/ui/Badge.jsx`

```jsx
function Badge({ children, variant = "default" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;
```

#### 4.2 `MoviePoster`

Create: `src/components/movies/MoviePoster.jsx`

```jsx
function MoviePoster({ src, title }) {
  return (
    <div className="movie-poster">
      <img src={src} alt={`${title} poster`} />
    </div>
  );
}

export default MoviePoster;
```

#### 4.3 `MovieMeta`

Create: `src/components/movies/MovieMeta.jsx`

```jsx
import Badge from "../ui/Badge";

function MovieMeta({ year, rating, durationMins, isWatched }) {
  return (
    <div className="movie-meta">
      <div className="movie-meta__row">
        <span>📅 {year}</span>
        <span>⭐ {rating}</span>
        <span>⏱️ {durationMins} min</span>
      </div>

      {isWatched && (
        <div className="movie-meta__row">
          <Badge variant="success">Watched</Badge>
        </div>
      )}
    </div>
  );
}

export default MovieMeta;
```

#### 4.4 `GenreTag` + `GenreList`

Create: `src/components/movies/GenreTag.jsx`

```jsx
function GenreTag({ label }) {
  return <span className="genre-tag">{label}</span>;
}

export default GenreTag;
```

Create: `src/components/movies/GenreList.jsx`

```jsx
import GenreTag from "./GenreTag";

function GenreList({ genres }) {
  return (
    <div className="genre-list">
      {genres.map((g) => (
        <GenreTag key={g} label={g} />
      ))}
    </div>
  );
}

export default GenreList;
```

#### 4.5 `MovieActions` (deep child)

Create: `src/components/movies/MovieActions.jsx`

```jsx
function MovieActions({ movieId, isLiked, isWatched, onToggleLiked, onToggleWatched }) {
  return (
    <div className="movie-actions">
      <button
        className={`btn ${isLiked ? "btn--primary" : "btn--ghost"}`}
        onClick={() => onToggleLiked(movieId)}
      >
        {isLiked ? "💖 Liked" : "🤍 Like"}
      </button>

      <button
        className={`btn ${isWatched ? "btn--success" : "btn--ghost"}`}
        onClick={() => onToggleWatched(movieId)}
      >
        {isWatched ? "✅ Watched" : "👀 Mark Watched"}
      </button>
    </div>
  );
}

export default MovieActions;
```

---

### Step 5: Implement Prop Drilling

Now we connect everything.

#### 5.1 `MovieCard` (parent of nested components)

Create: `src/components/movies/MovieCard.jsx`

```jsx
import MoviePoster from "./MoviePoster";
import MovieMeta from "./MovieMeta";
import GenreList from "./GenreList";
import MovieActions from "./MovieActions";

function MovieCard({ movie, onToggleLiked, onToggleWatched }) {
  return (
    <article className="movie-card">
      <MoviePoster src={movie.poster} title={movie.title} />

      <div className="movie-card__body">
        <h3 className="movie-title">{movie.title}</h3>

        <MovieMeta
          year={movie.year}
          rating={movie.rating}
          durationMins={movie.durationMins}
          isWatched={movie.isWatched}
        />

        <GenreList genres={movie.genres} />

        <MovieActions
          movieId={movie.id}
          isLiked={movie.isLiked}
          isWatched={movie.isWatched}
          onToggleLiked={onToggleLiked}
          onToggleWatched={onToggleWatched}
        />
      </div>
    </article>
  );
}

export default MovieCard;
```

Notice: `MovieCard` receives callbacks and passes them down again → this is part of prop drilling.

#### 5.2 `MovieList` (renders many MovieCard)

Create: `src/components/movies/MovieList.jsx`

```jsx
import MovieCard from "./MovieCard";

function MovieList({ movies, onToggleLiked, onToggleWatched }) {
  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          onToggleLiked={onToggleLiked}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </section>
  );
}

export default MovieList;
```

#### 5.3 `App` holds state (lifting state up)

Create/update: `src/App.jsx`

```jsx
import { useState } from "react";
import MovieList from "./components/movies/MovieList";
import initialMovies from "./data/movies";
import "./styles/globals.css";
import "./styles/movies.css";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleToggleLiked = (movieId) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movieId ? { ...m, isLiked: !m.isLiked } : m
      )
    );
  };

  const handleToggleWatched = (movieId) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movieId ? { ...m, isWatched: !m.isWatched } : m
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Movie List</h1>
        <p>Nested components + prop drilling practice</p>
      </header>

      <MovieList
        movies={movies}
        onToggleLiked={handleToggleLiked}
        onToggleWatched={handleToggleWatched}
      />
    </div>
  );
}

export default App;
```

Why is this “lifting state up”? Because multiple children need to read & update the same movie state, so the source of truth lives in `App` [web:48].

---

### Step 6: Styling (Clean UI)

Create: `src/styles/globals.css`

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(circle at top, #1b1b3a 0%, #0b0b14 70%);
  color: #f5f5f5;
  min-height: 100vh;
}

.app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 16px;
}

.app-header {
  text-align: center;
  margin-bottom: 28px;
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.app-header p {
  opacity: 0.85;
}

.btn {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  cursor: pointer;
  background: transparent;
  color: #fff;
  font-weight: 600;
}

.btn--ghost:hover {
  border-color: rgba(255,255,255,0.35);
}

.btn--primary {
  background: linear-gradient(135deg, #ff4d8d, #ff7a59);
  border: none;
}

.btn--success {
  background: linear-gradient(135deg, #2ed573, #1e90ff);
  border: none;
}

.badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
}

.badge--default {
  background: rgba(255,255,255,0.12);
}

.badge--success {
  background: rgba(46, 213, 115, 0.2);
  border: 1px solid rgba(46, 213, 115, 0.4);
}
```

Create: `src/styles/movies.css`

```css
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}

.movie-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.movie-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,0.22);
}

.movie-poster img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.movie-card__body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movie-title {
  font-size: 1.25rem;
}

.movie-meta__row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  opacity: 0.9;
}

.genre-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.genre-tag {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.14);
  font-weight: 600;
  font-size: 0.85rem;
}

.movie-actions {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

.movie-actions .btn {
  flex: 1;
}
```

---

### Step 7: Bonus Features (Optional)

- Add a search input (filter movies by title)
- Add sort by rating/year
- Add “Only Watched” toggle

These will get *much easier* once you learn state + events more deeply.

---

## 🎓 Concepts Explained

### Nested Components
- Big UIs are built from small reusable pieces.
- MovieCard contains MoviePoster, MovieMeta, GenreList, and MovieActions.

### Prop Drilling
Prop drilling means passing props through intermediate components, even if those components don’t directly use the props [web:42][web:45].

In our app:
- `App` owns state + handlers
- `MovieList` doesn’t use handlers, but must pass them down
- `MovieCard` passes them further down
- `MovieActions` finally uses them

### Lifting State Up
Lifting state up means moving shared state to the closest common parent so multiple components can access it consistently [web:48].

---

## ✨ Best Practices

- ✅ Keep components small and focused (Poster vs Meta vs Actions)
- ✅ Pass IDs to callbacks instead of whole objects (simpler, safer)
- ✅ Use stable keys (`movie.id`) when mapping lists
- ✅ Use semantic elements (`article`, `section`, `header`)
- ✅ Keep data in `/data` and UI in `/components`

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---

## 🐛 Troubleshooting

### “Props is undefined”
- Check you are passing `movies` into `MovieList`
- Check component import paths

### Buttons don’t work
- Ensure handlers are passed through every layer (App → List → Card → Actions)
- Ensure `movieId` is passed correctly

### Console warning about keys
- Confirm you used: `key={m.id}` in `map()`

---

## 📖 Resources

- Prop drilling explained (examples): https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/ [web:42]
- Lifting state up overview: https://www.geeksforgeeks.org/reactjs/lifting-state-up-in-reactjs/ [web:48]

---

<div align="center">

### ⭐ If you learned something, star the repo!

**Built with ❤️ for React learners**

[Back to Top ⬆️](#-movie-list-component---react-project-hard-level)

</div>
