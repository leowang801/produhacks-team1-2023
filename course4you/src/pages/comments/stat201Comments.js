import React from "react";
import userIcon from "../imgs/account_circle.png";

import "./stat201Comments.css";

export default function Stat201Comments() {

    return (
        <>
        <div className="class-breakdown">
            <div className='ellipse'></div>

            <div className='course-comments'>
                STAT 201 — Comments
            </div>

            <img src={userIcon} alt='' className='first-icon'></img>
            <div className='first-comment-box'>
            The instructors for STAT 201 are knowledgeable and approachable, 
            and they are always available to provide assistance and answer 
            any questions students may have. They also provide helpful 
            feedback on assignments, which helps students to improve their understanding 
            of the subject matter.
            </div>

            <img src={userIcon} alt='' className='second-icon'></img>
            <div className='second-comment-box'>
            I really loved the course and I think STAT 201 is an excellent 
            course for anyone interested in learning the 
            basics of statistics.
            </div>

        </div>
        </>
    )
}