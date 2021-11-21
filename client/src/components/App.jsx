import './App.scss';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
