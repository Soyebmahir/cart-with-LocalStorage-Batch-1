import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function addtocart(product) {
    console.log(product);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addtocart={addtocart}
          ></Product>
        ))}
      </div>
      <div>
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
