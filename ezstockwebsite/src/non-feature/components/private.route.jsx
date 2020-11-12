import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../Utils/Common';

// handle the private routes
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => 
            getToken() ? 
            <Component {...props} /> : 
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} 
        />}
    />
)