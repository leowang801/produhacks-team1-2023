import React from 'react';
import personIcon from '../imgs/person-icon.png';
import './comments.css';
import { useLocation } from 'react-router-dom';

import Data from '../../course-data.json';

export default function comments() {
    console.log('class breakdown page rendered');

    return (
        <>
        <div className="class-breakdown">
            <div className='ellipse'></div>

            <div className='course-comments'>
                Comments
            </div>

            <img src={pieChart} alt='' className='first-icon'></img>
            <div className='first-comment-box'>
                Hello
            </div>

            <img src={pieChart} alt='' className='second-icon'></img>
            <div className='second-comment-box'>
                Hello
            </div>

        </div>
        </>

    );
}
