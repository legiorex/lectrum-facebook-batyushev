import React, { Component, createContext } from 'react';
const { Provider, Consumer } = createContext();

const withProfile = (Enhanceable) => {
    return class withProfile extends Component {
        render() {
            return (
                <Consumer>{(context) => (
                    <Enhanceable
                        { ...context }
                        { ...this.props }
                    />
                )}
                </Consumer>
            );
        }
    };
};
export { Provider, Consumer, withProfile };
