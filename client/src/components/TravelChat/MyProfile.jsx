import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileEditForm from './ProfileEditForm';

export default function MyProfile (props) {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const userID = 1;
  
  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const profile = response.data.find((user) => {
        return user.id === userID;
      })
      setUser(profile)
    })
    .catch(error => console.log("error:", error))
    }, [])

  return (
    <div>
      <h1>{user.name}</h1> 
      <h1><button onClick={()=>(setPage(1))}>Edit Profile</button></h1>
      <h4>{user.location}</h4>
      <section>
      {page === 1 && <ProfileEditForm/>}
      </section>
    </div>
  );
};