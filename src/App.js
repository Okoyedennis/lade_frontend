import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyPage from './pages/ApplyPage';
import HomePage from './pages/HomePage'
import ViewAllApplicationPage from './pages/ViewAllApplicationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/viewAllApplicant" element={<ViewAllApplicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
