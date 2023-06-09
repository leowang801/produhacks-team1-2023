import React from 'react';
import './learnerQuestionnaire.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LearnerQuestionnaire() {
    //console.log('Course Finder page rendered');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/pages/courseFinder/courseFinder');
    }

    return (
        <>
        <div className="learner-questionnaire">
            <div className='ellipse'></div>
            
            <div className='questionnaire-question'> 
                What is your learning style?
            </div>

            <button className='choice-1 learner-question'
                    onClick={onSubmit}>
                Visual
            </button>

            <button className='choice-2 learner-question'
                    onClick={onSubmit}>
                Auditory
            </button>

            <button className='choice-3 learner-question'
                    onClick={onSubmit}>
                Kinesthetic
            </button>

        </div>
        </>

    );
}
