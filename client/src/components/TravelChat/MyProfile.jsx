import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileEditForm from './ProfileEditForm';
import "./MyProfile.scss";

export default function MyProfile (props) {
  const [user, setUser] = useState([]);
  const [bday, setBday] = useState([]);
  const [page, setPage] = useState(0);
  const userID = 1;
  
  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const profile = response.data.find((user) => {
        return user.id === userID;
      })
      
      const age = profile.birthday
      const usersAge = (string) =>{

        const stringToArray = string.split("-");
        const usersYearBorn = stringToArray[0]
        const d = new Date();
        let year = d.getFullYear();

       return year - usersYearBorn
  
      }
  
      
      setBday(usersAge(age))
      setUser(profile)
    })
    .catch(error => console.log("error:", error))
    }, [])


   // const bday = user.birthday
    
 

    //let usersDayOfBirth = usersAge(bday);

    //usersAge(bday)
    // console.log("USER", user.birthday)
  return (
    <div className="main_container">
     
      <section className="profile_photo">
        <img src={user.profile_picture}></img>
      </section>

      <section className="profile_information">
       
        <div className="users_name">{user.name}</div>
       
        <div className="users_about">
          <section className="age">
            <h1>AGE</h1>
            <h4>{bday}</h4>
          </section>
          <section className="from">
            <h1>FROM</h1>
            <h4>{user.hometown}</h4>
          </section>
          <section className="where_i_am">
            <h1>HERE I AM</h1>
            <h4>{user.location}</h4>
          </section>
        </div>


        <div className="profile_discription">{user.description}</div>
      </section>




      {/* <h1>{user.name}</h1> 
      <section className="about__user">
        <div className="discription"></div>
        <div className="discription"></div>
        <div className="discription"></div>
      </section>
      <h1><button onClick={()=>(setPage(1))}>Edit Profile</button></h1>
      <h4>{user.location}</h4>
      <section>
      {page === 1 && <ProfileEditForm/>}
      </section> */}
    </div>
  );
};