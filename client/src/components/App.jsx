import './App.scss';
import Login from './Login';
import Profile from './Profile';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
        </Routes>
      </BrowserRouter>
    );
  }