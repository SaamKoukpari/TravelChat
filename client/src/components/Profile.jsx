import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Profile () {
  const [user, setUser] = useState({
    users: []
  });

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      // const name = response.data;
      setUser(response.data[0])
    })
    .catch(error => console.log("error:", error))
    }, [])
    
    // console.log(user)

  return (
    <div>
      <h1>{user.name}</h1> 
    </div>
  );
};