import React, { useState } from "react";

import "./strengthsQuestions.css";

export default function StrengthsQuestions() {
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);

  const questions = [
    "Math",
    "Phyiscs",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "Language Arts",
    "History",
    "Psychology",
    "Economics",
    "Business",
    "Philosophy"
  ];

  const handleStrengthsCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setStrengths([...strengths, name]);
      
    } else {
      setStrengths(strengths.filter((s) => s !== name));
    }
  };

  const handleWeaknessesCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
        setWeaknesses([...weaknesses, name]);
    } else {
        setWeaknesses(weaknesses.filter((s) => s !== name));
    }
};
        

  return (
    <>
    <div className="strengths-background">
        <div className="ellipse-question"></div>

        <div className="main-question-title">
            <h1 className="">
                What are your strengths and weaknesses?
            </h1>
        </div>
      

      <div className="checkboxes">
        <div className="checkbox">
            <h2 className="strengths-title">Strengths:</h2>
            {questions.map((question, index) => (
                <div key={index}>
                <label className="question-label">
                <input
                    type="checkbox"
                    name={question}
                    checked={strengths.includes(question)}
                    onChange={handleStrengthsCheckboxChange}
                />
                {question}
                </label>
                </div>
            ))}
        </div>
        <div className="checkbox">
            <h2 className="weakness-title">Weaknesses:</h2>
            {questions.map((question, index) => (
                <div key={index}>
                <label className="question-label">
                <input
                    type="checkbox"
                    name={question}
                    checked={weaknesses.includes(question)}
                    onChange={handleWeaknessesCheckboxChange}
                />
                {question}
                </label>
                </div>
            ))}
        </div>

        </div>
    </div>
    </>
  );
}