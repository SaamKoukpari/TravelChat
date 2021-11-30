import React, { useState } from "react";
import MyFriendItem from "./FindFriendItem";
import axios from "axios";
import "./FindFriends.scss";

export default function FindFriends(props) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);
  const userID = 1

  
  const handleSubmit = () => {
    axios
      .get("/api/users")
      .then((response) => {
        const users = response.data; //all the users
        const user = response.data.find((user) => {
          return user.id === userID;
        });

        const query = location;
        const query2 = description;
        const result = [];

        //For the purpose of MVD
        for (let obj of users) {
          if (!query2) {
            if (
              obj.location.toLowerCase() === query.toLowerCase() &&
              obj.id !== user.id
            ) {
              result.push(obj);
            }
          } else if (
            obj.location.toLowerCase() === query.toLowerCase() &&
            obj.id !== user.id
          ) {
            if (obj.description.includes(query2)) {
              result.push(obj);
            }
          }
        }
        setResults(result);
      })
      .catch((error) => console.log("error:", error));
  };

  const findFriendsItem = results.map((user) => {
    //passes props down
    return (
      <MyFriendItem
        key={user.id}
        user={user.id}
        name={user.name}
        avatar={user.profile_picture}
        friend={user.friend_id}
      />
    );
  });

  return (

    <div className="find_frineds_main_container">
      <div className="find_friends_nav">
        <span className="find_friends_title">Find new friends near you.</span>

        <div className="location_interest_container">
          <form>
            <span>Location:</span>
              <input
                className="findFriends__create-input"
                name="location"
                type="text"
                placeholder="Your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            <span>Interest:</span>
              <input
                className="findFriends__create-input"
                name="interest"
                type="text"
                placeholder="Search a commonality"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
          </form>
        </div>

        <div className="button_container">
          <button className="search-friends" onClick={handleSubmit}>
            SEARCH
          </button>
        </div>
      </div>

      <section className="found_friend_item">{findFriendsItem}</section>
    </div>
  );
}
