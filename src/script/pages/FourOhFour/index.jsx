import React from 'react';
import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import Image from 'components/Image';

@pageTitle('Page Not Found')
@CSSModules(styles)
export default class FourOhFour extends React.Component {
    render() {
        return (
            <Flex column yCenter>
                <h1
                    styleName='header'
                    title='404 — Page Not Found'
                >
                    4<Image src='logo.png' />4
                </h1>
                <p className='h1'>Page not found.</p>
            </Flex>
        );
    }
}
