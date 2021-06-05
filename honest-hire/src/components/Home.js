import React from 'react'
import { auth } from '../firebase';
import NavbarScreen from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            < NavbarScreen/>
            <h1>Hello ! welcome to Blind Hiring web :D</h1>
            <p><button onClick={() => auth.signOut()}>signOut</button></p>
        </div>
    )
};

export default Home;