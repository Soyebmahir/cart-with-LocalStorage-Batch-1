/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  // console.log(props);

  // eslint-disable-next-line react/prop-types
  const { name, price, seller, ratings, img } = props.product;
  let { addtocart } = props;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <h6>Price: {price}</h6>
      <h6>Seller: {seller}</h6>
      <h6>Rating: {ratings}</h6>
      <button
        onClick={() => {
          addtocart(props.product);
        }}
        className="btn-cart"
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
