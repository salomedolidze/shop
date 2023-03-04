import React,{useRef,useEffect} from 'react'
import "./header.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png"
import userIcon from '../../assets/images/user-icon.png'
import {motion} from "framer-motion"
import { Container,Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import{cartActions} from "../../redux/slices/cartSlice"

const nav__link=[
    {
        path:"home",
        page:"Home"
    },
    {
        path:"shop",
        page:"Shop"
    },
    {
        path:"cart",
        page:"Cart"
    }
]


const Header = () => {
    const cartItems = useSelector((state)=>state.cart.cartItems)

    console.log("dkjsndkjnsdkjsd",cartItems.length)

    const navigate=useNavigate()
    const totalQuantity=useSelector(state=>state.cart.tottalQuantity)

    const headerRef = useRef(null)
    const menuRef=useRef(null)


    const profileActionRef=useRef(null)

    const stickyHeaderFunc =()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop>150 || document.documentElement.scrollTop>150){
                headerRef.current.classList.add("sticky__header")
            }else{
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc()
        return ()=>window.removeEventListener("scroll",stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle("active__menu")


const navigateToCart = ()=>{
    navigate("/cart")
}

const toggleProfileActions= ()=>profileActionRef.current.classList.toggle("show__profileActions")


  return <header className='header' ref={headerRef}>
<Container>
    <Row>
        <div className='nav__wrapper'>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                    <h1>Multimart</h1>
                   
                </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav__link.map((item,index)=>{
                    return(
                        <li className='nav__item' key={index}>
                            <NavLink to={item.path} className={(navClass)=>navClass.isActive?"nav__active":""}>{item.page} </NavLink>
                        </li>
                    )
                  })}
                </ul>
            </div>
            <div className="nav__icons">
                <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'></span>
                </span>
                <span className="cart__icon" onClick={navigateToCart}>
                <i className='cart__icon' class="ri-shopping-bag-line"></i>
               {cartItems.length>0 &&  <span className='badge'>{totalQuantity}</span>  } </span>

                <div className='profile' onClick={toggleProfileActions}>
                <span><motion.img whileTap={{scale:1.1}} src={userIcon}/></span>
                <div className='profile__actions' ref={profileActionRef}>
                  <Link to="/signup">singup</Link>
                  <Link to="/login">Login</Link>
                </div>
                </div>
               
                <div className="mobile__menu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>
            </div>
            
        </div>
    </Row>
</Container>
  </header>
}

export default Header