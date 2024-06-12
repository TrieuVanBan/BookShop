import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { addUser, getUsers } from "../../lib/user";

export interface IState {
  listUsers: IUser[],
}

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const user = await getUsers()
    return user?.data;
  }
);

export const fetchAddUser = createAsyncThunk(
  "users/addUser",
  async (data: IUser) => {
    console.log(data);
    const user = await addUser(data)
    return user;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    listUsers: [],
  },
  reducers: {
    // setUserName: (state, action) => {
    //   state.userName = action.payload.name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload;
      })
    // .addCase(fetchAddUser.fulfilled, (state, action) => {
    //   // state.listUsers = action.payload;
    //   console.log(action.payload);

    // })
  },
});

// Action creators are generated for each case reducer function
export const { } = userSlice.actions;

export default userSlice.reducer;
