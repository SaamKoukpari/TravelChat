import React from "react";

export default function PostItem(props){
  return(
    <section>
      <div>
        <h1>{props.user}</h1>
        <p>{props.content}</p>
        <h5>{props.likes}</h5>
        <h4>{props.time}</h4>
      </div>
    </section>
  )
}