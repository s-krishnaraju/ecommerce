import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export const initialState = {};

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
});

export default store;
