import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/errorPage/NotFoundPage';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="flowr-spot">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="*"
            element={<NotFoundPage url="/home">Return to Home Page</NotFoundPage>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
