import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TravelChat/MyProfile.scss";
import "./TravelChat/PostItem.scss";
import "./App.scss";
import Icon from "@mui/material/Icon";
import FriendProfilePosts from "./FriendProfilePosts";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function FriendProfile() {
  const [user, setUser] = useState([]);
  const [bday, setBday] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const userID = 2;

  useEffect(() => {
    Promise.all([axios.get("./api/users"), axios.get("./api/posts")])
      .then((all) => {
        const users = all[0].data;
        const posts = all[1].data;

        const profile = users.find((user) => {
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
        console.log("PROFILE", profile);
        setUser(profile);

        const getUsersPosts = () => {
          return profile.post_id
            .map((id) => {
              let post = posts.find((post) => post.id === id);
              return { profile, ...post };
            })
            .sort((a, b) => {
              return (
                new Date(b.posted_at).getTime() -
                new Date(a.posted_at).getTime()
              );
            });
        };
        console.log("getUsersPosts", getUsersPosts());
        setUsersPosts(getUsersPosts());
      })
      .catch((err) => err);
  }, []);

  const profilePosts = usersPosts.map((post) => {
    return <FriendProfilePosts key={post.id} post={post} />;
  });

  return (
    <main className="layout">
      <section className="sidebar2">
        <img
          className="sidebar--centered"
          src="/chat.png"
          alt="Travel Chat logo"
        />
        <nav className="sidebar__menu2">
          <ul>
            <h1>
              <button className="nav-button">Newsfeed</button>
            </h1>
            <h1>
              <button className="nav-button">My Profile</button>
            </h1>
            <h1>
              <button className="nav-button">Friends List</button>
            </h1>
            <h1>
              <button className="nav-button">Chat</button>
            </h1>
            <h1>
              <button className="nav-button" onClick={() => <Link to="/" />}>
                Find Friends
              </button>
            </h1>
          </ul>
        </nav>
      </section>

      <section className="profile__status__container2">
        <section className="status__container2">
          <Avatar
            alt="user_loggedin"
            src="./lucy-angel.png"
            sx={{ width: 30, height: 30 }}
          />
          <span className="logout_status">
            <a href="/login">Logout</a>{" "}
          </span>
        </section>
      <section className="component__container2">
        <section className="main_profile_container">
          <div className="inner_profile_container2">
            <section className="profile_photo2">
              <img src={user.profile_picture}></img>
            </section>

            <section className="profile_about2">
              <span className="name2">{user.name}</span>

              <div className="info2">
                <div className="static-info2">
                  <p className="title2">AGE</p>
                  <p className="data2">{bday}</p>
                </div>
                <div className="static-info2">
                  <p className="title">FROM</p>
                  <p className="data">{user.hometown}</p>
                </div>
                <div className="static-info">
                  <p className="title">LOCATION</p>
                  <p className="data">{user.location}</p>
                </div>
              </div>

              <span className="description2">{user.description}</span>
            </section>
          </div>

          <div className="load_her_posts">{profilePosts}</div>
        </section>
      </section>
      </section>

    </main>
  );
}
