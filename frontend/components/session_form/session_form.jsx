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
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                <h1>{this.props.formType}</h1>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.handleUpdate('email')}/>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handleUpdate('password')}/>
                <button type="submit">{this.props.formType}</button>
                {this.props.navLink}
            </form>
        )
    }


}

export default SessionForm;