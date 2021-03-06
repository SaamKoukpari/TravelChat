import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileEditForm from "./ProfileEditForm";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import "./MyProfile.scss";
import './PostItem.scss'
import Icon from '@mui/material/Icon';
import MyProfilePosts from './MyProfilePosts'

export default function MyProfile() {
  const [user, setUser] = useState([]);
  const [bday, setBday] = useState([]); 
  const [usersPosts, setUsersPosts] = useState([]);
  const userID = 1;

  const getProfileProps = function(){
    Promise.all([
      axios.get("./api/users"),
      axios.get("./api/posts"),
    ])
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
        return profile.post_id.map(id => {
          let post = posts.find(post => post.id === id);
          return {profile, ...post};
        })
        .sort((a, b) => {
          return (
            new Date(b.posted_at).getTime() -
            new Date(a.posted_at).getTime()
          );
        });
      }
      console.log("getUsersPosts", getUsersPosts());
      setUsersPosts(getUsersPosts())
    })
    .catch((err) => err);
  };

  useEffect(() => {
    getProfileProps()
  }, [])

  const profilePosts = usersPosts.map(post => {
      return (
        <MyProfilePosts
          key={post.id}
          post={post}
        />
      )
  })

  const [state, setState] = useState(false);
  const [desc, setDesc] = useState(user.description);  

  const handleEdit = () => {
    setState(state === true ? false : true);
  }

  const saveEdit = (description) => {
    let data = {description: description};
    
    axios.put('/api/users/1', data)
    .then(response => {
      getProfileProps();
      setDesc("");
    })
    .catch(err => err)
  }

  return (
    <section className="main_profile_container">
     
      <div className="inner_profile_container">

        <section className="profile_photo">
          <img src={user.profile_picture}></img>
        </section>

        <section className="profile_about">

          <div className="profile-edit">
            <Icon> 
              {state === true && <Icon onClick={function(){saveEdit(desc); handleEdit()}}>check_circle_outline</Icon>}
              {state === false && <Icon onClick={handleEdit}>border_color</Icon>}
            </Icon>
          </div>

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

            {state === true ? (
              <span>
              <textarea
                className="description"
                type="text"
                placeholder={user.description}
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </span>
            ) : (
              <span className="description">{user.description}</span>
            )}
          
        </section>
      </div>
      
      <div className="load_her_posts">{profilePosts}</div>
    </section>
  );
}
