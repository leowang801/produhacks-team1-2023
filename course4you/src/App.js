import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/login/login';
import ClassBreakdown from './pages/classBreakdown/classBreakdown';
import Profile from './pages/user/profile';
import CourseFinder from './pages/courseFinder/courseFinder';
import StrengthsQuestions from './pages/questionnaire/strengthsQuestions';
import LearnerQuestionnaire from './pages/questionnaire/learnerQuestionnaire';
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque 
              sit amet sapien fringilla, mattis ligula consectetur, 
              ultrices mauris. Maecenas vitae mattis tellus. Nullam 
              quis imperdiet augue. Vestibulum auctor ornare leo, non 
              suscipit magna interdum eu. Curabitur pellentesque nibh 
              nibh, at maximus ante fermentum sit amet.
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
      </Routes>
    </div>
    </>
  );
}
