import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Button extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        pending: PropTypes.bool,
    }

    static defaultProps = {
        className: '',
        children: null,
        pending: false,
    }


    render() {
        const { className, children, pending, ...props } = this.props;

        const child = pending ? (
            <span styleName='pending'>
                <span
                    className='fa fa-spinner fa-pulse fa-fw'
                />
            </span>
        ) : children;

        return (
            <button
                className={classNames('button', className)}
                {...props}
            >
                {child}
            </button>
        );
    }
}
