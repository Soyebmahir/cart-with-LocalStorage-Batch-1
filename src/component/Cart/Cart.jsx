/* eslint-disable react/prop-types */

import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let Shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    console.log(product.price);
    totalPrice = totalPrice + product.price * product.quantity;
    Shipping = Shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  let tax = 0;
  tax = (totalPrice * 5) / 100;
  let grandTotal = totalPrice + Shipping + tax;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h1>Items : {quantity}</h1>
      <h1>Total Price:{totalPrice}</h1>
      <h1>Shipping:{Shipping}</h1>
      <h1>Tax:{tax}</h1>
      <h2>Grand Total:{grandTotal}</h2>
    </div>
  );
};

export default Cart;
