import React from "react";
import { homeNavlist } from './NavList';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const homeList = homeNavlist.map(({ url, title }, index) => {
    return (
      <Button key={index} href={url}>
        {title}
      </Button>
    );
});

export default function Menu({ isEmployer, isInterviewee }) {
    return (
        <>
    <AppBar>
      <Toolbar>
          {isEmployer && <navList /> && <Avatar edge="end">H</Avatar>}
          {!isEmployer && !isInterviewee && homeList
        }
        {isInterviewee && <navList />}
      </Toolbar>
    </AppBar>
    </>);
}
