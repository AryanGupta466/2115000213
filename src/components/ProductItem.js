import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <img src={product.image} alt={product.title} width="100" />
    </li>
  );
};

export default ProductItem;
