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
                    <h6 styleName='message'>Powered by&nbsp;<span title='React'><Image src='src/img/react.png' /></span></h6>
                    <h6 styleName='message'>Hosted on my&nbsp;<span title='Raspberry Pi'><Image src='src/img/raspberry.png' alt='' /><Image src='src/img/pie.png' /></span></h6>
                </div>
            </footer>
        );
    }
}
