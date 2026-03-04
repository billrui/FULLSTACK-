import { useState } from 'react'
import './App.css'
import Product from "./components/Product";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <Product name="Cooking oil"     price={999}  inStock={true}  />
      <Product name="Bed" price={49}   inStock={true}  />
      <Product name="Cooking Gas"   price={79}   inStock={false} />
      <Product name="Laptops"    price={299}  inStock={false} />
    </div>
  );
}
export default App