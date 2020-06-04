/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => (
  <Route
    path={path}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props =>
      loggedIn ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Comp {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              prevLocation: path,
              error: 'You need to login first!',
            },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
