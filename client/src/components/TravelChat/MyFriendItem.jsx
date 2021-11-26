import React, { useState } from 'react'
import axios from 'axios';


export default function MyFriendItem (props) {
  const userID = 2;
  const [friend, setFriend] = useState([]) 
  
  console.log("PROPS frind: ", props.friend)
  const addFriend = (friend) => {
    let data = {friend: friend};
    // console.log("Testing friends_id", data)
    axios.put('/api/users/1', data)
    .then(response => {
      setFriend("");
      // console.log("TEST", response)
    })
    .catch(err => err)
  }

  return(
    <div>{props.name}
    <button className='add__friend' onClick={() => addFriend(props.userId)}>Add Friend</button>
    <button className='add__friend'>Message</button>

    </div>
  )
}