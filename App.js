import React, { useState } from 'react';

import AddProduct from './components/Products/AddProduct';
import ProductsList from './components/Products/ProductsList';

function App() {
  const [productsList, setProductList] = useState([]);

  const addProductHandler = (pName, pImage, pCount, pWidth, pHeight, pWeight, pComment) => {
    setProductList((prevProductList) => {
      return [
        ...prevProductList,
        { name: pName, image: pImage, count: pCount, width: pWidth, height: pHeight, weight: pWeight, comment: pComment, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddProduct onAddProduct={addProductHandler} />
      <ProductsList products={productsList} />
    </div>
  );
}

export default App;
