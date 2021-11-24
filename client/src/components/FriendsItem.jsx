import React from "react";

export default function FriendsItem(props){
  return(
    <div>
      <img src={props.avatar} />
      <h1>{props.name}</h1>
    </div>
  )
}