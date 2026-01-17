# 🚀 Day 4: Context API & Performance Optimization

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Learning](https://img.shields.io/badge/Learning-Path-brightgreen?style=for-the-badge)
![Advanced](https://img.shields.io/badge/Level-Intermediate-orange?style=for-the-badge)

Welcome to **Day 4** of your React learning journey! 🎉 Today, we're diving deep into two crucial aspects of React development: managing global state with the Context API and optimizing your application's performance. Get ready to level up your React skills! 💪

---

## 📚 Table of Contents

- [Context API & useContext Hook](#-context-api--usecontext-hook)
- [useReducer for Complex State](#-usereducer-for-complex-state)
- [React.memo and useMemo](#-reactmemo-and-usememo)
- [useCallback Hook](#-usecallback-hook)
- [Lazy Loading & Code Splitting](#-lazy-loading--code-splitting)
- [Error Boundaries](#-error-boundaries)
- [Best Practices & Common Mistakes](#-best-practices--common-mistakes)
- [Learning Tips](#-learning-tips)

---

## 🌍 Context API & useContext Hook

### 🎯 What is Context API?

The **Context API** is React's built-in solution for passing data through the component tree without having to pass props manually at every level. Think of it as a "global state" that components can access directly.

### 🏠 Real-World Analogy

Imagine you're in a large office building:

- **Without Context**: You need to deliver a message from the CEO (top floor) to an intern (ground floor). You have to pass the message through every manager, supervisor, and team lead on every floor—even if they don't need the message!

- **With Context**: The CEO uses the building's PA system. Everyone who needs to hear the message can tune in directly, without involving unnecessary intermediaries.

### 🧠 Deep Dive: How Context Works

Context consists of three main parts:

1. **Context Object**: Created using `React.createContext()`
2. **Provider**: Supplies the data to the component tree
3. **Consumer**: Components that access the data (using `useContext` hook)

#### Architecture Flow:

```
Context Provider (Source of Truth)
        |
        ├── Component A (doesn't use context)
        |     |
        |     └── Component B (consumes context) ✅
        |
        └── Component C (doesn't use context)
              |
              └── Component D (consumes context) ✅
```

### 💻 Step-by-Step Implementation

#### Step 1: Create the Context

```javascript
// ThemeContext.js
import { createContext } from 'react';

// Create context with default value
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});
```

**Explanation**: `createContext()` creates a Context object. The default value is used when a component doesn't have a matching Provider above it in the tree.

#### Step 2: Create the Provider Component

```javascript
// ThemeProvider.js
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // The value object contains all data/functions to share
  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
```

**Explanation**: The Provider component wraps part of your app and makes the context value available to all descendants. The `value` prop contains the data you want to share.

#### Step 3: Wrap Your App with Provider

```javascript
// App.js
import { ThemeProvider } from './ThemeProvider';
import MainContent from './MainContent';

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
```

#### Step 4: Consume Context with useContext

```javascript
// Button.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeButton() {
  // Access context value directly
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Current Theme: {theme}
      Click to Toggle
    </button>
  );
}
```

**Explanation**: `useContext()` hook accepts a Context object and returns the current context value. The component will re-render when the context value changes.

### 🎨 Multiple Contexts Example

```javascript
// Using multiple contexts together
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';
import { LanguageContext } from './LanguageContext';

function ProfileCard() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`profile-${theme}`}>
      <h2>{user.name}</h2>
      <p>Language: {language}</p>
    </div>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Use Context for truly global data (theme, auth, language) | Don't use Context to avoid all prop drilling |
| Keep context values as specific as possible | Don't put all state in one massive context |
| Split contexts by concern (UserContext, ThemeContext) | Don't overuse—causes unnecessary re-renders |
| Use default values for better testing | Don't forget to wrap consumers with Provider |
| Memoize context values to prevent re-renders | Don't create context in component body |

### ⚠️ Common Mistakes

1. **Creating new objects on every render**:
```javascript
// ❌ BAD - Creates new object every render
<ThemeContext.Provider value={{ theme, toggleTheme }}>

// ✅ GOOD - Memoize the value
const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
<ThemeContext.Provider value={value}>
```

2. **Using Context for frequently changing data**:
```javascript
// ❌ BAD - Mouse position changes too frequently
<MouseContext.Provider value={mousePosition}>

// ✅ GOOD - Use local state or specialized libraries
```

---

## 🔄 useReducer for Complex State

### 🎯 What is useReducer?

`useReducer` is a React hook for managing complex state logic. It's an alternative to `useState` when you have state that involves multiple sub-values or when the next state depends on the previous one.

### 🏪 Real-World Analogy

Think of a **shopping cart in an online store**:

- **useState**: Like keeping a simple note—"I have 3 items"
- **useReducer**: Like a cashier with a detailed register—they can ADD items, REMOVE items, UPDATE quantities, APPLY discounts, CLEAR cart, etc., all with clear rules and procedures

### 🧠 Deep Dive: Reducer Pattern

A reducer is a pure function that takes the **current state** and an **action**, then returns a **new state**.

```
(currentState, action) => newState
```

**Core Concepts**:

1. **State**: The current data
2. **Action**: An object describing what happened (must have a `type` property)
3. **Reducer Function**: Contains logic for state updates
4. **Dispatch**: Function to send actions to the reducer

#### Architecture Flow:

```
Component
    |
    | dispatch(action)
    ↓
Reducer Function
    |
    | Processes action
    | Returns new state
    ↓
State Updates
    |
    | Component re-renders
    ↓
Updated UI
```

### 💻 Step-by-Step Implementation

#### Basic Counter Example

```javascript
import { useReducer } from 'react';

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Create reducer function
function counterReducer(state, action) {
  // Use switch statement to handle different action types
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    case 'SET':
      return { count: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// Step 3: Use in component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>
        Set to 100
      </button>
    </div>
  );
}
```

**Explanation**:
- `useReducer` returns `[state, dispatch]`
- `dispatch` sends actions to the reducer
- Actions are objects with a `type` (and optional `payload`)
- The reducer returns a new state based on the action

#### Complex Example: Shopping Cart

```javascript
// Initial state with multiple properties
const initialState = {
  items: [],
  totalPrice: 0,
  itemCount: 0
};

// Reducer with complex logic
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // Item exists, increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + newItem.price,
          itemCount: state.itemCount + 1
        };
      } else {
        // New item, add to cart
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
          totalPrice: state.totalPrice + newItem.price,
          itemCount: state.itemCount + 1
        };
      }
    }

    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      const filteredItems = state.items.filter(item => item.id !== action.payload);

      return {
        ...state,
        items: filteredItems,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
        itemCount: state.itemCount - itemToRemove.quantity
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      const quantityDiff = quantity - item.quantity;

      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
        totalPrice: state.totalPrice + (item.price * quantityDiff),
        itemCount: state.itemCount + quantityDiff
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

// Component using the reducer
function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Shopping Cart ({cart.itemCount} items)</h2>
      <div>
        {cart.items.map(item => (
          <div key={item.id}>
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total: ${cart.totalPrice.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
```

### 🔄 useReducer with Context

Combining `useReducer` with Context creates powerful global state management:

```javascript
// Create context
const CartContext = createContext();

// Provider component
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for easy access
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

// Usage in any component
function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <button onClick={addToCart}>Add to Cart</button>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Use for complex state with multiple sub-values | Don't use for simple toggles or counters |
| Keep reducer functions pure (no side effects) | Don't mutate state directly—return new objects |
| Use descriptive action type names | Don't use generic names like 'UPDATE' |
| Include payload when passing data | Don't perform async operations in reducers |
| Add default case to throw errors | Don't forget to handle all action types |

### 🆚 useState vs useReducer

| Use useState When | Use useReducer When |
|-------------------|---------------------|
| Simple state (boolean, number, string) | Complex state objects |
| Independent state updates | State updates depend on previous state |
| 1-2 state variables | Multiple related state variables |
| Simple logic | Complex update logic |
| Local component state | State shared via Context |

---

## 🎭 React.memo and useMemo

### 🎯 What is React.memo?

`React.memo` is a **Higher Order Component (HOC)** that memoizes a component, preventing unnecessary re-renders when props haven't changed.

### 🎯 What is useMemo?

`useMemo` is a hook that **memoizes a computed value**, recalculating it only when dependencies change.

### 🖼️ Real-World Analogy

**React.memo**: Imagine a portrait artist who painted your picture yesterday. Today, you come back wearing the same clothes, same hairstyle—everything identical. Instead of painting you again, the artist shows you yesterday's painting. That's React.memo!

**useMemo**: Think of a calculator with a memory function. You calculated 2547 × 8392 and saved the result. Every time someone asks for that same calculation, you just recall the saved answer instead of recalculating.

### 🧠 Deep Dive: How Memoization Works

**Problem**: React re-renders components when parent re-renders, even if props haven't changed.

```
Parent State Changes
    ↓
Parent Re-renders
    ↓
ALL Child Components Re-render ❌
(Even if their props didn't change!)
```

**Solution with Memoization**:

```
Parent State Changes
    ↓
Parent Re-renders
    ↓
React.memo Checks Props
    ↓
Props Same? → Skip Re-render ✅
Props Different? → Re-render ✅
```

### 💻 React.memo Step-by-Step

#### Without React.memo (Problem)

```javascript
// Child component
function ExpensiveChild({ name, count }) {
  console.log('ExpensiveChild rendered!');

  // Imagine expensive calculations here
  const result = heavyCalculation();

  return (
    <div>
      <h3>{name}</h3>
      <p>Count: {count}</p>
    </div>
  );
}

// Parent component
function Parent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Parent Count: {parentCount}
      </button>

      {/* This re-renders even when childCount doesn't change! */}
      <ExpensiveChild name="John" count={childCount} />

      <button onClick={() => setChildCount(childCount + 1)}>
        Child Count: {childCount}
      </button>
    </div>
  );
}
```

**Problem**: Clicking "Parent Count" triggers `ExpensiveChild` to re-render even though its props (`name` and `count`) haven't changed!

#### With React.memo (Solution)

```javascript
import { memo } from 'react';

// Wrap component with memo
const ExpensiveChild = memo(function ExpensiveChild({ name, count }) {
  console.log('ExpensiveChild rendered!');

  const result = heavyCalculation();

  return (
    <div>
      <h3>{name}</h3>
      <p>Count: {count}</p>
    </div>
  );
});

// Now clicking "Parent Count" won't re-render ExpensiveChild! ✅
```

**Explanation**: `React.memo` performs a shallow comparison of props. If props are the same, React reuses the last rendered output.

#### Custom Comparison Function

```javascript
const ExpensiveChild = memo(
  function ExpensiveChild({ user, posts }) {
    return (
      <div>
        <h3>{user.name}</h3>
        <p>Posts: {posts.length}</p>
      </div>
    );
  },
  // Custom comparison function
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    // Return false if props are different (re-render)
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.posts.length === nextProps.posts.length
    );
  }
);
```

### 💻 useMemo Step-by-Step

#### Without useMemo (Problem)

```javascript
function SearchResults({ query, items }) {
  // This expensive filtering runs on EVERY render!
  // Even if query and items haven't changed!
  const filteredItems = items.filter(item => {
    // Imagine complex search logic here
    return expensiveSearchAlgorithm(item, query);
  });

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

#### With useMemo (Solution)

```javascript
import { useMemo } from 'react';

function SearchResults({ query, items }) {
  // Memoize the expensive calculation
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => {
      return expensiveSearchAlgorithm(item, query);
    });
  }, [query, items]); // Only recalculate when these change

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

**Explanation**: 
- `useMemo` takes a function and a dependency array
- The function runs only when dependencies change
- The returned value is cached between renders

#### Complex Example: Sorting and Filtering

```javascript
function ProductList({ products, sortBy, filters }) {
  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product => {
      if (filters.minPrice && product.price < filters.minPrice) return false;
      if (filters.maxPrice && product.price > filters.maxPrice) return false;
      if (filters.category && product.category !== filters.category) return false;
      return true;
    });
  }, [products, filters]);

  // Memoize sorted products (depends on filtered products)
  const sortedProducts = useMemo(() => {
    console.log('Sorting products...');
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### 🔗 Combining React.memo with useMemo

```javascript
// Memoized component
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
});

function ProductList({ products }) {
  const [cart, setCart] = useState([]);

  // Memoize the callback to prevent ProductCard re-renders
  const handleAddToCart = useCallback((id) => {
    setCart(prev => [...prev, id]);
  }, []);

  // Memoize expensive calculation
  const totalValue = useMemo(() => {
    return cart.reduce((sum, id) => {
      const product = products.find(p => p.id === id);
      return sum + (product?.price || 0);
    }, 0);
  }, [cart, products]);

  return (
    <div>
      <p>Total Value: ${totalValue}</p>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Use for expensive calculations | Don't memoize everything (adds overhead) |
| Use when component renders with same props often | Don't use for cheap calculations |
| Profile before optimizing | Don't forget dependency arrays |
| Memoize components in lists | Don't rely on useMemo for side effects |
| Use with Context to prevent re-renders | Don't use as a semantic guarantee |

### ⚠️ Common Mistakes

1. **Forgetting dependencies**:
```javascript
// ❌ BAD - Missing dependencies
const filtered = useMemo(() => {
  return items.filter(item => item.price > minPrice);
}, [items]); // Missing minPrice!

// ✅ GOOD
const filtered = useMemo(() => {
  return items.filter(item => item.price > minPrice);
}, [items, minPrice]);
```

2. **Memoizing primitives**:
```javascript
// ❌ BAD - No benefit
const doubled = useMemo(() => count * 2, [count]);

// ✅ GOOD - Just calculate directly
const doubled = count * 2;
```

---

## 🔁 useCallback Hook

### 🎯 What is useCallback?

`useCallback` is a hook that **memoizes functions**, returning the same function reference across renders unless dependencies change. It's like `useMemo` but specifically for functions.

### 📞 Real-World Analogy

Imagine you have a **phone contact list**:

- **Without useCallback**: Every time you open your phone, your friend's contact gets deleted and recreated. The phone number is the same, but it's treated as a "new" contact each time.

- **With useCallback**: Your friend's contact stays in your phone with the same reference. You only update it when something actually changes (like their phone number).

### 🧠 Deep Dive: Why useCallback?

**The Problem**: In JavaScript, functions are objects. Every time a component re-renders, new function instances are created:

```javascript
function Parent() {
  const [count, setCount] = useState(0);

  // New function created on EVERY render! ❌
  const handleClick = () => {
    console.log('Clicked!');
  };

  return <Child onClick={handleClick} />;
}

const Child = memo(({ onClick }) => {
  // This still re-renders because onClick is a "new" function each time!
  return <button onClick={onClick}>Click Me</button>;
});
```

**Why This Matters**:
- React.memo does shallow comparison
- `handleClick` is recreated every render
- New function reference = props changed = Child re-renders
- Memoization is defeated! ❌

### 💻 Step-by-Step Implementation

#### Basic Usage

```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Without useCallback - new function every render ❌
  const handleClickBad = () => {
    console.log('Clicked!');
  };

  // With useCallback - same function reference ✅
  const handleClickGood = useCallback(() => {
    console.log('Clicked!');
  }, []); // Empty deps = function never changes

  // With dependencies
  const handleIncrement = useCallback(() => {
    setCount(count + 1); // Uses count from closure
  }, [count]); // Recreates when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Other State: {otherState}
      </button>
      <Child onClick={handleClickGood} />
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log('Child rendered!');
  return <button onClick={onClick}>Click Me</button>;
});
```

**Explanation**:
- `useCallback` returns a memoized version of the function
- Function only changes if dependencies change
- Prevents unnecessary Child re-renders

#### Advanced Example: With Parameters

```javascript
function TodoList({ todos }) {
  const [filter, setFilter] = useState('all');

  // Memoize delete handler
  const handleDelete = useCallback((id) => {
    // API call or state update
    console.log(`Deleting todo ${id}`);
    deleteTodoAPI(id);
  }, []); // No dependencies needed

  // Memoize update handler
  const handleUpdate = useCallback((id, newText) => {
    console.log(`Updating todo ${id} to: ${newText}`);
    updateTodoAPI(id, newText);
  }, []); // No dependencies needed

  // Memoize filtered todos
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <div>
      <FilterButtons filter={filter} setFilter={setFilter} />
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

// Memoized component won't re-render unnecessarily
const TodoItem = memo(({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
});
```

### 🆚 useCallback vs useMemo

```javascript
// useCallback - Memoizes the FUNCTION itself
const handleClick = useCallback(() => {
  doSomething();
}, [dependency]);

// Equivalent to:
const handleClick = useMemo(() => {
  return () => {
    doSomething();
  };
}, [dependency]);

// useMemo - Memoizes the RETURN VALUE
const result = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);
```

**Key Difference**:
- `useCallback(fn, deps)` = `useMemo(() => fn, deps)`
- useCallback is syntactic sugar for memoizing functions

### 🔧 Practical Example: Event Handlers with State

#### Problem with Stale Closures

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ BAD - Stale closure issue
  const handleAlert = useCallback(() => {
    setTimeout(() => {
      alert(`Count is: ${count}`); // Uses stale count!
    }, 3000);
  }, []); // Empty deps = count from initial render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleAlert}>Show Count (in 3s)</button>
    </div>
  );
}
// Click Increment 5 times, then Show Count → Alert shows "0" ❌
```

#### Solution 1: Include in Dependencies

```javascript
// ✅ GOOD - But recreates function on every count change
const handleAlert = useCallback(() => {
  setTimeout(() => {
    alert(`Count is: ${count}`);
  }, 3000);
}, [count]); // Function recreates when count changes
```

#### Solution 2: Use Functional Updates

```javascript
// ✅ BETTER - No stale closures, stable function
const handleAlert = useCallback(() => {
  setTimeout(() => {
    setCount(currentCount => {
      alert(`Count is: ${currentCount}`);
      return currentCount; // Don't actually update
    });
  }, 3000);
}, []); // Empty deps, no stale closure!
```

#### Solution 3: Use Ref

```javascript
const [count, setCount] = useState(0);
const countRef = useRef(count);

// Keep ref updated
useEffect(() => {
  countRef.current = count;
}, [count]);

// ✅ BEST - Stable function, always current value
const handleAlert = useCallback(() => {
  setTimeout(() => {
    alert(`Count is: ${countRef.current}`);
  }, 3000);
}, []); // Empty deps, ref always has current value
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Use when passing functions to memoized children | Don't use for functions not passed as props |
| Use with event handlers in optimized components | Don't overuse—it has its own cost |
| Combine with React.memo for best results | Don't forget to include dependencies |
| Use for functions in dependency arrays | Don't use for functions called once per render |
| Use in custom hooks that return functions | Don't assume it improves performance automatically |

### 📊 Performance Impact

```javascript
// Scenario: List of 1000 items
function ItemList({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  // ❌ Without useCallback - 1000 components re-render on ANY parent update
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  // ✅ With useCallback - Only changed item re-renders
  const handleSelectOptimized = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onSelect={handleSelectOptimized}
          isSelected={item.id === selectedId}
        />
      ))}
    </div>
  );
}

const ListItem = memo(({ item, onSelect, isSelected }) => {
  console.log(`Rendering item ${item.id}`);
  return (
    <div
      onClick={() => onSelect(item.id)}
      style={{ background: isSelected ? 'lightblue' : 'white' }}
    >
      {item.name}
    </div>
  );
});
```

---

## 🚀 Lazy Loading & Code Splitting

### 🎯 What is Lazy Loading?

**Lazy loading** is a technique where you load components or resources only when they're needed, rather than loading everything upfront. This reduces initial bundle size and improves performance.

### 🎯 What is Code Splitting?

**Code splitting** breaks your application into smaller chunks that can be loaded on demand, rather than one massive bundle.

### 📦 Real-World Analogy

Imagine you're going to a **buffet restaurant**:

- **Without Lazy Loading**: The chef prepares ALL dishes (appetizers, main courses, desserts, drinks) before you even arrive. You might only want pizza, but everything is ready and taking up space.

- **With Lazy Loading**: The chef prepares dishes as you order them. You want pizza? They make pizza. You want dessert? They make it when you're ready. Everything else stays in the fridge until needed.

**Code Splitting = Kitchen Stations**: Instead of one chef making everything (one big file), you have separate stations—pizza station, salad station, dessert station (separate chunks). Each loads independently.

### 🧠 Deep Dive: How Lazy Loading Works

#### Build Process Without Code Splitting:

```
All Code → Webpack → main.bundle.js (5 MB) ❌
                     ↓
                User Downloads 5 MB
                     ↓
                Slow Initial Load!
```

#### Build Process With Code Splitting:

```
Code → Webpack → main.bundle.js (500 KB) ✅
                ├── dashboard.chunk.js (1 MB)
                ├── admin.chunk.js (800 KB)
                └── profile.chunk.js (600 KB)
                     ↓
User Downloads 500 KB initially
Loads other chunks only when navigating to those routes!
```

### 💻 Step-by-Step Implementation

#### Basic React.lazy()

```javascript
import { lazy, Suspense } from 'react';

// ❌ Normal import - loads immediately
import Dashboard from './Dashboard';

// ✅ Lazy import - loads when needed
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDashboard(true)}>
        Load Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<div>Loading Dashboard...</div>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}
```

**Explanation**:
- `lazy()` takes a function that returns a dynamic `import()`
- Component is only loaded when rendered
- `<Suspense>` wraps lazy components and shows fallback while loading

#### Route-Based Code Splitting

```javascript
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

**Benefits**:
- Each route loads only when visited
- Reduced initial bundle size
- Faster time to interactive

#### Advanced: Multiple Suspense Boundaries

```javascript
function App() {
  return (
    <div>
      {/* Header loads immediately */}
      <Header />

      {/* Main content with its own loading state */}
      <Suspense fallback={<div>Loading main content...</div>}>
        <MainContent />
      </Suspense>

      {/* Sidebar with its own loading state */}
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>

      {/* Footer loads immediately */}
      <Footer />
    </div>
  );
}

const MainContent = lazy(() => import('./MainContent'));
const Sidebar = lazy(() => import('./Sidebar'));
```

**Benefits**:
- Different parts load independently
- Better user experience with granular loading states
- Critical content can load first

#### Named Exports with Lazy Loading

```javascript
// ❌ Doesn't work - lazy() expects default export
const { Button } = lazy(() => import('./components'));

// ✅ Solution 1: Re-export as default
// components/Button/index.js
export { default } from './Button';

// App.js
const Button = lazy(() => import('./components/Button'));

// ✅ Solution 2: Create wrapper component
const Button = lazy(() =>
  import('./components').then(module => ({ default: module.Button }))
);
```

### 🎨 Enhanced Loading States

```javascript
import { lazy, Suspense, useState } from 'react';

const HeavyComponent = lazy(() => 
  // Simulate slow network
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./HeavyComponent'));
    }, 2000);
  })
);

function LoadingFallback() {
  return (
    <div className="loading-fallback">
      <div className="skeleton-loader">
        <div className="skeleton-header"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  );
}

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Load Component
      </button>

      {showComponent && (
        <Suspense fallback={<LoadingFallback />}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
```

### 🔧 Preloading Components

```javascript
// Preload component before user navigates
const AdminPanel = lazy(() => import('./AdminPanel'));

function Navigation() {
  // Preload on hover
  const handleMouseEnter = () => {
    // Triggers the import
    import('./AdminPanel');
  };

  return (
    <nav>
      <Link 
        to="/admin" 
        onMouseEnter={handleMouseEnter}
      >
        Admin Panel
      </Link>
    </nav>
  );
}
```

### 📦 Dynamic Imports for Non-Components

```javascript
// Lazy load heavy libraries
function ChartComponent({ data }) {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    // Dynamically import chart library
    import('chart.js').then(chartModule => {
      setChart(() => chartModule.Chart);
    });
  }, []);

  if (!Chart) {
    return <div>Loading chart...</div>;
  }

  return <Chart data={data} />;
}

// Lazy load utilities
async function processData(data) {
  // Only load when needed
  const { heavyProcessor } = await import('./heavyProcessor');
  return heavyProcessor(data);
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Split code at route level | Don't split every single component |
| Use for heavy third-party libraries | Don't lazy load components above the fold |
| Provide meaningful loading states | Don't show blank screens while loading |
| Preload critical routes on hover | Don't split tiny components |
| Use Suspense boundaries strategically | Don't create too many small chunks |

### 📊 Performance Impact

```javascript
// Example: E-commerce Site

// ❌ Without Code Splitting
// Initial Bundle: 2.5 MB
// Time to Interactive: 8 seconds

// ✅ With Code Splitting
// Initial Bundle: 400 KB (Home page only)
// Time to Interactive: 1.5 seconds
// Other chunks load on demand:
//   - Product Page: 300 KB
//   - Checkout: 250 KB
//   - Admin Panel: 800 KB
//   - Reviews: 150 KB

const ProductPage = lazy(() => import('./pages/ProductPage'));
const Checkout = lazy(() => import('./pages/Checkout'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const Reviews = lazy(() => import('./components/Reviews'));

// Result: 80% faster initial load! 🚀
```

---

## 🛡️ Error Boundaries

### 🎯 What are Error Boundaries?

**Error Boundaries** are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.

### 🚨 Real-World Analogy

Think of **circuit breakers in your home**:

- **Without Error Boundaries**: One faulty appliance (component error) causes the entire house to lose power (app crashes).

- **With Error Boundaries**: The circuit breaker isolates the problem. That one room loses power, but the rest of your house works fine. You can still use your kitchen even if the bedroom circuit failed.

### 🧠 Deep Dive: The Error Problem in React

#### What Happens Without Error Boundaries?

```
Component Tree:
App
├── Header ✅
├── Sidebar ✅
└── MainContent
    ├── UserProfile
    └── PostList ❌ (Error occurs here)

Result: Entire app shows blank white screen! 💥
```

#### With Error Boundaries:

```
Component Tree:
App
├── Header ✅ (Still works!)
├── Sidebar ✅ (Still works!)
└── <ErrorBoundary>
    └── MainContent ❌
        ↓
    Fallback UI: "Something went wrong" ✅

Result: App continues working, only affected section shows error! 🛡️
```

### 💻 Step-by-Step Implementation

#### Basic Error Boundary Class Component

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // Called when error is thrown
  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  // Called after error is caught
  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);

    // You can also log to services like Sentry
    // logErrorToService(error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="error-container">
          <h1>😔 Oops! Something went wrong.</h1>
          <p>We're sorry for the inconvenience.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    // Normal render
    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Explanation**:
- Error Boundaries must be **class components** (hooks can't catch errors yet)
- `getDerivedStateFromError()`: Updates state to show fallback
- `componentDidCatch()`: Logs error details

#### Usage in App

```javascript
function App() {
  return (
    <div>
      <Header />

      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>

      <Footer />
    </div>
  );
}
```

#### Advanced Error Boundary with Details

```javascript
class DetailedErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const errorCount = this.state.errorCount + 1;

    this.setState({
      error,
      errorInfo,
      errorCount
    });

    // Log to error tracking service
    this.logError(error, errorInfo);

    // Too many errors? Alert admins
    if (errorCount > 5) {
      this.alertAdmins(error);
    }
  }

  logError = (error, errorInfo) => {
    // Send to Sentry, LogRocket, etc.
    console.log('Logging error:', {
      message: error.toString(),
      stack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });
  };

  alertAdmins = (error) => {
    // Send alert to admin team
    console.log('CRITICAL: Multiple errors detected!');
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>🚨 Application Error</h1>
          <h2>{this.state.error && this.state.error.toString()}</h2>

          {/* Show details in development */}
          {process.env.NODE_ENV === 'development' && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>Error Details</summary>
              {this.state.error && this.state.error.stack}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          )}

          <div className="error-actions">
            <button onClick={this.handleReset}>
              Try Again
            </button>
            <button onClick={() => window.location.href = '/'}>
              Go Home
            </button>
            <button onClick={() => window.location.reload()}>
              Reload Page
            </button>
          </div>

          <p>Error Count: {this.state.errorCount}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 🎯 Multiple Error Boundaries Strategy

```javascript
function App() {
  return (
    <div className="app">
      {/* Critical UI - No error boundary, must always work */}
      <Header />
      <Navigation />

      {/* Route-level error boundaries */}
      <Routes>
        <Route path="/" element={
          <ErrorBoundary fallback={<HomeError />}>
            <HomePage />
          </ErrorBoundary>
        } />

        <Route path="/dashboard" element={
          <ErrorBoundary fallback={<DashboardError />}>
            <Dashboard />
          </ErrorBoundary>
        } />

        <Route path="/profile" element={
          <ErrorBoundary fallback={<ProfileError />}>
            <ProfilePage />
          </ErrorBoundary>
        } />
      </Routes>

      {/* Component-level error boundary */}
      <aside>
        <ErrorBoundary fallback={<div>Sidebar unavailable</div>}>
          <Sidebar />
        </ErrorBoundary>
      </aside>

      <Footer />
    </div>
  );
}
```

### 🔄 Custom Fallback Components

```javascript
// Simple fallback
function SimpleFallback() {
  return (
    <div className="error-fallback">
      <p>😔 Something went wrong</p>
    </div>
  );
}

// Detailed fallback
function DetailedFallback({ error, resetError }) {
  return (
    <div className="detailed-error">
      <h2>Application Error</h2>
      <p>{error.message}</p>
      <button onClick={resetError}>Reset</button>
    </div>
  );
}

// Custom error boundary with props
class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback component
      const FallbackComponent = this.props.fallback;
      return (
        <FallbackComponent 
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

// Usage
<CustomErrorBoundary 
  fallback={DetailedFallback}
  onError={(error, errorInfo) => logToSentry(error, errorInfo)}
>
  <MyComponent />
</CustomErrorBoundary>
```

### ⚠️ What Error Boundaries DON'T Catch

Error Boundaries do **NOT** catch errors in:

1. **Event handlers** (use try-catch)
```javascript
// ❌ Error boundary won't catch this
function MyComponent() {
  const handleClick = () => {
    throw new Error('Button error!');
  };

  return <button onClick={handleClick}>Click</button>;
}

// ✅ Use try-catch in event handlers
function MyComponent() {
  const handleClick = () => {
    try {
      riskyOperation();
    } catch (error) {
      console.error('Caught error:', error);
      showErrorToUser(error);
    }
  };

  return <button onClick={handleClick}>Click</button>;
}
```

2. **Asynchronous code** (use try-catch)
```javascript
// ❌ Error boundary won't catch this
function MyComponent() {
  useEffect(() => {
    fetchData().then(data => {
      throw new Error('Async error!');
    });
  }, []);

  return <div>Content</div>;
}

// ✅ Use try-catch for async errors
function MyComponent() {
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
      }
    }
    loadData();
  }, []);

  return <div>Content</div>;
}
```

3. **Server-side rendering**
4. **Errors in the error boundary itself**

### 🎨 Complete Example: Error Boundary with Retry Logic

```javascript
class ResilientErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });

    // Auto-retry logic
    if (this.state.retryCount < 3) {
      setTimeout(() => {
        this.handleRetry();
      }, 2000);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    });
  };

  render() {
    const { hasError, error, retryCount } = this.state;
    const { maxRetries = 3 } = this.props;

    if (hasError) {
      if (retryCount < maxRetries) {
        return (
          <div className="error-retry">
            <p>⏳ An error occurred. Retrying... (Attempt {retryCount}/{maxRetries})</p>
          </div>
        );
      }

      return (
        <div className="error-final">
          <h2>😔 Unable to Load Component</h2>
          <p>{error && error.toString()}</p>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ResilientErrorBoundary maxRetries={3}>
  <UnreliableComponent />
</ResilientErrorBoundary>
```

### ✅ Do's and ❌ Don'ts

| ✅ Do's | ❌ Don'ts |
|---------|-----------|
| Use multiple error boundaries for isolation | Don't wrap every single component |
| Provide helpful fallback UI | Don't show generic "Error" messages |
| Log errors to monitoring services | Don't ignore error information |
| Use try-catch for event handlers | Don't rely on error boundaries for async errors |
| Test error boundaries thoroughly | Don't forget error boundaries in production |

### 🔧 Integration with Error Monitoring

```javascript
import * as Sentry from '@sentry/react';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to Sentry
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });

    this.setState({ hasError: true });
  }

  // ... rest of component
}

