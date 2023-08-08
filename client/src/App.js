import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import CardPage from './components/CardPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CardPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
