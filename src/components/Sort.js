import React from 'react';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';
import "./Sort.css"
const Sort = () => {

  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

  return (
    <div className='sort-section'>
      <div className='view-buttons'>
        <button className={grid_view ? "view-active view-btn" : "view-btn"}onClick={setGridView}><BsFillGridFill className="view-icon"></BsFillGridFill></button>
        <button className={!grid_view ? "view-active view-btn" : "view-btn"}onClick={setListView} ><BsList className="view-icon"></BsList></button>
      </div>
      <div >
        <p className='product-quantity'>{`${filter_products.length} Product Available`}</p>
      </div>
      <div >
        <form action='#' >
          <label htmlFor='sort'>
            <select className="sort-dropdown" name='sort' id='sort' onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Sort