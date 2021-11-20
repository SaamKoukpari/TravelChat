import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/" element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
