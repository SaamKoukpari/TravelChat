import React from "react";
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
//import DeleteIcon from '@mui/icons-material/Delete';
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
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 303622a8cf82c17f2d51b6de0616d9f7ef44144f
}
