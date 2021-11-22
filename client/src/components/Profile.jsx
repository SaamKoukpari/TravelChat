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
      setUser(response.data)
    })
    .catch(error => console.log("error:", error))
    }, [])
    
    console.log(user)

  return (
    <div>
<<<<<<< HEAD
      <h1>test</h1>
=======
      <h1>{user[0].name}</h1> 
>>>>>>> c9df452ed8bf88cdf05eb8b1f18ca0f1d1fd3713
    </div>
  );
};