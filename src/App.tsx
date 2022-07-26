import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import './App.css';

function App() {
  const [isMainShadowed, setIsMainShadowed] = useState(false);

  return (
    <Router>
      <div className='App'>
        <Header setIsMainShadowed={setIsMainShadowed} />
        <Routes>
          <Route path='/' element={<MainPage isMainShadowed={isMainShadowed} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
