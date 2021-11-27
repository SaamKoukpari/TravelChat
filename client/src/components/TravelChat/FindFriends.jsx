import React, { useState } from 'react'
import MyFriendItem from './MyFriendItem';
import axios from 'axios';


export default function FindFriends(props) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);
  const userID = 1
  console.log(location)

  const handleSubmit = () => {
    axios.get('/api/users')
    .then(response => {
      const users = response.data //all the users
      const user = response.data.find((user) => {
        return user.id === userID;
      }) 

      const query = location;
      const query2 = description;
      const result = [];
        
      
      //For the purpose of MVD 
        for (let obj of users) {
          if(!query2) {
            if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
              result.push(obj)
            }
          } else if (obj.location.toLowerCase() === query.toLowerCase() && obj.id !== user.id) {
            if (obj.description.includes(query2)) {
              result.push(obj)
            }
          }         
        }
      
      setResults(result)
     // console.log("SEARCH HERE >>> ", result);
    })  
    .catch(error => console.log("error:", error))
  
}

  const findFriendsItem = results.map(user => { //passes props down
    return(
      <MyFriendItem
        key={user.id}
        user={user.id}
        name={user.name}
        avatar={user.profile_picture}
        friend={user.friend_id}
      />
    )
  })
  
  return(
    <div>
      <h1>Find new friends</h1>
        <section className='findFriends_circle'>
          <form>
            <h5>Location:</h5>
            <span>{props.users}</span>
            <input
              className='findFriends__create-input'
              name='location'
              type='text'
              placeholder='Location'  
              value={location}
              onChange={(e) => setLocation(e.target.value)} 
            />            
            <br/>
            <h5>Interest</h5>
            <input
              className='findFriends__create-input'
              name='interest'
              type='text'
              placeholder='Search interests'
              value={description}
              onChange={(e) => setDescription(e.target.value)} 
            />
          </form>
          <button onClick={handleSubmit}>Submit</button>
          {findFriendsItem}
        </section>
    </div>
  )
};