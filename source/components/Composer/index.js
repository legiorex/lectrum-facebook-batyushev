import React, { Component } from 'react';
import { Consumer } from 'components/HOC/withProfile';

// Instrumens
import Styles from './styles.m.css';

class Composer extends Component {
    render() {
        return (
            <Consumer>
                {(contex) => (
                    <section className = { Styles.composer }>
                        <img src = { contex.avatar } />
                        <form>
                            <textarea placeholder = { ` What\'s on your mind, ${contex.currentUserFirstName}?` } />
                            <input
                                type = 'submit'
                                value = 'Post'
                            />
                        </form>
                    </section>
                )}
            </Consumer>

        );
    }
}
export default Composer;
