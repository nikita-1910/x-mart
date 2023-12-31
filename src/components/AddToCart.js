import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import "./AddToCart.css"
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <div>
            <p className='color-font'>
                Color : {colors.map((curColor, index) => {
                    return (
                        <button
                            key={index}
                            style={{ backgroundColor: curColor }}
                            className={color === curColor ? "btnStyle-f active" : "btnStyle-f"}
                            onClick={() => setColor(curColor)}>
                            {color === curColor ? <FaCheck className="checkStyle" /> : null}
                        </button>
                    );
                })}
            </p>
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
                <button className='add-to-cart-btn'>
                    Add To Cart
                </button>
            </NavLink>
        </div>
    )
}

export default AddToCart