import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


import productReducer from '../features/products/productsSlice';
import modalReducer from '../features/modal/modalSlice';


const reducer = combineReducers({
  productReducer,
  modalReducer
});

export const store = configureStore({
  reducer
});