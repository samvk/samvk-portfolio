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
                            I'm a web developer who loves building apps and bringing designs to life. I have the most experience with <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>HTML/CSS</strong>, and recently I've started using <strong>React</strong> & <strong>Redux</strong>. Usually it's more fun for me to do logic and backend stuff. But I enjoy making things look pretty too!
                        </p>
                        <p>
                            Currently, I work as a Software Engineer at <em>Konica Minolta Business Solutions</em>.
                        </p>
                        <p>
                            On a personal note: I love metal detecting, watching movies, the theatre, and building things.
                        </p>
                        <p>
                            You can <Link
                                text
                                href='https://github.com/samvk'
                            >
                                check me out on GitHub
                            </Link>, <Link
                                text
                                href='https://linkedin.com/in/samvk'
                            >
                                find me on LinkedIn
                            </Link>, <Link
                                text
                                to='/resume'
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
