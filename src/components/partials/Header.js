import React from 'react';
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <nav>
            <ul className={'nav'}>
                <li className={'nav-item'}><Link to={'/'}>Home</Link></li>
                <li className={'nav-item'}><Link to={'/products'}>Products</Link></li>
            </ul>
        </nav>
    )
};

export default Header
