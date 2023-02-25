import React, { useState } from "react";
import "../style/navbar.css";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import img from "../img/logo.webp";

const Navbar = () => {
  var [isShown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      document.getElementById("SideNav").style.width = "170px";
      isShown = true;
    } else {
      document.getElementById("SideNav").style.width = "0px";
      isShown = false;
    }
  };

  //   const CloseNav = () => {
  //     document.getElementById('SideNav').style.width = "0px"
  //   }

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <nav>
            <div className="logo d-flex ">
              <img src={img} alt="" />
              <a className="mx-2" href="/">
                BOTLIFE
              </a>
            </div>

            <div className="Cnav d-flex">
              <a href="">Product</a>
              <a href="">Pricing</a>
              <a href="">Resource</a>
            </div>

            <div className="RightNav">
              <a href="">Login</a>
              <a href="">Signup</a>
              <span className="Bars" onClick={handleClick}>
                <FaBars />
              </span>
            </div>
          </nav>
        </div>

        <div className="Sidenav" id="SideNav">
          {/* <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span> */}
          <div className="space">
            <a href="/">Home</a>
            <a href="">NEET</a>
            <a href="">Login</a>
            <a href="">Signup</a>
            <a href="logout">Logout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
