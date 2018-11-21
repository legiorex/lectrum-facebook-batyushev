import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Instrumens
import Styles from './styles.m.css';

class Composer extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string.isRequired,
        currentUserLastName:  PropTypes.string,
        avatar:               PropTypes.string.isRequired,
    };

    render() {
        const { avatar, currentUserFirstName, currentUserLastName = null } = this.props;

        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { ` What\'s on your mind, ${currentUserFirstName}?` } />
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}
export default Composer;
