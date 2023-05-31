import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

function Guard({ children }) {
  const [cookies] = useCookies();
  if (!cookies.auth?.token) return <Navigate to={"/login"} />;
  return <>{children}</>;
}

export function LoginGuard({ children }) {
  const [cookies] = useCookies();

  if (cookies.auth && cookies.auth.token) return <Navigate to={"/"} />;
  return <>{children}</>;
}

export default Guard;
