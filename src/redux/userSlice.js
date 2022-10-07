import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser2 = createAsyncThunk("user/update", async () => {
  console.log("getUser 2");
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "John",
      email: "john@gmail.com",
    },
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getUser2.pending]: (state) => {
      state.pending = true;
      console.log("pending");
    },
    [getUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo.name = action.payload;
      console.log("hiiii");
    },
    [getUser2.error]: (state, action) => {
      state.pending = false;
      state.error = true;
      console.log("error");
    },
  },
});

export const { getUserError, getUserStart, getUserSuccess } = userSlice.actions;
export default userSlice.reducer;
