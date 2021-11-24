import React from "react";

export default function PostItem(props){
  

  return(
    <section>
      <div>
        <h1>{props.user_id}</h1>
        <h5>{props.likes}</h5>
        <p>{props.content}</p>
      </div>
    </section>
  )
}