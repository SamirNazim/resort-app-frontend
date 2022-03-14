import React from 'react'
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import PropertyType from "../components/PropertyType"
import Footer from "../components/Footer"
const HomePage = () => {
 
  return (
     <div className='homepage-container'>
    <Header />
      <Carousel />
      <PropertyType />
    <Footer />
    </div>
  )
}

export default HomePage