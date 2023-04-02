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

            <div className='course-description'>
            Classical and simulation-based techniques 
            for estimation and hypothesis testing, 
            including inference for means and proportions. 
            Emphasis on case studies and real data sets, 
            as well as reproducible and transparent 
            workflows when writing computer scripts 
            for analysis and reports.
            </div>

            <div className='last-year-average'>
                Last Year's Average
            </div>

            <div className='average'>
                <div className='percent'>
                    76%
                </div>
            </div>

            <div className='advice-box'>
                <button className='tips-button'>

                </button>
                <p className='advice'>
                    Students who also took MATH 101 
                    did 7% better in STAT 201 on average!
                </p>
            </div>

            <button className='back-button'>

            </button>

            <button className='comments'>

            </button>

        </div>
        </>

    );
}
