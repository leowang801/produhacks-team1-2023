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
              Second Year Computer Science Student
          </div>




          <div className='uni'>
              University of British Columbia
          </div>




          <div className='strengths'>
              Strengths
          </div>




          <div className='rect1'>
             <div className="strength-box">
               Data Analysis
             </div>
          </div>




          <div className='rect2'>
          <div className="strength-box">
               Data Analysis
             </div>
          </div>




          <div className='rect3'>
          <div className="strength-box">
               Data Analysis
             </div>
          </div>




          <div className='weaknesses'>
              Weaknesses
          </div>




          <div className='rect4'>
              <div className='strength-box'>
                  DSCI 100
              </div>
          </div>




          <div className='rect5'>
               <div className='strength-box'>
                  DSCI 100
              </div>
          </div>




      </div>
  );
}
