import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Button from 'components/Button';
import Flex from 'components/Flex';
import Image from 'components/Image';
import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Portfolio')
@CSSModules(styles)
export default class About extends React.Component {
    render() {
        return (
            <article className='page'>
                <PortfolioCard
                    title={
                        <Image
                            src='headshot.png'
                            styleName='headshot'
                        />
                    }
                >
                    <div>
                        <h1>Hi, I'm Sam.</h1>
                        <p>
                            I'm a lead full-stack developer at <em>Konica Minolta</em> who enjoys problem solving and bringing ideas to life.
                        </p>
                        <p>
                            For the past decade I've built multi-tenant SaaS end to end: data model, APIs, and the frontend architecture the rest of the department builds on. I'm the primary architect and developer of every commercial SaaS product our department has shipped — including our flagship enterprise workflow platform, <em>Dispatcher Stratus</em> — and I lead a team of 8 developers. I'm strongest where technical design meets user experience.
                        </p>
                        <p>
                            My core stack is <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>DynamoDB</strong>.
                        </p>
                        <p>
                            On a personal note: I love metal detecting, watching movies, the theatre, and building things.
                        </p>
                        <p>
                            You can <Link
                                text
                                externalIcon
                                href='https://github.com/samvk'
                            >
                                check me out on GitHub
                            </Link>, <Link
                                text
                                externalIcon
                                href='https://linkedin.com/in/samvk'
                            >
                                find me on LinkedIn
                            </Link>, <Link
                                text
                                href='/resume'
                            >
                                take a look at my resume
                            </Link>, or continue to view some of my projects.
                        </p>
                    </div>
                    <Flex
                        xCenter
                        styleName='button-wrapper'
                    >
                        <Link to='/projects'>
                            <Button link>View my projects</Button>
                        </Link>
                    </Flex>
                </PortfolioCard>
            </article>
        );
    }
}
