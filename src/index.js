import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}

const pizzas = pizzaData;

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas && (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose form. All
            from our stone oven, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                name={pizza.name}
                ingradients={pizza.ingredients}
                imgUrl={pizza.photoName}
                price={pizza.price}
                isSoldout={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.isSoldout === true) return null;

  return (
    <li className={`pizza ${props.isSoldout ? 'sold-out' : ''}`}>
      <img src={props.imgUrl} alt="pizzas" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingradients}</p>
        <span>{props.isSoldout ? 'sold out' : props.price + '€'}</span>
      </div>
    </li>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>{new Date().toLocaleDateString()} we are currency open</p>
          <button className="btn">order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
