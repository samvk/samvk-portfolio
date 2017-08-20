import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

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
                    <h6 styleName='message'>Powered by&nbsp;<span title='React'><img src='src/img/react.png' alt='' /></span></h6>
                    <h6 styleName='message'>Hosted on my&nbsp;<span title='Raspberry Pi'><img src='src/img/raspberry.png' alt='' /><img src='src/img/pie.png' alt='' /></span></h6>
                </div>
            </footer>
        );
    }
}
