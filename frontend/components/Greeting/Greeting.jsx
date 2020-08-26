import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout()
    }
    
    render(){
        const user = this.props.currentUser;
        return (
            <nav className='login-nav'>
                <div className='login-nav-title'>
                    <img src={window.slantLogoGreenURL} alt="slant-logo"/>
                    <span>Slant - Searchable Logs of All Niche Topics</span>
                </div>
                <div className='login-nav-links'>
                    <span>Hi, {user.full_name}</span>
                    <img src={user.avatar} alt=""/>
                    <button onClick={this.handleLogout}><i className='fal fa-sign-out' aria-hidden="true"></i></button>
                </div>
            </nav>
        );

    }
}

export default Greeting;