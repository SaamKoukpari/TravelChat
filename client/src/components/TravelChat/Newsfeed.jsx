import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "./Newsfeed.scss";
import { Avatar } from "@mui/material";

export default function Newsfeed() {
  const [state, setState] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(1);

  const func = function () {
    Promise.all([
      axios.get("./api/users"),
      axios.get("./api/posts"),
      axios.get("./api/comments"),
    ])
      .then((all) => {
        const users = all[0].data; //all the users
        const posts = all[1].data; //all the posts
        const comments = all[2].data; //all the comments
        setUsers(users);

        const getParsedPosts = () => {
          //populating post object
          return posts
            .map((post) => {
              let user = users.find((u) => u.id === post.user_id);

              return {
                user,
                ...post,
              };
            })
            .sort((a, b) => {
              console.log("ONE:", a);
              console.log("TWO:", new Date(b.created_at));
              return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
              );
            });
        };
        
        setState(getParsedPosts());
      })
      .catch((err) => err);
  };

  useEffect(() => {
    func();
  }, []);

  const newsfeedPosts = state
    .map((post) => {
      const user = users.find((u) => u.id === userID);
      //state is an ARRAY not an object
      if (user.friend_id.includes(post.user_id) || userID === post.user_id) {
        return (
          <PostItem
            key={post.id}
            post={post}
          />
        );
      }
    })
    .filter(Boolean);

  console.log("STATE>>>", state);

  const createPost = (e) => {
    e.preventDefault();

    const posted = {
      user_id: 1,
      content: newPost,
    };
    console.log("POST: ", posted);

    axios
      .post("/api/posts", posted)
      .then((res) => {
        func();
        setNewPost("");
      })
      .catch((err) => err);
  };

  return (
    <div className="main_newsfeed_container">
      <section className="create_post">
        <Avatar
          className="user-post"
          alt="user_loggedin"
          src="./lucy-angel.png"
          sx={{ width: 46, height: 46 }}
        />
        <form>
          <input
            className="create_post_field"
            type="text"
            placeholder="Share something"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </form>
        <button className="post-save" onClick={createPost}>
          POST
        </button>
      </section>
      <section className="load_posts">{newsfeedPosts}</section>
    </div>
  );
}
