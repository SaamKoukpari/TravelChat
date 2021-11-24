import React, { useState } from 'react'
import FindFriends from './FindFriends';

export default function FindFriendsList() {
  let friend;
  
  const find = searched(users).map(name => {

    friend = users.find(user => user.name === name);
    return friend;
  })
  setSearch(find)
  console.log(friend)
  return(
    <div>
      <h1>Find new friends</h1>
        <FindFriends friend={props}/>
        <section className='findFriends_circle'>
          <form>
            <h5>text:</h5>
            <input
              className='findFriends__create-input'
              name='location'
              type='text'
              placeholder='Location'  
              value={search.location}
              onChange={(e) => setSearch(prev => ({...prev, location: e.target.value}))} 
            />
            <span>{searched(users)}</span>
            
            <br/>
            <h5>Interest</h5>
            <input
              className='findFriends__create-input'
              name='interest'
              type='text'
              placeholder='Search interests'
              value={search.description}
              onChange={(e) => setSearch(prev => ({...prev, description: e.target.value}))} 
            />
          </form>
          <button onClick={handleSubmit}>Submit</button>
          {/* {findFriendsItem} */}
        </section>
    </div>
  )
};