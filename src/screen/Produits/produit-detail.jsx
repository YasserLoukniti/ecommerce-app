import React from 'react';

const ProductDetail = ({ name, price, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetail;
