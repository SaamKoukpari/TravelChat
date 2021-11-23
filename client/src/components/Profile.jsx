import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Profile () {
  const [user, setUser] = useState({
    users: []
  });

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
<<<<<<< HEAD
      //const name = user[0].data;
      setUser(response.data[1])
=======
      // const name = response.data;
      setUser(response.data[0])
>>>>>>> f82b2321f106baf663ec5d215445e1ddf65f7166
    })
    .catch(error => console.log("error:", error))
    }, [])
    
<<<<<<< HEAD
    console.log("User array:", user)
=======
    // console.log(user)
>>>>>>> f82b2321f106baf663ec5d215445e1ddf65f7166

  return (
    <div>
      <h1>{user.name}</h1> 
    </div>
  );
};