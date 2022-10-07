import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itemReducer from "./itemSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer
  }
});
