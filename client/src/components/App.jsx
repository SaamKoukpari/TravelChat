import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import TravelChat from './TravelChat/index.jsx'
import './App.scss';


export default function App() {

return (
  <main>
    <section className="profileAndStatusContainer">
      {/* <section className="statusContainer">
      <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_people_person_avatar_icon_159356.png" alt="user" />
      Login
      </section>   */}
    

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TravelChat/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>

    </section>
  </main>    
  )
};