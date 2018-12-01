//Core
import React, { Component } from "react";

// Components
import Catcher from "components/Catcher";
import { withProfile } from "components/HOC/withProfile";
import StatusBar from "components/StatusBar";
import Composer from "components/Composer";
import Post from "components/Post";
import Spinner from "components/Spinner";

// Instruments
import Styles from "./styles.m.css";
import { getUniqueID, delay } from "instruments";
import { api, TOKEN } from "config/api";

@withProfile
export default class Feed extends Component {
    state = {
        posts: [],
        isSpinning: false,
    };

    componentDidMount() {
        this._fetchPosts();
        this.refetch = setInterval(this._fetchPosts, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.refetch)
    }

    _setPostFetchingState = (state) => {
        this.setState({
            isSpinning: state,
        });
    };
    _fetchPosts = async () => {
        this._setPostFetchingState(true);

        const response = await fetch(api, {
            method: "GET",
        });

        const { data: posts } = await response.json();

        this.setState({
            posts,
            isSpinning: false,
        });
    };
    _createPost = async (comment) => {
        this._setPostFetchingState(true);
        const response = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post } = await response.json();

        this.setState(({ posts }) => ({
            posts: [post, ...posts],
            isSpinning: false,
        }));
    };

    _likePost = async (id) => {
        this._setPostFetchingState(true);

        const response = await fetch(`${api}/${id}`, {
            method: "PUT",
            headers: {
                Authorization: TOKEN,
            },
        });
        const { data: likedPost } = await response.json();
        this.setState(({ posts }) => ({
            posts: posts.map((post) => (post.id === likedPost.id ? likedPost : post)),
            isSpinning: false,
        }));
    };

    _removePost = async (id) => {
        this._setPostFetchingState(true);

        const response = await fetch(`${api}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: TOKEN,
            },
        });

       
        const newPosts = this.state.posts.filter((post) => {
            return post.id !== id;
        });

        this.setState({
            posts: newPosts,
            isSpinning: false,
        });
    };

    render() {
        const { posts, isSpinning } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key={post.id}>
                    <Post {...post} _likePost={this._likePost} _removePost={this._removePost} />
                </Catcher>
            );
        });

        return (
            <section className={Styles.feed}>
                <Spinner isSpinning={isSpinning} />
                <StatusBar />
                <Composer _createPost={this._createPost} />
                {postsJSX}
            </section>
        );
    }
}
