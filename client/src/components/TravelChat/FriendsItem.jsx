import axios from "axios";
import React, { useState } from "react";
//import ReactDom from 'react-dom';
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./smallAvatar.scss";
import Application from "./Application/index.js";
import "./FriendsItem.scss";

export default function FriendsItem(props) {

  
  return (
    <section>
      <div className="friend_item">
        <div className="friend_photo">
          <Avatar
            alt="Remy Sharp"
            src={props.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </div>

        <div className="friend_name">
          <h1>{props.name}</h1>
        </div>

        <div className="add_message">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => props.removeFriend(props.userId)}
          ></Button>
          <Button variant="outlined" endIcon={<SendIcon />}></Button>
        </div>
      </div>
    </section>
  );
}
