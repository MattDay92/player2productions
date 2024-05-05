import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
