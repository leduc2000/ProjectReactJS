export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPack = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPack / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go."
          : `📢 You have ${numItems} items on your list, and you already packed 
        ${numPack} (${percentage} %`}
      </em>
    </footer>
  );
}
