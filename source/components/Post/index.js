//Core
import React, { Component } from 'react';
import moment from 'moment';

//Instuments
import Styles from './styles.m.css';

class Post extends Component {
    render() {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        return (
            <section className = { Styles.post }>
                <img src = { avatar } />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}
export default Post;
