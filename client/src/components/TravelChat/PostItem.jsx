import React, {  useState } from "react";
import './PostItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PostItem(props){
  const [countLike, setCountLike] = useState(props.likes)
  const [myColor, setMyColor] = useState('white');
  
  // Functions to change  the counter state item
  const increment = function() {

   
      setCountLike(countLike + 1);

  };

 
  
  // const muiTheme = createMuiTheme({ palette: { primary: lightBlue, secondary: pink, }, })
 
    
  // console.log(countLike)
  
  return(
    <div>
    <title>HELLO WORLD</title>
    <section className="news_item">
      <div>
        <h1>{props.user.name}</h1>
        <span>{props.content}</span>
        <div className="likes_and_time">
        <span>
          <FavoriteBorderIcon onClick={(e) => increment(e.target.value)}/>
          {countLike}
        </span>
            <h4>{props.time}</h4>
        </div>
      </div>
    </section>
    </div>
  )
}