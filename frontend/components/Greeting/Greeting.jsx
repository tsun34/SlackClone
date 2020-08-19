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
            <div>
                <h2>Hi, {user.full_name}</h2>
                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        );
        const sessionLinks = () => (
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
        );
        
        return user ? personalGreeting() : sessionLinks();
    }
}

export default Greeting;