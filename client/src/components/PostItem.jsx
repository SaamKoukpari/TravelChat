import React, { useState } from "react";

export default function PostItem(props){
  const [countLike, setCountLike] = useState(props.likes)

  const increment = function() {
    setCountLike(countLike + 1);
  };
    
  console.log(countLike)

  return(
      <div>
        <h1>{props.user.name}</h1>
        <p>{props.content}</p>
        <button onClick={(e) => increment(e.target.value)}>{countLike}</button>
        <h4>{props.time}</h4>
      </div>
  )
}