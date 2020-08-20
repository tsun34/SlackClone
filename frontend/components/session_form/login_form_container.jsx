import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Log In',
    navLink: <Link to='/signup'>Create a new account</Link>
});
const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default LoginFormContainer;