// Or use Sentry's built-in error boundary
import { ErrorBoundary } from '@sentry/react';

<ErrorBoundary fallback={<ErrorFallback />} showDialog>
  <App />
</ErrorBoundary>
```

---

## 🎯 Best Practices & Common Mistakes

### 🌟 Best Practices

#### 1. Context API
- ✅ Split contexts by domain (UserContext, ThemeContext, etc.)
- ✅ Memoize context values to prevent unnecessary re-renders
- ✅ Create custom hooks for context consumption
- ✅ Use Context for truly global state

#### 2. useReducer
- ✅ Use descriptive action type names (ADD_TODO, not UPDATE)
- ✅ Keep reducers pure (no side effects)
- ✅ Normalize complex state structures
- ✅ Combine with Context for global state management

#### 3. Performance Optimization
- ✅ Profile before optimizing (use React DevTools Profiler)
- ✅ Memoize expensive calculations with useMemo
- ✅ Memoize callbacks passed to children with useCallback
- ✅ Use React.memo for components that render with same props often

#### 4. Code Splitting
- ✅ Split at route level first
- ✅ Lazy load heavy third-party libraries
- ✅ Provide meaningful loading states
- ✅ Preload critical routes on user interaction

#### 5. Error Boundaries
- ✅ Use multiple boundaries for isolation
- ✅ Provide helpful error messages
- ✅ Log errors to monitoring services
- ✅ Test error scenarios thoroughly

### ❌ Common Mistakes

#### 1. Context Overuse
```javascript
// ❌ BAD - Everything in one context
const AppContext = createContext({
  user,
  theme,
  language,
  notifications,
  cart,
  products
});

