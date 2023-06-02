import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Auth";
import Guard, { LoginGuard } from "./Guards";
import Logout from "./pages/Logout";
import Explore from "./pages/Explore";
import Player from "./shared/Player";
import Pricing from "./pages/Pricing";
import Error404 from "./pages/Error404";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Player />
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

        <Route
          path="/dashboard"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        ></Route>

        <Route
          path="/explore"
          element={
            <Guard>
              <Layout minimumHeader={true}>
                <Explore />
              </Layout>
            </Guard>
          }
        ></Route>
        {/* Explore - Need Wrapping with Guard */}
        <Route
          path="/pricing"
          element={
            <Guard>
              <Layout minimumHeader={true}>
                <Pricing />
              </Layout>
            </Guard>
          }
        ></Route>
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
        <Route path='*' element={
          <Layout minimumHeader={true}>
            <Error404 />
          </Layout>
        } ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
