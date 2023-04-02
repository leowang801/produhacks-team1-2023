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
                    M
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
                <button className='search-button'>
                    S
                </button>
            </div>

            <div className='suggested-courses-text'>
                Suggested Courses
            </div>

            <div className='course1'>
                <h1 className='class1'>
                    STAT 201
                </h1>
                <div className='inner-box1'>
                    <p>
                    Classical and simulation-based 
                    techniques for estimation and 
                    hypothesis testing, including 
                    inference for...
                    </p>
                </div>
            </div>

            <div className='course2'>
                <h1 className='class2'>
                    MATH 101
                </h1>
                <div className='inner-box2'>
                Classical and simulation-based 
                techniques for estimation and 
                hypothesis testing, including 
                inference for...
                </div>
            </div>

            <div className='course3'>
                <h1 className='class3'>
                    CPSC 221
                </h1>
                <div className='inner-box3'>
                Classical and simulation-based 
                techniques for estimation and 
                hypothesis testing, including 
                inference for...
                </div>
            </div>

            <button 
            type='submit'
            //onClick={onSubmit}     
            className="profile-button">
                Profile
            </button>

        </div>
        </>

    );
}
