import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../../types/product'

export interface IState {
  carts: ICart[],
  favorites: ICart[],
  products: ICart[],
  productsSearch: string,
  totalQuantity: number,
  totalPrice: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    favorites: [],
    products: [],
    productsSearch: "",
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addCart: (state: IState, action) => {
      const find = state.carts.findIndex((item) => item.id === action.payload.id)
      // action.payload.quantity = 1
      if (find >= 0) {
        state.carts[find].quantity += 1
      } else {
        state.carts.push(action.payload)
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.carts.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { discount, quantity } = cartItem;
          console.log(discount, quantity);
          const itemTotal = discount * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    removeAllCart: (state) => {
      state.carts = [];
    },
    removeItemFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
    removeAllFavorite: (state) => {
      state.favorites = [];
    },
    increaseItemQuantity: (state: IState, action) => {
      // console.log("state:", state.carts);
      // console.log("action:", action.payload);

      state.carts = state.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state: IState, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity = 1 };
        }
        return item;
      });
    },
    addFavorite: (state: IState, action: any) => {
      state.favorites.push(action.payload)
    },
    searchProducts: (state: IState, action) => {
      state.productsSearch = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart, removeItem, getCartTotal, increaseItemQuantity, decreaseItemQuantity, removeAllCart, addFavorite, searchProducts, removeItemFavorite, removeAllFavorite } = cartSlice.actions

export default cartSlice.reducer