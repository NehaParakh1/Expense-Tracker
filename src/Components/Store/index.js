import AuthReducers from "./AuthReducers";
import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./ExpenseReducer";

const store= configureStore({ reducer:{auth:AuthReducers, expense:ExpenseReducer}})

export default store;