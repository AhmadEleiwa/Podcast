import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { useCast } from "../context/useCast";

function Guard({ children }) {
  const [cookies] = useCookies();
  const {resetPlayingcastHandler} = useCast()
  const location = useLocation()
  useEffect(() => {
    // Check whatever the token is still valide or not
    if (!cookies.auth) {
      resetPlayingcastHandler();
    }
  }, [location]);
  if (!cookies.auth?.token) return <Navigate to={"/login"} />;
  return <>{children}</>;
}

export function LoginGuard({ children }) {
  const [cookies] = useCookies();

  if (cookies.auth && cookies.auth.token) return <Navigate to={"/"} />;
  return <>{children}</>;
}

export default Guard;
