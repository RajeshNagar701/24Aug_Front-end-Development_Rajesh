
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound";

import Header from "./component/Header";
import Footer from "./component/Footer";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<><Header/> <Home/> <Footer/></>}></Route>
        <Route path="/index" element={ <><Header/><Home/> <Footer/></>}></Route>
        <Route path="/about" element={ <><Header/><About/> <Footer/></>}></Route>
        <Route path="/contact" element={ <><Header/><Contact/><Footer/></> }></Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
   </>
  );
}

export default App;
