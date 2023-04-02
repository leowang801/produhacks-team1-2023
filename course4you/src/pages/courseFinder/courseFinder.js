import React from 'react';
import './courseFinder.css';

export default function CourseFinder() {
    console.log('Login page rendered');


    return (
        <>
        <div className="course-finder">
            <div className='ellipse'></div>

            <div className = 'search'>
                <button className='button1'>

                </button>
                <label
                  className="search-text"
                >
                  Find Course
                </label>
                <div>
                  <input
                    id="course"
                    name="course"
                    type="course"
                    autoComplete="course"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    required
                    className="course-input"
                    />
                </div>
            </div>

            <h1 className='create-account-text'>
                Suggested Courses
            </h1>

            <div className='course1'>
                <h1></h1>
                <div>
                    
                </div>
            </div>

            <div className='course2'>
                <h1></h1>
                <div>
                    
                </div>
            </div>

            <div className='course3'>
                <h1></h1>
                <div>
                    
                </div>
            </div>

            <div className='profile-button'>
                <button 
                type='submit'
                //onClick={onSubmit}     
                className="profile-button">
                    Continue
                </button>
            </div>

        </div>
        </>

    );
}
