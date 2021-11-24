import React, { useState, useEffect } from 'react'
import FriendsItem from './FriendsItem';
import axios from 'axios';

export default function FindFriends() {
  const [search, setSearch] = useState([]); //must be an array for .map function to work
  const userID = 1

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const users = response.data //all the users
      const user = response.data.find((user) => { //filters the user that is logged in 
        return user.id === userID 
      })

      //finds users with description match and location match
      //if users.location === search.location, return user name + avatar EXCEPT for user
      // const searchlocation = "Bali";
    
      // const searched = users.map(user => {
      //   const result = [];
      //   if (user.location === "Bali") {
      //     result.push(user.name)
      //   }
      //   return result; 
      // })
      // console.log("SEARCH", searched)
      
      const searched = function(users) {
        const query = 'Bali';
        const result = [];

        for (let obj of users) {
          if (obj.location === query && obj.id !== user.id) {
            result.push(obj.name)
          }
        }
        return result;
      }
      console.log("SEARCH HERE >>> ", searched(users)); //array of names ['Simba', 'George', 'Tim']
      
      const find = searched(users).map(name => {
        const friend = users.find(user => user.name === name);
        return friend;
      })
      
      setSearch(find)
    })  
    .catch(error => console.log("error:", error))
  }, [])

  const findFriendsItem = search.map(user => {
    return(
      <FriendsItem
        key={user.id}
        name={user.name}
        avatar={user.profile_picture}
      />
    )
  })
  console.log("FIND FRIENDS??", findFriendsItem)
  
  return(
    <div>
      <h1>Find new friends</h1>
        <section className='findFriends_circle'>
          <form>
            <h5>Location:</h5>
            <input
              className='findFriends__create-input'
              name='location'
              type='text'
              placeholder='Location'  
              value={search.location}
              onChange={(e) => setSearch(prev => ({...prev, location: e.target.value}))}
            />
            
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
          {/* <button onClick={handleSubmit}>Submit</button> */}
          {findFriendsItem}
        </section>
    </div>
  )
};