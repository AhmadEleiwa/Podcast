import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

            <Route path='/Explore'></Route>
            {/* Explore - Need Wrapping with Guard */}

            <Route path='/pricing'></Route>
            {/* Explore - Need Wrapping with Guard */}

            <Route path='/dashbord'></Route>
            {/* Explore - Need Wrapping with Guard */}

            <Route path='login'></Route>
            <Route path='signup'></Route>


        </Routes>
    </BrowserRouter>
}

export default Router