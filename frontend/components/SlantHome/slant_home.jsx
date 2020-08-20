import React from 'react';
import { Link } from 'react-router-dom';

const SlantHome = () => (
    <div>
        <nav className='home-nav'>
            <ul className='home-nav-info'>
                <li><Link to='/'> <img className='home-nav-logo' src={window.slantWhiteURL} alt="slant logo"/></Link></li>                
                <li><a href="#">Why Slant?</a></li>
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
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
        <section className='slant-intro'>

        </section>

    </div>
)

export default SlantHome;