import React from 'react';
import './App.css'
import AllRoutes from './routes.jsx';
import Home from './page/Home/Home.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
   return(
   <div>
      <Router>
        <Home/>
       <AllRoutes/>
      </Router>
    </div>
   )
}
export default App;
