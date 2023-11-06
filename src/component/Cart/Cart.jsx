/* eslint-disable react/prop-types */

import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    // console.log(product.price);
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  let vat = (totalPrice * 2) / 100;
  let grandTotal = totalPrice + shipping + vat;

  return (
    <div className="cart">
      <h1>CART</h1>
      <h2>Total Item {cart.length}</h2>
      <h2>Total Price :{totalPrice}</h2>
      <h2>Shipping Cost :{shipping}</h2>
      <h2>VAT :{vat}</h2>
      <h1>Grand Total :{grandTotal}</h1>
    </div>
  );
};

export default Cart;
