import { createSlice } from "@reduxjs/toolkit";
import { treeState } from "./generate";

export const treeSlice = createSlice({
  name: "tree",
  initialState: treeState,
  reducers: {},
});

export default treeSlice.reducer;
