import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/dashboard" element={ <Dashboard /> }></Route>
        <Route path="/new" element={ <Create /> }></Route>
        <Route path="/update/:id" element={ <Update /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/register" element={ <Register /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
