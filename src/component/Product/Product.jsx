import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);

  const { name, price, seller, ratings, img } = props.product;
  //   let { addtocart } = props.addtocart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <h6>Price: {price}</h6>
      <h6>Seller: {seller}</h6>
      <h6>Rating: {ratings}</h6>
      <button
        onClick={() => {
          props.addtocart(props.product);
        }}
        className="btn-cart"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
