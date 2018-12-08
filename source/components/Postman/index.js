import React from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

import Styles from './styles.m.css';
import { withProfile } from 'components/HOC/withProfile';

const Postman = (props) => {
    const _animatePostmanEntered = (postman) => {
        console.log('test');

        fromTo(postman, 3, { opacity: 1, x: 0 }, { opacity: 0, x: 300 });
    };

    const _animatePostmanEnter = (postman) => {
        fromTo(postman, 3, { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
    };

    return (
        <Transition
            appear
            in
            timeout = { 4000 }
            onEnter = { _animatePostmanEnter }
            onEntered = { _animatePostmanEntered }>
            <section className = { Styles.postman }>
                <img src = { props.avatar } />
                <span>Welcome online, {props.currentUserFirstName}</span>
            </section>
        </Transition>
    );
};

export default withProfile(Postman);
