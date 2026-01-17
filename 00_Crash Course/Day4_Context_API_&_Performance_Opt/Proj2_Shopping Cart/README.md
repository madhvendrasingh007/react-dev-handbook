# 🛒 Shopping Cart System - Global State with Context & useReducer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A fully functional e-commerce shopping cart built with React, demonstrating **Context API**, **useReducer**, and **complex state management**. Perfect for learning intermediate React patterns! 🚀

---

## 📸 Project Preview

```
┌──────────────────────────────────────────────────────┐
│  🛒 React Shop                     Cart: 3 | $299.97 │
├──────────────────────────────────────────────────────┤
│                                                      │
│  🎧 Products                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   Laptop    │  │  Headphones │  │   Mouse     │ │
│  │   $999.99   │  │   $79.99    │  │   $29.99    │ │
│  │ ⭐⭐⭐⭐⭐  │  │  ⭐⭐⭐⭐    │  │  ⭐⭐⭐⭐⭐  │ │
│  │ [Add to 🛒] │  │ [Add to 🛒] │  │ [Add to 🛒] │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                      │
│  🛒 Your Cart (3 items)                              │
│  ┌────────────────────────────────────────────────┐ │
│  │ Laptop      x1    $999.99  [-] [+] [Remove]   │ │
│  │ Headphones  x2    $159.98  [-] [+] [Remove]   │ │
│  │ Mouse       x1     $29.99  [-] [+] [Remove]   │ │
│  ├────────────────────────────────────────────────┤ │
│  │ Subtotal:                           $1,189.96  │ │
│  │ Tax (10%):                            $119.00  │ │
│  │ Total:                              $1,308.96  │ │
│  │                    [Clear Cart] [Checkout] 💳  │ │
│  └────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

---

## 🎯 What You'll Learn

This intermediate project teaches you:

- ✅ **Context API** - Managing global cart state across components
- ✅ **useReducer Hook** - Handling complex state logic with actions
- ✅ **Reducer Pattern** - Organizing state updates professionally
- ✅ **Action Types** - Using constants for maintainable code
- ✅ **Complex State** - Managing arrays, calculations, and derived state
- ✅ **Custom Hooks** - Creating reusable cart functionality
- ✅ **Component Composition** - Building modular, reusable components
- ✅ **Real-World Patterns** - E-commerce industry-standard practices

---

## 📚 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Step 1: Create React Project](#-step-1-create-react-project-with-vite)
3. [Step 2: Project Structure Overview](#-step-2-project-structure-overview)
4. [Step 3: Create Cart Context with useReducer](#-step-3-create-cart-context-with-usereducer)
5. [Step 4: Create Components](#-step-4-create-components)
6. [Step 5: Add Styling](#-step-5-add-styling)
7. [Step 6: Test Your App](#-step-6-test-your-app)
8. [Understanding useReducer vs useState](#-understanding-usereducer-vs-usestate)
9. [React Concepts Deep Dive](#-react-concepts-deep-dive)
10. [Best Practices & Patterns](#-best-practices--patterns)
11. [Troubleshooting](#-troubleshooting)
12. [Enhancement Ideas](#-enhancement-ideas)

---

## 🔧 Prerequisites

Before starting, ensure you have:

- ✅ **Node.js** (v14+) - [Download](https://nodejs.org/)
- ✅ **Code Editor** - VS Code recommended
- ✅ **Basic React Knowledge** - Components, Props, useState
- ✅ **Understanding of Context API** (from previous project)

### Check Your Setup:
```bash
node --version  # Should show v14 or higher
npm --version   # Should show v6 or higher
```

---

## 🚀 Step 1: Create React Project with Vite

### 1.1 Create New Project

```bash
# Create project
npm create vite@latest shopping-cart-app -- --template react

# Navigate to project folder
cd shopping-cart-app

# Install dependencies
npm install
```

### 1.2 Test Initial Setup

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173/` - You should see the default Vite page.

✅ **Great!** Now let's build our shopping cart!

---

## 📁 Step 2: Project Structure Overview

Let's organize our project professionally:

