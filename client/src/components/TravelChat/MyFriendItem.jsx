import React, { useState } from 'react'


export default function MyFriendItem (props) {
  const [buttonText, setButtonText] = useState("Add Friend");

  const changeText = (text) => setButtonText(text);


  return (
    <div>
      {props.name}
      <button className='add__friend' onClick={() => changeText("Requested")}>{buttonText}</button>
      <button className='add__friend'>Message</button>
    </div>
  )
}

// const userId = 1;
  // const [addfriend, setAddFriend] = useState([]) 
  // const [friend, setFriend] = useState("notFriends");
  // const friendsButton = () => setFriend((friend === "notFriend") ? "Add Friend" : "Friends ✅");

  
  // const addAFriend = (id) => {
  //   // let data = { user1_id: 1, user2_id: id, status: true, accepted: false };
    
  //   let data = {request: id}
    
  //   axios.post('/api/requests', data)
  //   .then(response => {
  //     console.log("response:", response)
  //     setFriend("");
  //   })
  //   .catch(err => err)
  //   // console.log("CHECK", id)
  // }
  
  
  // return(
  //   <div>{props.name}
  //   <button 
  //     value={friend} 
  //     className='add__friend' 
  //     onClick={friendsButton}
  //     onClick={() => addAFriend(props.user)} 
  //     >Add Friend</button>
  //   <button className='add__friend'>Message</button>

  //   </div>
  // )