import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import Products from './landing_page/products/Products';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
import  Signup from "./landing_page/signup/Signup";
import  Login from "./landing_page/signup/Login";
import Home from "./landing_page/signup/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<Navbar/> 
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<Notfound/>}/>
 </Routes>
<Footer/>
 </BrowserRouter>
);

