import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostItem from './PostItem';


export default function Newsfeed () {
  const [state, setState] = useState([]);
  const userID = 1;

  useEffect(() => {
    Promise.all([
      axios.get('./api/users'),
      axios.get('./api/posts'),
      axios.get('./api/comments')
    ]).then(all => {
      const users = all[0].data; //all the users
      const posts = all[1].data; //all the posts
      const comments = all[2].data; //all the comments

      //filter user.id = 1 (Lucy)
      const user1 = users.find(user => {
        return user.id === userID 
      })
      // console.log("LUCY", user1);

      //filter user1 friends
      const usersFriends = user1.friend_id.map(id => {
        const friends = users.find(user => user.id === id);
        return friends;
      })
      // console.log("LUCY'S FRIENDS:::", usersFriends) // 4 friends
      
      // //if friend has a post_id, then return the posts
      const postsByFriends = function(usersFriends) { //array of post.ids
        const result = [];
        for (let obj of usersFriends) {
          if (obj.post_id.length >= 1) {
            result.push(obj.post_id)
          } 
        }
        return result.flat(Infinity); //remove inner Arrays
      }
      // console.log("postsByFriends", postsByFriends(usersFriends))

      //match the postsByFriends item to the post.id, return content, likes, comments, posted_at
      const getPosts = postsByFriends(usersFriends).map(id => {
        const post = posts.find(x => x.id === id); 
        const findUser = Object.values(users).find(user => user.post_id.includes(id));
        // console.log("FIND USER:::", findUser);
        return [findUser, post.content, post.likes, post.posted_at];
      })
      // console.log("GETPOSTS:", getPosts);
      setState(getPosts);

      //if the post has comments, return the comments

    }).catch(err => console.log(err))
  }, [])

  // console.log("STATE", state) 

  const newsfeedPosts = state.map(post => { //state is an ARRAY not an object
    return(
      <PostItem
        user={post[0]} //this is an object
        content={post[1]}
        likes={post[2]}
        time={post[3]}
      />
    )
  })
  // console.log("NEWS", {newsfeedPosts}) //undefined props

  return (
    <div>
      {newsfeedPosts}
    </div>
    // <h1>Newsfeed</h1>
  );
};