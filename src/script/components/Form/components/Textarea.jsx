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
        maxLength: PropTypes.number,
        required: PropTypes.bool,
        title: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
        children: null,
        maxLength: 2000,
        required: false,
    }


    render() {
        const { className, children, maxLength, required, title, ...props } = this.props;

        const placeholderText = title + (required ? '' : ' (optional)');

        return (
            <div
                className={classNames(className, 'relative')}
                {...props}
            >
                <label>
                    <textarea
                        styleName='field textarea'
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        value={children}
                        required={required}
                    />
                    <div styleName='title'>{title}</div>
                </label>
            </div>
        );
    }
}
