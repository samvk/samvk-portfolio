import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import Image from 'components/Image';

@CSSModules(styles)
export default class Header extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    static defaultProps = {
        className: '',
    }


    render() {
        const { className, ...props } = this.props;
        return (
            <header
                className={classNames(className)}
                styleName='header'
                {...props}
            >
                <Flex xCenter>
                    <span><Image src='src/img/logo.png' alt='Emma Simon' /></span>
                    <h1>Emma Simon</h1>
                </Flex>
            </header>
        );
    }
}
