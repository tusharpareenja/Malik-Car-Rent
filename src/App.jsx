import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookingModal from './components/BookingModal';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <Router>
      <Routes>
        {/* Define the route for Home */}
        <Route path="/" element={<Home />} />
        <Route path="BookingModal" element={<BookingModal />} />
      </Routes>
    </Router>
  );
}

export default App;
