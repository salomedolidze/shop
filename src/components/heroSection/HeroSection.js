import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Container, Row,Col} from "reactstrap"
import heroImg from "../../assets/images/hero-img.png"
const HeroSection = () => {
    const year=new Date().getFullYear

  return (
    <section className='hero_section'>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="hero__content">
            <p className="hero__subtitle">Trending product in {year}</p>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur facere sequi voluptatibus voluptates porro reiciendis natus doloribus illo distinctio soluta eveniet nesciunt modi voluptatem atque omnis, beatae sint sed quasi!</p>
            <motion.button whileTap={{scale:1.2}} className='buy__btn'>
             <Link to="shop">
             SHOP NOW
              </Link> 
            </motion.button>
          </div>
        </Col>
<Col  lg="6" md="6">
<div className="hero__img">
<img src={heroImg} alt="heroimg"/>
</div>
</Col>
      </Row>
    </Container>

  </section>
  )
}

export default HeroSection