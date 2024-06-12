import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart } from "../../types/product";
import { getCategories } from "../../lib/category";

export interface IState {
  listProducts: ICart[],
}

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const products = await getCategories()
    // console.log(products.data);
    return products?.data;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    listCategories: []
  },
  reducers: {
    // setUserName: (state, action) => {
    //   state.userName = action.payload.name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.listCategories = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { } = categorySlice.actions;

export default categorySlice.reducer;
