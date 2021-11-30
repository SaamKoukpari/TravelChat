import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./MyFriendItem.scss";
import Icon from '@mui/material/Icon';

export default function MyFriendItem(props) {
  const [buttonText, setButtonText] = useState("Add Friend");

  const changeText = (text) => setButtonText(text);

  return (
    <div className="found_content">
      <section className="friendlist_item">
        <section className="name_and_avatar">
          <Avatar alt="friend-icon" src={props.avatar} sx={{ width: 56, height: 56 }} />
          <span>{props.name}</span>
        </section>
      
        <section className="add_and_message">
          <AddCircleOutlineIcon fontSize="small" style={{ color: '#ffffffdb' }} onClick={() => changeText("Requested")}> AddCircleOutlineIcon </AddCircleOutlineIcon>
          <ChatBubbleIcon fontSize="small" style={{ color: '#ffffffdb' }}> ChatBubbleIcon </ChatBubbleIcon>
          {/* <button className="send__message">Message</button> */}
        </section>
      </section>
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
