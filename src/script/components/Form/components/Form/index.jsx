import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Form extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        onSubmit: PropTypes.func.isRequired,
    }

    static defaultProps = {
        className: '',
        children: null,
    }


    render() {
        const { className, children, onSubmit, ...props } = this.props;
        return (
            <form
                className={classNames(className)}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                {...props}
            >
                {children}
            </form>
        );
    }
}
