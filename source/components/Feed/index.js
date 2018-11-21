//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

// Instrumens
import Styles from './styles.m.css';

class Feed extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string,
        currentUserLastName:  PropTypes.string,
        avatar:               PropTypes.string,
    };

    render() {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = { currentUserFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}
export default Feed;
