import React from 'react'
import { Container,Row,Col } from 'reactstrap'

const Title = (props) => {
  return (
    <Col lg="12" className="text-center mb-5">
                    <h2 className='section__title'>{props.title}</h2>
                </Col>
  )
}

export default Title