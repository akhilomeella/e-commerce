import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/icon-cart.svg";
import dp from "../images/image-avatar.png";
import "./assets/navbar.css";
import Home from "./Home";
import { useState } from "react";

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // const addItemToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };
  return (
    <div>
      <div className="flex gap-x-8 items-end text-[#666970] relative">
        <Link to="/" className="font-extrabold text-3xl text-black ">
          sneakers
        </Link>
        <Link to="/collections" className="nav-item">
          Collections
        </Link>
        <Link to="/men" className="nav-item">
          Men
        </Link>
        <Link to="/women" className="nav-item">
          Women
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>

        <div className=" flex gap-x-10 justify-between items-end absolute right-24">
          <Link to="/cart">
            <img src={cart} alt="" onMouseMove={togglePopup} />
          </Link>
          <Link to="/account">
            <img src={dp} alt="" className="size-14 relative top-3" />
          </Link>
        </div>
      </div>
      <div>
        {isPopupVisible && (
          <div className="cartpopup">
            <div className="cartpopup-content">
              <div className="flex gap-x-16">
                <p className="font-bold">Cart</p>
                {/* <div className="close-button" onClick={togglePopup}>
                  &times;
                </div> */}
              </div>
              <hr className="my-4" />
              {cartItems.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                {
                  /* <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */
                }
              )}
              {/* <Home addItemToCart={addItemToCart} /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
