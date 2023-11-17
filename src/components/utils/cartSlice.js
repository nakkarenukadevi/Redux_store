import { createSlice } from "@reduxjs/toolkit";
let cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    count: [],
  },
  reducers: {
    datafetch: (state, action) => {
      state.data = action.payload;
    },
    additem: (state, action) => {
      state.count.push(action.payload);
    },
  },
});
export let { datafetch, additem } = cartSlice.actions;
export default cartSlice.reducer;
