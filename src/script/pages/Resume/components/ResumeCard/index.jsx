import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles)
export default class ResumeCard extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        title: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
        children: null,
    }


    render() {
        const { className, children, title, ...props } = this.props;
        return (
            <article styleName='card' {...props}>
                <h2 styleName='title'>{title}</h2>
                {children}
            </article>
        );
    }
}
