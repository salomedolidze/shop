import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Helmet from "../components/Helmet/Helmet"
import CommonSections from "../components/UI/CommonSections"

import "../styles/checkout.css"
import { useSelector } from 'react-redux'

const Checkout = () => {
  const totalQty= useSelector(state=>state.cart.tottalQuantity)

  console.log("totalQty",totalQty)

  const totalAmount= useSelector(state=>state.cart.totalAmount)

  let shipping
  if(totalAmount<800){
     shipping=20
  } else{
     shipping=0

  }

  const tottalMoney=totalAmount+shipping

  console.log("shipping",shipping)









  return (
<Helmet title="Checkout">
<CommonSections title="Checkout"/>
<section>
  <Container>
    <Row>
      <Col lg="8">
        <h6 className='mb-4 fw-bold'>Billing Information</h6>
        <Form className='billing__form'>
          <FormGroup className='form__group'>
            <input type='email' placeholder='Enter Your Email'/>
          </FormGroup>

          <FormGroup className='form__group'>
            <input type='number' placeholder='Phone number'/>
          </FormGroup>


          <FormGroup className='form__group'>
            <input type='text' placeholder='Enter Your Name'/>
          </FormGroup>

          <FormGroup className='form__group'>
            <input type='text' placeholder='Street address'/>
          </FormGroup>

          <FormGroup className='form__group'>
            <input type='text' placeholder='City'/>
          </FormGroup>

          <FormGroup className='form__group'>
            <input type='text' placeholder='Postal code'/>
          </FormGroup>

          <FormGroup className='form__group'>
            <input type='text' placeholder='Country'/>
          </FormGroup>
          

        </Form>
      </Col>
      <Col lg="4">
        <div className="checkout__cart">
          <h6> Total Qty : <span>{totalQty} items</span></h6>
          <h6> Subtotal : <span>${totalAmount}</span></h6>
          <h6> <span> Shipping : <br/>Free shipping</span><span>${shipping}</span></h6>
          
          <h4>Total Cost : <span>${tottalMoney}</span></h4>
          <button className="buy__btn auth__btn w-100">Place an order</button>
        </div>
        
      </Col>
    </Row>
  </Container>
</section>
</Helmet>  )
}

export default Checkout