import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
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
            <nav
                className={classNames(className)}
                styleName='navbar'
                {...props}
            >
                <div>
                    <Flex xCenter>
                        <ul className='flex'>
                            <li styleName='navlink'>
                                <Link
                                    exact
                                    activeClassName='active-link'
                                    to='/'
                                >About</Link>
                            </li>
                            <li styleName='navlink'>
                                <Link
                                    activeClassName='active-link'
                                    to='/resume'
                                >Resume</Link>
                            </li>
                            <li styleName='navlink'>
                                <Link
                                    activeClassName='active-link'
                                    to='/contact'
                                >Contact</Link>
                            </li>
                            <li styleName='navlink'>
                                <Link
                                    external
                                    to='https://github.com/emmasimon'
                                >
                                GitHub
                            </Link>
                            </li>
                        </ul>
                    </Flex>
                </div>
            </nav>
        );
    }
}
