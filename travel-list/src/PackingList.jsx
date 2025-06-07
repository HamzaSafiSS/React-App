import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ items, handleDelete, onToggle, setItems }) {
  const [sortBy, setSortBy] = useState('input');

  function handleClear() {
    setItems([]);
  }

  let listedItems;

  if (sortBy === 'input') listedItems = items;
  if (sortBy === 'description') listedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') listedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {listedItems.map(item => <Item key={item.id} handleDelete={handleDelete} item={item} onToggle={onToggle}></Item>)}
      </ul>
      <div className="">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by packed</option>
        </select>
        <button onClick={() => handleClear()}>Clear List</button>
      </div>
    </div>
  );
}
