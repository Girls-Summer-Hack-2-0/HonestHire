import React from "react";
import { homeNavlist } from "./NavList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

const homeList = homeNavlist.map(({ url, title }, index) => {
  return (
    <Button key={index} href={url}>
      {title}
    </Button>
  );
});

export default function Menu({ isEmployer, isInterviewee }) {
  const history = useHistory();

  const logout = () => {
    auth.signOut();
    history.push("/Home");
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isEmployer && <navList /> && <Avatar edge="end">H</Avatar>}
          {!isEmployer && !isInterviewee && (
            <>
              {homeList}
              <Button href={"/signIn"}> Sign In </Button>
              <Button href={"/signUp"}> Sign Up </Button>
            </>
          )}
          {(isInterviewee || isEmployer) && (
            <Button onClick={logout}>Logout</Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
