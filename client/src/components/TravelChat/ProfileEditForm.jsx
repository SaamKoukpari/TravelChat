import React, { useState } from 'react';
import axios from 'axios';

//1. When I click the button i need to extract the information from our textbox
//2. to actually make a post / put request to the backend

export default function Form() {
  const userID = 1;
  const [textAreaText, setTextAreaText] = useState("");

  const handleEdit = (description) => {
    console.log("Testing", description);
    let data = {description: description};
    axios.put('/api/users/1', data)
    .then(response => {
      setTextAreaText("");
      console.log("TEST", response)
    })
    .catch(err => err)
    //console.log(props)
  }
  
  return (
      <div>
        <textarea
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="prop.description"
          value={textAreaText} onChange={(event) => setTextAreaText(event.target.value)} 
        />
        <button onClick={()=> handleEdit(textAreaText)}>CLICK ME</button>
      </div>
  )
}
