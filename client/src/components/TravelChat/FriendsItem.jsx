import axios from "axios";
import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./smallAvatar.scss";
import "./FriendsItem.scss";

export default function FriendsItem(props) {
  const [friend, setFriend] = useState([]);
  const [page, setPage] = useState(3);

  const removeFriend = (friend_id) => {
    const userID = 1;

    axios
      .get("/api/users")
      .then((response) => {

        const user = response.data.find((user) => {
          return user.id === userID;
        });
        
        const array = user.friend_id;

        axios.put("/api/users/1", array).then((response) => {
          console.log("ARRAY: ", array);
          const index = array.indexOf(friend_id);
          if (index > -1) {
            array.splice(index, 1);
          }
          setFriend(array);
          console.log("NEW ARRAY: ", array);
        });
      })
      .catch((err) => err);
  };


  return (
    <section>
      <div className="friend_item">
        <div className="friend_photo">
          <Avatar
            alt="Remy Sharp"
            src={props.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </div>

        <div className="friend_name">
          <h1>{props.name}</h1>
        </div>

        <div className="add_message">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => removeFriend(props.userId)}
          ></Button>
          <Button variant="outlined" endIcon={<SendIcon />}></Button>
        </div>
      </div>
    </section>
  );
}
