import React, { useState } from 'react';
import axios from 'axios';

//1. When I click the button i need to extract the information from our textbox
//2. to actually make a post / put request to the backend

export default function Form({update={}}) {
  // const userID = 1;
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
  }
  
  return (
      <div>
        <div className='child'>
          <textarea
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Edit description"
            value={textAreaText} 
            onChange={(event) => setTextAreaText(event.target.value)} 
          />
        </div>
        <div>
        <button onClick={()=> handleEdit(textAreaText)}>Update</button>
        <div/>
      </div>
      </div>
  )
}
