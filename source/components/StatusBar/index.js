//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Instrumens
import Styles from './styles.m.css';

class StatusBar extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string.isRequired,
        currentUserLastName:  PropTypes.string.isRequired,
        avatar:               PropTypes.string.isRequired,
    };

    render() {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className = { Styles.statusBar }>
                <button>
                    <img src = { avatar } />
                    <span>{currentUserFirstName}</span>
                    &nbsp;
                    <span>{currentUserLastName}</span>
                </button>
            </section>
        );
    }
}
export default StatusBar;
