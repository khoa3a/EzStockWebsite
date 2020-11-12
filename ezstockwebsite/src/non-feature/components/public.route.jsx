import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../Utils/Common';

// handle the public routes
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => 
            !getToken() ? 
            <Component {...props} /> : 
            <Redirect to={{ pathname: '/dashboard' }} />}
    />
)