import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Layout from './layout';
import Home from './home';
import Blogs from './blogs';
import Contact from './contact';
import userStore from './stores/userStore';


function App() {
  return (
    <Router>
    <div>
     <p>{process.env.REACT_APP_API_URL}</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">BLOGS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACTS</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blogs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
