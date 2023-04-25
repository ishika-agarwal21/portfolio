import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MainImage from '../components/MainImage'
import WorkCard from '../components/WorkCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
       <NavBar/>
       <MainImage heading="PROJECTS." text="Some of my most recent works"/>
       <Work/>
       {/* <WorkCard/> */}
       <Footer/>
    </div>
  )
}

export default Project
