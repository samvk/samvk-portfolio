import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Input extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        disabled: PropTypes.bool,
        maxLength: PropTypes.number,
        required: PropTypes.bool,
        spellCheck: PropTypes.bool,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
    }

    static defaultProps = {
        className: '',
        children: null,
        disabled: false,
        maxLength: 99,
        required: false,
        spellCheck: false,
        type: 'text',
    }


    render() {
        const { className, children, disabled, maxLength, required, spellCheck, title, type, ...props } = this.props;

        const placeholderText = title + (required ? '' : ' (optional)');

        return (
            <div
                className={classNames(className, 'relative')}
            >
                <label>
                    <input
                        styleName={classNames(className, 'field', { disabled })}
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        type={type}
                        value={children}
                        required={required}
                        disabled={disabled}
                        spellCheck={spellCheck}
                        {...props}
                    />
                    <div styleName='title'>{title}</div>
                </label>
            </div>
        );
    }
}
