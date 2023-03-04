import React,{useState,useRef,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSections from '../components/UI/CommonSections'
import "../styles/productDetails.css"
import { motion } from 'framer-motion'
import ProductList from "../components/UI/ProductList"
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductDetails = () => {
const [tab,setTab]=useState("desc")

const reviweUser=useRef("")
const reviewMsg=useRef("")

const dispatch=useDispatch()

  const {id}=useParams()
  const product = products.find(item=>item.id===id)

  const [rating,setRating]=useState(null)

  const {imgUrl,productName,price,avgRating,reviews,category,description,shortDesc}=product

  const relatedProducts = products.filter(item=>item.category===category)

  const submitHandler = (e)=>{
    e.preventDefault()

    const reviewUserName = reviweUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName:reviewUserName,
      text:reviewUserMsg,
      rating
    }

    console.log("reviewUserName",reviewUserName,"reviewUserMsg",reviewUserMsg, "rating ", rating)

    console.log("reviewObj",reviewObj)

    toast.success("Review submitted")
  }

  const addToCart = ()=>{
    dispatch(cartActions.addItem({id,image:imgUrl,
    productName,price}))

    toast.success("Product added successfully")
  }


useEffect(()=>{
  window.scrollTo(0,0)
},[product])

  return <Helmet title={productName}>
    <CommonSections  title={productName}/>
    <section className='pt-0'>
      <Container>
        <Row>
        <Col lg="6">
          <img src={imgUrl} alt="category img"/>
        </Col>
        <Col lg="6">
          <div className="product__details">
            <h2>{productName}</h2>
            <div className="product__rating d-flex align-items-center gap-4 mb-4">
              <div>
                <span ><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-half-line"></i></span>
                
              </div>
              <p>(<span> {avgRating} </span>ratings)</p>
            </div>
            <div className='d-flex align-items-center gap-5'>
            <span className='products__price'> $ {price}</span>
            <span>Category: {category}</span>
            </div>
            <p className='mt-3'>{shortDesc}</p>
            
            <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={addToCart}>Add To Cart</motion.button>

          </div>
        </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="tab__wrapper d-flex align-items-cemter gap-5">
            <h6 className={`${tab==='desc' ? "active__tab":""}`} onClick={()=>setTab("desc")}>Description</h6>
            <h6 className={`${tab==='rev' ? "active__tab":""}`} onClick={()=>setTab("rev")}>Reviews ({reviews.length})</h6>
            </div>
            {
              tab==="desc" ? <div className="tab__content mt-5">
              <p>{description}</p>
            </div> : <div className='product__review mt-5'>
              <div className="review__wrapper">
                <ul>
                  {reviews?.map((item,index)=>(
                    <li key={index} className="mb-4">
                      <span>{item.rating} ( rating)</span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
                <div className='review__form'>
                  <h4> Leave Your experience</h4>
                    <form action="" onClick={submitHandler}>
                      <div className="form__group">
                        <input type="text" placeholder='Enter Name' ref={reviweUser}
                        required
                        />
                      </div>
                      <div className="form__group d-flex align-items-center gap-5 rating__group">
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}>1 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(2)}>2 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}>3 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}>4 <i class="ri-star-fill"></i></motion.span>
                      <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}>5 <i class="ri-star-fill"></i></motion.span>
                      </div>
                      <div className="form__group">
                        <textarea rows={4} type="text" placeholder='Review Message...'
                        ref={reviewMsg}
                        required/>
                      </div>
                      <button className="buy__btn">
                        Submit
                      </button>
                    </form>
                </div>
              </div>
            </div>
            }
            
          </Col>
          <Col lg="12" className='mt-5'>
            <h2 className='related__title'>
              You might also like
            </h2>
          </Col>
          <ProductList data={relatedProducts}/>
        </Row>

      </Container>
    </section>
  </Helmet>
}

export default ProductDetails