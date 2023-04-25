import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MainImage from '../components/MainImage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <MainImage heading="CONTACT me" text="Let's have a chat" />
      <Form/>
      <Footer />
    </div>
  );
}

export default Contact
