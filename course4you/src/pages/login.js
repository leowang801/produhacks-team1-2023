import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

export default function Login() {
    console.log('Login page rendered');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [major, setMajor] = useState('');

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted');
        console.log(email);
        console.log(password);
        console.log(studentNumber);
        console.log(major);

        // history.push('/pages/');
    }


    return (
        <>
        <div className="register">
            <div className='ellipse'></div>

            <h1 className='create-account-text'>
                Create an account today
            </h1>

            <div className = 'email'>
                <label
                  className="email-text"
                >
                  Email
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                    />
                </div>
            </div>

            <div className = 'password'>
                <label
                  className="password-text"
                >
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={[password]}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="password-input"
                    />
                </div>
            </div>

            <div className = 'student-number'>
                <label
                  className="student-number-text"
                >
                  StudentID
                </label>
                <div>
                  <input
                    id="student-number"
                    name="student-number"
                    type="text"
                    autoComplete="student-number"
                    value={[studentNumber]}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    required
                    className="student-number-input"
                    />
                </div>
            </div>

            <div className = 'major'>
                <label
                  className="major-text"
                >
                  Major
                </label>
                <div>
                  <input
                    id="major"
                    name="major"
                    type="major"
                    autoComplete="major"
                    value={[major]}
                    onChange={(e) => setMajor(e.target.value)}
                    required
                    className="major-input"
                    />
                </div>
            </div>

            <div className = 'continue'>
                <button 
                type='submit'
                onClick={onSubmit}     
                className="continue-button">
                    Continue
                </button>
            </div>


        </div>
        </>

    );
}
