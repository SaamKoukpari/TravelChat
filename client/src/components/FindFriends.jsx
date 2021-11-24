import React, { useEffect, useState } from 'react'
import FriendsItem from './FriendsItem';
import axios from 'axios';


export default function FindFriends(props) {
  const [search, setSearch] = useState({}); 
  const [results, setResults] = useState([]);
  const userID = 1

  const handleSubmit = () => {
    axios.get('/api/users')
    .then(response => {
      const users = response.data //all the users
      const user = response.data.find((user) => {
        return user.id === userID;
      }) 

      const query = search.location;
      const query2 = search.description;
      const result = [];
          
        for (let obj of users) {
          if(!query2) {
            if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
              result.push(obj)
            }
          } else if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
            if (obj.description.includes(query2.toLowerCase())) {
              result.push(obj)
            }
          }         
        }
      
      setResults(result)
      console.log("SEARCH HERE >>> ", result);
      // setSearch(search)
    })  
    .catch(error => console.log("error:", error))
  
}

  const findFriendsItem = results.map(user => { //passes props down
    return(
      <FriendsItem
        key={user.id}
        name={user.name}
        avatar={user.profile_picture}
      />
    )
  })
  
  return(
    <div>
      <h1>Find new friends</h1>
        <section className='findFriends_circle'>
          <form>
            <h5>Location:</h5>
            <span>text{props.users}</span>
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
          {findFriendsItem}
        </section>
    </div>
  )
};