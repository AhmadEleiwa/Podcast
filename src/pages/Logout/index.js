import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [cookies, setCookies, removeCookies] = useCookies();

  removeCookies("auth");

  return <Navigate to="/" />;
};

export default Logout;
