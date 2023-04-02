import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/login/login';
import ClassBreakdown from './pages/classBreakdown/classBreakdown';
import Profile from './pages/user/profile';
import CourseFinder from './pages/courseFinder/courseFinder';
import StrengthsQuestions from './pages/questionnaire/strengthsQuestions';
import LearnerQuestionnaire from './pages/questionnaire/learnerQuestionnaire';
import Stat201Comments from './pages/comments/stat201Comments';
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
          <div className="home-background">
            <div className="home-gradient"></div>

            <h1 className="welcome-message"> 
              Welcome to Course4You! 
            </h1>

            <h2 className="welcome-sub-message"> 
              For students, by students! 
            </h2>

            <p className="welcome-text"> 
            Join us in our journey to bridge the gap 
            between students and professors. On top of 
            generating personalized course recommendations 
            for university students based on their skills, 
            weaknesses, and course history, Course4You aims 
            to help professors better tailor their teaching 
            to the needs of their students. Welcome to the 
            future of university education!
            </p>

            <div className='welcome-image'>

            </div>

            <button 
              className="register-button" 
              onClick={navigateToLogin}>
              Register
            </button>
          </div>
        } />

        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/courseFinder/courseFinder" element={<CourseFinder/>} />
        <Route path="/pages/classBreakdown/classBreakdown" element={<ClassBreakdown/>} />
        <Route path="/pages/user/profile" element={<Profile/>} />
        <Route path="/pages/questionnaire/strengthsQuestions" element={<StrengthsQuestions/>} />
        <Route path="/pages/questionnaire/learnerQuestionaire" element={<LearnerQuestionnaire/>} />
        <Route path="/pages/comments/stat201Comments" element={<Stat201Comments/>} />
      </Routes>
    </div>
    </>
  );
}
