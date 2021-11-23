import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss';


export default function Layout () {
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered" 
          src="image/logo2.png"
          alt="Lets Jet"
        />
        <nav className="sidebar__menu">
          <ul>
            <h1><Link to='/newsfeed'>Newsfeed</Link></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><Link to='/profile'>Profile</Link></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><Link to='/chat'>Chat</Link></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><Link to='/friends_list'>Friends List</Link></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><Link to='/find_friends'>Find Friends</Link></h1>
            <hr className="sidebar__separator sidebar--centered" />
            <h1><Link to='/signup'>Signup</Link></h1>
          </ul>
        </nav>
      </section>
      
      <section className= "profileAndStatusContainer">
        <section className="statusContainer">
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_people_person_avatar_icon_159356.png" alt="user" />
        Login
        </section>  
        <section class="profileContainer">
          <h1>blah</h1>
        </section>
      </section>
    </main>
  )
}