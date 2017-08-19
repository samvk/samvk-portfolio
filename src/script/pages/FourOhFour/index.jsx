import React from 'react';
import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

@pageTitle('Page Not Found')
// @CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class FourOhFour extends React.Component {
    render() {
        return (
            <div>
                <p>404 uh oh.</p>
            </div>
        );
    }
}
