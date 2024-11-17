
import './App.css'
import Welcome from './pages/welcome';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';


const Messenger = lazy(() => import('./pages/messenger'));


const App = () => {

  return (
    <div className='cont'>
      <Router>
        <Routes>
          <Route path="*" element={<Welcome />} />
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