```
shopping-cart-app/
├── src/
│   ├── context/
│   │   ├── CartContext.jsx          # Cart Context & useReducer
│   │   └── cartReducer.js           # Reducer logic
│   ├── components/
│   │   ├── Header.jsx               # App header with cart info
│   │   ├── Header.css
│   │   ├── ProductList.jsx          # Display all products
│   │   ├── ProductList.css
│   │   ├── ProductCard.jsx          # Individual product card
│   │   ├── ProductCard.css
│   │   ├── Cart.jsx                 # Shopping cart display
│   │   ├── Cart.css
│   │   ├── CartItem.jsx             # Individual cart item
│   │   └── CartItem.css
│   ├── data/
│   │   └── products.js              # Product data
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

**Why This Structure?** 🤔
- **context/** - Centralized state management
- **components/** - Reusable UI pieces
- **data/** - Mock data (like a database)
- **Separation of concerns** - Each file has ONE job

---

## 🎨 Step 3: Create Cart Context with useReducer

This is the heart of our app! Let's build it step-by-step.

### 3.1 Create Action Types

First, create `src/context/cartActions.js`:

```javascript
// Action type constants
// Using constants prevents typos and makes refactoring easier!

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
```

### 🧑‍🏫 **Teacher's Explanation:**

**What are Action Types?**
- They're like **commands** you give to your cart
- Instead of writing `'add_to_cart'` everywhere (typo prone!), we use constants
- Makes code easier to maintain and understand

**Real-World Analogy:** 🎮
Think of it like a TV remote:
- `ADD_TO_CART` = "Volume Up" button
- `REMOVE_FROM_CART` = "Volume Down" button
- Each button does ONE specific thing!

---

### 3.2 Create Cart Reducer

Create `src/context/cartReducer.js`:

```javascript
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from './cartActions'

// Initial state of our cart
export const initialCartState = {
  items: [],           // Array of cart items
  totalItems: 0,       // Total number of items
  totalPrice: 0        // Total price of all items
}

// Helper function to calculate totals
const calculateTotals = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return { totalItems, totalPrice }
}

// THE REDUCER FUNCTION
// Takes current state and action, returns new state
export const cartReducer = (state, action) => {
  switch (action.type) {

    // ==================== ADD TO CART ====================
    case ADD_TO_CART: {
      const newItem = action.payload

      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        item => item.id === newItem.id
      )

      let updatedItems

      if (existingItemIndex >= 0) {
        // Item exists - increase quantity
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
      } else {
        // New item - add to cart with quantity 1
        updatedItems = [...state.items, { ...newItem, quantity: 1 }]
      }

      const { totalItems, totalPrice } = calculateTotals(updatedItems)

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice
      }
    }

    // ==================== REMOVE FROM CART ====================
    case REMOVE_FROM_CART: {
      const productId = action.payload

      // Filter out the item to remove
      const updatedItems = state.items.filter(item => item.id !== productId)
      const { totalItems, totalPrice } = calculateTotals(updatedItems)

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice
      }
    }

    // ==================== INCREMENT QUANTITY ====================
    case INCREMENT_QUANTITY: {
      const productId = action.payload

      const updatedItems = state.items.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      const { totalItems, totalPrice } = calculateTotals(updatedItems)

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice
      }
    }

    // ==================== DECREMENT QUANTITY ====================
    case DECREMENT_QUANTITY: {
      const productId = action.payload

      const updatedItems = state.items.map(item => {
        if (item.id === productId) {
          // Don't go below 1
          const newQuantity = Math.max(1, item.quantity - 1)
          return { ...item, quantity: newQuantity }
        }
        return item
      })

      const { totalItems, totalPrice } = calculateTotals(updatedItems)

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice
      }
    }

    // ==================== UPDATE QUANTITY ====================
    case UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload

      // Don't allow quantity below 1
      if (quantity < 1) return state

      const updatedItems = state.items.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )

      const { totalItems, totalPrice } = calculateTotals(updatedItems)

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice
      }
    }

    // ==================== CLEAR CART ====================
    case CLEAR_CART: {
      return initialCartState
    }

    // ==================== DEFAULT ====================
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
```

### 🧑‍🏫 **Teacher's Deep Dive - Understanding the Reducer:**

**What is a Reducer?** 🤔

A reducer is a **pure function** that takes:
1. **Current State** - What the cart looks like now
2. **Action** - What happened (user clicked "Add to Cart")

And returns:
3. **New State** - Updated cart

**The Flow:**
```
User clicks "Add to Cart"
        ↓
Action created: { type: 'ADD_TO_CART', payload: product }
        ↓
Reducer receives: (currentState, action)
        ↓
Reducer processes action based on type
        ↓
Reducer returns new state
        ↓
React re-renders components with new state
        ↓
User sees updated cart! 🎉
```

**Key Principles:**

1. **Immutability** - Never mutate state directly
```javascript
// ❌ BAD - Mutating state
state.items.push(newItem)
return state

