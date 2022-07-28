import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage/MainPage';
import './App.css';

function App() {
  const [isMainShadowed, setIsMainShadowed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
      setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener("resize", resize);
      resize();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header setIsMainShadowed={setIsMainShadowed} />
        <Routes>
          <Route path='/' element={<MainPage screenWidth={screenWidth} isMainShadowed={isMainShadowed} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
