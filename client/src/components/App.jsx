import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile';
import Layout from './Layout';
import Newsfeed from './Newsfeed';
import Chat from './Chat';
import FriendsList from './FriendsList';
import FindFriends from './FindFriends';
 
export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/newsfeed" element={<Newsfeed/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/friends_list" element={<FriendsList/>} />
          <Route path="/find_friends" element={<FindFriends/>} />
        </Routes>
      </BrowserRouter>
    );
  }