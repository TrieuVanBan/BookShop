import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addUser, getUsers } from "../../lib/user";
import { IComment } from "../../types/comment";
import { addComment, getComments } from "../../lib/comment";

export interface IState {
  listComments: IComment[],
}

export const fetchAddComment = createAsyncThunk(
  "comments/fetchComment",
  async (data: IComment) => {
    const comment = await addComment(data)
    return comment?.data;
  }
);

export const fetchListUsers = createAsyncThunk(
  "comments/fetchListUsers",
  async () => {
    const listComments = await getComments()
    // console.log(listComments.data);
    return listComments?.data;
  }
);

export const userSlice = createSlice({
  name: "comments",
  initialState: {
    listComments: [],
  },
  reducers: {
    // setUserName: (state, action) => {
    //   state.userName = action.payload.name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.listComments = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { } = userSlice.actions;

export default userSlice.reducer;
