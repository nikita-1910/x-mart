import React from 'react';
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import { useFilterContext } from './context/filter_context';
import "./Products.css"

const Products = () => {



  return (
    <div className='outer-box'>
      <div className='productpage'>
        <div className='product-column-1'>
          <FilterSection />
        </div>
        <div className='product-column-2'>
          <div className='product-column-2-1'>
            <Sort />
          </div>
          <div className='product-column-2-2'>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products