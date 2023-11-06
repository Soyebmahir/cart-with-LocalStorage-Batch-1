/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let saveCart = [];
    console.log(storedCart);
    console.log(products);
    // 1: get id
    for (const id in storedCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  function addtocart(product) {
    let newCart = [...cart, product];

    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
