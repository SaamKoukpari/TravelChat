import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./FriendListItem.scss";
import Icon from '@mui/material/Icon';

export default function FriendsItem(props) {

  return(
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
          <h1>{props.name}</h1>
        </div>

        <div className="friend-options">
          <Icon className="remove-icon" onClick={() => props.removeFriend(props.userId)}>remove_circle</Icon>
          <Icon className="message-icon">sms</Icon>
        </div>
      </div>
    </section>
  )
}
