import React from 'react'
import { auth } from '../firebase';
import NavbarScreen from './Navbar/Navbar';

const employerView = () => {
    return (
        <div>
            <NavbarScreen/>

            <h1>Hello ! employer~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default employerView;