//Core
import React, { Component } from 'react';
import moment from 'moment';


// Components
import { withProfile } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';

@withProfile
export default class Feed extends Component {
    

    state = {
        posts: [
            {
                id:      'it14f',
                comment: 'Привет!',
                created: moment.utc(),
                likes:   [],
            },
            {
                id:      '152',
                comment: 'Я тут',
                created: moment.utc(),
                likes:   [],
            },
        ],
        isSpinning: false,
    };

    _setPostFetchingState = (state) => {
        this.setState({
            isSpinning: state,
        });
    }

    _createPost = async (comment) => {
        this._setPostFetchingState(true);
        const post = {
            id:      getUniqueID(),
            created: moment.utc(),
            comment,
            likes:   [],
        };
        await delay(1200);
        this.setState(({ posts }) => ({
            posts:      [ post, ...posts ],
            isSpinning: false,
        }));
    }

    _likePost = async (id) => {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:  currentUserLastName,
                        },
                    ],
                };
            }

            return post;
        });
        this.setState({
            posts:      newPosts,
            isSpinning: false,
        });
    }

    _removePost = async (id) => {
        this._setPostFetchingState(true);
        await delay(1200);
        const newPosts = this.state.posts.filter((post) => {
            return post.id !== id;
        });

        this.setState({
            posts:      newPosts,
            isSpinning: false,
        });
    }

    render() {
        const { posts, isSpinning } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                    _likePost = { this._likePost }
                    _removePost = { this._removePost }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                {postsJSX}
            </section>
        );
    }
}
