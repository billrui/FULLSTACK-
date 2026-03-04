function Product({ name, price, inStock }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ksh{price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
      <hr />
    </div>
  );
}
export default Product