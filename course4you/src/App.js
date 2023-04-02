import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/login';
import './App.css';


export default function App() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/pages/login');
    console.log('Login button clicked');
  };

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={
          
            <div className="App-header">
              Welcome to Course4You
              <button className="login-button" onClick={navigateToLogin}>
                Login
              </button>
          </div>} />
        <Route path="/pages/login" element={<Login />} />
      </Routes>
    </div>
    </>
  );
}
