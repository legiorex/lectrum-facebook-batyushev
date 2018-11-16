// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Feed from 'components/Feed';

import avatar from 'theme/assets/homer';

const options = {
    avatar,
    currentUserFirstName: 'Homer',
    currentUserLastName: 'Simpson'

}
@hot(module)
export default class App extends Component {
    render() {
        return <Feed {...options}/>;
    }
}
