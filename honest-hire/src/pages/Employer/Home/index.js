import React from 'react'
import { auth } from '../../../firebase';
import Menu from '../../../components/Menu';
import EmployerProfile from '../../../components/profileViews/employerProfile';

const employerView = () => {
    return (
        <div>
            <Menu isEmployer={true} />
            <EmployerProfile/>

            <br></br>
            <h1>Hello ! employer~~~~ :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default employerView;