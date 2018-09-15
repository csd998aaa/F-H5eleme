import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { HashRouter as Router, Switch } from 'react-router-dom';

import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

import { routes } from './utils/routerUtil';
import routeConfig from './router';

import style from './index.less';
const reducer = (state = {}, action) => {
    switch (action.type) {
        default:
            state
    }
}
const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);
class AppEntryComponent extends Component {
    componentDidMount = () => {
        let deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
            deviceWidth = 750;
        }
        document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        {
                            routes(routeConfig)
                        }
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(
    <AppEntryComponent />,
    document.getElementById('root')
)