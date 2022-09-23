import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { TidingsStateType } from "@core/interfaces";

const initialState: TidingsStateType = {
  message: "",
  variant: "",
  props: {},
};

export const tidingsSlice = createSlice({
  name: "tidings",
  initialState,
  reducers: {
    set: (state, action) => ({ ...action.payload }),
    reset: () => ({ ...initialState }),
  },
});

export default tidingsSlice.reducer;
