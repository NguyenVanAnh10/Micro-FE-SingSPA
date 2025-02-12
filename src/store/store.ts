import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware and devTools options here if needed
});

export default store;
