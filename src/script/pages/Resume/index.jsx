import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Resume')
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
                            <h2>Experience</h2>
                            <section>
                                <h3>Konica Minolta, August 2015 - Now</h3>
                                <ul>
                                    <li>Web development using Python, vanilla JS</li>
                                    <li>Maintain legacy code</li>
                                    <li>Create web applications</li>
                                </ul>
                            </section>
                            <section>
                                <h3>UMass Athletics Tutor, June - August 2014</h3>
                                <ul>
                                    <li>Tutor students in CS and calculus</li>
                                    <li>Help them work through concepts and ideas</li>
                                </ul>
                            </section>
                        </article>

                        <article>
                            <h2>Skills</h2>
                            <section>
                                <h3>Konica Minolta, August 2015 - Now</h3>
                                <ul>
                                    <li>Proficient with Python, Javascript, HTML, CSS</li>
                                    <li>Some experience with Go, Java, C++, SQL</li>
                                    <li>Git for version control</li>
                                    <li>Linux for development</li>
                                </ul>
                            </section>
                        </article>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
