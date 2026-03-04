import { useState } from 'react'
import './App.css'
import Product from "./components/Product";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <Product name="Laptop"     price={999}  inStock={true}  />
      <Product name="Headphones" price={49}   inStock={true}  />
      <Product name="Keyboard"   price={79}   inStock={false} />
      <Product name="Monitor"    price={299}  inStock={false} />
    </div>
  );
}
export default App