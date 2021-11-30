import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsItem from "./FriendListItem";
import "./FriendsList.scss";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const userID = 1;

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        const users = response.data; //all the users
        const user = response.data.find((user) => {
          //filtered to userID=1
          return user.id === userID;
        });

        const friends = user.friend_id.map((id) => {
          //array of friend_ids
          const friend = users.find((user) => user.id === id); //looking for where friend's user.id matches id from array
          return friend;
        });
        //console.log("friends INSIDE", friends);
        setFriends(friends); //set the state
      })
      .catch((error) => console.log("error:", error));
  }, []);

  const removeFriend = (friend_id) => {
    const userID = 1;
    console.log("FRIEND ID:", friend_id);
    

    axios
      .get("/api/users")
      .then((response) => {
        const user = response.data.find((user) => {
          return user.id === userID;
        });
        const array = user.friend_id;

        const newFriendArray = array.filter((friend) => {
          return friend !== friend_id;
        });

        const patchObj = {
          user: {
            friend_id: newFriendArray,
          },
        };

      axios.put(`/api/users/${userID}`, patchObj)
        .then((user1) => {
          const friends = user1.data.friend_id.map((id) => {
            
            const friend = response.data.find((user) => user.id === id); 
            return friend;
          });
          console.log("USER1.DATA>>>", user1.data)
          console.log("RESPONSE.DATA>>>", response.data)
          setFriends(friends)
        })
  })
      .catch((err) => err);
  };

  // const loadFriend = () => {
  //   const userID = 1;
    
  //   axios
  //     .get('/api/users')
  //     .then((response) => {
  //       const user = response.data.find((user) => {
  //         return user.id === userID;
  //       });

  //       const friends = user.friend_id.map((id) => {
          
  //       const friend = user.find((user) => user.id === id);
  //         return friend;
  //       });
  //       setFriends(friends)
  //     })
  // }

  // console.log("Friends OUTSIDE", friends)

  const friendListItem = friends.map((user) => {
    return (
      <FriendsItem
        key={user.id}
        removeFriend={removeFriend}
        userId={user.id}
        name={user.name}
        avatar={user.profile_picture}
        // load={loadFriend}
      />
    );
  });
  //console.log("LOOP:", friendListItem)

  return (
    <div className="friend_list_container">
      <section className="friend_nav">
        <h1>Friends</h1>
      </section>
      {friendListItem}
    </div>
  );
}
