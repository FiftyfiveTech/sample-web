import { createSlice } from "@reduxjs/toolkit";

//InterFaces
import { SignupState } from "@core/interfaces";

//Action
import { signupActions } from "@core/actions";

//initialState
const initialState: SignupState = {
  isSignupAuth: false,
  firstName: null,
  lastName: null,
  email: null,
  errors: "",
};

//Thunks
const { handleSignup, resetSignupState } = signupActions;

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetError(state) {
      state.errors = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSignup.pending, (state: SignupState) => {
        state.isSignupAuth = true;
      })
      .addCase(handleSignup.fulfilled, (state: SignupState) => {
        state.errors = "";
        state.isSignupAuth = false;
      })
      .addCase(handleSignup.rejected, (state: SignupState, { error }) => {
        state.errors = error.message;
        state.isSignupAuth = false;
      })
      .addCase(resetSignupState.fulfilled, (state: SignupState) => {
        state.errors = "";
      });
  },
});

export default signupSlice.reducer;
