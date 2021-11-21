// import React, { Component, useState } from 'react';

// export default function Login () {
//   const [state, setState] = useState({});

//   handleOnChange = (event) => {
//     setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()

//     let user = {
//       name: state.name,
//       password: state.password
//     }

//     fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//   }
//     return (
//       <form onSubmit={this.handleSubmit} >
//         <label>Name:</label>
//         <input type='text' name='name' value={state.name} onChange={handleOnChange} />
//         <label>Password:</label>
//         <input type='password' name='password' value={this.state.password} onChange={handleOnChange} />
//         <input type='submit' value='Login'/>
//       </form>
//     )
//   }
