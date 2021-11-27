import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Login() { 
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    const user = {
      email: email,
      password: password
    }

    axios
      .get('/api/users', {
        user
      })
      .then(response => {
        setEmail(response.data)
        navigate('/')
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
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            
            <h5>Password:</h5>
            <input
              className='login__create-input'
              name='password'
              type='password'
              placeholder='Create password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

        <button onClick={handleSubmit}>Submit</button>
        </section>
    </div>
  )
}