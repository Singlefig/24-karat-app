import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage/MainPage';

import logo from './assets/icons/24karat.svg';
import burger from './assets/icons/burger.svg';

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
      <div id="App" className='App'>
        {screenWidth <= 768 ? (
          <div className="mobile-header">
            <Sidebar
            pageWrapId={"main-page"}
            outerContainerId={"root"}
            customBurgerIcon={ <img src={burger} alt="burger" /> }
            />
            <img src={logo} alt="logo" width={120} height={20} />
          </div>
        ) : <Header setIsMainShadowed={setIsMainShadowed} />}
        <Routes>
          <Route path='/' element={<MainPage screenWidth={screenWidth} isMainShadowed={isMainShadowed} />} />
        </Routes>
        <Footer screenWidth={screenWidth} />
      </div>
    </Router>

  );
}

export default App;
