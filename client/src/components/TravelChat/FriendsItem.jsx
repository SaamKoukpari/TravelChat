import axios from "axios";
import React, { useState } from "react";
//import ReactDom from 'react-dom';
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
//import DeleteIcon from '@mui/icons-material/Delete';
import "./smallAvatar.scss";
import "./FriendsItem.scss";

export default function FriendsItem(props) {
  const userID = 1;
  const [friend, setFriend] = useState([]);

  const removeFriend = (friend_id) => {
    let data = { friend_id: friend_id };
    console.log("Testing friends_id", data);
    axios
      .delete("/api/users/1", data)
      .then((response) => {
        setFriend("");
        // console.log("TEST", response)
      })
      .catch((err) => err);
  };

  // console.log("props id", props.userId)

  return (
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
          <DeleteIcon
            fontSize="large"
            style={{ color: "#ffffffdb" }}
            onClick={() => removeFriend(props.userId)}
          >
            {" "}
            DeleteIcon{" "}
          </DeleteIcon>
          <ChatBubbleIcon
            fontSize="large"
            style={{ color: "#ffffffdb" }}
            onClick={() => removeFriend(props.userId)}
          >
            {" "}
            ChatBubbleIcon{" "}
          </ChatBubbleIcon>
        </div>
      </div>
    </section>
  );
}
