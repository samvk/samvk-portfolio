import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import Image from 'components/Image';
import Link from 'components/Link';

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
                            <Link
                                href='mailto:hello@samvk.com'
                                title='hello@samvk.com'
                            >
                                <span
                                    className='fa fa-fw fa-envelope'
                                    styleName='logo'
                                />
                            </Link>
                            <div>
                                <h6 styleName='message' title='React'>
                            Powered by&nbsp;<Image styleName='icon' src='react.png' />
                                </h6>
                                <h6 styleName='message' title='Raspberry Pi'>
                            Hosted on my&nbsp;<Image styleName='icon' src='raspberry.png' /><Image styleName='icon' src='pie.png' />
                                </h6>
                            </div>
                            <Link
                                href='https://linkedin.com/in/samvk/'
                                title='LinkedIn'
                            >
                                <span
                                    className='fa fa-fw fa-linkedin'
                                    styleName='logo'
                                />
                            </Link>
                        </Flex>
                    </Flex>
                    <div styleName='copyright'>2017 &copy; SamVK</div>
                </div>
            </footer>
        );
    }
}
