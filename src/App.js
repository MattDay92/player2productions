import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SMID from './view/SMID';
import MMAM from './view/MMAM';
import ManiacManor from './view/ManiacManor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/SuperMarioisDead'} element={<SMID />} />
          <Route exact path={'/MakeMeAMatch'} element={<MMAM />} />
          <Route exact path={'/ManiacManor'} element={<ManiacManor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
