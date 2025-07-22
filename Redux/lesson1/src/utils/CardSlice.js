import { createSlice } from '@reduxjs/toolkit';


const initialState={
 items:[]
}


const cartSlice = createSlice({
 name:"cart",
 initialState,
 reducers:{
  AddToCart: (state, action)=>{
   const item = action.payload
   const exist = state.items.find(id=> id.id ===item.id)
   console.log(exist);
   
   
   if(exist){
    console.log("bunday mahsulot alla qachon qo'shilgan!");
    exist.quantity+=1
   }else{
    state.items.push({...item,quantity:1})
   }
  }
 }
})

export  const {AddToCart} = cartSlice.actions

export default cartSlice.reducer