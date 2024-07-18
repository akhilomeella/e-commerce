import React from "react";
import Home from "./Components/Home";
import Collections from "./Components/Collections";
import About from "./Components/About";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="px-44 pt-12">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
