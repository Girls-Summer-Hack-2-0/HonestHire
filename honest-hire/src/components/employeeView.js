import React from 'react'
import { auth } from '../firebase';

const employeeView = () => {
    return (
        <div>
            <h1>Hello ! employee~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default employeeView;