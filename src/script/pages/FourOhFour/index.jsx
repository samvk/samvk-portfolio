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
            <article
                className='page'
                title='Unless you were looking for a 404 page — in which case, you found it!'
            >
                <Flex column yCenter>
                    <h1
                        styleName='header'
                    >
                    404
                </h1>
                    <p className='h1'>Page not found.</p>
                </Flex>
            </article>
        );
    }
}
