import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product2 from "./pages/Product2"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App