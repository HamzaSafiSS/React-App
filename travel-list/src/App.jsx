import { useState } from "react"

const initialItems = [
  {id:1,description:"Passports",quantity:2,packed:false},
  {id:1,description:"Laptop",quantity:1,packed:true},
  {id:1,description:"Charger",quantity:4,packed:false},
  {id:1,description:"Airpod",quantity:5,packed:true},

]
function App() {

  return (
    <>
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </>
  )
}
function Logo() {
  return (
        <h1>🌴Far Away</h1>
  )
}

function Form() {
  const [description,setDescription] = useState("jdsfjdah")
  const [quantity,setQuantity] = useState(1)
  function handleSubmit(e) { //e = event object from the form submission.
      e.preventDefault() //It prevents the default behavior of the form — which is to reload the page (submit to a server).

      const newItem = {
        description,quantity,packed:false,id: Date.now()
      }
      setDescription("")
      setQuantity(1)
  } 
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you neeed for your Trip</h3>
      <select value={quantity} onChange={q=>setQuantity(Number(q.target.value))}>
        {
          Array.from({length:20},(cur,i)=>i+1).map(num=><option key={num}>{num}</option>)
        }
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return(
      <div className="list">
      <ul>
      {
          initialItems.map(item=><Item key={item.id} item={item}></Item>)
      }
      </ul></div>
  ) 
}

function Item({item}) {
  return (
          <li >
          <span style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity} {item.description}</span>
           <button>❌</button>
          </li>
  )
}

function Stats() {
  return(
   <footer className="stats">
    <em>You have X items in the list and you already X (X%)</em>
   </footer>
  )
}


export default App
