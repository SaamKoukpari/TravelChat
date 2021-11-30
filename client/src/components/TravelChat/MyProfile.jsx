import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileEditForm from "./ProfileEditForm";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import "./MyProfile.scss";
import './PostItem.scss'
import TimeAgo from 'timeago-react';
import Icon from '@mui/material/Icon';
import { Avatar } from "@mui/material";

export default function MyProfile(props) {
  const [user, setUser] = useState([]);
  const [bday, setBday] = useState([]); 
  const [editPage, setEditPage] = useState([]); 
  const userID = 1;

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        const profile = response.data.find((user) => {
          return user.id === userID;
        });

        const age = profile.birthday;
        const usersAge = (string) => {
          const stringToArray = string.split("-");
          const usersYearBorn = stringToArray[0];
          const d = new Date();
          let year = d.getFullYear();

          return year - usersYearBorn;
        };

        setBday(usersAge(age));
        setUser(profile);
      })
      .catch((error) => console.log("error:", error));
  }, []);

  // const alert = function() {
  //   alert("I'm working")
  // }

  // useEffect(() => {
  //   axios.get("./api/posts")
  //   .then(res => {
  //     console.log("res data postsss", res.data);
  //     const usersPosts = res.data.find(user => {
  //       return res.data.user_id === userID;
  //     })
  //     setUsersPost(usersPosts);
  //   })
  //   .catch(err => console.log(err))
  // }, [])
  
  return (
    <section className="main_profile_container">
     
     <div className="inner_profile_container">
      <section className="profile_photo">
        <img src={user.profile_picture}></img>
      </section>

      <section className="profile_about">
        <span className="name">{user.name}</span>

          <div className="info">
            <div className="static-info">
              <p className="title">AGE</p>
              <p className="data">{bday}</p>
            </div>
            <div className="static-info">
              <p className="title">FROM</p>
              <p className="data">{user.hometown}</p>
            </div>
            <div className="static-info">
              <p className="title">LOCATION</p>
              <p className="data">{user.location}</p>
            </div>
          </div>

          <span className="description">{user.description}</span>
          <span className="edit_profile">
            <Button
              value={editPage}
              onClick={() => setEditPage(true)}
              onClick={console.log("clicked")}
              size="small"
              variant="outlined"
              startIcon={<SettingsIcon />}
            >
              {<ProfileEditForm props={props}/>}
              Edit Description
            </Button>
          </span>
        </section>
      </div>
    </section>
  );
}
