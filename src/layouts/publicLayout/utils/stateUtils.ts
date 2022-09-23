import { useNavigate } from "react-router-dom";
import { AdminLogin } from "@assets/image";
import { routesName } from "../../../utils/constants";

const stateUtils = () => {
  const image = AdminLogin;

  const navigate = useNavigate();

  const handleMovingToDashboard = () => navigate(routesName.landingPage);

  return { image, handleMovingToDashboard };
};

export default stateUtils;
