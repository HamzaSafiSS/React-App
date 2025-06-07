import { useState } from "react"
import  Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";


export default function App() {
  const [items,setItems] = useState([]);

  function handleAdd(item) {
    setItems((items)=>[...items, item])
  }

  function handleDelete(id) {
    setItems((items)=>items.filter((item)=>item.id !==id ))
  }

  function onToggle(id) {
      setItems((items)=>items.map(
        (item)=> item.id === id ? {...item, packed:!item.packed} : item
      ))
  }

  return (
    <>
      <Logo></Logo>
      <Form handleAdd={handleAdd}></Form>
      <PackingList items={items} handleDelete={handleDelete} onToggle={onToggle} setItems = {setItems}></PackingList>
      <Stats items={items}></Stats>
    </>
  )
}

