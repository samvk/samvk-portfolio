import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import Image from 'components/Image';
import Link from 'components/Link';

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
                <Flex xCenter styleName='title-container'>
                    <Link to='/' styleName='link'>
                        <div styleName='title'>
                            <span styleName='logo'>
                                <Image src='logo.png' alt='S' />
                            </span>
                            <span styleName='title-text-wrapper'>
                                <h1 styleName='title-text'>amVK</h1>
                            </span>
                        </div>
                    </Link>
                </Flex>
            </header>
        );
    }
}
