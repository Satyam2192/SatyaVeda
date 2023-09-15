import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
const App = () => {
  

  return (
   
    
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};

export default App;