import "./NavBar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {

    const[click, setClick] = useState(false);
    const handleClick=()=> {
        setClick(!click);
    }

    const[color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >= 1){
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll" , changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">PORTFOLIO</Link>
      <ul className= {click? "nav-menu active" : "nav-menu" }>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/project">PROJECT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT ME</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT ME</Link>
        </li>
      </ul>
      <div className="hamburgers"
      onClick={handleClick}>
         {click ? (<FaTimes size={20} style={{color: '#fff'}}/> ):
        (<FaBars size={20} style={{color: '#fff'}}/>)}
      

        
      </div>
    </div>
  );
};

export default NavBar;
