import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route 
        path={path} exact={exact} 
        render={props => !loggedIn ? <Component {...props}/> : <Redirect to='/client/:id' /> }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' />
        )
    )} />
);

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.id)};
};

const mapDispatchToProps = null;

export const AuthRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));