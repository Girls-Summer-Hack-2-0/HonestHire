import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../../firebase";
import "./employeeSignUp.css";

const SignUp = () => {
  const history = useHistory();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // SIGN UP
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form action="">
        <h1>Employer Sign in</h1>
        <TextField
          label="Email"
          inputRef={emailRef}
          type="email"
          variant="outlined"
        />
        <TextField
          label="Password"
          inputRef={passwordRef}
          type="password"
          variant="outlined"
        />
        <button onClick={signUp}>Sign up</button>
        <h6>
          Already have an account?{" "}
          <span onClick={signUp} className="signin_link">
            Sign in
          </span>
        </h6>
      </form>
    </div>
  );
};

export default SignUp;
