//Core
import React, { Component } from 'react';
import moment from 'moment';
import { Consumer } from 'components/HOC/withProfile';
//Instuments
import Styles from './styles.m.css';

class Post extends Component {
    render() {
        return (
            <Consumer>
                {(contex) => (
                    <section className = { Styles.post }>
                        <img src = { contex.avatar } />
                        <a>{`${contex.currentUserFirstName} ${contex.currentUserLastName}`}</a>
                        <time>{moment().format('MMMM D h:mm:ss a')}</time>
                        <p>Howdy!</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
export default Post;
