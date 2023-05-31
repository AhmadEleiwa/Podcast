import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [, , removeCookies] = useCookies();

  removeCookies("auth");

  return <Navigate to="/" />;
};

export default Logout;
