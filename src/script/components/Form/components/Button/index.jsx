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
        disabled: PropTypes.bool,
        pending: PropTypes.bool,
    }

    static defaultProps = {
        className: '',
        children: null,
        disabled: false,
        pending: false,
    }


    render() {
        const { className, children, disabled, pending, ...props } = this.props;

        const isDisabled = disabled || pending;

        const child = pending ? (
            <span styleName='pending'>
                <span
                    className='fa fa-spinner fa-pulse fa-fw'
                />
            </span>
        ) : children;

        return (
            <button
                className={classNames(className, 'button')}
                styleName={classNames('button', { disabled: isDisabled })}
                disabled={isDisabled}
                {...props}
            >
                {child}
            </button>
        );
    }
}
