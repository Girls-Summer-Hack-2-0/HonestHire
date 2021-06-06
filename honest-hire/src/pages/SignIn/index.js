import React, { useRef } from "react";
import Menu from "../../components/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import db, { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

const StyledTextInput = styled(TextField)({
  margin: 10,
});

const StyledButton = styled(Button)({
  marginLeft: 'auto',
  marginRight: 'auto'
});

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

//   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(() => {
//   return firebase.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// const signIn = (e) => {
//   e.preventDefault();
//   auth
//     .signInWithEmailAndPassword(
//       emailRef.current.value,
//       passwordRef.current.value
//     )
//     .then((user) => {
//       console.log(user);
//       db
//         .collection("recruiters")
//         .where("email", "==", emailRef.current.value)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot ?
//             history.push("/employerView") : history.push("/employeeView");
//         })
//         .catch((e) => console.log(e));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };  


  const signIn = (e) => {
    e.preventDefault();
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
   .then(() => {
      return auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        db
          .collection("recruiters")
          .where("email", "==", emailRef.current.value)
          .get()
          .then((querySnapshot) => {
            querySnapshot ?
              history.push("/employerView") : history.push("/employeeView");
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log(err);
      })
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };

  return (
    <div className="container">
      <Menu />
      <form action="">
        <h1>Hello again!</h1>
        <StyledTextInput
          id="email-field"
          label="Email"
          variant="outlined"
          autoComplete="email"
          inputRef={emailRef}
        />
        <StyledTextInput
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          inputRef={passwordRef}
        />
        <StyledButton onClick={signIn} variant="contained" color="primary">
          Sign In
      </StyledButton>
      </form>
    </div>
  );
  }

export default SignIn;
