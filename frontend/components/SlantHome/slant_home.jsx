import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SlantHome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.currentUser){
            return(
                <Redirect to={`/client/conversations/1`}/>
            )
        }else{

            return (
                <div>
                    <nav className='home-nav'>
                    <ul className='home-nav-info'>
                        <li><Link to='/'> <img className='home-nav-logo' src={window.slantWhiteURL} alt="slant logo"/></Link></li>                
                        <li><a href="#slant-description">Why Slant?</a></li>
                        <li><a href="https://github.com/tsun34">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/tingxiao-charlotte-sun-0633339b/">Linkedin</a></li>
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
                    <section className='slant-intro slant-section'>
                        <div>
                            <h1 className='slant-home-title'>Slant is where honk happens</h1>
                            <span className='slant-home-body'>With channels in Slant, you and your geese know where to go honk groundkeepers, share stolen items and stay in the crime loop.</span>
                            <ul className='slant-home-buttons'>
                                <li>
                                    <Link to='/login'>TRY FOR FREE</Link>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/tingxiao-charlotte-sun-0633339b/">CONTACT US</a>
                                </li>
                            </ul>
                            <p className='slant-home-note'>*This is a slack clone project inspired by the Untitled Goose Game. <Link to="/login" className='slant-home-note-link'> Get started</Link></p>
                        </div>
                        <img className='slant-home-img' src={window.slantHome1URL} alt='slant homepage'/>
                    </section>
                    <section id='slant-description' className='slant-section slant-description'>
                        <img className='slant-chat-img' src={window.slantchatURL} alt=""/>
                        <div className="slant-section-text">
                            <h1 className='slant-home-title'>Bring your geese together in channels</h1>
                            <span className='slant-home-body'>A channel is the place for everything related to a project, topic or team. Every goose in a channel sees the same honks and stays on the same page.</span>
                            <p className='slant-home-note'><Link to='/login'>Learn more about channels <i className='fas fa-arrow-right'></i></Link></p>
                        </div>
          
                    </section>
                    <section className='slant-section slant-contact'>
                        <span className='slant-home-title'>Choose a better way to honk</span>
                        <ul className='slant-home-buttons'>
                            <li>
                                <Link to='/login'>TRY FOR FREE</Link>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/tingxiao-charlotte-sun-0633339b/">CONTACT US</a>
                            </li>
                        </ul>
                    </section>  
                    <section className='slant-footer'>
                        <ul className='home-nav-info'>
                            <li><Link to='/'> <img className='home-nav-logo' src={window.slantWhiteURL} alt="slant logo" /></Link></li>
                            <li><a href="#slant-description">Why Slant?</a></li>
                            <li><a href="https://github.com/tsun34"><i className='fab fa-github'></i></a></li>
                            <li><a href="https://www.linkedin.com/in/tingxiao-charlotte-sun-0633339b/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                    </section>
    
                </div>
            )
        }
    }

};

export default SlantHome;