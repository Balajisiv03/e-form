import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from './page/Home/Home.jsx';

const AllRoutes = () => {
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    return(
        <div>
          </div>
    )
}

export default AllRoutes;