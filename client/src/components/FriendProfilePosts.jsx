import React, { useState } from "react";
import './TravelChat/PostItem.scss'
import TimeAgo from 'timeago-react';
import Icon from '@mui/material/Icon';
import { Avatar } from "@mui/material";

export default function FriendProfilePosts(props) {
  const [countLike, setCountLike] = useState(props.post.likes || 0)
  const [color, setColor] = useState(false);
  
  // Functions to change  the counter state item
  const increment = function() {
    setColor(true);
    setCountLike(countLike + 1);
  };

  return(
      <section className="news_item">
        <div className="news-item-header">
          <table>
            <tr>
            <td><Avatar className="user-post" alt="user_loggedin" src={props.post.profile.profile_picture} sx={{ width: 46, height: 46 }}/></td>
            <td>{props.post.profile.name}</td>
            </tr>
          </table>
          
          <div className="options">
            <Icon>border_color</Icon>
            <Icon>delete</Icon>
          </div>

        </div>
        
        <div className="news-item-body">
        <span>{props.post.content}</span>
        </div>
        <div className="news-item-footer">
          <div className="heart-count">
              <Icon className={color === true ? 'active-like' : ''} onClick={(e) => increment(e.target.value)}>favorite</Icon>
              <p>{countLike}</p>
          </div>
        <TimeAgo datetime={props.post.posted_at}/>
        </div>
      </section>
  )

}