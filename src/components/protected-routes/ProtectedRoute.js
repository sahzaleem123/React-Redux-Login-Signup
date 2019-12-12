import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    // console.log(rest)
    const user = useSelector(state => state.User);
    // console.log(user)
    return (
        <Route
            {...rest}
            render={routeProps => {
                if (user) {
                    return <Component {...routeProps} />
                } else {
                    return <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: routeProps.location
                            }
                        }}
                    />
                }
            }
            }
        />
    );
};

export default ProtectedRoute;