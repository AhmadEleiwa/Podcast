import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Layout from './Layout';

const Router = props => {
    return <BrowserRouter>
        <Routes>
            <Route index path='/' element={
               <Layout minimumHeader={false}>
                    <Home />
               </Layout>
            }></Route>
            {/* home */}


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
