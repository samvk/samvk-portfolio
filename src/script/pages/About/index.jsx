import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Image from 'components/Image';
import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Portfolio')
@CSSModules(styles)
export default class About extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title={
                        <Image
                            src='headshot.png'
                            styleName='headshot'
                        />
                    }
                >
                    <div>
                        <h1 className='text-center'>Hi, I'm Emma.</h1>
                        <p>
                            I'm a web developer who likes figuring out how things work. I have the most experience with <span className='loud'>Python</span>, <span className='loud'>JavaScript</span>, and <span className='loud'>HTML/CSS</span>, and recently I've started using <span className='loud'>React</span> & <span className='loud'>Redux</span>. Usually it's more fun for me to do logic and backend stuff. But I enjoy making things look pretty too!
                        </p>
                        <p>
                            When I'm not working, I like playing video games, climbing mountains, and eating food.
                        </p>
                        <p>
                            Feel free to <Link
                                text
                                to='https://linkedin.com/in/emma-simon'
                            >
                                take a look at my resume
                            </Link> or you can <Link
                                external
                                text
                                to='/resume'
                            >
                                connect with me on LinkedIn
                            </Link> to see my past experience.
                        </p>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
