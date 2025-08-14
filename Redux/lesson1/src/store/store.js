import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../utils/CardSlice.js'

export const store = configureStore({
 reducer:{
  cart:cartReducer
 }
})