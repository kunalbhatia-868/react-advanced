import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const  url  = image && image.url;
  console.log(name, image, price);
  return (
    <article className="product">
      <h4>single product</h4>
      <img src={url || defaultImage} alt={name|| 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.proptype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default",
  price: 3.99,
  image: defaultImage,
};

export default Product;
