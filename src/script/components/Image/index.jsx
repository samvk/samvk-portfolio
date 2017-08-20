import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Image extends React.Component {
    static propTypes = {
        alt: PropTypes.string,
        title: PropTypes.string,
        altTitle: PropTypes.string,
        className: PropTypes.string,
        block: PropTypes.bool,
    }

    static defaultProps = {
        alt: '',
        title: '',
        altTitle: '',
        className: '',
        block: false,
    }

    render() {
        const { alt, title, altTitle, className, block, ...props } = this.props;

        return (
            <img
                alt={alt || altTitle}
                title={title || altTitle}
                className={classNames(className, { block })}
                {...props}
            />
        );
    }
}
