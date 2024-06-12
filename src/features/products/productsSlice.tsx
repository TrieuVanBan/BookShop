import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICart } from "../../types/product";
import { filterPro, getProducts, readProduct } from "../../lib/product";

export interface IState {
  listProducts: ICart[],
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts()
    // console.log(products.data);
    return products?.data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "products/fetchProductDetail",
  async (id: number) => {
    const detailProduct = await readProduct(id)
    // console.log(detailProduct.data);
    return detailProduct?.data;
  }
);

export const fetchProductId = createAsyncThunk(
  "products/fetchProductId",
  async (idProduct: number) => {
    const productId = await filterPro(idProduct)
    console.log(productId.data);
    return productId?.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    listProducts: [],
    product: {},
  },
  reducers: {
    // setUserName: (state, action) => {
    //   state.userName = action.payload.name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.listProducts = action.payload;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(fetchProductId.fulfilled, (state, action) => {
        console.log(action.payload);
        state.product = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions;

export default productsSlice.reducer;
