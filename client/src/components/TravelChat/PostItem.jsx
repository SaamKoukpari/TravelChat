import React, {  useState } from "react";
import './PostItem.scss'
import TimeAgo from 'timeago-react';
import Icon from '@mui/material/Icon';
import { Avatar } from "@mui/material";

export default function PostItem({post={}}){
  const [countLike, setCountLike] = useState(post.likes || 0)
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
            <td><Avatar className="user-post" alt="user_loggedin" src={post.user.profile_picture} sx={{ width: 46, height: 46 }}/></td>
            <td>{post.user.name}</td>
            </tr>
          </table>
        </div>
        <div className="news-item-body">
        <span>{post.content}</span>
        </div>
        <div className="news-item-footer">
          <div className="heart-count">
              <Icon className={color === true ? 'active-like' : ''} onClick={(e) => increment(e.target.value)}>favorite</Icon>
              <p>{countLike}</p>
          </div>
        <TimeAgo datetime={post.created_at}/>
        </div>

      </section>
    </div>
  )
}