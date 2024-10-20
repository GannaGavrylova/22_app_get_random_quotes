import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./redux/slices/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
