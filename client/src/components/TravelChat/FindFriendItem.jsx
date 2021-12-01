import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./FriendListItem.scss";
import Icon from '@mui/material/Icon';

export default function MyFriendItem(props) {
  const [button, setButton] = useState("add_circle");

  const changeButton = () => {
    setButton("hourglass_top")
  }

  return (
    <section>
      <div className="friend_item">
        <div className="friend_photo_friend_name">
          <Avatar
            alt="user-icon"
            src={props.avatar}
            sx={{ width: 56, height: 56 }}
            component={Link} to='/myfriends'
            // onClick={props.loadFriend(props.userId)}
          />
          <button className="friends-link">{props.name}</button>
        </div>

        <div className="friend-options">
          <Icon onClick={() => changeButton()}>{button}</Icon>
          <Icon>sms</Icon>
          </div>
      </div>
    </section>
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