// ✅ GOOD - Separate contexts
const UserContext = createContext(user);
const ThemeContext = createContext(theme);
const CartContext = createContext(cart);
```

#### 2. Forgetting Dependencies
```javascript
// ❌ BAD - Missing dependencies
const filteredItems = useMemo(() => {
  return items.filter(item => item.price > minPrice);
}, [items]); // Missing minPrice!

// ✅ GOOD
const filteredItems = useMemo(() => {
  return items.filter(item => item.price > minPrice);
}, [items, minPrice]);
```

#### 3. Premature Optimization
```javascript
// ❌ BAD - Memoizing everything
const a = useMemo(() => count * 2, [count]);
const b = useMemo(() => count + 1, [count]);
const c = useCallback(() => console.log(count), [count]);

// ✅ GOOD - Only memoize expensive operations
const a = count * 2; // Cheap calculation
const b = count + 1; // Cheap calculation
const expensiveResult = useMemo(() => {
  return heavyCalculation(largeDataset);
}, [largeDataset]); // Expensive - worth memoizing
```

#### 4. Mutating State in Reducers
```javascript
// ❌ BAD - Mutating state
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push(action.payload); // Mutation!
      return state;
  }
}

// ✅ GOOD - Return new objects
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
  }
}
```

#### 5. Not Using Error Boundaries
```javascript
// ❌ BAD - No error boundaries
function App() {
  return (
    <div>
      <Header />
      <MainContent /> {/* If this crashes, entire app dies! */}
      <Footer />
    </div>
  );
}

