import React, { useState } from 'react';
import FindFriends from './FindFriends';
import FriendsList from './FriendsList';
import MyProfile from './MyProfile';
import Newsfeed from './Newsfeed';
import Application from './Application';
import { Avatar } from "@mui/material";

export default function TravelChat() {
  const [page, setPage] = useState(1); 

  return(
    
  <main className="layout">
    <section className="sidebar">
      <img
        className="sidebar--centered" 
        src="/chat.png"
        alt="Travel Chat logo"
      />
      <nav className="sidebar__menu">
        <ul>
          <h1><button className="nav-button" onClick={()=>(setPage(1))}>Newsfeed</button></h1>
          {/* <hr className="sidebar__separator sidebar--centered" /> */}
          <h1><button className="nav-button" onClick={()=>(setPage(2))}>My Profile</button></h1>
          {/* <hr className="sidebar__separator sidebar--centered" /> */}
          <h1><button className="nav-button" onClick={()=>(setPage(3))}>Friends List</button></h1>
          {/* <hr className="sidebar__separator sidebar--centered" /> */}
          <h1><button className="nav-button" onClick={()=>(setPage(4))}>Chat</button></h1>
          {/* <hr className="sidebar__separator sidebar--centered" /> */}
          <h1><button className="nav-button" onClick={()=>(setPage(5))}>Find Friends</button></h1>
          {/* <hr className="sidebar__separator sidebar--centered" /> */}
        </ul>
      </nav>
    </section>
    <section className= "profile__status__container">
      <section className="status__container">
      <Avatar alt="user_loggedin" src="./user-Lucy.jpeg" sx={{ width: 30, height: 30 }} />
      <span className="logout_status"><a href="/login">Logout</a> </span>
    </section>
    <section className='component__container'>
      {page === 1 && <Newsfeed/>}
      {page === 2 && <MyProfile/>}
      {page === 3 && <FriendsList/>}
      {page === 4 && <Application/>}
      {page === 5 && <FindFriends/>}
    </section>

  </section>
</main>
  )
};