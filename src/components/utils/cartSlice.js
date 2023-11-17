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
    removerItem: (state, action) => {
      state.count = state.count.filter((item) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
    },
  },
});
export let { datafetch, additem, removerItem } = cartSlice.actions;
export default cartSlice.reducer;
