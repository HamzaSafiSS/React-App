import { useState } from "react";

export default function Form({ handleAdd }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault(); //It prevents the default behavior of the form — which is to reload the page (submit to a server).

    if (!description) return;

    const newItem = {
      description, quantity, packed: false, id: Date.now()
    };
    handleAdd(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you neeed for your Trip</h3>
      <select value={quantity} onChange={q => setQuantity(Number(q.target.value))}>
        {Array.from({ length: 20 }, (cur, i) => i + 1).map(num => <option key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}
