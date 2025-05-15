
function App() {
  return (
    <>
    <Header />
    <Menu />
    <Footer />
    </>
  )
}


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "public/pizzaImage/pizza1.jpg",
    soldOut: false,
  },
];

function Header() {
  return  <header className="header">
             <h1>Fast React Pizza Co.</h1>
          </header>
}

function Menu() {

  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaNum = pizzas.length

        return <main className="menu">
                  <h2>Menu</h2>
                  {
                    pizzaNum > 0 ?  <ul className="pizzas">
                    {
                      pizzas.map((pizza)=> <Pizza  pizzaObj={pizza} key={pizza.name}></Pizza>)
                    } 
                  </ul> : <p>We are working on menu come back Later.</p>
                  }

               </main>
} 
                       
function Pizza({pizzaObj}) {
  
   if ( pizzaObj.soldOut ) return <p>Sold Out</p> 
  return <li className="pizza">
            <img src={pizzaObj.photoName}></img>
            <div className="container">
              <h3>{pizzaObj.name}</h3>
              <p>{pizzaObj.ingredients}</p>
              <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
            </div>
         </li>
}




function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <=closeHour

  return <footer className="footer">
    {isOpen ? (
      <div className="order">
      <p>we are open until {closeHour}:00 come and visit us or Order online.</p>
      <button className="btn">Order</button>
      </div>
    ) : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
  </footer>
}

export default App
