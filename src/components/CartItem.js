import React from 'react';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import "./CartItem.css"
const CartItem = ({ id, name, image, color, price, amount }) => {

  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <>
      <div className='heading-grid'>
        <div className='product-details'>
            < img src={image} alt={id} className='cart-product-image' />
            <p style={{'fontSize': 'large'}}>{name}</p>
        </div>
        <div className="cart-hide">
          <p style={{'fontSize': 'large'}}>
            Price={price}
          </p>
        </div>
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrement(id)}
        />
        <div className="cart-hide">
          <p style={{'fontSize': 'large'}}>
            Price={price * amount}
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  )
}

export default CartItem