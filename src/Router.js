import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Auth";
import Guard, { LoginGuard } from "./Guards";
import Logout from "./pages/Logout";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout minimumHeader={false}>
              <Home />
            </Layout>
          }
        ></Route>
        {/* home */}
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/pricing"></Route>
        {/* Explore - Need Wrapping with Guard */}

        <Route
          path="/dashboard"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        ></Route>
        {/* Explore - Need Wrapping with Guard */}

        <Route
          path="/login"
          element={
            <LoginGuard>
              <AuthPage login />
            </LoginGuard>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <LoginGuard>
              <AuthPage />
            </LoginGuard>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
