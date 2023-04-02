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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setStrengths([...strengths, name]);
      setWeaknesses([...weaknesses, name]);
    } else {
      setStrengths(strengths.filter((s) => s !== name));
      setWeaknesses(weaknesses.filter((s) => s !== name));
    }
  };

  return (
    <div className="strengths-background">
      <div className="strengths-gradient"></div>

      <h1 className="main-question-title">
        What are your strengths and weaknesses?
      </h1>

      <div className="checkboxes">
        <h2>Strengths:</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={question}
                checked={strengths.includes(question)}
                onChange={handleCheckboxChange}
              />
              {question}
            </label>
          </div>
        ))}

        <h2>Weaknesses:</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={question}
                checked={weaknesses.includes(question)}
                onChange={handleCheckboxChange}
              />
              {question}
            </label>
          </div>
        ))}

      </div>
    </div>
  );
}