import React from 'react';
import { Link } from 'react-router-dom';

const SlantHome = () => (
    <div>
        <nav className='home-nav'>
            <ul className='home-nav-info'>
                <li><Link to='/'> <img className='home-nav-logo' src={window.slantWhiteURL} alt="slant logo"/></Link></li>                
                <li><link rel="stylesheet" href="#"/>Why Slant?</li>
                <li><link rel="stylesheet" href="#"/>Github</li>
                <li><link rel="stylesheet" href="#"/>Linkedin</li>
            </ul>
            <ul className='home-nav-session'>
                <li>
                    <Link className='home-nav-session-button' to='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link className='home-nav-session-button' to='/login'>Log In</Link>
                </li>
            </ul>
        </nav>

    </div>
)

export default SlantHome;