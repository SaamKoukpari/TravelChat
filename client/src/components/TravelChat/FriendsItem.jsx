import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import DeleteIcon from '@mui/icons-material/Delete';
import "./smallAvatar.scss";
import "./FriendsItem.scss";


export default function FriendsItem(props) {
  
  
  return(
    <section>
      <div className="friend_item">
        <div className="friend_photo_friend_name">
          <Avatar
            alt="Remy Sharp"
            src={props.avatar}
            sx={{ width: 56, height: 56 }}
            component={Link} to='/myfriends'
            // onClick={props.loadFriend(props.userId)}
          />
          <h1>{props.name}</h1>
        </div>

        {/* <div className="friend_name">
      </div> */}

        <div className="add_message">
          
          <DeleteIcon  fontSize="large" style={{ color: '#ffffffdb' }}onClick={() => props.removeFriend(props.userId)}> AddCircleIcon </DeleteIcon>
          <ChatBubbleIcon fontSize="large" style={{ color: '#ffffffdb' }}> ChatBubbleIcon </ChatBubbleIcon>

        </div>
      </div>
    </section>
  )
}
