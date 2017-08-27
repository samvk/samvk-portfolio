import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import CSSModules from 'react-css-modules';
// import styles from './style.css';

import CHANGEME from 'components/CHANGEME';

import * as Actions from 'store/actions';

const mapStateToProps = (state) => ({
    changeMeData: state.changeMe,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
// @CSSModules(styles, { allowMultiple: true })
export default class CHANGEME extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    }

    static defaultProps = {
        className: '',
        children: null,
    }


    render() {
        const { className, children, changeMeData, ...props } = this.props;
        return (
            <div
                className={classNames(className)}
                {...props}
            >
                {children}
            </div>
        );
    }
}
