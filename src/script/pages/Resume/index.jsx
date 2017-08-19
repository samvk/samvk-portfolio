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
                    title='Resume'
                >
                    <div>
                        <article>
                            <h2>Education</h2>
                            <section>
                                <h3>University of Massachusetts Amherst, 2011 - 2015</h3>
                                <ul>
                                    <li>B.S. in Computer Science</li>
                                    <li>Minor in Anthropology</li>
                                </ul>
                            </section>
                        </article>
                        <article>
                            <h2>Education</h2>
                            <section>
                                <h3>University of Massachusetts Amherst, 2011 - 2015</h3>
                                <ul>
                                    <li>B.S. in Computer Science</li>
                                    <li>Minor in Anthropology</li>
                                </ul>
                            </section>
                        </article>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
