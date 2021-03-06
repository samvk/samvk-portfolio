import React from 'react';
import PropTypes from 'prop-types';

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

        const logoNode = (<span className={`${className} fs-2 fa fa-fw fa-${logo}`} />);

        if (!(props.to || props.href)) {
            return logoNode;
        }

        return (<Link {...props}>{logoNode}</Link>);
    }
}
