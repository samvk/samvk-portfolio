import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Projects')
// @CSSModules(styles, { allowMultiple: true })
export default class Home extends React.Component {
    render() {
        return (
            <article className='page xl'>
                <PortfolioCard
                    title='Projects'
                >
                    <div>
                        <p>Projects</p>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
