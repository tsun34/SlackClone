import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleUpdate(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleDemo(e){
        e.preventDefault();
        const demoUser = {email: 'goosek@gmail.com', password: 'honkhonk'};
        this.props.processForm(demoUser);
    }

    renderErrors(){
        const errorList = (
            <ul className='errorList'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
        return errorList;
    }

    componentDidMount(){
        this.props.receiveErrors([])
    }

    // componentDidUpdate(prevProps){
    //     if (prevProps.match.params.path != this.props.match.params.path){
    //         this.props.receiveErrors([])
    //     }
    // }

    render(){
        const linkText = (this.props.formType == 'Sign Up') ? 'Already have an account?' : 'Looking to create an account instead?'; 
        return (
            <div className="session-page">
                <Link to='/'><img src={window.slantWhiteURL} alt="slant-logo" className='session-page-logo' /></Link>
                <form className='session-form' onSubmit={this.handleSubmit}>
                    { (this.props.errors.length)>0? this.renderErrors() : null}
                    <h1 className='session-form-title'>{this.props.formType} to your workspace</h1>
                    <p className='session-form-subtitle'>Enter your email and password</p>
                    <div className='session-input'>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')}/>
                    </div>
                    <div className='session-input'>
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')}/>
                    </div>
                    <button className='session-submit' type="submit">Continue</button>
                    
                </form>
                <button className='session-submit' onClick={this.handleDemo}> Continue as Goose</button>
                <div className='session-links'>
                    <p>{linkText}</p>
                    <span>
                        {this.props.navLink}
                    </span>
                </div>

            </div>
        )
    }


}

export default SessionForm;