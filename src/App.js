import React from 'react';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Blogs from './Components/Blogs';
import User from "./Components/User"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/blog' element={<Blogs />}></Route>
          <Route path='/user/:slug' element={<User />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
