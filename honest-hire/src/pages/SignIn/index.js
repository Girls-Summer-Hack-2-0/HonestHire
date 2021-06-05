import React, { useRef } from "react";
import Menu from "../../components/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
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
    <>
      <Menu />
      <h1>Hello again!</h1>
        <TextField id="email-field" label="Email" variant="outlined" autoComplete="email" ref={emailRef} />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button onClick={signIn}>Sign In</Button>
    </>
  );
};

export default SignIn;
