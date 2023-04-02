import React from 'react';
import './courseFinder.css';
import searchGlass from '../imgs/search-glass.png';

export default function CourseFinder() {
    console.log('Course Finder page rendered');


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
                <button 
                    className='search-button'
                    //onSubmit={}
                    >
                    <img src={searchGlass} alt='search' className='search-glass-img'/>
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
                    <p className='description'>
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
                <p className='description'> 
                Classical and simulation-based 
                techniques for estimation and 
                hypothesis testing, including 
                inference for...
                </p>
                </div>
            </div>

            <div className='course3'>
                <h1 className='class3'>
                    CPSC 221
                </h1>
                <div className='inner-box3'>
                <p className='description'>
                Classical and simulation-based 
                techniques for estimation and 
                hypothesis testing, including 
                inference for...
                </p>
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
