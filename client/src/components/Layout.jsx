import React from 'react'
import { Link } from 'react-router-dom'

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
          <ul>
            <li><Link to='/newsfeed'>Newsfeed</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/chat'>Chat</Link></li>
            <li><Link to='/friends_list'>Friends List</Link></li>
            <li><Link to='/find_friends'>Find Friends</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </ul>
        </nav>
      </section>
    </main>
  )
}