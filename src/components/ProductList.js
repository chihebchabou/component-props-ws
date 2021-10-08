import React from 'react';
import ProductItem from './ProductItem';
import { products } from '../products';

const ProductList = () => {
  return (
    <div className="row">
      {products.map((product, i) => (
        <ProductItem title="Product" product={product} key={i}>
          <span className="badge bg-secondary">{product.id}</span>
        </ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
