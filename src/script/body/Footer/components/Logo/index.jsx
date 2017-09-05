import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import CSSModules from 'react-css-modules';
// import styles from './style.css';

import Link from 'components/Link';

// @CSSModules(styles, { allowMultiple: true })
export default class Logo extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        logo: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
    }


    render() {
        const { className, logo, ...props } = this.props;
        return (
            <Link
                className={classNames(className)}
                {...props}
            >
                <span className={`fs-1 fa fa-fw fa-${logo}`} />
            </Link>
        );
    }
}
