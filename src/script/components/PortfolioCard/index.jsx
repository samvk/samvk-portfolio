import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles)
export default class PortfolioCard extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
    }

    render() {
        const { className, children, title, ...props } = this.props;

        return (
            <section
                className={classNames(className)}
                {...props}
            >
                <h1
                    className='text-center'
                    styleName='title'
                >
                    {title}
                </h1>
                {children}
            </section>
        );
    }
}
