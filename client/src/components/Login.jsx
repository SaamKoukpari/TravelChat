import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Login() { 
  const navigate = useNavigate()

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    const user = {
      email: state.email,
      password: state.password
    }

    axios
      .get('/api/users', {
        user
      })
      .then(response => {
        setState(response.data)
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
      <h1>Login</h1>
        <section className='login_circle'>
          <form>

            <h5>Email:</h5>
            <input
              className='login__create-input'
              name='email'
              type='text'
              placeholder='Enter email'
              value={state.email}
              onChange={(e) => setState(prev => ({...prev, email: e.target.value}))} 
            />
            
            <h5>Password:</h5>
            <input
              className='login__create-input'
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