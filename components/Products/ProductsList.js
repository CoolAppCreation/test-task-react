import React from 'react';

import Card from '../UI/Card';
import classes from './ProductsList.module.css';

const ProductsList = (props) => {
  return (
    <Card className={classes.products}>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            Product name: {product.name}
            <br/>
            Product image url: {product.image}
            <br/>
            Product count: {product.count}
            <br/>
            Product width: {product.width}
            <br/>
            Product height: {product.height}
            <br/>
            Product weight: {product.weight}
            <br/>
            Product comment: {product.comment}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductsList;
