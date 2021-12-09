import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddProduct.module.css';

const AddProduct = (props) => {
  const [enteredProductName, setEnteredProductName] = useState('');
  const [enteredImageUrl, setEnteredImageUrl] = useState('');
  const [enteredProductCount, setEnteredProductCount] = useState('');
  const [enteredProductWidth, setEnteredProductWidth] = useState('');
  const [enteredProductHeight, setEnteredProductHeight] = useState('');
  const [enteredProductWeight, setEnteredProductWeight] = useState('');
  const [enteredProductComment, setEnteredProductComment] = useState('');
  const addProductHandler = (event) => {
    event.preventDefault();
    props.onAddProduct(enteredProductName, enteredImageUrl, enteredProductCount, enteredProductWidth, enteredProductHeight, enteredProductComment);
    setEnteredProductName('');
    setEnteredImageUrl('');
    setEnteredProductCount('');
    setEnteredProductWidth('');
    setEnteredProductHeight('');
    setEnteredProductWeight('');
    setEnteredProductComment('');
  };
  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };
  const imageUrlChangeHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };
  const productCountChangeHandler = (event) => {
    setEnteredProductCount(event.target.value);
  };
  const productWidthChangeHandler = (event) => {
    setEnteredProductWidth(event.target.value);
  };
  const productHeightChangeHandler = (event) => {
    setEnteredProductHeight(event.target.value);
  };
  const productWeightChangeHandler = (event) => {
    setEnteredProductWeight(event.target.value);
  };
  const productCommentChangeHandler = (event) => {
    setEnteredProductComment(event.target.value);
  };
  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addProductHandler}>
          <label htmlFor="product-name">Product name</label>
          <input
            id="product-name"
            type="text"
            value={enteredProductName}
            onChange={productNameChangeHandler}
          />
          <label htmlFor="image-url">Image URL</label>
          <input
            id="image-url"
            type="text"
            value={enteredImageUrl}
            onChange={imageUrlChangeHandler}
          />
          <label htmlFor="product-count">Product count</label>
          <input
            id="product-count"
            type="number"
            value={enteredProductCount}
            onChange={productCountChangeHandler}
          />
          <label htmlFor="product-width">Product width</label>
          <input
            id="product-width"
            type="number"
            value={enteredProductWidth}
            onChange={productWidthChangeHandler}
          />
          <label htmlFor="product-height">Product height</label>
          <input
            id="product-height"
            type="number"
            value={enteredProductHeight}
            onChange={productHeightChangeHandler}
          />
          <label htmlFor="product-weight">Product weight</label>
          <input
            id="product-weight"
            type="number"
            value={enteredProductWeight}
            onChange={productWeightChangeHandler}
          />
          <label htmlFor="product-comment">Comments</label>
          <textarea 
          id="product-comment"
          value={enteredProductComment}
          onChange={productCommentChangeHandler}
          >

          </textarea>
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
