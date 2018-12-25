// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Switch, Route } from 'react-router-dom';

import Catcher from 'components/Catcher';
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import { Provider } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';
import Login from 'components/Login';

import avatar from 'theme/assets/homer';

const options = {
    avatar,
    currentUserFirstName: 'Константин',
    currentUserLastName: 'Батюшев',
};
@hot(module)
export default class App extends Component {
    render() {
        return (
            <Catcher>
                <Provider value={options}>
                    <StatusBar />
                    <Switch>
                        <Route component={Feed} path="/feed" />
                        <Route component={Profile} path="/profile" />
                        <Route component={Login} path="/login" />
                        <Redirect to="/feed" />
                    </Switch>
                </Provider>
            </Catcher>
        );
    }
}
