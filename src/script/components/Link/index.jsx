import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Link extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        external: PropTypes.bool,
        children: PropTypes.node.isRequired,
        text: PropTypes.bool,
    }

    static defaultProps = {
        className: '',
        external: false,
        text: false,
        to: '',
    }

    // use either <RouterLink /> or normal <a />
    render() {
        const {
            children,
            className,
            external,
            text,
            to,
            ...props
        } = this.props;

        // only style like text link is specified
        const myProps = {
            className: classNames(className, { 'external-link': external && text }),
            styleName: classNames('link', { text }),
            ...props,
        };

        // use 'href' attr if external link
        if (to) {
            const hrefTo = external ? 'href' : 'to';
            myProps[hrefTo] = to;
        }

        const LinkType = props.activeClassName ? NavLink : RouterLink;

        return (
            external ? (
                <a
                    target='_blank'
                    rel='noreferrer noopener'
                    {...myProps}
                >
                    {children}
                </a>
            ) : (
                <LinkType
                    {...myProps}
                >
                    {children}
                </LinkType>
            )
        );
    }
}
