import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to='/login'>log in instead</Link>
});
const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SignupFormContainer;