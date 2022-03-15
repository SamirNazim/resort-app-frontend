import React from 'react'
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import PropertyType from "../components/PropertyType"
import Footer from "../components/Footer"
import Bestsellers from '../components/Bestsellers'
const HomePage = () => {
 
  return (
     <div className='homepage-container'>
    <Header />
      <Carousel />
      <PropertyType />
      <Bestsellers/>
    <Footer />
    </div>
  )
}

export default HomePage