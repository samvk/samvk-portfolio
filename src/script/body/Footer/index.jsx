import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';


import Logo from 'components/Logo';
import Flex from 'components/Flex';
import Image from 'components/Image';

@CSSModules(styles)
export default class Footer extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    static defaultProps = {
        className: '',
    }


    render() {
        const { className, ...props } = this.props;
        return (
            <footer
                className={classNames(className, 'footer')}
                styleName='footer'
                {...props}
            >
                <div className='relative'>
                    <Flex xCenter>
                        <Flex xBetween yCenter styleName='content'>
                            <Logo
                                logo='github'
                                href='https://github.com/samvk'
                                title='GitHub'
                            />
                            <Logo
                                logo='linkedin'
                                href='https://linkedin.com/in/samvk'
                                title='LinkedIn'
                            />
                            <div>
                                <h6 styleName='message'>
                                    Powered by&nbsp;<Image styleName='icon' src='react.png' title='React' />
                                </h6>
                            </div>
                            <Logo
                                logo='file-text-o'
                                href='/resume'
                                title='Resume'
                            />
                            <Logo
                                logo='envelope'
                                href='mailto:hello@samvk.com'
                                title='hello@samvk.com'
                            />
                        </Flex>
                    </Flex>
                    <div styleName='copyright'>2020 &copy; SamVK</div>
                </div>
            </footer>
        );
    }
}
