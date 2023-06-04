import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // HashRouter has been used because of GitHub Pages

import NotFoundPage from './pages/errorPage/NotFoundPage';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="flowr-spot">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={<NotFoundPage url="/">Return to Home Page</NotFoundPage>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
