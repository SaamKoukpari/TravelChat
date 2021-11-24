import React from "react";

export default function PostItem(props){
  return(
    <section>
      <div>
<<<<<<< HEAD
        <h1>{props.user}</h1>
        <p>{props.content}</p>
        <h5>{props.likes}</h5>
        <h4>{props.time}</h4>
=======
        <h1>{props.user_id}</h1>
        <h5>{props.likes}</h5>
        <p>{props.content}</p>
>>>>>>> 3fc2816148d6e1c5ab77b5911d0b9d6e180778f5
      </div>
    </section>
  )
}