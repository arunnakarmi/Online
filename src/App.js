import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screen/Home/Home'

import Login from './screen/Login/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route exact path ='/login' element={<Login/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
