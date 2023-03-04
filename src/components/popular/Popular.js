import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import ProductList from '../UI/ProductList'
import products from "../../assets/data/products"
import Title from '../title/Title'

const Popular = () => {
    const [popularProduct,setPopularProduct]=useState()
    

    useEffect(()=>{
        const filteredPopularProduct=products.filter((item)=>item.category==="watch")


        setPopularProduct(filteredPopularProduct)

    },[])

  return (
    <section className='popular__category '>
    <Container>
        <Row>
            <Title title="Popularin Category"/>
            
            <ProductList data={popularProduct}/>
           
        </Row>
    </Container>

</section>
  )
}

export default Popular