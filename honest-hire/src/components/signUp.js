import React from 'react';
import { Link } from 'react-router-dom';
import signUpPage from './employerSignup';
import "./signup.css"
const SignUp = () => {
    return (
        <div className = "container">
            <div className = "top-container">
                <h1>I am...</h1>

                <div className = "Buttom-container">
                    <div className = "employee-button">
                        <Link to ="/employeeSignUp">
                        <button title="employee-signup">Looiking for a job</button>
                        </Link>
                    </div>
                    <div className = "employer-button">
                        <Link to="/employerSignUp">
                        <button>A employer</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;