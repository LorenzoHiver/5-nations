import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import HomeUser from './Pages/HomeUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<HomeUser />} />
    </Routes>
  </Router>
);