import React from "react";
import axios from 'axios';


function filterFriends(state, userId) {
  let results = [];
  const filteredUser = state.users.filter(user => user.id === userId)
  
  if (filteredUser[0] === undefined) {
    return [];
  }

  // user1 > user1.friends_id = [2, 3, 4]
  // name, profile_picture
  
  for (let friend of filteredUser[0].friend_id) {
    let object = {};
    object.id = friend;
    object.name = friend.name; 
    object.profile_picture = friend.profile_picture;
    results.push(object);
  }

  return results;
}

export default function FriendsItem() {

  const [friends, setFriends] = useState({
    friends: []
  });

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      //we need to pull up user_id's friend_id (set to an array)


      //Users.friends (friends array) join to friends table. select where user1.id = user.id =1

      setFriends(response.data)

      if (res.rows.length === 0) {
        return null
      }
      return res.rows[0];
    })
    .catch(error => console.log("error:", error))
    }, [])
  

  const friendListItemClass = classNames("frienders__item", {
    "frienders__item--selected": props.selected
  });

  return(
    < className={friendListItemClass}
        onClick={set}
  )
}


export function getFriend(state, friend) {
  const friendObj = { user: null, friend: null };
  if (friend) {
    friendObj.user = friend.user;
    for (const friend in state.friends) {
      if (state.friends[friend].id === friend.friend) {
        friendObj.friend = state.friends[friend];
      }
    }
  }
  if (friendObj.user) {
    return friendObj;
  }
  return null;
}