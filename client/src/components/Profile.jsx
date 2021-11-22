import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Profile () {
  const [user, setUser] = useState({
    users: []
  });

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      //const name = user[0].data;
      setUser(response.data[1])
    })
    .catch(error => console.log("error:", error))
    }, [])
    
    console.log("User array:", user)

  return (
    <div>
      <h1>{user.name}</h1> 
    </div>
  );
};