import React, { Component } from 'react';
export const getAsyncComponent = loadComponent => {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }
        componentDidMount = () => {
            loadComponent().then((mod) => {
                this.setState({
                    component: mod.default ? mod.default : mod
                })
            }).catch((err) => { });
        };
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncComponent;
}