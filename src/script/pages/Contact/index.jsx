import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Contact')
@CSSModules(styles)
export default class Home extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title='Contact'
                >
                    <div styleName='content'>
                        <p className='text-center'>(508) 493 1601</p>
                        <p className='text-center'>
                            <a href='mailto:emmamaysimon@gmail.com'>EmmaMaySimon@gmail.com</a>
                        </p>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
