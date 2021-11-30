import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .get("/api/users", {
        user,
      })
      .then((response) => {
        setEmail(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

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

  return (
    <div className="full_page">
      
      <div>
        <div className="logo_image_container">
          <img  src="/logoWglow.png" alt="Travel Chat logo" />
          <button className="login_button" >
          <a href="/signup"> Sign-up</a>
          </button>
        </div>
      </div>

      <div className="login_container">
        <h1>Login</h1>

        <form>
          Email:
          <input
            className="login__create-input"
            name="email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Password:
          <input
            className="login__create-input"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="login_button" onClick={handleSubmit}>
          Submit
        </button>
        
      </div>

      {/* <div className="loging_padded_box">
    <div className="login__container">
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
    </div> */}
    </div>
  );
}
