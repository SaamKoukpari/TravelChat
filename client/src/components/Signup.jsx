import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Signup() { 
  const navigate = useNavigate()

  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    const user = {
      name: state.name,
      email: state.email,
      password: state.password
    }

    // console.log(user)
    axios
      .post('/api/users', {
        user
      })
      .then(response => {
        navigate('/newsfeed')
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  // function validate() {
  //   if (name === "") {
  //     setError("Name cannot be blank");
  //     return;
  //   }

  //   if (email === "") {
  //     setError("Email cannot be blank");
  //     return;
  //   }

  //   if (password === "") {
  //     setError("Password cannot be blank");
  //     return;
  //   }
    
  //   setError("");
  //   // props.onSave(name, email, password);
  // }

  return(
    <div>
      <h1>Signup</h1>
        <section className='signup_circle'>
          <form>
            <h5>Name:</h5>
            <input
              className='signup__create-input'
              name='name'
              type='text'
              placeholder='Enter Name'  
              value={state.name}
              onChange={(e) => setState(prev => ({...prev, name: e.target.value}))}
            />
            
            <br/>
            <h5>Email:</h5>
            <input
              className='signup__create-input'
              name='email'
              type='text'
              placeholder='Enter email'
              value={state.email}
              onChange={(e) => setState(prev => ({...prev, email: e.target.value}))} 
            />
            
            <h5>Password:</h5>
            <input
              className='signup__create-input'
              name='password'
              type='password'
              placeholder='Create password'
              value={state.password}
              onChange={(e) => setState(prev => ({...prev, password: e.target.value}))}
            />
          </form>

        <button onClick={handleSubmit}>Submit</button>
        </section>
    </div>
  )
}  
