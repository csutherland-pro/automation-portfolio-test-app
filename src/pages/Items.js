import React, { useState } from "react";

export default function Items() {
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };

  return (
    <div>
      <h2>Items Page</h2>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
