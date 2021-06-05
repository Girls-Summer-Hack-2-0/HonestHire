import React, { useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './employeeSignUp.css';

const SignUp = () => {
    const history = useHistory()

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // SIGN UP 
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value).then(user =>{
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
    }

    // SIGN IN
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then(user =>{
                console.log(user)
                history.push("/employeeView")
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className = "container">
            <form action="">
                <h1>Employee Sign in</h1> 
                <h6>Email</h6>
                <input ref={emailRef}type="email" />
                <h6>Password</h6>
                <input ref={passwordRef}type="password"/>
                <button onClick={signIn}>Sign in</button>
                <h6>Not yet registered? <span onClick={signUp}className="signin_link">Sign up</span></h6>
            </form>
        </div>
    )
}

export default SignUp;