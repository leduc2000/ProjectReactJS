const initialItems = [
  { id: 1, description: "Passports", quatity: 2, packed: false },
  { id: 2, description: "Socks", quatity: 12, packed: true },
  { id: 3, description: "Charger", quatity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// windown + . để hiển thị icon
function Logo() {
  return <h1>😉 Far Away 🥇</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 🧧 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
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