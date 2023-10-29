import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
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
    console.log(products);
    const saveCart = [];
    //1:get id of the addedProducts
    for (const id in storedCart) {
      //get product from products state with find
      const addedProduct = products.find((product) => id === product.id);
      if (addedProduct) {
        // 3: add quantity
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // 4: add addedProduct to the saveCart
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  function addToCart(product) {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

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
            addtocart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
