import React, { useState } from "react";
import axios from 'axios';
import './PostItem.scss'
import TimeAgo from 'timeago-react';
import Icon from '@mui/material/Icon';
import { Avatar } from "@mui/material";

export default function MyProfilePosts(props) {
  const [countLike, setCountLike] = useState(props.post.likes || 0)
  const [color, setColor] = useState(false);
  const [posts, setPosts] = useState([]);
  
  // Functions to change  the counter state item
  const increment = function() {
    setColor(true);
    setCountLike(countLike + 1);
  };
  
  // const deletePost = (post_id) => {
  //   const userID = 1;
  //   console.log("Post ID:", post_id);

  //   axios
  //     .get("/api/users")
  //     .then(res => {
  //       // const matchPost = res.data.find(post => {
  //       //   return post.id === post_id;
  //       // });
  //       // console.log("matching posts??", matchPost)

  //       const user = res.data.find(user => { //filter user.id = 1
  //         return user.id === userID;
  //       });

  //       const array = user.post_id; // grab post_id array
  //       const newPostArray = array.filter(post => { //filter new array where ... ? 
  //         return post !== post_id;
  //       });

  //       const patchObj = {
  //         user: {
  //           post_id: newPostArray, //returns post.id = 1, which is only one left. 
  //         },
  //       };

  //       axios.put(`/api/users/${userID}`, patchObj)
  //         .then(response => {
  //           const posts = response.data.post_id.map(id => {
  //             const post = res.data.find(post => post.id === id); 
  //             return post;
  //           });
  //           setPosts(posts);
  //         })
  //     })
  //     .catch((err) => err);
  // };


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