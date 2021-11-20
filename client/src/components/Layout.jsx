import React from 'react'
import Newsfeed from './Newsfeed'
import Profile from './Profile'
import Chat from './Chat'
import FriendsList from './FriendsList'
import FindFriends from './FindFriends'

export default function Layout () {
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered" 
          src="image/logo.png"
          alt="Lets Jet"
        />
        <nav className="sidebar__menu">
          <Newsfeed/>
          <Profile/>
          <Chat/>
          <FriendsList/>
          <FindFriends/>
        </nav>
      </section>
    </main>
  )
}