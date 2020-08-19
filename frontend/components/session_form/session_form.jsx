import React from 'react';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }

    render(){
        const linkText = (this.props.formType == 'Sign Up') ? 'Already have an account?' : 'Looking to create an account instead?'; 
        return (
            <div class="session-page">
                <img src={window.slantWhiteURL} alt="slant-logo" class='session-page-logo'/>
                <form class='session-form' onSubmit={this.handleSubmit}>
                    {this.renderErrors()}

                    <h1 class='session-form-title'>{this.props.formType} to your workspace</h1>
                    <p class='session-form-subtitle'>Enter your email and password</p>
                    <div class='session-input'>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')}/>
                    </div>
                    <div class='session-input'>
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')}/>
                    </div>
                    <button class='session-submit' type="submit">Continue</button>
                    <div class='session-links'>
                        <p>{linkText}</p>
                        <span>
                            {this.props.navLink}
                        </span>
                    </div>
                </form>

            </div>
        )
    }


}

export default SessionForm;