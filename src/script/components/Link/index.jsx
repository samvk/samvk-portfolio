import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Link extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        text: PropTypes.bool,
    }

    static defaultProps = {
        className: '',
        text: false,
    }

    // use either <RouterLink /> or normal <a />
    render() {
        let {
            children,
            className,
            text,
            ...props
        } = this.props;

        // only style like text link is specified
        props = {
            className: classNames(className, { 'external-link': props.href && text }),
            styleName: classNames('link', { text }),
            ...props,
        };

        const LinkType = props.activeClassName ? NavLink : RouterLink;

        return (
            props.href ? (
                <a
                    target='_blank'
                    rel='noreferrer noopener'
                    {...props}
                >
                    {children}
                </a>
            ) : (
                <LinkType
                    {...props}
                >
                    {children}
                </LinkType>
            )
        );
    }
}
