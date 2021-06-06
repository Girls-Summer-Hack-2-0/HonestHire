import React from 'react'
import { auth } from '../../../firebase';
import Menu from '../../../components/Menu';
import EmployeeProfile from '../../../components/profileViews/employeeProfile';

const employeeView = () => {
    return (
        
        <div>
            <Menu isInterviewee={true}/>
            <EmployeeProfile/>

            <h1>Hello ! employee~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}


        </div>
    )
};

export default employeeView;