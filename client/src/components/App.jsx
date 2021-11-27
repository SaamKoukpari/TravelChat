import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import TravelChat from './TravelChat/index.jsx'
import './App.scss';


export default function App() {

return (
  <main>
    
     

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TravelChat/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>

    
  </main>    
  )
};

// side bar, top bar
// main section 
// content compent changes based on state, click button, have a state change
// set conditionals { && }

//link on signup back to home/login
//link on login to signup
