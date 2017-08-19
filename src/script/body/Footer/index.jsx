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
                <div className='text-center'>
                    <p>Powered by <span title='React'>[REACT ICON]</span></p>
                    <p>Hosted on my <span title='Raspberry Pi'>[RASBERRY][PIE][Or Just One Icon?]</span></p>
                </div>
            </footer>
        );
    }
}
