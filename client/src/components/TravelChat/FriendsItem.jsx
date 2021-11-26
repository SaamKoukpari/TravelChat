import React from "react";

export default function FriendsItem(props){
  return(
    <section>
      <div>
        <img src={props.avatar} alt="user avatar"/>
        <h1>{props.name}</h1>
      </div>
    </section>

  )
}