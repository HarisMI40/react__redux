import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    name: "item1",
    qty: 10,
    category: "sport"
  },
  reducers: {
    update: (state, action) => {
      (state.name = action.payload.name), (state.qty = action.payload.qty);
    }
  }
});

export default itemSlice.reducer;
