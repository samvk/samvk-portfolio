import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Image extends React.Component {
    static propTypes = {
        alt: PropTypes.string,
        title: PropTypes.string,
        altTitle: PropTypes.string,
        block: PropTypes.bool,
        className: PropTypes.string,
        src: PropTypes.string.isRequired,
        url: PropTypes.string, // use if source is not local
    }

    static defaultProps = {
        alt: '',
        title: null,
        block: null,
        altTitle: null,
        className: null,
        url: '',
    }

    render() {
        let { alt, title, altTitle, block, className, src, url, ...props } = this.props;

        src = `/src/img/${src}`;

        return (
            <img
                alt={alt || altTitle}
                className={classNames(className, { block })}
                title={title || altTitle}
                src={url || src}
                {...props}
            />
        );
    }
}
