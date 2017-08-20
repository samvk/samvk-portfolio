import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles, { allowMultiple: true })
export default class Flex extends React.Component {
    static propTypes = {
        inline: PropTypes.bool,
        children: PropTypes.node,
        tag: PropTypes.string,
        className: PropTypes.string,
    }

    static defaultProps = {
        children: null,
        inline: false,
        tag: 'div',
        className: '',
    }


    render() {
        const { children, className, inline, tag, ...props } = this.props;
        const flexClassNames = [
            'column',
            'wrap',
            'wrapReverse',
            'yReverse',
            'yStart',
            'yEnd',
            'yCenter',
            'yBaseline',
            'yStretch',
            'xReverse',
            'xStart',
            'xEnd',
            'xCenter',
            'xBetween',
            'xAround',
            'contentStart',
            'rowEnd',
            'rowCenter',
            'rowBetween',
            'rowAround',
            'rowStretch',
            'auto',
        ];
        // build list of flex classes from props
        const styleNames = () => {
            const allProps = Object.keys(props).filter((prop) => props[prop]); // get array of truthy props

            const flexClasses = allProps.filter((prop) => (flexClassNames.includes(prop)));

            return flexClasses.join(' ');
        };

        // use custom wrapper tag if provided
        const Tag = tag;
        return (
            <Tag
                className={classNames(className, { flex: !inline }, { 'inline-flex': inline })}
                styleName={styleNames()}
            >
                {children}
            </Tag>
        );
    }
}
