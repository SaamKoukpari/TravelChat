import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileEditForm from "./ProfileEditForm";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import "./MyProfile.scss";

export default function MyProfile(props) {
  const [user, setUser] = useState([]);
  const [bday, setBday] = useState([]);
  const [page, setPage] = useState(0);
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

  return (
    <section className="main_profile_container">
     
      
     <div className="inner_profile_container">
      <section className="profile_photo">
        <img src={user.profile_picture}></img>
      </section>

      <section className="profile_about">
        <span className="name">{user.name}</span>

        <span className="static_data">
          <h1>AGE</h1>
          <h1>FROM</h1>
          <h1>HERE I AM</h1>
        </span>
        <span className="dynamic_data">
          <h1>{bday}</h1>
          <h1>{user.hometown}</h1>
          <h1>{user.location}</h1>
        </span>
        <span className="discrip">{user.description}</span>
        <span className="edit_profile">
          <Button
            onClick={console.log("clicked")}
            size="small"
            variant="outlined"
            startIcon={<SettingsIcon />}
          >
            Edit Discription
          </Button>
        </span>
        </section>
       </div>
    </section>
  );
}
