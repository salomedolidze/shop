import { createSlice } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
// const persistedReducer = persistConfig(persistConfig)
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);


const initialState = {
cartItems:[],
totalAmount:0,
tottalQuantity:0
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem:(state,action)=>{
        const newItem=action.payload;
        const existingItem=state.cartItems.find((item)=>item.id===newItem.id)

        state.tottalQuantity++

        if(!existingItem){
            state.cartItems.push({
                id:newItem.id,
                productName:newItem.productName,
                imgUrl:newItem.imgUrl,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price
            })
        }
        else{
            existingItem.quantity++
            existingItem.totalPrice=Number( existingItem.totalPrice)+Number(newItem.price)
        }

        state.totalAmount=state.cartItems.reduce((total,item)=>total+Number(item.price)*Number(item.quantity),0)
        
    },

    deleteItem:(state,action)=>{
      const id=action.payload;
      const existingItem=state.cartItems.find((item)=>item.id===id)

      if(existingItem.quantity>1){
        existingItem.quantity-=1
        
      
        state.tottalQuantity=state.tottalQuantity-existingItem.quantity
      }else{
              state.cartItems=state.cartItems.filter((item)=>item.id!==id)

      }

      state.totalAmount=state.cartItems.reduce((total,item)=>total+Number(item.price)*Number(item.quantity),0)

     
  }
  
      
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReduces = combineReducers({
  user: cartSlice.reducer,
 
});

const persistedReducer = persistReducer(persistConfig, rootReduces);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);