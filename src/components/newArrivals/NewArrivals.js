import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import ProductList from '../UI/ProductList'
import products from "../../assets/data/products"
import Title from '../title/Title'

const NewArrivals = () => {

    const [mobileProduct,setMobileProduct]=useState()
    const [wirelessProduct,setWirelessProduct]=useState()

    useEffect(()=>{
        const filteredMobileProduct=products.filter((item)=>item.category==="mobile")

        const filteredWirelessProduct=products.filter((item)=>item.category==="wireless")

        setMobileProduct(filteredMobileProduct)
        setWirelessProduct(filteredWirelessProduct)

    },[])

  return (
    <section className='new_arrivals'>
    <Container>
        <Row>
            <Title title="New Arrivals"/>
            
            <ProductList data={mobileProduct}/>
            <ProductList data={wirelessProduct}/>

        </Row>
    </Container>

</section>
  )
}

export default NewArrivals