import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quatity: 2, packed: false },
//   { id: 2, description: "Socks", quatity: 12, packed: true },
//   { id: 3, description: "Charger", quatity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

// windown + . để hiển thị icon
function Logo() {
  return <h1>😉 Far Away 🥇</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quanlity, setQuanlity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quanlity, package: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setQuanlity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🧧 trip?</h3>
      <select
        value={quanlity}
        onChange={(e) => setQuanlity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quatity} {item.description}
      </span>
      <button>🍁</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>📢 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
