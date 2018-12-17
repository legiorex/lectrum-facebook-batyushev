import React  from 'react';
import {number} from 'prop-types';

import Styles from './styles.m.css';

const Counter = ({count}) => (
    <section className = { Styles.counter }> Post count: {count} </section>
);

Counter.propTypes = {
    count: number.isRequired,
};

Counter.defaultProps = {
    count: 0,
};

export default Counter;
