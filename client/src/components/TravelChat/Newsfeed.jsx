import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "./Newsfeed.scss";

export default function Newsfeed() {
  const [state, setState] = useState([]);
  const [newPost, setNewPost] = useState([]);
  const userID = 1;

  useEffect(() => {
    Promise.all([
      axios.get("./api/users"),
      axios.get("./api/posts"),
      axios.get("./api/comments"),
    ])
      .then((all) => {
        const users = all[0].data; //all the users
        const posts = all[1].data; //all the posts
        const comments = all[2].data; //all the comments

        //filter user.id = 1 (Lucy)
        const user1 = users.find((user) => {
          return user.id === userID;
        });
        //filter user1 friends
        const usersFriends = user1.friend_id.map((id) => {
          const friends = users.find((user) => user.id === id);
          return friends;
        });
        // if friend has a post_id, then return the posts
        const postsByFriends = function (usersFriends) {
          //array of post.ids
          const result = [];
          for (let obj of usersFriends) {
            if (obj.post_id.length >= 1) {
              result.push(obj.post_id);
            }
          }
          return result.flat(Infinity); //remove inner Arrays
        };
        //match the postsByFriends item to the post.id, return content, likes, comments, posted_at
        const getPosts = postsByFriends(usersFriends).map((id) => {
          const post = posts.find((x) => x.id === id);
          const findUser = Object.values(users).find((user) =>
            user.post_id.includes(id)
          );
          return [findUser, post.content, post.likes, post.posted_at];
        });
        setState(getPosts);

        //if the post has comments, return the comments
      })
      .catch((err) => err);
  }, []);

  const newsfeedPosts = state.map((post) => {
    //state is an ARRAY not an object
    return (
      <PostItem
        key={post.id}
        user={post[0]} //this is an object
        content={post[1]}
        likes={post[2]}
        time={post[3]}
      />
    );
  });
  
  // const createPost = (e) => {
  //   e.preventDefault();

  //   const posted = {
  //     user_id: 3,
  //     content: newPost,
  //   };
  //   console.log("POST", posted);

  //   axios.post("/api/posts", posted)
  //     .then(res => {
  //       const currentPost = res.data;

  //       const update = {
  //         post_id: 3
  //       }

  //       axios.put('/api/users/3', update)
  //       .then(res => {
          
  //       })

  //       //make the axios put!? to update the user's post_id array

  //     })
  //     .catch(err => err)
  // }

  return (
    <div className="main_newsfeed_container">
      <section 
        className="create_post"
        >
        <div>
          <h1></h1>
          <form>
            <input
              className="create_post_field"
              type="text"
              placeholder="write something"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
          </form>
        </div>

        <button onClick={createPost}>post</button>
      </section>

      <div>{newsfeedPost}</div>
    </div>
  );
}
