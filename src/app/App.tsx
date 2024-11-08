// src/App.tsx
import './App.css'
import Welcome from './pages/welcome';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

const App = () => {

  return (
    <div className='cont'>
      <Router>
        <Routes>
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
