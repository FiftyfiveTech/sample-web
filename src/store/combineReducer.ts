import signupSlice from "@core/reducers/signup";
import tidingsSlice from "@core/reducers/tidings";

const createReducers = {
  signup: signupSlice,
  tidings: tidingsSlice,
};

export default createReducers;
