import React from 'react'

import {Routes, Route} from "react-router-dom";


import Index from './pages/Index';
import About from './pages/About';
import Details from './pages/Details';
import Blog from './pages/Blog';
import Price from './pages/Price';
import Product from './pages/Product';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import NotFound from './pages/NotFound';

import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<><Header/> <Index/> <Footer/></>}></Route>
        <Route path="/index" element={ <><Header/><Index/> <Footer/></>}></Route>
        <Route path="/about" element={ <><Header/><About/> <Footer/></>}></Route>
        <Route path="/details" element={ <><Header/><Details/> <Footer/></>}></Route>
        <Route path="/blog" element={ <><Header/><Blog/> <Footer/></>}></Route>
        <Route path="/price" element={ <><Header/><Price/> <Footer/></>}></Route>
        <Route path="/product" element={ <><Header/><Product/> <Footer/></>}></Route>
        <Route path="/service" element={ <><Header/><Service/> <Footer/></>}></Route>
        <Route path="/team" element={ <><Header/><Team/> <Footer/></>}></Route>
        <Route path="/contact" element={ <><Header/><Contact/> <Footer/></>}></Route>
        <Route path="/testimonial" element={ <><Header/><Testimonial/><Footer/></> }></Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;