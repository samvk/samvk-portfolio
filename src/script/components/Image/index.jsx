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
        src: PropTypes.string,
        url: PropTypes.string, // use if source is not local
    }

    static defaultProps = {
        alt: '',
        title: null,
        block: null,
        altTitle: null,
        className: null,
        src: '',
        url: '',
    }

    imageSrc = require.context(
        '../../../img',
        true,
        /\.(ttf|otf|eot|svg|woff2?|png|gif|jpe?g|svg)$/,
    );

    render() {
        const { alt, title, altTitle, block, className, src, url, ...props } = this.props;

        return (
            <img
                alt={alt || altTitle}
                className={classNames(className, { block })}
                title={title || altTitle}
                src={url || this.imageSrc(`./${src}`)}
                {...props}
            />
        );
    }
}
