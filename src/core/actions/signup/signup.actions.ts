import { createAsyncThunk } from "@reduxjs/toolkit";

//Reducer
import { tidingsSlice } from "@core/reducers/tidings";

//Constants
import { SIGNUP_CONSTANTS } from "./signup.constants";
import { TIDINGS_CONSTANT } from "@utils";

//Services
import { AuthServices } from "@services";

//PropTypes
type signupType = {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
};

const { SUCCESS, INFO, ERROR } = TIDINGS_CONSTANT;

const handleSignup = createAsyncThunk(
  SIGNUP_CONSTANTS.SIGNUP_POST,
  async (
    { email, password, role, firstName, lastName }: signupType,
    { dispatch }
  ) =>
    AuthServices.signup({ email, password, role, firstName, lastName })
      .then((response) => {
        dispatch(
          tidingsSlice.actions.set({
            message: "Account created successfully",
            variant: SUCCESS,
          })
        );
        return response;
      })
      .catch((error) => {
        dispatch(
          tidingsSlice.actions.set({
            message: error.message,
            variant: ERROR,
          })
        );
        setTimeout(() => dispatch(resetSignupState()), 5000);
        throw new Error(error);
      })
);

const resetSignupState = createAsyncThunk(
  SIGNUP_CONSTANTS.RESET_SIGNUP_STATE,
  async () => {
    return true;
  }
);

export { resetSignupState, handleSignup };
