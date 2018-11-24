//Core
import React, { Component } from 'react';
import moment from 'moment';
import { string, object, func, array } from 'prop-types';

//Components
import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';
//Instruments
import Styles from './styles.m.css';

class Post extends Component {
    static propTypes = {
        _likePost: func.isRequired,
        comment:   string.isRequired,
        created:   object.isRequired,
        id:        string.isRequired,
        likes:     array.isRequired,
    };

    constructor() {
        super();
        this._removePost = this._removePost.bind(this);
    }

    _removePost() {
        const { _removePost, id } = this.props;

        _removePost(id);
    }

    render() {
        const { comment, created, _likePost, id, likes } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <span
                            className = { Styles.cross }
                            onClick = { this._removePost }
                        />
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                        <Like
                            _likePost = { _likePost }
                            id = { id }
                            likes = { likes }
                            { ...context }
                        />
                    </section>
                )}
            </Consumer>
        );
    }
}
export default Post;
