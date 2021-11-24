import React, { useState, useEffect } from 'react'
import FriendsItem from './FriendsItem';
import axios from 'axios';

export default function FindFriends() {
  const [search, setSearch] = useState([]); 
  const userID = 1

  const handleSubmit = () => {
    axios.get('/api/users')
    .then(response => {
      const users = response.data //all the users
      const user = response.data.find((user) => { //filters the user that is logged in 
        return user.id === userID 
      })
      
      const searched = function(users) {
        const query = search.location;
        const query2 = search.description;
        const result = [];
 
        for (let obj of users) {
          if(!query2) {
            if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
              result.push(obj.name)
            }
          } else if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
            if (obj.description.includes(query2.toLowerCase())) {
              result.push(obj.name)
            }
          }         
        }
        return result;
      }
      console.log("SEARCH HERE >>> ", searched(users)); //array of names who match the search inputs
      
      const find = searched(users).map(name => { //find the friends who match those names
        const friend = users.find(user => user.name === name);
        return friend;
      });
      setSearch(find)
    })  
    .catch(error => console.log("error:", error))
  }

  // const findFriendsItem = search.map(user => { //passes props down
  //   return(
  //     <FriendsItem
  //       key={user.id}
  //       name={user.name}
  //       avatar={user.profile_picture}
  //     />
  //   )
  // })
  // console.log("FIND FRIENDS??", findFriendsItem)
  
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
          <button onClick={handleSubmit}>Submit</button>
          {/* {findFriendsItem} */}
        </section>
    </div>
  )
};