import React from 'react';
import commentIcon from '../imgs/comment-icon.png';
import './classBreakdown.css';

import Data from '../../course-data.json';

export default function ClassBreakdown() {
    console.log('Login page rendered');


    return (
        <>
        <div className="class-breakdown">
            <div className='ellipse'></div>

            <div className='title'>
                STAT 201
            </div>

            <div className='subtitle'>
                Faculty of Sciences
            </div>

            <div className='prereqs'>
                Prerequisites
            </div>

            <div className='course-box'>
                <h1 className='course-name'>
                    DSCI 100
                </h1>
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

            <button className='comments'>
                <img src={commentIcon} className='comment-icon'/>
            </button>
        </div>
        </>

    );
}
