import React, { useState } from 'react';
import FindFriends from './FindFriends';
import FriendsList from './FriendsList';
import MyProfile from './MyProfile';
import Newsfeed from './Newsfeed';
import Application from './Application';


export default function TravelChat() {
  const [page, setPage] = useState(1); 

  return(
    <main className="layout">
      <section className= "profileAndStatusContainer">
        <section className="statusContainer">
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_people_person_avatar_icon_159356.png" alt="user" />
        Login
        </section>

      <section className="sidebar">
        <img
          className="sidebar--centered" 
          src="image/logo2.png"
          alt="Lets Jet"
        />
        <nav className="sidebar__menu">
          <ul>
            <h1><button onClick={()=>(setPage(1))}>Newsfeed</button></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><button onClick={()=>(setPage(2))}>MyProfile</button></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><button onClick={()=>(setPage(3))}>Friends List</button></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><button onClick={()=>(setPage(4))}>Chat</button></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><button onClick={()=>(setPage(5))}>Find Friends</button></h1>
            <hr className="sidebar__separator sidebar--centered" />
          </ul>
        </nav>
      </section>

      <section className='profileContainer'>
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