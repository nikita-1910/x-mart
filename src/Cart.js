import React from 'react';
import { useCartContext } from './context/cart_context';
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='outer-box empty'>
        <h3 className='empty-heading'>No Item in Cart </h3>
        <div >
          <NavLink to="/products">
            <button className="empty-btn "> Continue Shopping </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='outer-box'>
        <div className='outer-container'>
          <div className='heading-grid head'>
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>

          <hr />
          <div className="cart-two-button">
            <NavLink to="/products">
              <button className="btn continue"> Continue Shopping </button>
            </NavLink>
            <button className="btn" onClick={clearCart}>
              Clear cart
            </button>
          </div>
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div className='total'>
                <p style={{ fontWeight: "bold" }}>Subtotal:</p>
                <p>
                  Price={total_price}
                </p>
              </div>
              <div className='total'>
                <p style={{ fontWeight: "bold" }}>Shipping fee:</p>
                <p>
                  Price={shipping_fee}
                </p>
              </div>
              <hr />
              <div className='total'>
                <p style={{ fontWeight: "bold" }}>Order total:</p>
                <p>
                  Price={shipping_fee + total_price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart