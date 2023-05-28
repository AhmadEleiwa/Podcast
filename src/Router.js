import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from "./shared/Button";
import AuthPage from "./pages/Auth";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Button white>test</Button>}></Route>
        {/* home */}

        <Route path="/Explore"></Route>
        {/* Explore - Need Wrapping with Guard */}

        <Route path="/pricing"></Route>
        {/* Explore - Need Wrapping with Guard */}

        <Route path="/dashbord"></Route>
        {/* Explore - Need Wrapping with Guard */}

        <Route path="/login" element={<AuthPage login />}></Route>
        <Route path="/signup" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
