import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { total_item } = useCartContext();
  return (
    <>
      <header className="headerr">
        <nav>
          <div className="logo">
            <a href="/">X-<span>MART</span></a>
          </div>
          <input type="checkbox" id="menu-toggle"/>
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <li><a href="/signup">SignUp</a></li> */}
        <li>
          <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item"> {total_item} </span>
          </NavLink>

        </li>
      </ul>
        </nav>
      </header>
    </>
  )
}

export default Header