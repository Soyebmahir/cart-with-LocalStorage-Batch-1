/* eslint-disable react/prop-types */

import "./Product.css";

const Product = ({ addtocart, product }) => {
  const { name, price, seller, ratings, img } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <h6>Price: {price}</h6>
      <h6>Seller: {seller}</h6>
      <h6>Rating: {ratings}</h6>
      <button
        onClick={() => {
          addtocart(product);
        }}
        className="btn-cart"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
