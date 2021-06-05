import React from 'react'
import { Navlist } from './Navlist';
import { Navlist2 } from './Navlist2';
import { auth } from '../../firebase';

import './Navbar.css';
import './Navlist2.css';

const NavbarScreen = () => {
    const navList = Navlist.map(({ url, title }, index) => {
        return(
            <li key={index}>
                <a href={ url }>{ title }</a>
            </li>
        );
    });

    const navList2 = Navlist2.map(({ url, title }, index) => {
        return(
            <li key={index}>
                <a href={ url }>{ title }</a>
            </li>
        );
    });
    
    return (
        <nav>
            <div className = "logo">
                LOGO1
            </div>
            <ul className="menu-list">
            {navList}
            </ul>

            <ul className="menu-list2">
            {navList2}
            </ul>
            <ul>
            <p><button onClick={() => auth.signOut()}>signOut</button></p>

            </ul>
        </nav>
    );
};

export default NavbarScreen;