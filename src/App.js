import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Login from './Login';
import ErrorPage from "./ErrorPage";
import SingleProduct from './SingleProduct';
import Cart from './Cart';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App