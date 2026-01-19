# 🚀 Day 2: State Management & Event Handling

Welcome to Day 2 of your React journey! Today, we're diving into the **heart of React** - making your components interactive and dynamic. Get ready to bring your applications to life! 💫

---

## 📚 Table of Contents

1. [useState Hook Fundamentals](#-usestate-hook-fundamentals)
2. [Event Handling in React](#-event-handling-in-react)
3. [Conditional Rendering](#-conditional-rendering)
4. [Lists and Keys](#-lists-and-keys)
5. [Best Practices & Common Mistakes](#-best-practices--common-mistakes)
6. [Learning Tips](#-learning-tips)

---

## 🎯 useState Hook Fundamentals

### What is State?

**State** is like your component's memory. It's data that can change over time and when it changes, React automatically re-renders your component to reflect those changes.

### 🌍 Real-World Analogy

Think of state like a **light switch** in your room:
- The switch has a **state** (ON or OFF)
- When you flip the switch, the **state changes**
- The room's lighting **responds** to that state change
- You can **read** the current state (is it bright or dark?)

### How useState Works

```jsx
import { useState } from 'react';

function Counter() {
  // Declaring state variable
  const [count, setCount] = useState(0);
  //      ↑       ↑              ↑
  //   current  updater    initial value
  //   value    function

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 🔍 Breaking It Down

1. **`useState(0)`** - Initializes state with value `0`
2. **`count`** - Current state value (read-only)
3. **`setCount`** - Function to update the state
4. **Array destructuring** - Gets both values from useState

### 📊 State Update Flow

```
User Action → Call setState → React Schedules Update → 
Component Re-renders → UI Updates
```

### Different Types of State

#### 1️⃣ Simple Values (Numbers, Strings, Booleans)

```jsx
function Examples() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(25);
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```

#### 2️⃣ Objects

```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    email: 'alice@example.com',
    age: 28
  });

  // ✅ CORRECT: Spread operator preserves other properties
  const updateEmail = (newEmail) => {
    setUser({
      ...user,
      email: newEmail
    });
  };

  // ❌ WRONG: This replaces the entire object
  const updateEmailWrong = (newEmail) => {
    setUser({ email: newEmail }); // name and age are lost!
  };

  return (
    <div>
      <p>{user.name} - {user.email}</p>
      <button onClick={() => updateEmail('newemail@example.com')}>
        Update Email
      </button>
    </div>
  );
}
```

#### 3️⃣ Arrays

```jsx
function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build Project']);

  // Adding item
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    // or: setTodos(prev => [...prev, newTodo]);
  };

  // Removing item
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

### ⚡ Important Concepts

#### State Updates are Asynchronous

```jsx
function AsyncExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // ❌ Still shows old value!
    // State hasn't updated yet
  };

  // ✅ Use useEffect to see updated value
  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

#### Functional Updates

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ WRONG: Multiple updates may not work as expected
  const incrementThreeTimes = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Result: count increases by 1, not 3!
  };

  // ✅ CORRECT: Use functional update
  const incrementThreeTimesCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // Result: count increases by 3!
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementThreeTimesCorrect}>+3</button>
    </div>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use functional updates when new state depends on old state | Mutate state directly (`count++`) |
| Keep state as simple as possible | Store derived data in state |
| Initialize state with the correct data type | Use state for values that don't trigger re-renders |
| Use multiple useState calls for unrelated data | Put all data in one giant state object |

---

## 🎪 Event Handling in React

### What are Events?

Events are actions that happen in the browser - clicks, typing, form submissions, mouse movements, etc. React makes handling these events simple and consistent!

### 🌍 Real-World Analogy

Think of events like **doorbells**:
- Someone presses the button (event occurs)
- The doorbell rings (event handler executes)
- You respond by opening the door (action happens)

### Syntax: React vs Vanilla JavaScript

```jsx
// ❌ HTML/Vanilla JS (lowercase, string)
<button onclick="handleClick()">Click</button>

// ✅ React (camelCase, function reference)
<button onClick={handleClick}>Click</button>
```

### Common Event Types

#### 1️⃣ onClick - Button Clicks

```jsx
function ClickExample() {
  const [clicks, setClicks] = useState(0);

  // Method 1: Separate function
  const handleClick = () => {
    setClicks(clicks + 1);
    console.log('Button clicked!');
  };

  return (
    <div>
      <p>Clicks: {clicks}</p>

      {/* Method 1: Function reference */}
      <button onClick={handleClick}>Click Me</button>

      {/* Method 2: Inline arrow function */}
      <button onClick={() => setClicks(clicks + 1)}>
        Quick Click
      </button>

      {/* ❌ WRONG: Calls immediately! */}
      <button onClick={handleClick()}>Don't Do This</button>
    </div>
  );
}
```

#### 2️⃣ onChange - Input Fields

```jsx
function InputExample() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleTextChange = (event) => {
    // event.target.value contains the current input value
    setText(event.target.value);
  };

  return (
    <div>
      {/* Text Input */}
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>

      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>Email: {email}</p>
    </div>
  );
}
```

#### 3️⃣ onSubmit - Form Submissions

```jsx
function FormExample() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value  // Computed property name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⚡ Prevents page reload!
    console.log('Form submitted:', formData);

    // Process form data (API call, validation, etc.)
    alert(`Welcome, ${formData.username}!`);

    // Reset form
    setFormData({ username: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 🎯 Event Object

Every event handler receives an **event object** with useful information:

```jsx
function EventDetails() {
  const handleClick = (event) => {
    console.log('Event type:', event.type);           // 'click'
    console.log('Target element:', event.target);     // <button>
    console.log('Mouse X position:', event.clientX);  // Mouse X coordinate
    console.log('Mouse Y position:', event.clientY);  // Mouse Y coordinate
  };

  const handleKeyPress = (event) => {
    console.log('Key pressed:', event.key);           // The key pressed
    console.log('Key code:', event.keyCode);          // Numeric code

    if (event.key === 'Enter') {
      console.log('Enter key pressed!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click for details</button>
      <input 
        type="text" 
        onKeyPress={handleKeyPress}
        placeholder="Press Enter"
      />
    </div>
  );
}
```

### 🔥 Advanced Event Handling

#### Passing Arguments to Event Handlers

```jsx
function ButtonList() {
  const handleClick = (id, name) => {
    console.log(`Button ${id} (${name}) clicked`);
  };

  return (
    <div>
      {/* Method 1: Arrow function wrapper */}
      <button onClick={() => handleClick(1, 'First')}>
        Button 1
      </button>

      {/* Method 2: Bind (less common) */}
      <button onClick={handleClick.bind(null, 2, 'Second')}>
        Button 2
      </button>
    </div>
  );
}
```

#### Event Handler with Both Event and Custom Arguments

```jsx
function AdvancedEvents() {
  const handleClick = (id, event) => {
    console.log('ID:', id);
    console.log('Event:', event.type);
    console.log('Button text:', event.target.textContent);
  };

  return (
    <button onClick={(e) => handleClick(123, e)}>
      Click Me
    </button>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use `e.preventDefault()` to prevent default behavior | Call the function immediately (`onClick={func()}`) |
| Use camelCase for event names (`onClick`, `onChange`) | Use lowercase (`onclick`) |
| Pass function references or arrow functions | Forget to bind `this` in class components |
| Use arrow functions to pass arguments | Create new functions in render without memoization |

---

## 🎭 Conditional Rendering

### What is Conditional Rendering?

Showing or hiding components/elements based on certain conditions - like showing a "Welcome" message only when a user is logged in.

### 🌍 Real-World Analogy

Think of conditional rendering like **traffic lights**:
- 🟢 Green light → Show "GO" message
- 🟡 Yellow light → Show "SLOW DOWN" message
- 🔴 Red light → Show "STOP" message

Only one message shows at a time based on the current condition!

### Methods of Conditional Rendering

#### 1️⃣ If-Else Statements

```jsx
function Greeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

// Usage
<Greeting isLoggedIn={true} username="Alice" />
```

#### 2️⃣ Ternary Operator (Most Common)

```jsx
function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}
```

#### 3️⃣ Logical AND (&&) Operator

```jsx
function Notifications({ count }) {
  return (
    <div>
      <h2>Messages</h2>
      {/* Only shows if count > 0 */}
      {count > 0 && (
        <p>You have {count} unread messages!</p>
      )}
    </div>
  );
}

// Examples:
<Notifications count={5} />  // Shows message
<Notifications count={0} />  // Shows nothing
```

⚠️ **Watch out for falsy values!**

```jsx
function Counter({ count }) {
  // ❌ WRONG: Shows "0" when count is 0
  return (
    <div>
      {count && <p>Count: {count}</p>}
    </div>
  );

  // ✅ CORRECT: Explicit comparison
  return (
    <div>
      {count > 0 && <p>Count: {count}</p>}
    </div>
  );
}
```

#### 4️⃣ Switch Statements (Multiple Conditions)

```jsx
function StatusMessage({ status }) {
  let message;

  switch(status) {
    case 'loading':
      message = <p>Loading... ⏳</p>;
      break;
    case 'success':
      message = <p>Success! ✅</p>;
      break;
    case 'error':
      message = <p>Error occurred! ❌</p>;
      break;
    default:
      message = <p>Unknown status</p>;
  }

  return <div>{message}</div>;
}
```

#### 5️⃣ Immediately Invoked Function Expression (IIFE)

```jsx
function ComplexConditions({ role }) {
  return (
    <div>
      {(() => {
        if (role === 'admin') {
          return <AdminPanel />;
        } else if (role === 'moderator') {
          return <ModeratorPanel />;
        } else if (role === 'user') {
          return <UserPanel />;
        } else {
          return <GuestPanel />;
        }
      })()}
    </div>
  );
}
```

### 🎯 Practical Examples

#### Login/Logout System

```jsx
function AuthSystem() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUsername('JohnDoe');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Log In</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
```

#### Loading States

```jsx
function DataFetcher() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Simulated data fetch
  useEffect(() => {
    setTimeout(() => {
      setData({ name: 'Product', price: 99 });
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading... ⏳</div>;
  }

  if (error) {
    return <div>Error: {error.message} ❌</div>;
  }

  return (
    <div>
      <h3>{data.name}</h3>
      <p>Price: ${data.price}</p>
    </div>
  );
}
```

#### Toggle Visibility

```jsx
function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '▼' : '►'} Click to {isOpen ? 'hide' : 'show'}
      </button>

      {isOpen && (
        <div className="content">
          <p>This is the hidden content!</p>
          <p>It only shows when isOpen is true.</p>
        </div>
      )}
    </div>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use `&&` for simple show/hide | Use `&&` with numbers (can render 0) |
| Use ternary for either/or cases | Nest ternaries too deeply (unreadable) |
| Extract complex conditions to variables | Put too much logic in JSX |
| Return early for cleaner code | Forget that `false`, `null`, `undefined` don't render |

---

## 📋 Lists and Keys

### What are Lists in React?

Lists allow you to render multiple similar components from an array of data - like showing a list of products, users, or todos.

### 🌍 Real-World Analogy

Think of lists like a **playlist**:
- You have multiple songs (data items)
- Each song needs a unique ID (key)
- The music player (React) needs to track which song is which
- When you shuffle or reorder, the IDs help maintain song identity

### Basic List Rendering

```jsx
function SimpleList() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### 🔑 The Importance of Keys

Keys help React identify which items have changed, been added, or removed. They give elements a **stable identity**.

```jsx
// ❌ BAD: No key
{fruits.map(fruit => <li>{fruit}</li>)}

// ⚠️ ACCEPTABLE: Index as key (only if list never reorders)
{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}

// ✅ BEST: Unique ID as key
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

### Why Index as Key is Risky

```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build Project' },
    { id: 3, text: 'Deploy App' }
  ]);

  // ❌ WRONG: Using index
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" />
          {todo.text}
        </li>
      ))}
    </ul>
  );

  /* 
    Problem: If you delete the first item, the indices shift!
    - Item at index 0 is removed
    - Item that was at index 1 becomes index 0
    - React gets confused about which checkbox was checked
  */

  // ✅ CORRECT: Using unique ID
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

### 🎯 Rendering Complex Lists

#### List of Objects

```jsx
function UserList() {
  const users = [
    { id: 101, name: 'Alice', age: 25, role: 'Developer' },
    { id: 102, name: 'Bob', age: 30, role: 'Designer' },
    { id: 103, name: 'Charlie', age: 28, role: 'Manager' }
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
}
```

#### List with Components

```jsx
function ProductCard({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function ProductList() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 999 },
    { id: 'p2', name: 'Mouse', price: 29 },
    { id: 'p3', name: 'Keyboard', price: 79 }
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

#### Nested Lists

```jsx
function CategoryList() {
  const categories = [
    {
      id: 'c1',
      name: 'Electronics',
      items: [
        { id: 'e1', name: 'Phone' },
        { id: 'e2', name: 'Laptop' }
      ]
    },
    {
      id: 'c2',
      name: 'Clothing',
      items: [
        { id: 'cl1', name: 'Shirt' },
        { id: 'cl2', name: 'Pants' }
      ]
    }
  ];

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### 🔄 Dynamic List Operations

#### Adding Items

```jsx
function AddableList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' }
  ]);
  const [nextId, setNextId] = useState(3);

  const addItem = () => {
    const newItem = {
      id: nextId,
      text: `Item ${nextId}`
    };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### Removing Items

```jsx
function RemovableList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' }
  ]);

  const removeItem = (idToRemove) => {
    setItems(items.filter(item => item.id !== idToRemove));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => removeItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
```

#### Updating Items

```jsx
function EditableList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Project', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{
            textDecoration: task.completed ? 'line-through' : 'none'
          }}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
```

### 🎨 Filtering and Sorting Lists

```jsx
function FilterableList() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const items = [
    { id: 1, name: 'Apple', category: 'fruit', price: 2 },
    { id: 2, name: 'Carrot', category: 'vegetable', price: 1 },
    { id: 3, name: 'Banana', category: 'fruit', price: 3 }
  ];

  // Filter items
  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
      </select>

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### ✅ Do's and ❌ Don'ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use unique, stable IDs as keys | Use array index if list can reorder |
| Use `map()` for transforming arrays | Use `forEach()` (doesn't return) |
| Extract list items into components | Generate keys during render (`key={Math.random()}`) |
| Keep keys consistent between renders | Use non-unique values as keys |

---

## 🎯 Best Practices & Common Mistakes

### 🌟 Best Practices

#### 1. State Management

```jsx
// ✅ Keep state minimal and derive other values
function UserProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  // ✅ GOOD: Derived value, not stored in state
  const fullName = `${firstName} ${lastName}`;

  return <h1>{fullName}</h1>;
}

// ❌ Don't store derived data
function UserProfileBad({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [fullName, setFullName] = useState(`${user.firstName} ${user.lastName}`);

  // Now you have to keep fullName in sync - extra complexity!
  return <h1>{fullName}</h1>;
}
```

#### 2. Event Handlers

```jsx
// ✅ Name event handlers with 'handle' prefix
function Form() {
  const handleSubmit = (e) => { ... };
  const handleChange = (e) => { ... };
  const handleClick = () => { ... };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
```

#### 3. Component Organization

```jsx
// ✅ Organize component with logical sections
function MyComponent() {
  // 1. State declarations
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 2. Event handlers
  const handleIncrement = () => setCount(count + 1);
  const handleNameChange = (e) => setName(e.target.value);

  // 3. Effects (we'll learn this later)
  useEffect(() => { ... }, [count]);

  // 4. Return JSX
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

### ⚠️ Common Mistakes

#### 1. Mutating State Directly

```jsx
// ❌ WRONG: Direct mutation
function TodoListBad() {
  const [todos, setTodos] = useState(['Task 1']);

  const addTodo = () => {
    todos.push('Task 2');  // ❌ Mutates array!
    setTodos(todos);       // React won't re-render
  };

  return <ul>{/* ... */}</ul>;
}

// ✅ CORRECT: Create new array
function TodoListGood() {
  const [todos, setTodos] = useState(['Task 1']);

  const addTodo = () => {
    setTodos([...todos, 'Task 2']);  // ✅ New array
  };

  return <ul>{/* ... */}</ul>;
}
```

#### 2. Calling Functions in JSX

```jsx
// ❌ WRONG: Function is called immediately
<button onClick={handleClick()}>Click</button>

// ✅ CORRECT: Function reference
<button onClick={handleClick}>Click</button>

// ✅ CORRECT: Arrow function for arguments
<button onClick={() => handleClick(id)}>Click</button>
```

#### 3. Incorrect Conditional Rendering

```jsx
// ❌ WRONG: Can render 0
function Messages({ count }) {
  return (
    <div>
      {count && <p>{count} messages</p>}
      {/* If count = 0, it renders "0" */}
    </div>
  );
}

// ✅ CORRECT: Explicit boolean
function Messages({ count }) {
  return (
    <div>
      {count > 0 && <p>{count} messages</p>}
    </div>
  );
}
```

#### 4. Missing Keys or Bad Keys

```jsx
// ❌ WRONG: No keys
{items.map(item => <li>{item}</li>)}

// ⚠️ RISKY: Index as key (avoid if list reorders)
{items.map((item, i) => <li key={i}>{item}</li>)}

// ❌ WRONG: Non-unique keys
{items.map(item => <li key="same-key">{item}</li>)}

// ✅ CORRECT: Unique, stable IDs
{items.map(item => <li key={item.id}>{item}</li>)}
```

#### 5. Not Using Functional Updates

```jsx
// ❌ WRONG: Doesn't work well with multiple updates
const incrementThree = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};

// ✅ CORRECT: Use previous state
const incrementThree = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};
```

---


### 💭 Conceptual Questions to Test Understanding

1. Why do we use `setCount(count + 1)` instead of `count = count + 1`?
2. What happens if you call `setCount()` multiple times in the same function?
3. Why is using index as a key problematic for dynamic lists?
4. What's the difference between `onClick={handleClick}` and `onClick={() => handleClick()}`?
5. When should you use `&&` vs ternary operator for conditional rendering?

---

## 📖 Quick Reference

### useState Cheat Sheet
```jsx
// Declaration
const [state, setState] = useState(initialValue);

// Updating
setState(newValue);                  // Direct value
setState(prev => prev + 1);          // Functional update

// Objects
setState({ ...state, key: value });  // Merge properties

// Arrays
setState([...state, newItem]);       // Add item
setState(state.filter(item => ...)); // Remove item
setState(state.map(item => ...));    // Update item
```

### Event Handler Patterns
```jsx
// Simple
<button onClick={handleClick}>Click</button>

// With arguments
<button onClick={() => handleClick(id)}>Click</button>

// Event object
<input onChange={(e) => handleChange(e.target.value)} />
```

### Conditional Rendering Patterns
```jsx
// Ternary
{condition ? <ComponentA /> : <ComponentB />}

// Logical AND
{condition && <Component />}

// If-else
if (condition) return <ComponentA />;
return <ComponentB />;
```

### List Rendering Pattern
```jsx
{items.map(item => (
  <Component key={item.id} data={item} />
))}
```

---

**Happy Coding! 🎨💻**

Remember: Every expert was once a beginner. Keep practicing, stay curious, and don't fear breaking things - that's how you learn! 🌱✨
