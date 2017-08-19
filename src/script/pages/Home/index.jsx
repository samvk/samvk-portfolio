import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Portfolio')
// @CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Home extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title='Home'
                >
                    <div>
                        <p>I'm a software developer living in Northampton Massachusetts.</p>
                        <p>I currently work in web development, and am most comfortable with Python and Javascript.</p>
                        <p>I'm interested in websites, networks, and video games.</p>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
