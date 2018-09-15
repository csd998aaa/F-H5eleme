import { Route } from 'react-router-dom';
import React from 'react';

export function routes(routeConfig, parentPath = '') {
    if (!routeConfig || routeConfig.lenght === 0) return null;
    return (
        routeConfig.map((route,index) => (
            <Route path={parentPath + route.path} key={parentPath + route.parentPath + index} exact={route.exact} render={(props) => (
                <route.component {...props}>
                    {routes(route.routes, parentPath + route.path)}
                </route.component>
            )} />
        ))
    )
}