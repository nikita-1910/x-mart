import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Product.css"
const Product = ( curElem) => {
    const {id, name, image, price, category}=curElem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <header>
                <h2>{category}</h2>
            </header>

            <img src={image} alt={name} />
            <div className="body">
                <p>{name}</p><p>{price}</p>
            </div>

        </div>
        </NavLink>
    )
}

export default Product