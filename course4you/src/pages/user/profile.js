import React from "react";
import "./profile.css";




export default function Profile() {
  console.log("Profile page rendered")
  return (
      <div className='profile'>
          <div className='ellipse'></div>




          <div className='student'>
              Student
          </div>




          <div className='profile-major'>
              Computer Science Student
          </div>




          <div className='uni'>
              University of British Columbia
          </div>




          <div className='strengths'>
              Strengths
          </div>




          <div className='rect1 s-w-wrapper'>
             <div className="strength-box">
               Math
             </div>
          </div>




          <div className='rect2 s-w-wrapper'>
          <div className="strength-box">
               English
             </div>
          </div>




          <div className='rect3 s-w-wrapper'>
          <div className="strength-box">
               Physics
             </div>
          </div>




          <div className='weaknesses'>
              Weaknesses
          </div>




          <div className='rect4 s-w-wrapper'>
              <div className='strength-box'>
              Psychology
              </div>
          </div>




          <div className='rect5 s-w-wrapper'>
               <div className='strength-box'>
                  Biology
              </div>
          </div>




      </div>
  );
}
