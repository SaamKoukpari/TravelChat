import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Signup(props) {  
  //const { name, email, password } = props;

  // const [name, setName] = useState(props.name || "");
  // const [email, setEmail] = useState(props.email || "");
  // const [password, setPassword] = useState(props.password || "");

  // const [error, setError] = useState("");

  const [state, setState] = useState({
    name: "props.name",
    email: "props.email",
    password: "props.password"
  });

  const handleSubmit = (event) => {
    axios
      .post('/api/users', {
        name: state.name,
        email: state.email,
        password: state.password
      })
      .then(response => {   
      const name = response[0].data.name;
      const email = response[0].data.email;
      const password = response[0].data.password;
      setState(prev => ({...prev, name, email, password }))
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
              // value={props.name}
            />
            
            <br/>
            <h5>Email:</h5>
            <input
              className='signup__create-input'
              name='email'
              type='text'
              placeholder='Enter email'
              value={props.email}  
            />
            
            <h5>Password:</h5>
            <input
              className='signup__create-input'
              name='password'
              type='password'
              placeholder='Create password'
              value={props.password}  
            />
          </form>

        <button onClick={handleSubmit}>Submit</button>
        </section>
    </div>
  )
}  
