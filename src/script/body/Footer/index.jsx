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
                <div>
                    <h6 styleName='message'>
                        Powered by&nbsp;<Image src='react.png' title='React' />
                    </h6>
                    <h6 styleName='message'>
                        Hosted on my&nbsp;<Image src='raspberry.png' title='Raspberry Pi' /><Image src='pie.png' title='Raspberry Pi' />
                    </h6>
                </div>
            </footer>
        );
    }
}
