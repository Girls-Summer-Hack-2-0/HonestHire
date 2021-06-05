import React from 'react'
import { auth } from '../firebase';
import Menu from './Menu';

const employeeView = () => {
    return (
        
        <div>
            <Menu isInterviewee={true}/>

            <h1>Hello ! employee~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default employeeView;