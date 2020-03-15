import React, { Component } from 'react';

//! For catching component errors in production build
class ErrorBoundary extends Component {
    constructor(props) {
       super(props);
       this.state = {
           hasError: false
       }
    }

    render() {
        return (
            this.state.hasError
            ? <h1>Oooops. The app has encountered an error!</h1>
            : this.props.children
        );
    }
}

export default ErrorBoundary;