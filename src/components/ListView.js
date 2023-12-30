import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ListView.css"

const ListView = ({ products }) => {
  return (
    <div>
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        
        return (
          
          <div className='ListView'>
            
            <figure className='product-list-image'>
              <img src={image} alt={name} className='pic'/>
            </figure>
            <div className='product-list-description'>
              <h3 className='product-heading'>{name}</h3>
              <p className='product-price'>
                MRP : {price}
              </p>
              <p className='product-description'>{description.slice(0, 90)}...</p>
              <NavLink to={`/singleproduct/${id}`} >
                <button className='product-readmore' > Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ListView