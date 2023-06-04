import React from 'react';

// import './components/Home.css';
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home/Home';
import Create from './components/Create/Create';
import History from './components/History/History';
import About from './components/About/About';
import Login from './components/Login';
import Error404 from './components/Error404/Error404';

import FormOne from './components/form_one/FormOne';

// import Chat from './components/ChatApp/Chat';

import 'bootstrap/dist/css/bootstrap.css';



// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// import { BrowserRouter as Route, Routes } from "react-router-dom";



function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/create/FormOne" element={<FormOne />} />

        <Route path="*" element={<Error404 />} />

      </Routes>
      {/* <Chat /> */}
      <Footer />
    </div>
  );
}

export default App;
