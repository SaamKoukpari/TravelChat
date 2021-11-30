import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("/api/users", {
        user,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (

    <div className="full_page">
      
    <div>
      <div className="logo_image_container">
        <img  src="/logoWglow.png" alt="Travel Chat logo" />
        <button className="login_button" >
        <a href="/login"> Login</a>
        </button>
      </div>
    </div>
         


    <div className="signup_container">
        <h1>Sign-up</h1>

          <form>
            Name:
            <input
              className="signup__create-input"
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

         Email:
          <input
            className="signup__create-input"
            name="email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

         Password:
          <input
            className="signup__create-input"
            name="password"
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </form>

        <button className="signup_button" onClick={handleSubmit}>Submit</button>
     
    </div>
    </div>
  );
}

