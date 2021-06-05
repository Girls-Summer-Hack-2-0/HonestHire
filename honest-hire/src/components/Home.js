import React from 'react'
import { auth } from '../firebase';

const Home = () => {
    return (
        <div>
            <h1>Hello ! welcome to Blind Hiring web :D</h1>
            {/* <p><button onClick={() => auth.signOut()}>signOut</button></p> */}
        </div>
    )
};

export default Home;