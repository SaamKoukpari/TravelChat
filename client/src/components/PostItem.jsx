import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PostItem(props){
  const [countLike, setCountLike] = useState(props.likes)

  // Functions to change  the counter state item
  const increment = function() {
    setCountLike(countLike + 1);
  };
    
  console.log(countLike)
  console.log()

  return(
    <div>
    <title>HELLO WORLD</title>
    <section>
      <div>
        <h1>{props.user.name}</h1>
        <p>{props.content}</p>
        <button onClick={(e) => increment(e.target.value)}>{countLike}</button>
        <h4>{props.time}</h4>
      </div>
    </section>
    </div>
  )
}