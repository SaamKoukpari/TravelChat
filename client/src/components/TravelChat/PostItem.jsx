import React, {  useState } from "react";
import './PostItem.scss'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TimeAgo from 'timeago-react';
import Icon from '@mui/material/Icon';
import { Avatar } from "@mui/material";

export default function PostItem(props){
  const [countLike, setCountLike] = useState(props.likes)
  const [color, setColor] = useState(false);
  
  // Functions to change  the counter state item
  const increment = function() {
    setColor(true);
    setCountLike(countLike + 1);
  };
  
  return(
    <div>
      <section className="news_item">
        <div className="news-item-header">
          <table>
            <tr>
            <td><Avatar className="user-post" alt="user_loggedin" src={props.user.profile_picture} sx={{ width: 46, height: 46 }}/></td>
            <td>{props.user.name}</td>
            </tr>
          </table>
        </div>
        <div className="news-item-body">
        <span>{props.content}</span>
        </div>
        <div className="news-item-footer">
          <div className="heart-count">
              <Icon className={color === true ? 'active-like' : ''} onClick={(e) => increment(e.target.value)}>favorite</Icon>
              {countLike}
          </div>
        <TimeAgo datetime={props.time}/>
        </div>

      </section>
    </div>
  )
}