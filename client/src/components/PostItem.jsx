import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PostItem(props){
  const [state, setState] = useState([]);
  
  const userID = 1

  useEffect(() => {
    axios.get('/api/posts')
    .then(res => {
      const users = all[0].data; //all the users
      const likes = res.data[0].likes
      console.log("ARRAY", res.data[0].likes)
      
      const user1 = users.find(user => {
        return user.id === userID 
      })

      const findPost = ()=> {
        
      }
      
    })
  })


  return(
    <section>
      <div>
        HELLLLLO
        <h1>{props.user_id}</h1>
        <h5>{props.likes}</h5>
        <p>{props.content}</p>
      </div>
    </section>
  )
}