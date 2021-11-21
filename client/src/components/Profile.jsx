import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import axios from 'axios';


export default function Profile () {
  const [user, setUser] = useState([])

  useEffect(() =>{
  axios.get('/api/users')
  .then(response => {
    setUser(response.data)
  })
  .catch(error => console.log("error:", error))
  }, [])

  return (
      <h1>{user[0].name}</h1>
  );
};