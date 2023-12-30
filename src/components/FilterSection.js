import React from 'react';
import {FaCheck} from "react-icons/fa";
import { useFilterContext } from '../context/filter_context';
import './FilterSection.css'

const FilterSection = () => {
  const {
    filters: { text, color, price, maxPrice, minPrice, category},
    updateFilterValue, all_products, clearFilters
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };


  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <>
    <div>
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          className='search-input'
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
    </div>
    <div >
        <h3 className='filter-heading'>Category</h3>
        <div className='category-data'>
          {categoryData.map((curElem, index) => {
            return (
              <button
                id="category-button"
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "category-active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
     </div>
     <div className="filter-company">
        <h3 className='filter-heading'>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className='search-input'

            // className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3 className='filter-heading'>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle-f active" : "btnStyle-f"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3 className='filter-heading'>Price</h3>
        <p className='filter-price'>
           Price={price} 
        </p>
        <input
          className='filter-range'
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </>
  )
}

export default FilterSection