import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class ResumeEntry extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        title: PropTypes.string,
    }

    static defaultProps = {
        className: '',
        children: null,
        title: '',
    }


    render() {
        const { className, children, title, ...props } = this.props;
        return (
            <section styleName={classNames('entry', { indent: title })} {...props}>
                <h3>{title}</h3>
                <div styleName='content'>
                    {children}
                </div>
            </section>
        );
    }
}