// ✅ GOOD - Protected with error boundary
function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
```

---

## 💡 Learning Tips

### 🎓 For Beginners

1. **Master the Basics First**: Make sure you're comfortable with useState and useEffect before diving into Context and useReducer.

2. **Don't Optimize Prematurely**: Build your feature first, then optimize if you notice performance issues. Use React DevTools Profiler to identify bottlenecks.

3. **One Concept at a Time**: Don't try to use Context + useReducer + useMemo all at once. Learn each independently first.

4. **Console.log is Your Friend**: Add console logs to understand when components re-render:
```javascript
function MyComponent() {
  console.log('MyComponent rendered!');
  // ...
}
```

5. **Start Small**: Create simple examples to understand concepts before building complex features.

### 🚀 Practice Projects

1. **Theme Switcher**: Use Context API to implement dark/light theme switching
2. **Todo App with useReducer**: Build a todo app using useReducer for state management
3. **Optimized List**: Create a list of 1000 items and optimize with React.memo and useCallback
4. **Multi-Route App**: Build an app with lazy loading for different routes
5. **Resilient Component**: Create a component with error boundaries and fallback UI

### 📚 Further Learning

- **React DevTools**: Install and learn to use the Profiler tab
- **Performance Monitoring**: Experiment with React's built-in performance tools
- **Real-World Apps**: Study open-source React projects on GitHub
- **Official Docs**: Read React's official documentation (react.dev)

### 🎯 Mental Models

**Context API**: Think "global broadcasting system"
**useReducer**: Think "state machine with rules"
**Memoization**: Think "smart caching"
**Lazy Loading**: Think "load on demand"
**Error Boundaries**: Think "safety nets"

---

## 🎉 Congratulations!

You've completed Day 4 of your React learning journey! Today you learned:

- ✅ Context API for global state management
- ✅ useReducer for complex state logic
- ✅ Performance optimization with React.memo, useMemo, and useCallback
- ✅ Lazy loading and code splitting for better performance
- ✅ Error boundaries for resilient applications

### 🔜 Next Steps

- Practice building projects using these concepts
- Profile your applications for performance bottlenecks
- Explore state management libraries (Redux, Zustand, Jotai)
- Learn about React Server Components
- Dive into advanced patterns and architectures

Keep coding, keep learning, and most importantly—have fun! 🚀

---

## 📖 Quick Reference

### Context API
```javascript
const MyContext = createContext(defaultValue);
<MyContext.Provider value={value}>{children}</MyContext.Provider>
const value = useContext(MyContext);
```

### useReducer
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION_TYPE', payload: data });
```

### Memoization
```javascript
const MemoComponent = memo(Component);
const memoValue = useMemo(() => compute(), [deps]);
const memoCallback = useCallback(() => {}, [deps]);
```

### Lazy Loading
```javascript
const Component = lazy(() => import('./Component'));
<Suspense fallback={<Loading />}><Component /></Suspense>
```

### Error Boundary
```javascript
class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, errorInfo) { /* log error */ }
  render() { return this.state.hasError ? <Fallback /> : this.props.children; }
}
```

---

**Happy Coding! 💻✨**

*Remember: Great developers aren't born—they're built, one day at a time!*
