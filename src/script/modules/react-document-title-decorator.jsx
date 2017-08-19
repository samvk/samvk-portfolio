import React from 'react';

const siteTitle = document.title;

const pageTitle = (getTitle) => (WrappedComponent) => class extends React.Component {
    updateTitle = (props) => {
        let title;
        if (typeof getTitle === 'function') {
            title = getTitle(props);
        } else {
            title = getTitle;
        }
        if (typeof title !== 'string') {
            return console.error('pageTitle must be passed a string or function returning a string.');
        }
        document.title = `${title} | ${siteTitle}`;
    }

    componentDidMount() {
        this.updateTitle(this.props);
    }

    componentWillReceiveProps(props) {
        this.updateTitle(props);
    }

    render() {
        return <WrappedComponent {...this.props} />;
    }
    };

export default pageTitle;
