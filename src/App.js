import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
        <Link to="/register" style={{ color: 'white', margin: '10px' }}>Register</Link>
        <Link to="/about" style={{ color: 'white', margin: '10px' }}>About</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
