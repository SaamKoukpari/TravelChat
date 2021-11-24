import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostItem from './PostItem'

export default function Newsfeed () {
  const [state, setState] = useState([]);
  const userID = 1;

  useEffect(() => {
    axios.get('./api/posts')
    .then(response => {
      const posts = response.data
      const user = response.data.find((user) => { //filtered to userID=1
        return user.id === userID 
      })
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <h1>Newsfeed</h1>
  );
};