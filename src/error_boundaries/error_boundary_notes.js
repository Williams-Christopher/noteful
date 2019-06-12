import React from 'react';
import './error_boundary.css';

export default class ErrorBoundaryNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        return {hasError: true};
    }

    render() {
        if(this.state.hasError) {
            return <h1>There was an error rendering the list of notes. Please refresh and try again.</h1>
        } else {
            return this.props.children;
        }
    }
}