import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogData } from "../interfaces/blogData";
interface BlogState {
  blogs: BlogData[];
}

const initialState: BlogState = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogData>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;
