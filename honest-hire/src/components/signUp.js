import React from 'react';
import { Link } from 'react-router-dom';
import signUpPage from './employerSignup';
import "./signup.css"
import img from '../assets/iam.png';
const SignUp = () => {
    return (
        <div className = "container">
            <div className = "top-container">
                <img src={img} width='400' height='400'></img>
                <h1>I am...</h1>
            </div>

                <div className = "Bottom-container">
                    <div className = "employee-button">
                        <Link to ="/employeeSignUp">
                        <button title="employee-signup">Looking for a job</button>
                        </Link>
                    </div>
                    <div className = "employer-button">
                        <Link to="/employerSignUp">
                        <button>An employer</button>

                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default SignUp;