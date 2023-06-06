import './HomeImage.css';

import React from 'react'
import HomeImg from './../assets/homeImg.jpg';
import { Link } from 'react-router-dom';

const HomeImage = () => {
  return (
    <div className="home">
        <div className="mask">
        <img  className="intro-img" src={HomeImg} alt= 'intro-img'/>
        </div>
        <div className="content">
            <p>Hi, I'M A DEVELOPER</p>
            <h1>Frontend Developer.</h1>
            <div>
            <Link to= "/project" className="btn">Projects</Link>
        <Link to= "/contact" className="btn btn-light">Contact Me</Link>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default HomeImage
