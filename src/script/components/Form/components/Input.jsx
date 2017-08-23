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
        maxLength: PropTypes.number,
        required: PropTypes.bool,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
    }

    static defaultProps = {
        className: '',
        children: null,
        maxLength: 99,
        required: false,
        type: 'text',
    }


    render() {
        const { className, children, maxLength, required, title, type, ...props } = this.props;

        const placeholderText = title + (required ? '' : ' (optional)');

        return (
            <div
                className={classNames(className, 'relative')}
                {...props}
            >
                <label>
                    <input
                        styleName='field'
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        type={type}
                        value={children}
                        required={required}
                    />
                    <div styleName='title'>{title}</div>
                </label>
            </div>
        );
    }
}