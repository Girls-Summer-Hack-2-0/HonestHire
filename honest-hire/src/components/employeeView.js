import React from 'react'
import { auth } from '../firebase';
import NavbarScreen from './Navbar/Navbar';
// import employeeNav from './Navbar/Navbar';

const employeeView = () => {
    return (
        
        <div>
            <NavbarScreen/>

            <h1>Hello ! employee~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default employeeView;