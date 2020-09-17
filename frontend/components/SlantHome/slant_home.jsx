import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SlantHome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.currentUser){
            return(
                <Redirect to={`/client/conversations/11`}/>
            )
        }else{

            return (
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
                        <div>
                            <h1 className='slant-home-title'>Slant is where honk happens</h1>
                            <span className='slant-home-body'>With channels in Slant, you and your geese know where to go honk groundkeepers, share stolen items and stay in the crime loop.</span>
                            <ul className='slant-home-buttons'>
                                <li>
                                    <Link to='/login'>TRY FOR FREE</Link>
                                </li>
                                <li>
                                    <a href="#">CONTACT US</a>
                                </li>
                            </ul>
                            <p className='slant-home-note'>Need to create a workspace? <Link to="/login" className='slant-home-note-link'> Get started</Link></p>
                        </div>
                        <img className='slant-home-img' src={window.slantHome1URL} alt='slant homepage'/>
                    </section>  
    
                </div>
            )
        }
    }

};

export default SlantHome;