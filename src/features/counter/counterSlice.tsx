import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   couter: number
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    couter: 2,
    open: false,
  },
  reducers: {
    increment: (state) => {
      state.couter += 1
    },
    decrement: (state) => {
      state.couter > 1 ? state.couter -= 1 : state.couter
    },
    setOpen: (state) => {
      state.open = true
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.couter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setOpen, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer