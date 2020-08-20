import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to='/login'>Log in with an existing account</Link>
});
const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SignupFormContainer;