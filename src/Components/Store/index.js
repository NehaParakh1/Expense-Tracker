import AuthReducers from "./AuthReducers";
import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./ExpenseReducer";
import ThemeReducer from "./ThemeReducer";

const store= configureStore({ reducer:{auth:AuthReducers, expense:ExpenseReducer, theme:ThemeReducer}})

export default store;