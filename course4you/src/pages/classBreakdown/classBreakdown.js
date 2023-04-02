import React from 'react';
import './classBreakdown.css';

export default function ClassBreakdown() {
    console.log('Login page rendered');


    return (
        <>
        <div className="class-breakdown">
            <div className='ellipse'></div>

            <h1>
                STAT 201
            </h1>

            <h2>
                Faculty of Sciences
            </h2>

            <h3>
                Prerequisites
            </h3>

            <div className='course-box'>
                <rect className='course-rect'>
                    <p className='course-name'>
                        DSCI 100
                    </p>
                </rect>
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

            <div className='course-description'>
                
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
