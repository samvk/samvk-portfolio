import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

import ResumeCard from './components/ResumeCard';
import ResumeEntry from './components/ResumeEntry';

@pageTitle('Resume')
// @CSSModules(styles, { allowMultiple: true })
export default class Home extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title='Resume'
                >
                    <div>
                        <ResumeCard title='Experience'>
                            <div>
                                <ResumeEntry title='Konica Minolta, August 2015 - Now'>
                                    <ul>
                                        <li>Web development using Python, vanilla JS</li>
                                        <li>Maintain legacy code</li>
                                        <li>Create web applications</li>
                                    </ul>
                                </ResumeEntry>
                                <ResumeEntry title='UMass Athletics Tutor, June - August 2014'>
                                    <ul>
                                        <li>Tutor students in CS and calculus</li>
                                        <li>Help them work through concepts and ideas</li>
                                    </ul>
                                </ResumeEntry>
                            </div>
                        </ResumeCard>

                        <ResumeCard title='Education'>
                            <ResumeEntry title='University of Massachusetts Amherst, 2011 - 2015'>
                                <ul>
                                    <li>B.S. in Computer Science</li>
                                    <li>Minor in Anthropology</li>
                                </ul>
                            </ResumeEntry>
                        </ResumeCard>

                        <ResumeCard title='Skills'>
                            <ResumeEntry>
                                <ul>
                                    <li>Proficient with Python, Javascript, HTML, CSS</li>
                                    <li>Some experience with Go, Java, C++, SQL</li>
                                    <li>Git for version control</li>
                                    <li>Linux for development</li>
                                </ul>
                            </ResumeEntry>
                        </ResumeCard>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
