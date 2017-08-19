import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import CSSModules from 'react-css-modules';
// import styles from './style.css';

import CHANGEME from 'components/CHANGEME';

// @CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class CHANGEME extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    }

    static defaultProps = {
        className: '',
        children: null,
    }


    render() {
        const { className, children, ...props } = this.props;
        return (
            <div
                className={classNames(className)}
                {...props}
            >
                {children}
            </div>
        );
    }
}
