import React, { useState } from "react";
import MyFriendItem from "./MyFriendItem";
import axios from "axios";
import "./FindFriends.scss";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function FindFriends(props) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);
  const userID = 1;
  console.log(location);

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
        // console.log("SEARCH HERE >>> ", result);
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
      <span className="find_friends_title">Find new friends</span>

      <div className="location_interest_container">
        <span className="location_container">
          <span>Location:</span>
          <form>
            <input
              className="findFriends__create-input"
              name="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </form>
        </span>
        <span className="interest_container">
          <span>Interest</span>
          <form>
            <input
              className="findFriends__create-input"
              name="interest"
              type="text"
              placeholder="Search interests"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        </span>
        <div className="button_container">
          <Button
            onClick={handleSubmit}
            size="small"
            variant="outlined"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
      </div>
      </div>
      
      <section className="found_friend_item">{findFriendsItem}</section>
    </div>
  );
}
