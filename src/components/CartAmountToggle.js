import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import "./CartAmountToggle.css"
const CartAmountToggle = ({setIncrease, setDecrease, amount}) => {
  return (
    <div className='quantity-section'>
        <button onClick={()=>setDecrease()} className='quantity-button'><FaMinus className='quantity-icons'/></button>
        <p className='quantity'>{amount}</p>
        <button onClick={()=>setIncrease()} className='quantity-button'><FaPlus className='quantity-icons'/></button>
    </div>
  )
}

export default CartAmountToggle