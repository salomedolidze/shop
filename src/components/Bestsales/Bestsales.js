import React from 'react'
import { useState ,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import Title from '../title/Title'
import ProductList from '../UI/ProductList'
import products from '../../assets/data/products'
const Bestsales = () => {
  const [bestSaleProducts,setBestSaleProducts]=useState([])

  useEffect(()=>{
    const filteredBestSaleProducts=products.filter((item)=>item.category==="sofa")
    setBestSaleProducts(filteredBestSaleProducts)

},[])
  return (
    <section className='Best__Sales'>
    <Container>
        <Row>
            <Title title="Best Sales"/>
            <ProductList data={bestSaleProducts}/>
        </Row>
    </Container>

</section>
  )
}

export default Bestsales