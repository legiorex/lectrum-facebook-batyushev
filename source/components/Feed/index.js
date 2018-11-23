//Core
import React, { Component } from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instrumens
import Styles from './styles.m.css';

class Feed extends Component {
    state = {
        posts: [
            {
                id:      1234,
                comment: 'Привет!',
                created: 1542815454,
            },
            {
                id:      152,
                comment: 'Я тут',
                created: 1542865454,
            },
        ],
        isSpinning: true,
    };

    render() {
        const { posts, isSpinning} = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });


        const spinnerJSX = () => {
            return isSpinning ? <Spinner isSpinning /> : null;
        };


        return (
            <section className = { Styles.feed }>
                {spinnerJSX()}
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}
export default Feed;
