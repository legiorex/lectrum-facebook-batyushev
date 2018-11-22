//Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Consumer } from 'components/HOC/withProfile';
//Instuments
import Styles from './styles.m.css';

class Post extends Component {
    static propTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired
    }
    render() {
        const { comment, created } = this.props;

        return (
            <Consumer>
                {(contex) => (
                    <section className = { Styles.post }>
                        <img src = { contex.avatar } />
                        <a>{`${contex.currentUserFirstName} ${contex.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
export default Post;
