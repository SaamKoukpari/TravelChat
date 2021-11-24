import React, { useReducer } from 'react';
import FriendsItem from './FriendsItem';

export default function FriendsList (props) {
  const friendListItem = props.friends.map(user => {
    return(
      <FriendsItem
        key={user.id}
        name={user.name}
        avatar={user.profile_picture}
      />
    )
  })
  
  return (
    <h1>FriendsList</h1>
  );
};