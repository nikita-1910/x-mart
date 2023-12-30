import React from 'react';
import Product from './Product';
import "./Features.css"
import {useProductContext} from "../context/product_context"
import { NavLink } from 'react-router-dom';
const Features = () => {
    const {isLoading, featureProducts}=useProductContext();

    if(isLoading){
        return <div>......Loading</div>
    }
    // console.log(featureProducts);
    return (
        <div className='features-box'>
       
            <div className="cards">
                {featureProducts.map((curElem)=>{
                   return <Product key={curElem.id} {...curElem}/>
                })}
                {/* <Product name="Nikita"/> */}
            </div>

            <div className='ab'>
                <NavLink to="/products">
                <button className='btn'>Explore More</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Features