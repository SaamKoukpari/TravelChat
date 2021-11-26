import './App.scss';
import '../index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProfile from './MyProfile';
import Login from './Login';
import Layout from './Layout';
import Newsfeed from './Newsfeed';
import FriendsList from './FriendsList';
import FindFriends from './FindFriends';
import Signup from './Signup';
import Application from './ChatAPI/index.js';
import ProfileEditForm from './ProfileEditForm';


export default function App() {  
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/newsfeed" element={<Newsfeed/>} />
          <Route path="/profile" element={<MyProfile/>} />
          <Route path="/chat" element={<Application/>} />
          <Route path="/friends_list" element={<FriendsList/>} />
          <Route path="/find_friends" element={<FindFriends/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/temporary" element={<ProfileEditForm/>} />
        </Routes>
      </BrowserRouter>
    );
}


// side bar, top bar
// main section 
// content compent changes based on state, click button, have a state change
// set conditionals { && }

//link on signup back to home/login
//link on login to signup

//home component >> signup, login, main app, home 
