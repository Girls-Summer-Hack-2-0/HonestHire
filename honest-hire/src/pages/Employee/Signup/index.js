import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import db, { auth } from "../../../firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Menu from "../../../components/Menu";
import "./employeeSignUp.css";

const SignUp = () => {
  const history = useHistory();

  const StyledTextInput = styled(TextField)({
    margin: 10,
  });

  const StyledButton = styled(Button)({
    marginLeft: "auto",
    marginRight: "auto",
  });

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const skillsRef = useRef(null);
  const graduationRef = useRef(null);
  const educationRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setLoading] = useState(false);
  // SIGN UP
  const signUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      Skills: skillsRef.current.value,
      education: educationRef.current.value,
      graduation: educationRef.current.value
    };
    await auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        db.collection("users")
          .add(data)
          .then(
            history.push("/employeeView")
          )
          .catch((err) => {
            console.log(err);
          });
        
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <div className="container">
      <Menu />
      <form action="">
        <h1>Employee Sign in</h1>
        <StyledTextInput
          label="Name"
          inputRef={nameRef}
          type="name"
          variant="outlined"
        />
        <StyledTextInput
          label="Skills"
          inputRef={skillsRef}
          variant="outlined"
        />
        <StyledTextInput
          label="Education"
          inputRef={educationRef}
          variant="outlined"
        />
        <StyledTextInput
          label="Expected graduation"
          inputRef={graduationRef}
          variant="outlined"
        />
        <StyledTextInput
          label="Email"
          inputRef={emailRef}
          type="email"
          variant="outlined"
        />
        <StyledTextInput
          label="Password"
          inputRef={passwordRef}
          type="password"
          variant="outlined"
        />
        <StyledButton
          onClick={signUp}
          disabled={isLoading}
          variant="contained"
          color="primary"
        >
          Sign up
        </StyledButton>
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
