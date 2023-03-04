import React from 'react'
import counterImg from '../../assets/images/counter-timer-img.png'
import { motion } from 'framer-motion'
import {Container, Row,Col} from "reactstrap"
import "./timer.css"
import Clock from '../UI/Clock'
import { Link } from 'react-router-dom'
const Timer = () => {
  return (
    <section className='timer_count'>
    <Container>
        <Row>
           <Col lg="6" md="12" className='count_down-col'>
            <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3' >Qualitu Armchair</h3>
            </div>
           
            <Clock/>

            <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to="/shop">
                Visit Store
                </Link>
            </motion.button>
           </Col>

           <Col lg="6" md="6" className='text-end counter__img'>
            <img src={counterImg} alt="counterImg"/>
           </Col>
            
        </Row>
    </Container>

</section>
  )
}

export default Timer