// ✅ GOOD - Creating new array
return {
  ...state,
  items: [...state.items, newItem]
}
```

2. **Switch Statement** - Handles different action types
```javascript
switch (action.type) {
  case ADD_TO_CART:
    // Handle adding
  case REMOVE_FROM_CART:
    // Handle removing
  default:
    // Unknown action
}
```

3. **Pure Function** - No side effects
- No API calls
- No random numbers
- Same input = Same output

**Real-World Analogy:** 🏪

Think of a **bank teller** (reducer):
- Customer says "Deposit $100" (action)
- Teller checks current balance (state)
- Teller updates balance (returns new state)
- Teller NEVER changes the original ledger - makes a new entry!

---

### 3.3 Create Cart Context

Create `src/context/CartContext.jsx`:

```javascript
import { createContext, useReducer, useContext, useEffect } from 'react'
import { cartReducer, initialCartState } from './cartReducer'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  UPDATE_QUANTITY,
  CLEAR_CART
} from './cartActions'

// Create Context
const CartContext = createContext()

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // useReducer instead of useState for complex state!
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart')
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      // Restore each item
      parsedCart.items.forEach(item => {
        dispatch({ type: ADD_TO_CART, payload: item })
      })
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(state))
  }, [state])

  // ACTION CREATORS - Functions that dispatch actions

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId })
  }

  const incrementQuantity = (productId) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: productId })
  }

  const decrementQuantity = (productId) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const isInCart = (productId) => {
    return state.items.some(item => item.id === productId)
  }

  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  // Value object with state and functions
  const value = {
    // State
    items: state.items,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,

    // Functions
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook for easy access
export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
```

### 🧑‍🏫 **Teacher's Explanation:**

**useReducer vs useState:**

```javascript
// useState - Simple state
const [count, setCount] = useState(0)
setCount(count + 1)

// useReducer - Complex state with many update patterns
const [state, dispatch] = useReducer(reducer, initialState)
dispatch({ type: 'INCREMENT' })
```

**When to use useReducer:**
- ✅ Multiple related state values (items, totalItems, totalPrice)
- ✅ Complex update logic (add, remove, update cart)
- ✅ State updates that depend on previous state
- ✅ Want to separate state logic from component

**The dispatch Function:**
```javascript
dispatch({ 
  type: 'ADD_TO_CART',      // What action to take
  payload: product          // Data needed for action
})
```

Think of `dispatch` as **sending a message** to your reducer:
- "Hey reducer, please ADD_TO_CART this product"
- Reducer receives message and updates state accordingly

**Custom Hook (useCart):**
```javascript
export const useCart = () => {
  const context = useContext(CartContext)
  return context
}

// Usage in components
const { addToCart, totalItems } = useCart()  // Clean and simple!
```

Benefits:
- ✅ Cleaner component code
- ✅ Error checking built-in
- ✅ Reusable across components

---

## 🗃️ Step 4: Create Product Data

Create `src/data/products.js`:

```javascript
export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Premium wireless headphones with noise cancellation',
    category: 'Electronics',
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Feature-rich smartwatch with fitness tracking',
    category: 'Electronics',
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    description: 'Durable backpack with laptop compartment',
    category: 'Accessories',
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400',
    description: 'RGB mechanical keyboard for gaming and typing',
    category: 'Electronics',
    rating: 4.8,
    inStock: true
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    description: 'Ergonomic wireless mouse with precision tracking',
    category: 'Electronics',
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400',
    description: '7-in-1 USB-C hub with multiple ports',
    category: 'Accessories',
    rating: 4.2,
    inStock: true
  },
  {
    id: 7,
    name: 'Webcam HD',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
    description: '1080p HD webcam for video calls',
    category: 'Electronics',
    rating: 4.6,
    inStock: false
  },
  {
    id: 8,
    name: 'Phone Stand',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400',
    description: 'Adjustable phone stand for desk',
    category: 'Accessories',
    rating: 4.1,
    inStock: true
  }
]
```

---

## 🧩 Step 5: Create Components

### 5.1 Header Component

Create `src/components/Header.jsx`:

```javascript
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const { totalItems, totalPrice } = useCart()

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>🛒 React Shop</h1>
          <p>Your one-stop shopping destination</p>
        </div>

        <div className="cart-summary">
          <div className="cart-info">
            <span className="cart-items">
              🛒 {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
            <span className="cart-total">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
```

### 🧑‍🏫 **Explanation:**

```javascript
const { totalItems, totalPrice } = useCart()
```
- Using our custom hook!
- Extracts cart data from Context
- Component re-renders when cart changes
- No props drilling needed! 🎉

---

### 5.2 ProductCard Component

Create `src/components/ProductCard.jsx`:

```javascript
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart, isInCart, getItemQuantity } = useCart()

  const inCart = isInCart(product.id)
  const quantity = getItemQuantity(product.id)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>

          <button 
            className={`add-to-cart-btn ${inCart ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {!product.inStock ? '❌ Out of Stock' : 
             inCart ? `✅ In Cart (${quantity})` : 
             '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
```

### 🧑‍🏫 **Explanation:**

**Checking if Product is in Cart:**
```javascript
const inCart = isInCart(product.id)
const quantity = getItemQuantity(product.id)
```
- `isInCart()` returns true/false
- `getItemQuantity()` returns how many in cart
- Used to show different button states

**Dynamic Button States:**
```javascript
{!product.inStock ? '❌ Out of Stock' : 
 inCart ? `✅ In Cart (${quantity})` : 
 '🛒 Add to Cart'}
```
- Out of stock: Shows disabled message
- In cart: Shows checkmark with quantity
- Available: Shows "Add to Cart"

---

### 5.3 ProductList Component

Create `src/components/ProductList.jsx`:

```javascript
import { products } from '../data/products'
import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList() {
  return (
    <section className="product-list-section">
      <div className="section-header">
        <h2>🎯 Featured Products</h2>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
```

---

### 5.4 CartItem Component

Create `src/components/CartItem.jsx`:

```javascript
import { useCart } from '../context/CartContext'
import './CartItem.css'

function CartItem({ item }) {
  const { 
    incrementQuantity, 
    decrementQuantity, 
    removeFromCart 
  } = useCart()

  const itemTotal = (item.price * item.quantity).toFixed(2)

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="item-details">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-price">${item.price.toFixed(2)} each</p>
      </div>

      <div className="item-quantity">
        <button 
          className="quantity-btn"
          onClick={() => decrementQuantity(item.id)}
          disabled={item.quantity === 1}
        >
          −
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => incrementQuantity(item.id)}
        >
          +
        </button>
      </div>

      <div className="item-total">
        <span className="total-price">${itemTotal}</span>
      </div>

      <button 
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
        title="Remove from cart"
      >
        🗑️
      </button>
    </div>
  )
}

export default CartItem
```

### 🧑‍🏫 **Explanation:**

**Quantity Controls:**
```javascript
<button onClick={() => decrementQuantity(item.id)}>−</button>
<span>{item.quantity}</span>
<button onClick={() => incrementQuantity(item.id)}>+</button>
```
- Minus button: Decreases quantity (min 1)
- Plus button: Increases quantity
- Each button dispatches an action to reducer

**Disabled State:**
```javascript
disabled={item.quantity === 1}
```
- Can't go below 1 item
- Button disabled when quantity is 1

---

### 5.5 Cart Component

Create `src/components/Cart.jsx`:

```javascript
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const { items, totalItems, totalPrice, clearCart } = useCart()

  // Calculate tax (10%)
  const tax = totalPrice * 0.1
  const finalTotal = totalPrice + tax

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!')
      return
    }

    alert(`Checkout successful! Total: $${finalTotal.toFixed(2)}`)
    clearCart()
  }

  if (items.length === 0) {
    return (
      <section className="cart-section">
        <h2>🛒 Your Shopping Cart</h2>
        <div className="empty-cart">
          <p className="empty-cart-icon">🛒</p>
          <h3>Your cart is empty</h3>
          <p>Add some amazing products to get started!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="cart-section">
      <div className="cart-header">
        <h2>🛒 Your Shopping Cart</h2>
        <span className="item-count">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        <div className="cart-actions">
          <button 
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            💳 Checkout
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
```

### 🧑‍🏫 **Explanation:**

**Empty Cart State:**
```javascript
if (items.length === 0) {
  return <EmptyCartMessage />
}
```
- Good UX practice!
- Shows friendly message when cart is empty
- Encourages users to shop

**Derived State (Calculations):**
```javascript
const tax = totalPrice * 0.1
const finalTotal = totalPrice + tax
```
- Calculate tax from total price
- Don't store in state - calculate on the fly!
- Always fresh, no sync issues

---

### 5.6 Update App.jsx

Replace `src/App.jsx`:

```javascript
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />

        <main className="main-content">
          <ProductList />
          <Cart />
        </main>

        <footer className="footer">
          <p>Made with ❤️ using React Context & useReducer</p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
```

### 🧑‍🏫 **Explanation:**

**CartProvider Wrapping:**
```javascript
<CartProvider>
  <App />
</CartProvider>
```
- Wraps entire app
- ALL components can access cart
- No props needed!

**Component Hierarchy:**
```
CartProvider
└── App
    ├── Header (shows cart summary)
    ├── ProductList (displays products)
    │   └── ProductCard (individual product)
    └── Cart (shows cart items)
        └── CartItem (individual cart item)
```

---

## 🎨 Step 6: Add Styling

### 6.1 Header.css

Create `src/components/Header.css`:

```css
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo h1 {
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
}

.logo p {
  font-size: 0.9rem;
  margin: 0.25rem 0 0 0;
  opacity: 0.9;
}

.cart-summary {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.cart-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.cart-items {
  font-size: 0.9rem;
  font-weight: 500;
}

.cart-total {
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }

  .cart-info {
    align-items: center;
  }
}
```

---

### 6.2 ProductList.css

Create `src/components/ProductList.css`:

```css
.product-list-section {
  padding: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #666;
  font-size: 1.1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .product-list-section {
    padding: 1rem;
  }
}
```

---

### 6.3 ProductCard.css

Create `src/components/ProductCard.css`:

```css
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.out-of-stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.product-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  flex: 1;
  line-height: 1.5;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-category {
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.product-rating {
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.product-price {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: 700;
}

.add-to-cart-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-to-cart-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.add-to-cart-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.add-to-cart-btn.in-cart {
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
}

.add-to-cart-btn:active:not(:disabled) {
  transform: translateY(0);
}
```

---

### 6.4 Cart.css

Create `src/components/Cart.css`:

```css
.cart-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.cart-header h2 {
  font-size: 1.8rem;
  color: #333;
  margin: 0;
}

.item-count {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-cart-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-cart h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: #666;
  font-size: 1.1rem;
}

.cart-summary {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  font-size: 1.1rem;
}

.summary-row.total {
  border-top: 2px solid #ddd;
  margin-top: 0.5rem;
  padding-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
}

.cart-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.clear-cart-btn,
.checkout-btn {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-cart-btn {
  background: #e74c3c;
  color: white;
}

.clear-cart-btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.checkout-btn {
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
}

@media (max-width: 768px) {
  .cart-section {
    margin: 1rem;
    padding: 1.5rem;
  }

  .cart-actions {
    flex-direction: column;
  }
}
```

---

### 6.5 CartItem.css

Create `src/components/CartItem.css`:

```css
.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cart-item:hover {
  border-color: #667eea;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.1);
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
}

.item-price {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 8px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #667eea;
  color: white;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.quantity-btn:hover:not(:disabled) {
  background: #5568d3;
  transform: scale(1.1);
}

.quantity-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.5;
}

.quantity-value {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.item-total {
  min-width: 100px;
  text-align: right;
}

.total-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
}

.remove-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: #fee;
  color: #e74c3c;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.remove-btn:hover {
  background: #e74c3c;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .item-image {
    width: 60px;
    height: 60px;
  }

  .item-details {
    flex: 1 1 100%;
  }

  .item-total {
    min-width: auto;
  }
}
```

---

### 6.6 App.css

Replace `src/App.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.footer p {
  margin: 0;
  font-size: 1rem;
}
```

---

### 6.7 index.css

Replace `src/index.css`:

```css
:root {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  font-weight: 400;

  color-scheme: light;
  color: #213547;
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  scroll-behavior: smooth;
}

button {
  font-family: inherit;
}
```

---

## 🏃 Step 7: Test Your App

### 7.1 Start Development Server

```bash
npm run dev
```

### 7.2 Test All Features 🧪

Try these actions:

1. **✅ Add Products to Cart**
   - Click "Add to Cart" on multiple products
   - Watch the header update with item count and price

2. **✅ Increase/Decrease Quantity**
   - Use + and - buttons in cart
   - Notice total updates automatically

3. **✅ Remove Items**
   - Click trash icon to remove items
   - Cart updates immediately

4. **✅ Clear Cart**
   - Click "Clear Cart" button
   - All items removed

5. **✅ Checkout**
   - Click "Checkout" button
   - Alert shows total, cart clears

6. **✅ Persistence**
   - Add items to cart
   - Refresh page
   - Cart items should still be there! 🎉

7. **✅ Responsive Design**
   - Resize browser window
   - Layout adapts to mobile view

### 7.3 Expected Behavior

**When you add a product:**
```
1. Product card shows "✅ In Cart (1)"
2. Header shows updated count and total
3. Cart section displays the item
4. Item saved to localStorage
```

**When you change quantity:**
```
1. Quantity updates in cart item
2. Item total recalculates
3. Cart total updates
4. Header total updates
5. Changes saved to localStorage
```

🎉 **Success!** Your shopping cart is fully functional!

---

## 📖 Understanding useReducer vs useState

### When to Use useState

```javascript
// Simple, independent state
const [isOpen, setIsOpen] = useState(false)
const [count, setCount] = useState(0)
const [name, setName] = useState('')

// Simple updates
setCount(count + 1)
setName('John')
```

**Use useState when:**
- ✅ Single value to track
- ✅ Simple updates (set to new value)
- ✅ Independent from other state
- ✅ No complex logic needed

### When to Use useReducer

```javascript
// Complex, related state
const [state, dispatch] = useReducer(reducer, {
  items: [],
  totalItems: 0,
  totalPrice: 0
})

// Updates through actions
dispatch({ type: 'ADD_TO_CART', payload: product })
dispatch({ type: 'REMOVE_FROM_CART', payload: id })
```

**Use useReducer when:**
- ✅ Multiple related values
- ✅ Complex update logic
- ✅ Next state depends on previous state
- ✅ Many different ways to update state

### Real-World Comparison 🏪

**useState = Light Switch**
- On or Off
- Simple toggle
- One action: flip

**useReducer = TV Remote**
- Volume up/down
- Channel change
- Input selection
- Power toggle
- Many actions, one device!

---

## 🎓 React Concepts Deep Dive

### 1. Context API Architecture

```
┌─────────────────────────────────────────┐
│          CartProvider (Source)          │
│  ┌──────────────────────────────────┐  │
│  │  State: items, total, price      │  │
│  │  Functions: add, remove, update  │  │
│  └──────────────────────────────────┘  │
└─────────────────┬───────────────────────┘
                  │ Provides data to...
        ┌─────────┴─────────┐
        │                   │
   ┌────▼────┐        ┌─────▼─────┐
   │ Header  │        │ ProductCard│
   │ (reads) │        │ (reads &   │
   │         │        │  updates)  │
   └─────────┘        └───────────┘
        │                   │
   ┌────▼────┐        ┌─────▼─────┐
   │  Cart   │        │ CartItem  │
   │ (reads) │        │ (updates) │
   └─────────┘        └───────────┘
```

**Benefits:**
- No prop drilling
- Global state access
- Centralized logic
- Easy to maintain

### 2. useReducer Flow

```
User Action (Click "Add to Cart")
            ↓
Component calls: addToCart(product)
            ↓
Action Creator dispatches:
dispatch({ type: 'ADD_TO_CART', payload: product })
            ↓
Reducer receives: (currentState, action)
            ↓
Reducer processes based on action.type
            ↓
Reducer returns NEW state
            ↓
Context updates with new state
            ↓
All subscribed components re-render
            ↓
UI updates with new data
```

### 3. Immutability in Reducers

**Why Immutability Matters:**

```javascript
// ❌ WRONG - Mutating state
case ADD_TO_CART:
  state.items.push(action.payload)  // BAD!
  return state  // Same reference, React won't detect change

// ✅ RIGHT - Creating new state
case ADD_TO_CART:
  return {
    ...state,  // Copy existing state
    items: [...state.items, action.payload]  // New array
  }
```

**React's Change Detection:**
```javascript
// React compares references
oldState === newState  // If true, no re-render
oldState !== newState  // If false, re-render!
```

**Array Operations:**
```javascript
// Adding
const newArray = [...oldArray, newItem]

// Removing
const newArray = oldArray.filter(item => item.id !== removeId)

// Updating
const newArray = oldArray.map(item =>
  item.id === updateId ? { ...item, quantity: newQuantity } : item
)

// Never:
oldArray.push(item)  // ❌ Mutates
oldArray.splice(0, 1)  // ❌ Mutates
oldArray[0] = newItem  // ❌ Mutates
```

### 4. Action Pattern

**Action Object Structure:**
```javascript
{
  type: 'ADD_TO_CART',  // Required: What to do
  payload: product      // Optional: Data needed
}
```

**Action Types as Constants:**
```javascript
// ✅ GOOD - Typo-safe, refactor-friendly
export const ADD_TO_CART = 'ADD_TO_CART'
dispatch({ type: ADD_TO_CART, payload: product })

// ❌ BAD - Typo-prone
dispatch({ type: 'ADD_TO_CART', payload: product })
dispatch({ type: 'ADD_TO_CARTT', payload: product })  // Typo! Won't catch
```

### 5. Custom Hooks Benefits

**Without Custom Hook:**
```javascript
import { useContext } from 'react'
import { CartContext } from './CartContext'

function MyComponent() {
  const context = useContext(CartContext)
  if (!context) throw new Error('...')
  const { addToCart } = context
  // Use addToCart
}
```

**With Custom Hook:**
```javascript
import { useCart } from './CartContext'

function MyComponent() {
  const { addToCart } = useCart()  // Clean!
  // Use addToCart
}
```

**Benefits:**
- ✅ Cleaner code
- ✅ Error checking built-in
- ✅ Easier to refactor
- ✅ Consistent usage

---

## ✨ Best Practices & Patterns

### 1. Reducer Organization

**✅ GOOD: Separate File**
```
src/context/
├── CartContext.jsx    # Provider & hooks
├── cartReducer.js     # Reducer logic
└── cartActions.js     # Action types
```

**Benefits:**
- Easier to test
- Clearer separation
- Easier to maintain

### 2. Action Creators

**✅ GOOD: Helper Functions**
```javascript
// In CartContext.jsx
const addToCart = (product) => {
  dispatch({ type: ADD_TO_CART, payload: product })
}

// In Component
const { addToCart } = useCart()
addToCart(product)  // Simple!
```

**❌ BAD: Direct Dispatch**
```javascript
// In Component
const { dispatch } = useCart()
dispatch({ type: 'ADD_TO_CART', payload: product })  // Verbose!
```

### 3. Derived State

**✅ GOOD: Calculate in Reducer**
```javascript
const calculateTotals = (items) => {
  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
}

// Use in reducer
const { totalItems, totalPrice } = calculateTotals(updatedItems)
return { ...state, items: updatedItems, totalItems, totalPrice }
```

**❌ BAD: Separate useState**
```javascript
const [items, setItems] = useState([])
const [totalItems, setTotalItems] = useState(0)  // Can get out of sync!
const [totalPrice, setTotalPrice] = useState(0)   // Can get out of sync!
```

### 4. Error Handling

**In Reducer:**
```javascript
default:
  throw new Error(`Unknown action type: ${action.type}`)
```

**In Custom Hook:**
```javascript
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
```

### 5. TypeScript-Ready Patterns

Even in JavaScript, use patterns that work well with TypeScript:

```javascript
// Action types as constants
export const ADD_TO_CART = 'ADD_TO_CART'

// Consistent action shape
{
  type: 'ACTION_TYPE',
  payload: data
}

// Helper functions with JSDoc
/**
 * Adds a product to cart
 * @param {Object} product - Product to add
 */
const addToCart = (product) => {
  dispatch({ type: ADD_TO_CART, payload: product })
}
```

### 6. Performance Optimization

**Memoize Context Value:**
```javascript
const value = useMemo(() => ({
  items: state.items,
  totalItems: state.totalItems,
  totalPrice: state.totalPrice,
  addToCart,
  removeFromCart,
  // ... other functions
}), [state, addToCart, removeFromCart])
```

**Why?**
- Prevents unnecessary re-renders
- Value object only changes when dependencies change
- Better performance in large apps

### 7. Testing Best Practices

**Structure for Testability:**
```javascript
// Export reducer separately
export const cartReducer = (state, action) => { ... }

// Export initial state
export const initialCartState = { ... }

// Easy to test!
import { cartReducer, initialCartState } from './cartReducer'

test('adds item to cart', () => {
  const action = { type: 'ADD_TO_CART', payload: mockProduct }
  const newState = cartReducer(initialCartState, action)
  expect(newState.items).toHaveLength(1)
})
```

---

## 🔧 Troubleshooting

### Issue 1: "Cannot read property of undefined"

**Problem:** Trying to use cart before provider is mounted

**Solution:**
```javascript
// Make sure App is wrapped
<CartProvider>
  <App />
</CartProvider>

// Use custom hook
const { addToCart } = useCart()  // Throws helpful error if not wrapped
```

---

### Issue 2: Cart Not Updating

**Problem:** State mutation instead of immutability

**Solution:**
```javascript
// ❌ DON'T MUTATE
state.items.push(newItem)
return state

// ✅ CREATE NEW
return {
  ...state,
  items: [...state.items, newItem]
}
```

---

### Issue 3: Infinite Re-renders

**Problem:** Creating new objects in render

**Solution:**
```javascript
// ❌ BAD - New object every render
<CartContext.Provider value={{ items, addToCart }}>

// ✅ GOOD - Memoized value
const value = useMemo(() => ({ items, addToCart }), [items])
<CartContext.Provider value={value}>
```

---

### Issue 4: localStorage Not Working

**Problem:** Circular JSON or incorrect timing

**Solution:**
```javascript
// Save only serializable data
useEffect(() => {
  const dataToSave = {
    items: state.items,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice
  }
  localStorage.setItem('cart', JSON.stringify(dataToSave))
}, [state])

// Load carefully
useEffect(() => {
  try {
    const saved = localStorage.getItem('cart')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Restore state
    }
  } catch (error) {
    console.error('Failed to load cart:', error)
  }
}, [])
```

---

### Issue 5: Types Don't Match

**Problem:** Misspelled action type

**Solution:**
```javascript
// Use constants!
export const ADD_TO_CART = 'ADD_TO_CART'

// Then
dispatch({ type: ADD_TO_CART, payload: product })
// Instead of
dispatch({ type: 'ADD_TO_CART', payload: product })  // Typo-prone!
```

---

## 🚀 Enhancement Ideas

Ready to take this project further? Try these challenges:

### Beginner Enhancements 🌱

1. **Add Product Search**
```javascript
const [searchTerm, setSearchTerm] = useState('')
const filtered = products.filter(p => 
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
)
```

2. **Category Filter**
```javascript
const [category, setCategory] = useState('all')
const filtered = category === 'all' 
  ? products 
  : products.filter(p => p.category === category)
```

3. **Sort Products**
```javascript
const sorted = [...products].sort((a, b) => {
  if (sortBy === 'price-asc') return a.price - b.price
  if (sortBy === 'price-desc') return b.price - a.price
  if (sortBy === 'name') return a.name.localeCompare(b.name)
  return 0
})
```

### Intermediate Enhancements 🌿

4. **Add to Wishlist**
- Create WishlistContext similar to CartContext
- Add heart icon to products
- Toggle wishlist items

5. **Product Details Modal**
- Click product to see full details
- Larger image, full description
- Add to cart from modal

6. **Discount Codes**
```javascript
// In reducer
case APPLY_DISCOUNT:
  const discount = action.payload.percentage
  return {
    ...state,
    discount,
    finalPrice: state.totalPrice * (1 - discount / 100)
  }
```

### Advanced Enhancements 🌳

7. **API Integration**
```javascript
// Fetch products from API
useEffect(() => {
  fetch('https://api.example.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
```

8. **User Authentication**
- Add login/signup
- Save cart per user
- Sync cart across devices

9. **Payment Integration**
```javascript
// Stripe/PayPal integration
const handleCheckout = async () => {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    body: JSON.stringify({ items: cart.items })
  })
  // Redirect to payment
}
```

10. **Order History**
- Save completed orders
- Display past purchases
- Reorder functionality

11. **Animations with Framer Motion**
```javascript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  <ProductCard />
</motion.div>
```

12. **Real-time Stock Management**
```javascript
// Update stock in real-time
case ADD_TO_CART:
  const product = state.products.find(p => p.id === action.payload.id)
  if (product.stock === 0) {
    return state  // Out of stock
  }
  // Update stock
  return {
    ...state,
    products: state.products.map(p =>
      p.id === action.payload.id
        ? { ...p, stock: p.stock - 1 }
        : p
    )
  }
```

---

## 📚 Learning Resources

### Official Documentation
- 📖 [React useReducer Hook](https://react.dev/reference/react/useReducer)
- 📖 [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)
- 📖 [Vite Documentation](https://vitejs.dev)

### Video Tutorials
- 🎥 [React Context & useReducer - Web Dev Simplified](https://www.youtube.com)
- 🎥 [Shopping Cart Tutorial - Traversy Media](https://www.youtube.com)

### Practice
- 💻 Build similar apps (Todo, Notes, Expense Tracker)
- 💻 Add features incrementally
- 💻 Refactor code for better patterns

---

## 🎯 Project Summary

### What We Built:
- ✅ Full-featured shopping cart
- ✅ Global state with Context API
- ✅ Complex state management with useReducer
- ✅ Product listing and filtering
- ✅ Cart operations (add, remove, update)
- ✅ Persistent cart with localStorage
- ✅ Responsive design
- ✅ Real-world e-commerce patterns

### Technologies:
- ⚛️ React 18
- ⚡ Vite
- 🎨 CSS3
- 📦 Context API
- 🔄 useReducer Hook
- 💾 localStorage

### Skills Gained:
- ✅ Context API mastery
- ✅ useReducer for complex state
- ✅ Reducer pattern implementation
- ✅ Action-based state updates
- ✅ Custom hooks creation
- ✅ Component composition
- ✅ State persistence
- ✅ Real-world app architecture

---

## 🎓 Next Steps

### Immediate:
1. ✅ Complete all enhancement ideas
2. ✅ Add tests (Jest + React Testing Library)
3. ✅ Deploy to Vercel/Netlify
4. ✅ Share on GitHub!

### Future Learning:
- 📚 Redux Toolkit (industry standard)
- 📚 React Query (server state)
- 📚 TypeScript with React
- 📚 Next.js (React framework)
- 📚 Testing best practices
- 📚 Performance optimization

---

## 🤝 Contributing

Improvements welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🎨 Enhance styling

---

## 📝 License

MIT License - Feel free to use for learning and projects!

---

<div align="center">

## 🎉 Congratulations! 🎉

You've built a professional shopping cart with React!

**You've mastered:**
- ✅ Context API for global state
- ✅ useReducer for complex logic
- ✅ Real-world app patterns
- ✅ Professional code organization

### Keep Building! 🚀

*"The best way to learn is by building."*

---

**Made with ❤️ by React Learners**

*Happy Coding! 💻✨*

</div>
