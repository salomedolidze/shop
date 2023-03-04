import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSections from "../components/UI/CommonSections";
import { Container,Row , Col} from "reactstrap";
import Tr from "../components/tr/Tr";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
 const CartItems = useSelector((state)=>state.cart.cartItems)
 const totalAmount=useSelector((state)=>state.cart.totalAmount)
 console.log("totalAmount",totalAmount)
 console.log("CartItems",CartItems)

  return <Helmet title="Cart">
    <CommonSections title="Shopping Cart"/>
    <section>
      <Container>
        <Row>
          <Col lg="9">
            {CartItems.length===0 ? <h2 className="fs-4 text-center">No item added to the cart</h2>: <table className="table bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {CartItems.map((item,index)=>(
                 <Tr item={item} key={index}/>
                ))}
              </tbody>
            </table>}
            
           
          </Col>
          <Col lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">subtotal
              <span className="fs-4 fw-bold">$ {totalAmount}</span>
</h6>
            </div>
            <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
            <div>
            
              <button className="buy__btn w-100 ">
                <Link to="/checkout"> CheckOut</Link>
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>;
};


export default Cart;
