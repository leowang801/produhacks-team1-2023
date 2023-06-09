import React from 'react';
import commentIcon from '../imgs/comment-icon.png';
// import pieChart from '../imgs/pie-chart.png';
import './classBreakdown.css';
import { useLocation, useNavigate, } from 'react-router-dom';

import Data from '../../course-data.json';

export default function ClassBreakdown() {
    console.log('class breakdown page rendered');

    const location = useLocation();
    const searchedCourse = location?.state?.searchedCourse;
    console.log(searchedCourse);

    const course = Data.find((course) => course.name === searchedCourse);
    
    console.log(course);

    const navigate = useNavigate();

    const onCommentsSubmit = (e) => {
        console.log('comments button clicked');
        e.preventDefault();

        navigate('/pages/comments/stat201Comments');
    }
    return (
        <>
        <div className="class-breakdown">
            <div className='ellipse'></div>

            <div className='title'>
                {course.name}
            </div>

            <div className='subtitle'>
                Faculty of Sciences
            </div>

            <div className='prereqs'>
                Prerequisites
            </div>

            <div className='course-box'>
                <h1 className='course-name'>
                    {course.prerec}
                </h1>
            </div>

            <div className='course-description'>
                {course.description}
            </div>

            <div className='last-year-average'>
                Last Year's Average
            </div>

            <div className='average'>
                <div className='percent'>
                    {course.avg}%
                </div>
            </div>

            <button className='comments'
                    onClick={onCommentsSubmit}>
                <img src={commentIcon} alt='' className='comment-icon'/>
            </button>

            {/*<img src={pieChart} alt='' className='pie-chart'></img>*/}
        </div>
        </>

    );
}
