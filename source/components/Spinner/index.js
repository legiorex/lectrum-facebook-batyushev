import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Styles from './styles.m.css';
import PropTypes from 'prop-types';

const portal = document.getElementById('spinner');

class Spinner extends Component {
    static propTypes = {
        isSpinning: PropTypes.bool.isRequired,
    }

    render() {
        const { isSpinning } = this.props;

        return createPortal(isSpinning ? <div className = { Styles.spinner } /> : null, portal);
    }
}

export default Spinner;
