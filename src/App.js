import React from 'react';
import './style.css';
import { useState } from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? 'red' : 'green' }}>
      {product.title}
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
      <div>
        <div>
          <Mybutton count={count} onClick={handleClick} />

          <Mybutton count={count} onClick={handleClick} />
          <Mybutton count={count} onClick={handleClick} />
        </div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </>
  );
  function Mybutton({ count, onClick }) {
    return (
      <button count={count} onClick={onClick}>
        butonclick {count}
      </button>
    );
  }
}
