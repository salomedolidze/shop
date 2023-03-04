import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import ProductList from '../UI/ProductList'
import products from "../../assets/data/products"
import Title from '../title/Title'



const Trending = () => {
    const [trendingProduct,setTrendingProduct]=useState([])
    useEffect(()=>{
        const filteredProducts=products.filter((item)=>item.category==="chair")
        setTrendingProduct(filteredProducts)

    },[])
  return (
    <section className='trending__products'>
        <Container>
            <Row>
                <Title title="Trending Product"/>
                
                <ProductList data={trendingProduct}/>
            </Row>
        </Container>

    </section>
  )
}

export default Trending