import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

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
                    <div>
                        <h6 styleName='message' title='React'>
                        Powered by&nbsp;<Image styleName='icon' src='react.png' />
                        </h6>
                        <h6 styleName='message' title='Raspberry Pi'>
                        Hosted on my&nbsp;<Image styleName='icon' src='raspberry.png' /><Image styleName='icon' src='pie.png' />
                        </h6>
                    </div>
                    <span styleName='copyright'>2017 &copy; Emma Simon</span>
                </div>
            </footer>
        );
    }
}
