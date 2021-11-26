import axios from "axios";
import React, { useState } from "react";
import './smallAvatar.scss';

export default function FriendsItem(props) {
  const userID = 1;
  const [friend, setFriend] = useState([]) 

  const removeFriend = (friend_id) => {
    let data = {friend_id: friend_id};
    console.log("Testing friends_id", data)
    axios.delete('/api/users/1', data)
    .then(response => {
      setFriend("");
      // console.log("TEST", response)
    })
    .catch(err => err)
  }

  
  console.log("props id", props.userId)

  return(
    <section>
      <div>
        <img className="smallAvatar" src={props.avatar} alt="user avatar" />
        <h1>{props.name}</h1>
      </div>

    <button className='add__friend' onClick={() => removeFriend(props.userId)}>Remove Friend</button>
    <button className='add__friend'>Message</button>
     
    </section>

  )
}