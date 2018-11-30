//Core
import React, { Component } from 'react';
import { withProfile } from 'components/HOC/withProfile';
// Instrumens
import Styles from './styles.m.css';

@withProfile
export default class StatusBar extends Component {
    render() {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;
        return (
            <section className={Styles.statusBar}>
                <button>
                    <img src={avatar} />
                    <span>{currentUserFirstName}</span>
                    &nbsp;
                    <span>{currentUserLastName}</span>
                </button>
            </section>
        );
    }
}
