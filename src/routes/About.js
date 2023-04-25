import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MainImage from '../components/MainImage'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <MainImage heading="About Me" text="I am a friendly Full Stack Developer" />
      <AboutContent/>
      <Footer />
    </div>
  );
}

export default About
