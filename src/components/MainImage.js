import './MainImage.css';

import React, { Component } from 'react'
// import MainImg from "./../assets/MainImg.jpg"

class MainImage extends Component {
    render(){
return (
  <div className="main-img">
    <div className="heading">
      <h1>{this.props.heading}</h1>
      <p>{this.props.text}</p>
    </div>
    {/* <img  className="main-img" src={MainImg} alt= 'intro-img'/> */}
  </div>
);
    }
  
}

export default MainImage
