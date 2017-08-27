import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Textarea extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        disabled: PropTypes.bool,
        maxLength: PropTypes.number,
        required: PropTypes.bool,
        title: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
        children: null,
        disabled: false,
        maxLength: 2000,
        required: false,
    }


    render() {
        const { className, children, disabled, maxLength, required, title, ...props } = this.props;

        const placeholderText = title + (required ? '' : ' (optional)');

        return (
            <div
                className={classNames(className, 'relative')}
            >
                <label>
                    <textarea
                        styleName={classNames(className, 'field textarea', { disabled })}
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        value={children}
                        required={required}
                        disabled={disabled}
                        {...props}
                    />
                    <div styleName='title'>{title}</div>
                </label>
            </div>
        );
    }
}
