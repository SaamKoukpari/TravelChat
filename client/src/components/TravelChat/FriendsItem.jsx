import axios from "axios";
import React, { useState } from "react";
import './smallAvatar.scss';
import Application from './Application/index.js'

export default function FriendsItem(props) {
  const [friend, setFriend] = useState([]) 
  const [page, setPage] = useState(3) 
  
  const removeFriend = (friend_id) => {
    const userID = 1;
    console.log("FRIEND ID:", friend_id)
    // let data = {friend_id: friend_id};
    // console.log("Testing friends_id", data)

    axios.get('/api/users')
    .then(response => {
      const user = response.data.find((user) => {
        return user.id === userID;
      })
      const array = user.friend_id
      // console.log("ARRAY:", array)
              axios.put('/api/users/1', array)
              .then(response => {
              // const array = response
              console.log("ARRAY: ", array)
              const index = array.indexOf(friend_id);
              console.log("FRIEND ID: ", friend_id)
                if (index > -1) {
                  array.splice(index, 1);
                }
                setFriend(array);
            })
          })
    .catch(err => err)
  }
  
  // console.log("props id", props.userId)

  return(
    <section>
      <div>
        <img className="smallAvatar" src={props.avatar} alt="user avatar" />
        <h1>{props.name}</h1>
      </div>

    <button className='add__friend' onClick={() => removeFriend(props.userId)}>Remove Friend</button>
    <button className='add__friend' onClick={() => setPage()}>Message</button>
     
    </section>

  )
}