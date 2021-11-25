import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useVisualMode from '../hooks/useVisualMode';
import ProfileEditForm from './ProfileEditForm';

export default function Profile (props) {
  const [user, setUser] = useState([]);
  const userID = 1;
  
  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      const profile = response.data.find((user) => {
        return user.id === userID;
      })
      const userArray = Object.values(profile);
      console.log("INSIDE AXIOSSS", userArray)
      setUser(userArray)
    })
    .catch(error => console.log("error:", error))
    }, [])

  console.log("user OUTSIDE axios", user)

  const userProps = user.map(loggedInUser => {
    <ProfileEditForm 
      name={loggedInUser.name}
    />
  })

  return (
    <div>

      {/* <form className="profile">
        <h4>Description</h4>
          <input className="description"/>
      </form> */}
      {/* <h1>{user.name}</h1>  */}
        {/* {profileItem} */}
        <div> 
          <ul>
            {/* <li>Name: {props.user.name}</li> */}
            <li>From</li>
            <li>Here I am</li>
          </ul> 
        </div>
        <div>
          Discription
        </div>
        <div> 
            {/* <Button
                onClick={cancel} 
                danger>Edit</Button> */}
        </div>
        <div>
          {/* <button>onClick={Edit}</button> */}
        </div>
    </div>
  );
};