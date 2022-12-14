import React from 'react';
// import './App.css';
import './components/Home.css';
import Navbar from './components/Navbar';
// import './components/Home.css'
import Home from './components/Home';
import Create from './components/Create';
import History from './components/History';
import About from './components/About';
import Login from './components/Login';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create /> } />
          <Route path="/history" element={ <History /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
