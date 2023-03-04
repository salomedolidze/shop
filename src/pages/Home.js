import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Services from '../components/services/Services'

 import "../styles/home.css"

import Trending from '../components/Trending/Trending'
import Bestsales from '../components/Bestsales/Bestsales'
import Timer from '../components/timer/Timer'
import NewArrivals from  "../components/newArrivals/NewArrivals"
import Popular from '../components/popular/Popular'
import HeroSection from '../components/heroSection/HeroSection'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <Helmet title={"home"}>
      <HeroSection/>
      <Services/>
      <Trending/>
      <Bestsales/>
      <Timer/>
      <NewArrivals/>
      <Popular/>
    </Helmet>
  )
}

export default Home