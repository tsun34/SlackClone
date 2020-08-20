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
        const personalGreeting = () => (
            <nav className='home-nav'>
                <h1>Slant - Searchable Logs of All Niche Topics</h1>
                <h2>Hi, {user.full_name}</h2>
                <button onClick={this.handleLogout}>Log Out</button>div
            </nav>
        );
        const sessionLinks = () => (
            <nav>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </nav>
        );
        
        return user ? personalGreeting() : "";
    }
}

export default Greeting;