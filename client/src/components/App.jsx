import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import TravelChat from './TravelChat/index.jsx'
import './App.scss';
// import MyProfile from './MyProfile';
// import Newsfeed from './Newsfeed';
// import FriendsList from './FriendsList';
// import FindFriends from './FindFriends';
// import Application from './ChatAPI/index.js';
// import ProfileEditForm from './ProfileEditForm';


export default function App() {

return (
  <main className="layout">
    <section className= "profileAndStatusContainer">
      <section className="statusContainer">
      <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_people_person_avatar_icon_159356.png" alt="user" />
      Login
      </section>  
      <section className="profileContainer">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TravelChat/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>

      </section>
    </section>
  </main>    
  )
};

// side bar, top bar
// main section 
// content compent changes based on state, click button, have a state change
// set conditionals { && }

//link on signup back to home/login
//link on login to signup
