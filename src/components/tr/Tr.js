import React from 'react'
import { motion } from "framer-motion";

import {cartActions} from "../../redux/slices/cartSlice"
import {  useDispatch } from "react-redux";
const Tr=({item})=>{
  const dispatch=useDispatch()

  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
return  <tr >
<td>
  <img src={item.imgUrl} alt="cart img"/>
</td>
<td>{item.productName}</td>
<td>${item.price}</td>
<td>{item.quantity}</td>
<td><motion.i whileTap={{scale:1.2}} 
onClick={deleteProduct}
class="ri-delete-bin-line"></motion.i></td>
</tr>
}


export default Tr