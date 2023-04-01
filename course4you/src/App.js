import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import './App.css';


export default function App() {
  const handleButtonClick = () => {
    console.log('Login button clicked');
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          Welcome to Course4You
          <Link to="/pages/login">
          <button className="login-button" onClick={handleButtonClick}>
            Login
          </button>
        </Link>
        <Routes>
          <Route path="/pages/login" component={Login} />
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}
