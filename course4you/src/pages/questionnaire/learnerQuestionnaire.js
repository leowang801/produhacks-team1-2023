import React from 'react';
import './learnerQuestionnaire.css';
import searchGlass from '../imgs/search-glass.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function learnerQuestionnaire() {
    //console.log('Course Finder page rendered');

    return (
        <>
        <div className="learner-questionnaire">
            <div className='ellipse'></div>
            
            <div className='questionnaire-question'> 
                What is your learning style?
            </div>

            <button className='choice-1'>
                Option 1
            </button>

            <button className='choice-2'>
                Option 2
            </button>

            <button className='choice-3'>
                Option 3
            </button>

        </div>
        </>

    );
}
