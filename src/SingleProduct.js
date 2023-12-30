import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import "./SingleProduct.css"
import { useProductContext } from './context/product_context';
import Star from './components/Star';
import AddToCart from './components/AddToCart';
import MyImage from './components/MyImage';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  // console.log(singleProduct)

  const { id } = useParams();

  const {
    id: alias, name, company, price, description, category, stock, stars, reviews, image} = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  // console.log(id)

  if(isSingleLoading){
    return <div>....Loading</div>
  }
  return (
    <>
      <div className='outer-box'>
        <div className='inner-box'>
          <div className="colum1">
          <MyImage imgs={image} />
          </div>
          <div className='colum2'>
            <div className='product-data'>
              <h2 className='singleproduct-heading'>{name}</h2>
              <Star stars={stars} reviews={reviews}/>
              {/* <p className='price'>MRP : <del>{price+2000}</del></p> */}
              <p className='real-price'>MRP : {price}</p>
              <p className='product-description'>{description}</p>
            </div>
            <div className='warranty'>
              <div className='warranty-single-box'>
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className='warranty-single-box'>
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className='warranty-single-box'>
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <hr/>
            <div className='details'>
              <p className='details-desc'>Available : {stock>0?"In Stock":"Not Available" }</p>
              <p className='details-desc'>ID : {id}</p>
              <p className='details-desc'>Brand : {company}</p>
            </div>
            <hr/>
            {stock && <AddToCart product={singleProduct}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct