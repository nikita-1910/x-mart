import React from 'react';
import Product from './Product';
import "./GridView.css"

const GridView = ({ products }) => {
  return (
    <div>
      <div className='grid-view'>
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  )
}

export default GridView;