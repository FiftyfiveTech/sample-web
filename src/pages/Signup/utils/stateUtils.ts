import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@store/configureStore";
import { routesName } from "@utils/constants";

//Actions
import { signupActions } from "@core/actions";

//Interface
import { StateType } from "@core/interfaces";

//Thunks
const { handleSignup } = signupActions;
const stateUtils = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const { errors } = useSelector((state: StateType) => state.signup);
  const handleFormSubmit = (event: any) => {
    dispatch(
      handleSignup({
        email: event.email.toLowerCase(),
        password: event.password,
        role: "",
        firstName: event.firstName,
        lastName: event.lastName,
      })
    ).then((response) => {
      if (response?.payload?.data?.data?.signup) {
        navigate("/");
      }
    });
  };

  const handleSignupClick = () =>
    navigate(`${routesName.user}/${routesName.login}`);

  return {
    // loginUserType,
    errors,
    handleFormSubmit,
    handleSignupClick,
  };
};

export default stateUtils;
